const Anime = require("../models/Anime");
const Character = require("../models/Character");

class LeaderboardService {
    async #getAnimes() {

    }

    async #getCharacters(page) {
        const result = await Character
            .find()
            .select((["-_id", "-__v" ]))
            .sort({ rating: "descending" })
            .skip((page - 1) * 25)
            .limit(25);
        const numberOfCharacters = await Character.count();

        const characters = new Object();

        characters.meta = {
            success: true,
            total_count: numberOfCharacters,
            page_count: numberOfCharacters / 25,
            current_page: parseInt(page)
        }

        characters.next = {
            page: parseInt(page) + 1
        }

        if (page > 1) {
            characters.previous = {
                page: parseInt(page) - 1
            }
        }

        characters.result = result;
        return Promise.resolve(characters);
    }

    async #getAnimeShows(page) {
        const result = await Anime
            .find()
            .select((["-_id", "-__v" ]))
            .sort({ rating: "descending" })
            .skip((page - 1) * 25)
            .limit(25);
        const numberOfAnimes = await Anime.count();

        const animes = new Object();

        animes.meta = {
            success: true,
            total_count: numberOfAnimes,
            page_count: numberOfAnimes / 25,
            current_page: parseInt(page)
        }

        animes.next = {
            page: parseInt(page) + 1
        }

        if (page > 1) {
            animes.previous = {
                page: parseInt(page) - 1
            }
        }

        animes.result = result;
        return Promise.resolve(animes);
    }
    
    async getLeaderboard(page, type) {

        if (!page) { page = 1; };
        if (page <= 0) { return Promise.reject("Bad Page Number") }
        if (!type) { type = "characters" }

        if (type == "characters") {
            const result = await this.#getCharacters(page);
            return Promise.resolve(result);
        } else if (type == "anime") {
            const result = await this.#getAnimeShows(page);
            return Promise.resolve(result);
        } else {
            return Promise.reject("Bad Type");
        }

    }
}

module.exports = new LeaderboardService();