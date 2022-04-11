const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Character = require("./models/Character");
const cors_config = require("./middlewares/cors");
const { modelName } = require("./models/Character");

const app = express();
app.use(express.json());

app.options("*", cors_config);
app.use(cors_config);

const db = "mongodb://localhost:27017/animeapp";

mongoose.connect(db)
    .then(console.log("Connected to MongoDB"))
    .catch(err => console.log(err));
// mongoose.set("debug", true);

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

app.post("/selection", async (req, res) => {
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

});

app.get("/selection", async (req, res) => {
    const count = await Character.count();

    const rand1 = Math.floor(Math.random() * count);
    const rand2 = Math.floor(Math.random() * count);

    // used to prevent if rand lands on same number
    if (rand1 == rand2) {
        if (rand2 + 5 >= count) {
            return res.status(500).json("Server Error");
        } else {
            rand2 = rand2 + 5;
        }
    }

    await Character.findOne().skip(rand1).then(result1 => {
        
        let results = [];

        let character1 = new Object();
        character1.name = result1.name;
        character1.anime = result1.anime;
        character1.url = result1.url;
        character1.picture_id = result1.picture_id;
        results.push(character1);

        Character.findOne().skip(rand2).then(result2 => {
        
            let character2 = new Object();
            character2.name = result2.name;
            character2.anime = result2.anime;
            character2.url = result2.url;
            character2.picture_id = result2.picture_id;
            results.push(character2);

            return res.status(200).json(results);
    
        });

    });


});

app.get("/leaderboard", async (req, res) => {
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

});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));