var names = ["Jay", "Morgan", "Steven", "Evan", "Josh", "Jesse", "Aaron", "Miriam", "Dan", "Ben"]

for (var i = 0; i < names.length; i++){
    attemptCall(names[i], dontCall, call, text)
}

function attemptCall(name, dontCall, call, text){
    if (name.length % 2 === 1){
        dontCall(name)
    }
}

function dontCall(name){
    console.log("Youd did not call " + name)
}
function call(){}
function text(){}