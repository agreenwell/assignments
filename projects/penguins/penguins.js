var isPenguinsTurn;

function Team(name, population){
    this.name = name;
    this.population = population;
    this.isAlive = function(){
        return this.population > 0;
    }
}

var penguins = new Team("Penguins", "1000000");
var communists = new Team("Communists", "1000000");

function sendNuke(party, onHit, onMiss){
    var didNukeHit = generateRandomNumber(0,9)
    if (didNukeHit === 0){
        onHit(party);
    } else {
        onMiss(party);

    }
}

function coinFLip(){
    if(generateRandomNumber(0,1)){
        isPenguinsTurn = true;
        sendNuke(penguins, onHit, onMiss);
    } else {
        isPenguinsTurn = false;
        sendNuke(communists, onHit, onMiss);
    }
}


function generateRandomNumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function onHit(whoGotNuked){
    whoGotNuked.population = whoGotNuked.population - generateRandomNumber(1000, 10000);
    console.log(whoGotNuked.name + " got nuked and have " + whoGotNuked.population + " population left.");
    
}

function onMiss(party){
    isPenguinsTurn = !isPenguinsTurn;
    console.log(party.name + " were lucky enough to not get hit")
}

while (penguins.isAlive() && communists.isAlive()){
    if(isPenguinsTurn){
        sendNuke(communists, onHit, onMiss);
    } else {
        sendNuke(penguins, onHit, onMiss);
    }
    
}

console.log("Game Over")