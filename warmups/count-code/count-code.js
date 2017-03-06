var stringTest = "codelksjkjdfpaoisj;dlkjfas;ldkcode;lkajsd;lfj"

function codeCount(string){
    var expressionToMatch = /co[a-z]e/gi;
    var matchCount = string.match(expressionToMatch).length;
    console.log(matchCount);
}


codeCount(stringTest);





