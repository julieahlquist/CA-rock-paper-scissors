function Results() {
    this.check = (player_1, player_2) => {
        if (player_1 === player_2) {
            return 'Tie! Play again guys!'
        }

        else if ((player_1 === "rock") && (player_2 === "paper")) {
            return 'Player 2 wins!'
        }

        else if ((player_1 === "scissors") && (player_2 === "paper")) {
            return 'Player 1 wins!'
        }

        else if ((player_1 === "scissors") && (player_2 === "rock")) {
            return 'Player 2 wins!'
        }

        else if ((player_1 === "paper") && (player_2 === "rock")) {
            return 'Player 1 wins!'
        }

        else if ((player_1 === "paper") && (player_2 === "scissors")) {
            return 'Player 2 wins!'
        }

        else if ((player_1 === "rock") && (player_2 === "scissors")) {
            return 'Player 1 wins!'
        }

        else {
            return 'No throws guys... try again!'
        }
    }
}