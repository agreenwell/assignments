var phrase = 'silly slimy solutions';

function letterCount(str) {
    var count = {};
    var uniques = "";
    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        if (count[letter] !== undefined) {
            count[letter]++;
        } else {
            count[letter] = 1;
            uniques += letter;
        }
    }

    return count;
}

function sortFrequency(count) {
    var sortedKeys = Object.keys(count).sort(function(a, b) {
        return count[b] - count[a];
    });
    var sortedFrequency = {};
    for (var i = 0; i < sortedKeys.length; i++) {
        sortedFrequency[sortedKeys[i]] = count[sortedKeys[i]];
    }    
    return sortedFrequency;
}
console.log(sortFrequency(letterCount(phrase)));