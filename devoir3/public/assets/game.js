let TicTacToeApi = {
  newGame: function() {
    $.ajax({
      type: "GET",
      url: "api.php?path=/game/new",
      success: function(game) {
        console.log("game start")
      }
    });
  },
  continueGame: function() {
    $.ajax({
      type: "GET",
      url: "api.php?path=/game",
      success: function(game) {
        console.log(game)
      }
    });
  },
  move: function(position, render) {
    $.ajax({
      type: "GET",
      url: `api.php?path=/game/move&pos=${position}`,
      success: function(game) {
        console.log(game)
        render.refresh(game); 
        updaterecord(game);
      }
    });
  },
}

function updaterecord(game){
  let record = document.getElementById("leaderboard");
  record.innerHTML="<li>player 1:"+game.winplayer1+"</li><li>player 2:"+game.winplayer2+"</li>";
}

$(document).ready(function() {
  TicTacToeApi.newGame();


  $('.cell').click(function() {
      var cellId = $(this).attr('id');
      TicTacToeApi.move(cellId, {
          refresh: function(game) {
              updateBoard(game);
          }
      });
  });

  function restart(){
    for(let i = 1; i<10; i++){
        let cell = document.getElementById(i);
        cell.innerHTML = "";
    }
  }

  function updateBoard(game) {
    for (let i = 1; i <= 9; i++) {
        let cell = $("#" + i);
        let symbol = game.board[Math.floor((i-1) / 3)][(i-1) % 3];
        cell.text(symbol); 
    }
    if (game.winner == "X" || game.winner == "O") {
        alert("Player " + game.winner + " wins!");
        TicTacToeApi.continueGame();
        restart();
        
    } else if (game.winner == "Nobody") {
        alert("It's a draw!");
        TicTacToeApi.continueGame();
        restart();
    }
}
});