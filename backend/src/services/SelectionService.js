const Character = require("../models/Character");

class SelectionService {
    async getRandomCharacters() {

        // // check if the request has either a "character" or "anime".
        // if (type !== "character" && type !== "anime") {
        //     return ""
        // }
    
        // get the number of documents in the database (if character)
        const count = await Character.count();
    
        // todo: better random algorithm? a lot of duplicates while testing
        const rand1 = await Math.floor(Math.random() * count);
        const rand2 = await Math.floor(Math.random() * count);
    
        // todo: handle if same numbers are picked
    
        const result1 = Character.findOne().select((["-_id", "-__v", "-rating" ])).skip(rand1);
        const result2 = Character.findOne().select((["-_id", "-__v", "-rating" ])).skip(rand2);
    
        return Promise.all([result1, result2]);
    }
}

module.exports = new SelectionService();