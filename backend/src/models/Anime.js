const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
	title: { type: String, required: true },
	url: { type: String, required: true },
	picture_id: { type: String, required: true },
	rating: { type: Number, default: 1200 },
	wins: { type: Number, default: 0 },
	losses: { type: Number, default: 0 },
});

const Anime = mongoose.model("Anime", AnimeSchema);
module.exports = Anime;
