const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const fs = require("fs");

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
        .then(console.log("Connected to MongoDB"))
        .catch(err => console.log(err));
// mongoose.set("debug", true);
const Character = require("../models/Character");

function scrapePage(limit) {
    
    const characterNames = [];
    const characterAnimes = [];
    const characterUrls = [];
    const characterPictureIds = [];

    const scrape_url = `https://myanimelist.net/character.php?limit=${limit}`;
    console.log("Scraping Characters: " + (limit) + " to " + (limit + 50));

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
            
            // set the title to "untitled" if there is not a title listed
            // under animeography
            if (title == '') {
                characterAnimes[i] = "UNTITLED";
            } else {
                characterAnimes[i] = title;
            }
        });

        // remove the first element of the character animes array because
        // it will always be "untitled"
        characterAnimes.shift();

        function cut(str, cutStart, cutEnd){
            return str.substr(0,cutStart) + str.substr(cutEnd+1);
        }

        $('.people', html).each(function(i, elem) {
            let image_url = $(this).find("img").attr("data-src");
            image_url = image_url.substr(0, image_url.lastIndexOf("?s="));
            image_url = cut(image_url, 27, 34);

            let pictureId = image_url.substring(0, image_url.lastIndexOf(".jpg"));
            pictureId = pictureId.substring(pictureId.lastIndexOf("/") + 1);

            characterPictureIds[i] = pictureId;

            fs.appendFileSync("images_characters.txt", image_url + "\n")
        });

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

async function scrape(numberOfCharacters) {
    for (var limit = 0; limit < numberOfCharacters; limit = limit + 50) {
        await scrapePage(limit);
    }
}

module.exports = {
    scrape
}