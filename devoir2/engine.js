let player1 = 'player 1';
let player2 = "player 2";
let currentPlayer = "X";
let board = [['', '', ''],['', '', ''],['', '', '']];
let TimeWinX = 0;
let TimeWinO = 0;

function NewGame() {
    player1 = document.getElementById('player1').value;
    player2 = document.getElementById('player2').value;
    document.getElementById("name1").innerHTML = player1;
    document.getElementById("name2").innerHTML = player2;
    reset()
    TimeWinX = 0;
    TimeWinO = 0;
    document.getElementById("score1").innerHTML = 0;
    document.getElementById("score2").innerHTML = 0;
}

function win() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != '') {
            return true;
        }
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != '') {
            return true;
        }
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '') {
        return true;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '') {
        return true;
    }
    return false;
}

function draw() {
    for (let i of board) {
        for (let j of i) {
            if (j == '') {
                return false;
            }
        }
    }
    return true;
}

function addRecord(player){
    if(player == "X"){
        TimeWinX += 1;
        let cell = document.getElementById("score1");
        cell.innerHTML = TimeWinX;
    }
    if(player == "O"){
        TimeWinO += 1;
        let cell = document.getElementById("score2");
        cell.innerHTML = TimeWinO;
    }
}

function move(i){
    let row = Math.floor((i - 1) / 3);
    let col = (i - 1) % 3;
    if (board[row][col] == '') {
        board[row][col] = currentPlayer;
        let cell = document.getElementById(i);
        cell.innerText = currentPlayer;
    }
    if (win()) {
        let winner = currentPlayer == "X" ? player1 : player2;
        alert( winner + ' wins!');
        addRecord(currentPlayer);
        reset();
    } else if (draw()) {
        alert('Draw!');
        reset();
    } else {
        currentPlayer = currentPlayer == "X" ? "O" : "X";
    }
}

function reset(){
    board = [['', '', ''],['', '', ''],['', '', '']];
    for(let i = 1; i<10; i++){
        let cell = document.getElementById(i);
        cell.innerHTML = "";
    }
    currentPlayer = "X";
}