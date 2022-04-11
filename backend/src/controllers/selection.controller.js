const SelectionService = require("../services/SelectionService");

async function getSelection(req, res) {
    const result = await SelectionService.getRandomCharacters(type = req.query.type);
    return res.status(200).json(result);
}

async function postSelection(req, res) {
    const { winnerUrl, loserUrl } = req.body;
    const result = await SelectionService.updateCharacterRatings(winnerUrl, loserUrl);
    return res.status(200).json("Success");
}

module.exports = {
    getSelection,
    postSelection
}