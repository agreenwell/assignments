function compareNums(num1, num2){
if (num1 < num2){
    console.log("num1 is the smallest number");
} else if (num2 < num1){
    console.log("num2 is the smallest number")
} else {
    console.log("They are exactly equal")
    }
};

compareNums(3,2);
    



function monkeyTrouble(aSmile, bSmile){
    if (aSmile === true && bSmile === true){
        console.log("Both are smiling. You're in trouble.");
} else if ((aSmile === true && bSmile === false) || (aSmile === false && bSmile === true)){
        console.log("Not in trouble. Phew!");
} else {
        console.log("Neither are smiling. Uh oh.")
    }
};




function sayHello(){
var date = new date();
var hour = date.getHours()

if (hour < 12) {
  console.log("Good Morning!");
} else if (hour > 12 && hour < 17) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Morning!");
}
};