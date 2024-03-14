<?php
require_once('_config.php'); 

use TicTacToe\Game;


function game() {
  if ($json = $_SESSION['game'] ?? null) {
    return Game::fromJson($json);
  } else {
    return new Game();
  }
}

function persistGame($g) {
    $reply = $g->toJson();
    $_SESSION['game'] = $reply;
    return $reply;
}

$fullPath = $_GET["path"] ?? "/";
$path = explode("/", $fullPath);

$reply = json_encode(["error" => "Invalid request"]);

switch ($fullPath) {
    case "/version":
        $reply = json_encode(["version" => "1.0"]);
        break;
    case "/game/new":
        $reply = persistGame(new Game());
        break;
    case "/game/move":
        $position = $_GET["pos"] ?? null;
        if ($position !== null && is_numeric($position)) {
            $game = game();
            $game->move((int)$position);
            $reply = persistGame($game);
        } else {
            $reply = json_encode(["error" => "Invalid position"]);
        }
        break;
    case "/game":
        $g = game();
        $g->winner = null;
        $g->board = [['', '', ''], ['', '', ''], ['', '', '']];
        $reply = persistGame($g);
        break;
}

header("Content-Type: application/json");
echo $reply;