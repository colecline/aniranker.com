class RatingService {

    #getExpectedScore(winnerRating, loserRating) {
        return 1 / (1 + Math.pow(10, ((loserRating - winnerRating) / 400)));
    }

    #getNewRating(winnerRating, loserRating) {
        const scoreDifference = 32 * (1 - this.#getExpectedScore(winnerRating, loserRating));
        let newWinnerRating = Math.round(winnerRating + scoreDifference);
        let newLoserRating = Math.round(loserRating - scoreDifference);
        return [newWinnerRating, newLoserRating];
    }

    // getUpdatedRatings call's the getNewRating method which calculates the
    // new ratings based on the rating of the winner and rating of the loser
    getUpdatedRatings(winnerRating, loserRating) {
        return this.#getNewRating(winnerRating, loserRating);
    }
}

module.exports = new RatingService();