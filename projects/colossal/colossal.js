var ask = require("readline-sync");
var badGuys = ["Mrs. Peacock", "Professor Plum", "Miss Scarlet", "Mr. Boddy", "Colonel Mustard", "Mrs. White", "Mr. Green"];

var clueWeapons = ["Candlestick", "Knife", "Lead Pipe", "Revolver", "Rope", "Wrench"];

var gameRunning = true;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var firstName = ask.question("\n\nWelcome to Mr Boddy's mansion! Good luck making it out alive, the guests have been dropping like flies. And what is your name? ")

var walking = ask.question("\Welcome to the party " + firstName + ". Good luck making it out of here alive.  Please, press the enter key to join us in the Hall")

var weapons = "Items: " + [];

var hp = 100;

var randomEnemy;

if (hp > 0) {
    while (gameRunning) {
    var options = ["walk", "fight", "run", "items", "quit"];
    var index = ask.keyInSelect(options, "What shall we do? ")
    if (options[index] === "walk") {
        walk();
    } else if (options[index] === "items") {
               console.log("You currently have:  HP: " + hp + ". " + weapons);
               } else if (options[index] === "fight") {
                   fight();
               } else if (options[index] === "run") {
                   runningAway();
               } else if (options[index] === "quit") {
                   quit();
               } else if (options[index] === "items") {
                    console.log(firstName +"'s current inventory contains: HP: " + hp + ". " + weapons);
               }
                else {
                    ask.question("I don't recognize your entry, try again!")
                }
                
                continue;
        }
} else {
    noHPLeft();
}

function runningAway() {
    if(randomNumber(0, 2) === 2) {
        var lostHPForRunning = randomNumber(10, 25);
        console.log("You lucked out on this one, " + badGuys[randomEnemy] + " almost got you! You lost " + lostHPForRunning + " HP.");
        hp -= lostHPForRunning;
        walk();
    } else {
        console.log("You lucked out on this one, " + badGuys[randomEnemy] + " almost got you!");
    }
}

function walk() {
    if(randomNumber(1, 3) === 1) {
        gotAttacked();
    } else {
        console.log("\nKeep going, you should check all of the rooms. ");
    }
}

function gotAttacked() {
    randomEnemy = randomNumber(0, badGuys.length - 1);
    console.log("\nLooks like somebody found you... it's " + badGuys[randomEnemy] + ". Are you going to fight " + badGuys[randomEnemy] + " or are you going to try and run? I wouldn't recommend running, you should see what happened to the last guy... ")
}

function fight() {
    var enemyPower = randomNumber(0, 15);
    var userPower = randomNumber(0, 25);
    var yourItem = clueWeapons[randomNumber(0, clueWeapons.length - 1)]
    if (enemyPower > userPower) {
        gameKill();
    } else {
        hp -= (15 + randomNumber(0, 5));
        console.log("Wow, you defeated them, I didn't think you had it in you! You have picked up the " + yourItem + ".\n\nLet's continue walking.");
        weapons += yourItem;
        walk();
    }
}

function dead() {
    gameRunning = false;
    console.log("They got you, you're dead \n\n GAME OVER");
}

function quit() {
    gameRunning= false;
    console.log("Leaving so soon? Scared?");
}


function gameKill() {
    gameRunning = false;
    console.log("It looks like " + badGuys[randomEnemy] + " killed you, but you put up a good fight. GAME OVER \n\n")
}

function noHPLeft() {
    gameRunning = false;
    console.log("I guess " + badGuys[randomEnemy] + " was too strong for you.  GAME OVER")
}