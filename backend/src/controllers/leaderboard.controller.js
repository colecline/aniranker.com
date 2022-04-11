const Character = require("../models/Character");
const LeaderboardService = require("../services/LeaderboardService");

async function getLeaderboard(req, res) {
    const result = await LeaderboardService.getLeaderboard(page = req.query.page, type = req.query.type);
    return res.status(200).json(result);
}

module.exports = {
    getLeaderboard
}