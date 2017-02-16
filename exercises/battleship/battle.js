var readline = require("Readline-sync");
var Location = require("./location");
var sunkCount = 0;

var board = makeBoard();

function makeBoard() {
    var board = [];
    for (var i = 0; i < 10; i++) {
        var row = [];
        for (var j = 0; j < 10; j++) {
            row.push(new Location());
        }
        board.push(row);
    }
    return board;
}

function displayBoard(board) {
    var display = "";
    for (var i = 0; i < board.length; i++) {
        var row = "";
        for (var j = 0; j < board[i].length; j++) {
         display += board[i][j].display + " ";   
        }
        display += "\n"
    }
    console.log(display);
}
displayBoard(board);

function getCoords() {
    do {
        var x = parseInt(readline.keyIn("Choose a coordinate 0-9: "));
        var y = parseInt(readline.keyIn("Choose a coordinate 0-9: "));
    } while (x < 0 || x > 9 || y < 0 || y > 9);

    updateBoard(x, y);
}

function updateBoard(x, y) {
    board[x][y].guessed = true;
    if (board[x][y].isShip) {
        board [x][y].display = "X"
    } else {
        board[x][y].display = "M"
    }
    displayBoard(board);
}


function playBattleship() {
    
    console.log("**********Welcome to the Battlefield!**********\n");
    console.log("Here is your board: \n")
    displayBoard(board);
    
    while(sunkCount < 4) {
        getCoords();
    }
    console.log("You've won!")
}

playBattleship();