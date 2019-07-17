document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById("play")
    let displayDiv = document.getElementById("display_answer")
    button.addEventListener('click', () => {
      let player1form = document.getElementById('player1form').value
      let player2form = document.getElementById('player2form').value
      let play = new Play
        let result = play.check(player1form, player2form)
        displayDiv.innerHTML = result; 
    })
  })

function Play() {
    this.check = (player_1, player_2) => {
        if (player_1 === player_2) {
            return 'Tie! Play again guys!';
        }

        else if ((player_1 === "rock") && (player_2 === "paper")) {
            return 'Player 2 wins!';
        }

        else if ((player_1 === "scissors") && (player_2 === "paper")) {
            return 'Player 1 wins!';
        }

        else if ((player_1 === "scissors") && (player_2 === "rock")) {
            return 'Player 2 wins!';
        }

        else if ((player_1 === "paper") && (player_2 === "rock")) {
            return 'Player 1 wins!';
        }

        else if ((player_1 === "paper") && (player_2 === "scissors")) {
            return 'Player 2 wins!';
        }

        else if ((player_1 === "rock") && (player_2 === "scissors")) {
            return 'Player 1 wins!';
        }

        else {
            return 'No throws guys... try again!';
        }
    }
}

let hide1Btn = document.getElementById("hide1")
hide1Btn.addEventListener("click", () => {
    document.getElementById("player1form").style.display = "none";
    document.getElementById("hide1").innerHTML = "Is it a winning move?";
});

let hide2Btn = document.getElementById("hide2")
hide2Btn.addEventListener("click", () => {
    document.getElementById("player2form").style.display = "none";
    document.getElementById("hide2").innerHTML = "Time to hit Play!";
})
