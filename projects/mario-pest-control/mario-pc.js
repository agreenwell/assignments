var button=document.getElementById("coin-totals")
button.addEventListener("click", function(){ 

var goombaInput=document.getElementById("goomba-caught").value

var goombaCost=goombaInput * 5
    document.getElementById("goomba-output").textContent=goombaCost
    
var bombombInput=document.getElementById("bombomb-caught").value

var bombomCost=bombombInput * 7 
    document.getElementById("bombomb-output").textContent=bombomCost
    
var cheepcheepInput=document.getElementById("cheepcheep-caught").value 

var cheepcheepCost=cheepcheepInput * 11
    document.getElementById("cheepcheep-output").textContent=cheepcheepCost
    
var totalCoins=goombaCost + bombomCost + cheepcheepCost
    document.getElementById("total-coins").textContent=totalCoins
    
    
})

