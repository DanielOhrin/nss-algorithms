// Define a function that accepts 2 parameters -- array of leaderboard scores as integers -- array of scores for current player as integers
    //* Should return an array of ints (player rankings)
    //? Leaderboard array -- only top 5 scores, 
    //! Player scores has no number limit
    //? If the player's score is not among the top 5, don't bother returning their "rank"
    //* Player scores ascending order, leaderboers scores in descending order
    // For the sake of simplicity, I'm going to assume we have built functions elsewhere to sort the array parameters

const leaderboard = [490, 450, 400, 320, 320, 290]
const playerScores = [50, 310, 480, 200, 350, 180]

const playerRanking = (leaderboard, player) => {
    let validScores = true

    leaderboard.forEach(score => {
        if (score > 500 || score < 10) {
            validScores = false
        }
    })
    player.forEach(score => {
        if (score > 500 || score < 10) {
            validScores = false
        }
    })

    if (!validScores) {
        return `Scores invalid. Operation cancelled.`
    }

    const playerRankings = []
    let uniqueScores = [...new Set(leaderboard)]

    playerScores.forEach(playerScore => {
        let ranked = false
        uniqueScores.forEach(score => {
            if (playerScore > score) {
                if (uniqueScores.indexOf(score) <= uniqueScores.length && ranked === false) {
                    playerRankings.push(uniqueScores.indexOf(score) + 1)
                    ranked = true
                }
            }
        })
    })

    return playerRankings
}

console.log(playerRanking(leaderboard, playerScores)) // [5, 2, 4]

