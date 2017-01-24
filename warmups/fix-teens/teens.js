// write the noTeenSumfiumction
    // Take 3 values and send to helper function
    // which will turn 13, 14, 17, 18, 19 into 0 and
    // leave everything else alone


// helper function
    // Use onditional to decide if we should turn the number into 0 or
    // leave it alone.




function noTeenSum(a, b, c, callback) {
    return callback(a) + callback(b) + callback(c);
}


function fixTeen(n) {
    n = Number(n);
    if (n >= 13 && n <= 19 && n !== 15 && n !== 16) {
        n = 0;
    }
    return n;
}


console.log(noTeenSum(1, 2, 3, fixTeen));
console.log(noTeenSum(2, 13, 1, fixTeen));
console.log(noTeenSum(2, 1, 14, fixTeen));
console.log(noTeenSum(2, 15, 14, fixTeen));