const express = require("express");
const router = express.Router();

const leaderboard_controller = require("../controllers/leaderboard.controller");

router.get("/", leaderboard_controller.getLeaderboard);

module.exports = router;