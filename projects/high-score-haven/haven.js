var button = $("#score-submit")
button.click(function(){ 
    var htmlString= ""
    console.log()
    var highScore = {};
    highScore.name = $("#name").val()
    console.log(highScore.name)
    
    $("tbody").append(`<tr><td>${highScore.name}</td><td>${$("#game").val()}</td><td>${$("#date").val()}</td><td>${$("#score").val()}</td><td>${$("#randomItem").val()}</td></tr>`)
    
    
    $('#form_id').trigger("reset");  
    
    })

    var randomItem = trashTalk[Math.floor(Math.random()*items.length)]
    
var trashTalk = ["You make stormtroopers look good", "I'm jealous of people that don't know you", "You're the human equivalent of a participation award", "With aim like that, I pity whoever has to clean the floor around your toilet", "You'll never be the man your mother is"]







