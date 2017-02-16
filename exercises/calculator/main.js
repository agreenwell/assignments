//var add = require("./add");
//var Subtractor = require("./sub");
//var mul = require("./mul");
//var div = require("./div");
//var exp = require("./exp");

var question = require("readline-sync").question;

function calculator(num1, num2, operation) {
    switch (operation) {
        case "add":
            return add(num1, num2);
            break;
        case "sub":
            var sub = new Subtractor(num1, num2)
            return sub.subtract (num1, num2);
            break;
        case "mul":
            return mul(num1, num2);
            break;
        case "div":
            return div(num1, num2);
            break;
    }
}

console.log(calculator(1, 2, "add"));
console.log(calculator(3, 2, "sub"));
console.log(calculator(3, 3, "mul"));
console.log(calculator(3, 0, "div"));
console.log(calculator(10, 2, "div"));
console.log(calculator(9, 2, "exp"));