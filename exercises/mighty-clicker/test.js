var userChoice = function(){
    prompt.return("Do you choose rock, paper or scissors?");
}

var computerChoice = Math.random();
    console.log(computerChoice);
    
    if(computerChoice <= 0.33){
        return("rock");
    } else if(computerChoice <= 0.66){
        return("paper");
    } else {
        return("scissors");
    };
        