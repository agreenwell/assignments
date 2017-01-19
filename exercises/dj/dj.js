document.getElementById("box").addEventListener("dblclick", function(){
    document.getElementById("box").style.background="green";
})

document.getElementById("box").addEventListener("mouseenter", function(){
    document.getElementById("box").style.background="blue";
})

document.getElementById("box").addEventListener("mousedown", function(){
    document.getElementById("box").style.background="red";
})

document.getElementById("box").addEventListener("mouseup", function(){
    document.getElementById("box").style.background="yellow";
})

document.getElementById("body").addEventListener("wheel", function(){
    document.getElementById("box").style.background="orange";
})

document.getElementById("body").addEventListener("keypress", function(char){
    if (char.code==="KeyO"){
        document.getElementById("box").style.background="orange";
    } 
    if (char.code==="KeyB"){
        document.getElementById("box").style.background="blue";
    } 
    if (char.code==="KeyY"){
        document.getElementById("box").style.background="yellow";
    } 
    if (char.code==="KeyG"){
        document.getElementById("box").style.background="green";
    } 
    if (char.code==="KeyR"){
        document.getElementById("box").style.background="red";
    } 
})
