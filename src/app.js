document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById("play")
    let displayDiv = document.getElementById("display_answer")
    button.addEventListener('click', () => {
      let player1form = document.getElementById('player1form').value
      let player2form = document.getElementById('player2form').value
        let result = play(player1choice, player2choice)
        displayDiv.innerHTML = result; 
    })
  })

var player1choice = "none"
var player2choice = "none"

function play(player1choice, player2choice) {
    let resultMessage
    const [errorMessage, p1WinMessage, p2WinMessage, tieMessage] = ['You have not chosen a throw. Try again!', 'Player 1 wins!', 'Player 2 wins!', 'It is a tie!']
    switch ([player1choice, player2choice].join (' ')) {
        case ['none', 'none'].join (' '):
            resultMessage = errorMessage
            break
        case ['rock', 'scissors'].join(' '):
        case ['scissors', 'paper'].join(' '):
        case ['paper', 'rock'].join(' '):
            resultMessage = p1WinMessage
            break
        case ['rock', 'paper'].join(' '):
        case ['paper', 'scissors'].join(' '):
        case ['scissors', 'rock'].join(' '):
            resultMessage = p2WinMessage
            break
        default:
            resultMessage = tieMessage
        }
    return resultMessage
}

let hide1Btn = document.getElementById("hide1")
hide1Btn.addEventListener("click", () => {
    document.getElementById("player1form").style.display = "none";
    document.getElementById("hide1").innerHTML = "Is it a winning move?";

    if(document.getElementById('p1rock').checked) { 
        player1choice = "rock"
    } else if (document.getElementById('p1paper').checked) {
        player1choice = "paper"
    } else if (document.getElementById('p1scissors').checked) {
        player1choice = "scissors"
    }
});

let hide2Btn = document.getElementById("hide2")
hide2Btn.addEventListener("click", () => {
    document.getElementById("player2form").style.display = "none";
    document.getElementById("hide2").innerHTML = "Time to hit Play!";

    if(document.getElementById('p2rock').checked) { 
        player2choice = "rock"
    } else if (document.getElementById('p2paper').checked) {
        player2choice = "paper"
    } else if (document.getElementById('p2scissors').checked) {
        player2choice = "scissors"
    }
})
function refreshPage(){
    window.location.reload();
} 