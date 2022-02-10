var messages = [
    "aaaaaa",
    "bbbb",
    "ccccccc",
];

function pickMessage(){
    var num = Math.random();
    return messages[0];
}

function updateMessage(){
    document.querySelector('div.letter-content').innerHTML = pickMessage();
}

window.onload = function() {
    document.getElementsById('btn').addEventListener('click', updateMessage);
}