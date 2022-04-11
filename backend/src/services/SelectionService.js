const RatingService = require("./RatingService");
const mt = require("../util/mersenne-twister");

const Anime = require("../models/Anime");
const Character = require("../models/Character");

class SelectionService {
    async #getTwoRandomNumbers(count) {
        const rand1 = await Math.floor(mt.random(972348729347982347234927394) * count);
        const rand2 = await Math.floor(mt.random(227342349823412312371231232) * count);
        
        if (rand1 === rand2) { return this.#getTwoRandomNumbers(); }
        return [rand1, rand2];
    }
    
    async getRandomCharacters() {
        const count = await Character.count();

        const randomNumbers = await this.#getTwoRandomNumbers(count);
        const rand1 = randomNumbers[0];
        const rand2 = randomNumbers[1];
    
        const result1 = Character.findOne().select((["-_id", "-__v", "-rating" ])).skip(rand1);
        const result2 = Character.findOne().select((["-_id", "-__v", "-rating" ])).skip(rand2);
    
        return Promise.all([result1, result2]);
    }

    async updateCharacterRatings(winnerUrl, loserUrl) {
        const winner = await Character.findOne({ url: winnerUrl });
        const loser = await Character.findOne({ url: loserUrl });

        const [updatedWinnerRating, updatedLoserRating] = RatingService.getUpdatedRatings(winner.rating, loser.rating);
        winner.rating = updatedWinnerRating, loser.rating = updatedLoserRating;
        winner.save(), loser.save();

        return Promise.resolve("Success");
    }

    async getRandomAnimes() {
        const count = await Anime.count();

        const randomNumbers = await this.#getTwoRandomNumbers(count);
        const rand1 = randomNumbers[0];
        const rand2 = randomNumbers[1];
    
        const result1 = Anime.findOne().select((["-_id", "-__v", "-rating" ])).skip(rand1);
        const result2 = Anime.findOne().select((["-_id", "-__v", "-rating" ])).skip(rand2);
    
        return Promise.all([result1, result2]);
    }

    async updateAnimeRatings(winnerUrl, loserUrl) {
        const winner = await Anime.findOne({ url: winnerUrl });
        const loser = await Anime.findOne({ url: loserUrl });

        const [updatedWinnerRating, updatedLoserRating] = RatingService.getUpdatedRatings(winner.rating, loser.rating);
        winner.rating = updatedWinnerRating, loser.rating = updatedLoserRating;
        winner.save(), loser.save();

        return Promise.resolve("Success");
    }

}

module.exports = new SelectionService();