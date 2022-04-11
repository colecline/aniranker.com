const Character = require("../models/Character");
const SelectionService = require("../services/SelectionService");
const RatingService = require("../services/RatingService");

async function getSelection(req, res) {
    const result = await SelectionService.getRandomCharacters(type = req.query.type);
    return res.status(200).json(result);
}

function postSelection(req, res) {

    const { winnerUrl, loserUrl } = req.body;

    Character.findOne({ url: winnerUrl }).then(winner => {
        if (!winner) {
            return res.json("Error");
        } else {
            Character.findOne({ url: loserUrl }).then(loser => {
                const [newWinnerRating, newLoserRating] = RatingService.getUpdatedRatings(winner.rating, loser.rating);
                
                console.log("Winner: " + winner.name + "\n\t- Old Rating: " + winner.rating + "\n\t- New Rating: " + newWinnerRating);
                console.log("Loser: " + loser.name + "\n\t- Old Rating: " + loser.rating + "\n\t- New Rating: " + newLoserRating + "\n");

                winner.rating = newWinnerRating;
                loser.rating = newLoserRating;

                winner.save();
                loser.save();

                return res.status(200).json(JSON.stringify(winner));

            }).catch(err => console.log(err));
        }
    }).catch(err => console.log(err));
}

module.exports = {
    getSelection,
    postSelection
}