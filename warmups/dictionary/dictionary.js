var readline = require("readline-sync")
var dictionary = [{word: "boy", definition: "not a girl"}, {}, {}, {}, {}];




var dictionary = {
    boy: "not a girl",
    girl: "not a boy",
    banana: "yellow fruit"
};

console.log(dictionary["boy"]);

console.log(dictionary.boy);
console.log(dictionary["boy"]);



var myArray = [true, false, 1, function(){}, "anything"];
console.log(myArray[3];)


function addWord(word, definition) {
    if dictionary[word] = definition;
}

function findWord(word) {
    if (dictionary[word] === undefined) {
        console.log("That's not in the dictionary yet!")
    }
    return dictionary [word];
}






