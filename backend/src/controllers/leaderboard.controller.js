const Character = require("../models/Character");

async function getLeaderboard(req, res) {
    let page = parseInt(req.query.page);
    if (!page) { page = 1; };

    if (page <= 0) {
        return res.status(400).json("Bad Request");
    }

    // paginated results
    await Character.find().select((["-_id", "-__v" ])).sort({ rating: "descending" }).skip((page - 1) * 25).limit(25).then(result => {
        const characters = new Object();

        Character.countDocuments({}, function(err, count) {
            const characters = new Object();
            const numOfCharacters = count;

            characters.meta = {
                success: true,
                total_count: numOfCharacters,
                page_count: numOfCharacters / 25,
                current_page: page
            }

            characters.next = {
                page: page + 1
            }
    
            if (page > 1) {
                characters.previous = {
                    page: page - 1
                }
            }

            characters.result = result;
        
            return res.status(200).json(characters);

        });
    });
}

module.exports = {
    getLeaderboard
}