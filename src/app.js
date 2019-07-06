const btnSelector = () => {
    let picks = ['Rock', 'Paper', 'Scissors']

    let randoPick = picks[Math.floor(Math.random() * picks.length)];
    let displayPick = document.getElementById('printpick');
    displayPick.innerHTML = randoPick
}
document.getElementById("putpick").addEventListener("click", showPick);