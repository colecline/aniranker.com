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
const Anime = require("../models/Anime");

function scrapePage(limit) {
    
    const animeTitles = [];
    const animeUrls = [];
    const animePictureIds = [];

    const scrape_url = `https://myanimelist.net/topanime.php?type=bypopularity&limit=${limit}`;
    console.log("Scraping Animes: " + (limit) + " to " + (limit + 50));

    axios(scrape_url).then(response => {
        
        const html = response.data;
        const $ = cheerio.load(html);

        // grabs the anime name and url from mal
        $('.anime_ranking_h3', html).each(function(i, elem) {
            animeTitles[i] = $(this).find("a").text()
            animeUrls[i] = $(this).find("a").attr("href")
        });

        function cut(str, cutStart, cutEnd){
            return str.substr(0,cutStart) + str.substr(cutEnd+1);
        }

        $('.va-t', html).each(function(i, elem) {
            let image_url = $(this).find("img").attr("data-src");
            image_url = image_url.substr(0, image_url.lastIndexOf("?s="));
            image_url = cut(image_url, 27, 34);

            let pictureId = image_url.substring(0, image_url.lastIndexOf(".jpg"));
            pictureId = pictureId.substring(pictureId.lastIndexOf("/") + 1);

            animePictureIds[i] = pictureId;

            fs.appendFileSync("images_anime.txt", image_url + "\n")
        });

        for (let inc = 0; inc < animeTitles.length; inc++) {
            const newAnime = new Anime({
                title: animeTitles[inc],
                url: animeUrls[inc],
                picture_id: animePictureIds[inc]
            });
            newAnime.save();
        }
        
    }).catch(err => console.log(err));

}

async function scrape(numberOfAnime) {
    for (var limit = 0; limit < numberOfAnime; limit = limit + 50) {
        await scrapePage(limit);
    }
}

module.exports = {
    scrape
}