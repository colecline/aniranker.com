const Character = require("../models/Character");
const mt = require("../util/mersenne-twister");

class SelectionService {
    async #getTwoRandomNumbers(count) {
        const rand1 = await Math.floor(mt.random(972348729347982347234927394) * count);
        const rand2 = await Math.floor(mt.random(227342349823412312371231232) * count);
        
        if (rand1 === rand2) { return this.#getTwoRandomNumbers(); }
        return [rand1, rand2];
    }
    
    async getRandomCharacters() {

        // // check if the request has either a "character" or "anime".
        // if (type !== "character" && type !== "anime") {
        //     return ""
        // }
    
        // get the number of documents in the database (if character)
        const count = await Character.count();

        const randomNumbers = await this.#getTwoRandomNumbers(count);
        const rand1 = randomNumbers[0];
        const rand2 = randomNumbers[1];
    
        const result1 = Character.findOne().select((["-_id", "-__v", "-rating" ])).skip(rand1);
        const result2 = Character.findOne().select((["-_id", "-__v", "-rating" ])).skip(rand2);
    
        return Promise.all([result1, result2]);
    }
}

module.exports = new SelectionService();