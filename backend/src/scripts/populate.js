const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

// new imports
const prompt = require("prompt-sync")({ sigint: true });
const anime = require("./anime");
const characters = require("./characters");

const app = express();

// the number of characters to scrape and store
// use only in increments of 50 (e.g. 50 100 150 ...)
const scrapeMethod = prompt("Scrape Options (characters/anime/both): ");
const numberOfItems = prompt("Number of \"Items\" to Scrape: ");

async function executeScrape() {
    if (scrapeMethod === "characters") {

        console.log("Starting Scrape of " + numberOfItems + " characters");
        await characters.scrape(numberOfItems);
        console.log("Finished Scrape of " + numberOfItems + " characters");

    } else if (scrapeMethod === "anime") {

        console.log("Starting Scrape of " + numberOfItems + " anime");
        await anime.scrape(numberOfItems);
        console.log("Finished Scrape of " + numberOfItems + " anime");

    } else if (scrapeMethod === "both") {

        console.log("Starting Scrape of " + numberOfItems + " characters");
        await characters.scrape(numberOfItems);
        console.log("Finished Scrape of " + numberOfItems + " characters");

        console.log("Starting Scrape of " + numberOfItems + " anime");
        await anime.scrape(numberOfItems);
        console.log("Finished Scrape of " + numberOfItems + " anime");
        
    } else {
        console.log("Error Scraping: Invalid Scrape Method");
    }
}

executeScrape();

app.listen(3010);