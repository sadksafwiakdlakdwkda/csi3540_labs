<?php
namespace TicTacToe;

class Game
{
    public $board;
    public $currentPlayer;
    public $winner; 
    public $winplayer1;
    public $winplayer2;

    public function __construct()
    {
        $this->board = [['', '', ''], ['', '', ''], ['', '', '']];
        $this->currentPlayer = "X";
        $this->winner = null;
        $this->winplayer1 = 0;
        $this->winplayer2 = 0;
    }

    public function win() {
        $board = $this->board; 
        for ($i = 0; $i < 3; $i++) {
            if ($board[$i][0] == $board[$i][1] && $board[$i][1] == $board[$i][2] && $board[$i][0] != '') {
                return true;
            }
            if ($board[0][$i] == $board[1][$i] && $board[1][$i] == $board[2][$i] && $board[0][$i] != '') {
                return true;
            }
        }
        if ($board[0][0] == $board[1][1] && $board[1][1] == $board[2][2] && $board[0][0] != '') {
            return true;
        }
        if ($board[0][2] == $board[1][1] && $board[1][1] == $board[2][0] && $board[0][2] != '') {
            return true;
        }
        return false;
    }

    public function draw() {
        $board = $this->board; 
        foreach ($board as $row) {
            foreach ($row as $cell){
                if ($cell == '') {
                    return false;
                }
            }
        }
        return true;
    }

    public function move($i) {
        $row = intval(floor(($i - 1) / 3));
        $col = ($i - 1) % 3;
        if ($this->board[$row][$col] == '') {
            $this->board[$row][$col] = $this->currentPlayer;
            if ($this->win()) {
                $this->winner = $this->currentPlayer;
                $this->refleshrecord(); 
            } elseif ($this->draw()) {
                $this->winner = "Nobody"; 
            } else {
                $this->currentPlayer = $this->currentPlayer == "X" ? "O" : "X";
            }
        }
    }

    public function refleshrecord(){
        if ($this->winner == "X"){
            $this->winplayer1 +=1 ;
    }else{
        $this->winplayer2 +=1;
        }    
    }

    public static function fromJson($json)
    {
        $g = new Game();
        foreach (json_decode($json, true) as $key => $value) {
            $g->{$key} = $value;
        }
        return $g;
    }

    public function toJson()
    {
        return json_encode($this);
    }
}