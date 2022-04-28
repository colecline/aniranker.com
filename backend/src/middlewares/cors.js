const cors = require("cors");

const whitelist = new Set(["http://aniranker.com", "https://aniranker.com"]);

const corsOptions = {
    optionsSuccessStatus: 200,
    // origin: function (origin, callback) {
    //     if (whitelist.has(origin)) {
    //         callback(null, true);
    //     } else {
    //         callback(new Error("Not allowed by CORS"));
    //     }
    // },
    credentials: true,
}

module.exports = cors(corsOptions);