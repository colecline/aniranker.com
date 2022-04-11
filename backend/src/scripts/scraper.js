const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

// import the Character model
const Character = require("../models/Character");

// the number of characters to scrape and store
// use only in increments of 50 (e.g. 50 100 150 ...)
const NUM_OF_CHARACTERS = 300;

// connects to MongoDB Server
mongoose.connect("mongodb://localhost:27017/animeapp")
    .then(console.log("Connected to MongoDB"))
    .catch(err => console.log(err));
mongoose.set("debug", true);

const app = express();

// scrapes the mal webpage
function scrapePage(limit) {
    const characterNames = [];
    const characterAnimes = [];
    const characterUrls = [];
    const characterPictureIds = [];

    const scrape_url = `https://myanimelist.net/character.php?limit=${limit}`;
    console.log("Scraping: " + (limit) + " to " + (limit + 50));

    axios(scrape_url).then(response => {
        
        const html = response.data;
        const $ = cheerio.load(html);

        // grabs the character name and url to that mal character
        $('.information', html).each(function(i, elem) {
            characterNames[i] = $(this).find("a").text()
            characterUrls[i] = $(this).find("a").attr('href')
        });

        // grabs the first anime title of each character
        $('.animeography', html).each(function(i, elem) {
            let title = $(this).children().first().text()
            
            // if no title exists, use "untitled"
            if (title == '') {
                characterAnimes[i] = "UNTITLED";
            } else {
                characterAnimes[i] = title;
            }
        });

        // remove the first element of the character animes array because
        // it will always be "untitled"
        characterAnimes.shift();

        // 26 34
        function cut(str, cutStart, cutEnd){
            return str.substr(0,cutStart) + str.substr(cutEnd+1);
        }

        $('.people', html).each(function(i, elem) {
            let image_url = $(this).find("img").attr("data-src");
            image_url = image_url.substr(0, image_url.lastIndexOf("?s="));
            image_url = cut(image_url, 27, 34);

            let pictureId = image_url.substring(0, image_url.lastIndexOf(".jpg"));
            pictureId = pictureId.substring(pictureId.lastIndexOf("/") + 1);
            console.log(pictureId);

            characterPictureIds[i] = pictureId;

            fs.appendFileSync("images.txt", image_url + "\n")
        });

        // save all the data to a json file (old)
        // for (let inc = 0; inc < characterNames.length; inc++) {

        //     if (inc + 1 == characterNames.length) {
        //         fs.appendFileSync(`mal-characters-limit-${limit}.json`, JSON.stringify({name: characterNames[inc], anime: characterAnimes[inc], url: characterUrls[inc]}, null, 4) + "]");
        //     } else if (inc == 0) {
        //         fs.appendFileSync(`mal-characters-limit-${limit}.json`, "[" + JSON.stringify({name: characterNames[inc], anime: characterAnimes[inc], url: characterUrls[inc]}, null, 4) + ",\n");
        //     } else {
        //         fs.appendFileSync(`mal-characters-limit-${limit}.json`, JSON.stringify({name: characterNames[inc], anime: characterAnimes[inc], url: characterUrls[inc]}, null, 4) + ",\n");
        //     }
        // }

        for (let inc = 0; inc < characterNames.length; inc++) {
            const newCharacter = new Character({
                name: characterNames[inc],
                anime: characterAnimes[inc],
                url: characterUrls[inc],
                picture_id: characterPictureIds[inc]
            });
            newCharacter.save();
        }
        
    }).catch(err => console.log(err));

}

async function runScrape() {
    for (let limit = 0; limit < NUM_OF_CHARACTERS; limit = limit + 50) {
        await scrapePage(limit);
    }

    console.log("Finished Scraping!");
}

runScrape();
app.listen(3002);