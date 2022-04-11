const Character = require("../models/Character");
const SelectionService = require("../services/SelectionService");

async function getSelection(req, res) {
    const result = await SelectionService.getRandomCharacters(type = req.query.type);
    return res.status(200).json(result);
}

function postSelection(req, res) {

    function getExpectedScore(winnerRating, loserRating) {
        return 1 / (1 + Math.pow(10, ((loserRating - winnerRating) / 400)));
    }
    
    function getNewRating(winnerRating, loserRating) {
        const scoreDifference = 32 * (1 - getExpectedScore(winnerRating, loserRating));
        newWinnerRating = Math.round(winnerRating + scoreDifference);
        newLoserRating = Math.round(loserRating - scoreDifference);
        return [newWinnerRating, newLoserRating];
    }
    
    function getElo(winnerRating, loserRating) {
        return getNewRating(winnerRating, loserRating);
    }

    const { winnerUrl, loserUrl } = req.body;

    Character.findOne({ url: winnerUrl }).then(winner => {
        if (!winner) {
            return res.json("Error");
        } else {
            Character.findOne({ url: loserUrl }).then(loser => {
                
                let [newWinnerRating, newLoserRating] = getElo(winner.rating, loser.rating);
                
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