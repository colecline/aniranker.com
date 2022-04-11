const express = require("express");
const router = express.Router();

const selection_controller = require("../controllers/selection.controller");

router.get("/", selection_controller.getSelection);
router.post("/", selection_controller.postSelection);

module.exports = router;