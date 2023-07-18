const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();
const app = express();
const corsConfing = require("./middlewares/cors");

app.use(express.json());
app.options("*", corsConfing);
app.use(corsConfing);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// Import Routes
const selectionRoute = require("./routes/selection");
const leaderboardRoute = require("./routes/leaderboard");

// Add Routes to Express Middleware
app.use("/selection", selectionRoute);
app.use("/leaderboard", leaderboardRoute);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
