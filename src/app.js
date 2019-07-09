document.getElementById("rock").addEventListener("click", function () {
    console.log('you clicked rock')
})

const showOpponent = () => {
    let opponent = ['Rock', 'Paper', 'Scissors'];

    let randoOpponent = opponent[Math.floor(Math.random() * opponent.length)];
    let displayOpponent = document.getElementById('printooponent');
    displayOpponent.innerHTML = randoOpponent
}
document.getElementById("putopponent").addEventListener("click", showOpponent);