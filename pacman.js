function createGame(n){
    let game = ["C","^","@"];
    for(let i = 0; i<n-3;i++){
        game.push(".")
    }
    for (let i = game.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [game[i], game[j]] = [game[j], game[i]];
    }
    return game;
}
function moveLeft(game) {
    let pacmanIndex = game.indexOf("C");
    if (pacmanIndex > 0) {
        game[pacmanIndex] = game[pacmanIndex-1];
        game[pacmanIndex - 1] = "C";
    }
    return game;
}

function moveRight(game) {
    let pacmanIndex = game.indexOf("C");
    if (pacmanIndex < game.length - 1) {
        game[pacmanIndex] = game[pacmanIndex+1];
        game[pacmanIndex + 1] = "C";
    }
    return game;
}
