var button = $("#score-submit")
button.click(function(){ 
    var htmlString= ""
    console.log()
    
    var highScore = {};
    highScore.name = $("#name").val()
    console.log(highScore.name)
    
    

  var checkbox= $("#checkbox")
      if (checkbox[0].checked) {
           var randomTalk = trashTalk[Math.floor(Math.random()*trashTalk.length)]

       }else {
           var randomTalk="";
       }
    
    
    
    
    
     if ($("#name").val() === "" || 
        $("#game").val() === "" || 
        $("#date").val() === "" || 
        $("#score").val() === "") {
           alert("All fields required")
          } else {
                                                                                            
            $("tbody").append(`<tr><td>${highScore.name}</td><td>${$("#game").val()}</td><td>${$("#date").val()}</td><td>${$("#score").val()}</td><td>${randomTalk}</td></tr>`);



            $('#form_id').trigger("reset");  
          }

})


    
var trashTalk = ["You make stormtroopers look good", "I'm jealous of people that don't know you", "You're the human equivalent of a participation award", "With aim like that, I pity whoever has to clean the floor around your toilet", "You'll never be the man your mother is", "You are the reason they put instructions on shampoo", "Your birth certificate is an apology letter from the hospital", "You're the reason the gene pool needs a lifeguard", "I don't know what makes you stupid, but it really works", "You're so fat, you could sell shade"];

    
    
    
