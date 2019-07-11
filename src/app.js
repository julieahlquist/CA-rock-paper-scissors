// document.getElementById("player1").click() {
// })

const showResult = () => {
    var choice = document.querySelector('input[name="choice"]:checked').value;
    if(!choice){
        alert('No choice was selected. You lost.');
    return false;
    }
    else{
        alert('you played ' + choice + ' and the winner is ...');
    }
}