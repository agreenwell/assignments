 var camelCased = ""

function returnCamelCase (str) {
    var lowerCase = str.toLowerCase();
    for (var i = 0; i < lowerCase.length; i++) {
        if (lowerCase[i] === " " || lowerCase[i] === "-" || lowerCase[i] === "_") {
            camelCased += lowerCase[i + 1].toUpperCase();
            i++
        } else {
            camelCased += lowerCase[i];
        }
    }
    return camelCased;
}

console.log(returnCamelCase("I aTE_fRUIT-ToDaY"))