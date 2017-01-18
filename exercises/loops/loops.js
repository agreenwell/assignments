var name = "aaron";

for(var i = 0; i < name.length; i++){
    
    console.log(name[i]);
};



function findLetter (inputString, inputChar){
    for(var i = 0; i <= inputString.length; i++){
        if (inputString[i] === inputChar){
            return(inputString.indexOf(inputChar));
        }
    }
            return inputChar + " was not found in " + inputString

}

console.log(findLetter("Aaron","o"));



function findNumber(numberArray){
   
    for(var i = 0; i <= numberArray.length; i++){
        if(numberArray[i] === 42){
        console.log(i);
        break;
    } else if (i === numberArray.length){
        console.log("no 42's were found");
    }
}

findNumber ([15, 3, 89, 64, 42, 5, 54, 4567]);
findNumber ([15, 3, 89, 64, 543, 3456, 945668, 1654561]);
    
    
    
    
    
function findLowestNumber (arrayOfTen){
    var lowest = arrayTen[0];
    for(var i = 1; i < arrayTen.length; i++){
        if(arrayTen[i] < lowest){
            lowest = arrayTen[i];
        }
    }
    return lowest;
}
    
console.log(findLowestNumber([1, 3, 6, 7, 55, 453, 567, 4432, 66, 43212]));