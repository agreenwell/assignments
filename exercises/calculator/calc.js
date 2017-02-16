function add(num1, num2) {
    return num1 + num2;
}

function subrract(num1, num2) {
return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 0;
    }
    return num1/num2;
}

function exponent(num1, num2) {
    return Math.pow(num1, num2);
}

    module.exports = {
        add: add,
        sub: subtract,
        mul: multiply,
        div: divide,
        exp: exponent
}

