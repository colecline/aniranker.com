const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    anime: { type: String, required: true },
    url: { type: String, required: true },
    picture_id: { type: String, required: true },
    rating: { type: Number, default: 1200 }
});

const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;