const SelectionService = require("../services/SelectionService");

async function getSelection(req, res) {
    if (req.query.type == "characters") {
        const result = await SelectionService.getRandomCharacters();
        return res.status(200).json(result);
    } else if (req.query.type == "anime") {
        const result = await SelectionService.getRandomAnimes();
        return res.status(200).json(result);
    } else {
        return res.status(400).json("Bad Request");
    }
}

async function postSelection(req, res) {
    const { winnerUrl, loserUrl } = req.body;
    if (req.query.type == "characters") {
        const result = await SelectionService.updateCharacterRatings(winnerUrl, loserUrl);
        return res.status(200).json("Success");
    } else if (req.query.type == "anime") {
        const result = await SelectionService.updateAnimeRatings(winnerUrl, loserUrl);
        return res.status(200).json("Success");
    } else {
        return res.status(400).json("Bad Request");
    }
}

module.exports = {
    getSelection,
    postSelection
}