var ask = require('readline-sync');  
console.log('Hi there! My name is Bob, help me get to know you!\n');  
var firstName = ask.question('What is your first name? ');  
var lastName = ask.question('Hi ' + firstName+ ', so nice to meet you!  Could I get your last name as well? ');
var age = ask.question('Awesome, thank you ' +firstName + lastName+'!  I would tell you my last name, but I do not have one!  Anyways, how old are you? ')