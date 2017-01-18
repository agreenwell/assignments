var addSubmit = document.getElementById("submit-add");

addSubmit.addEventListener("click", function(){
    var value1 = document.getElementById("Add-input-1").value;
    var value2 = document.getElementById("Add-input-1").value;
    var total = value1 + value2;
    
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    
    var output = document.getElementById("add-output");
    
    output.textContent = sum    ;
    
})