<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/styles.css" />
    <script type="text/javascript" src="assets/jquery-3.7.1.min.js"></script>
    <script type="text/javascript" src="assets/game.js"></script>
    <title>Tic Tac Toe</title>
</head>
<body>
    <h1>Tic Tac Toe</h1>
    <div class="content">
        <h2>Règle</h2>
        <p>Deux joueurs, l'un faisant un cercle  et l'autre une croix , 
            placent à tour de rôle leurs propres symboles sur la grille. 
            Le premier à former une ligne gagne.</p>
        <br><br>
        <h2>Record:</h2>
        <ul id="leaderboard">
            <li>player 1:0</li>
            <li>player 2:0</li>
        </ul>
    </div>
    <table>
        <tr>
            <td class="cell" id="1"></td>
            <td class="cell" id="2"></td>
            <td class="cell" id="3"></td>
        </tr>
        <tr>
            <td class="cell" id="4"></td>
            <td class="cell" id="5"></td>
            <td class="cell" id="6"></td>
        </tr>
        <tr>
            <td class="cell" id="7"></td>
            <td class="cell" id="8"></td>
            <td class="cell" id="9"></td>
        </tr>
    </table>
</body>
</html>
