var names = ["Jay", "Morgan", "Steven", "Evan", "Josh", "Jesse", "Aaron", "Miriam", "Dan", "Ben"]

for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCall, call, sendText);
}

function attemptCall(name, dontCall, call, sendText) {
    name = name.toLowerCase();
    
    // If there is more than one "a" in the name
    if (name.lastIndexOf("a") !== name.indexOf("a")) {
        sendText(name);
    } else if (name.length % 2 !== 0) {
        dontCall(name);
    } else {
        call(name);
    }
}

function sendText(name) {
    console.log(`Sent a text to ${name}`);
}

function dontCall(name) {
    console.log(`Didn't call ${name}`);
}

function call(name) {
    console.log(`Called ${name}`);
}