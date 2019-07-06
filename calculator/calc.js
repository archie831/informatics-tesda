
document.getElementById("addition").addEventListener("click",function(){
    var x = document.getElementById("input1").value;
    var y = document.getElementById("input2").value;
    if( x == "" || y == ""){
        document.getElementById("answer").innerHTML = "<h3>Please enter a value</h3>";
    }else{
        add(x,y);
    }
});

document.getElementById("subtraction").addEventListener("click",function(){
    var x = document.getElementById("input1").value;
    var y = document.getElementById("input2").value;
    
    if( x == "" || y == ""){
        document.getElementById("answer").innerHTML = "<h3>Please enter a value</h3>";
    }else{
        subtract(x,y);
    }
});

document.getElementById("multiplication").addEventListener("click",function(){
    var x = document.getElementById("input1").value;
    var y = document.getElementById("input2").value;
    if( x == "" || y == ""){
        document.getElementById("answer").innerHTML = "<h3>Please enter a value</h3>";
    }else{
        multiply(x,y);
    }
});

document.getElementById("division").addEventListener("click",function(){
    var x = document.getElementById("input1").value;
    var y = document.getElementById("input2").value;
    if( x == "" && y || ""){
        document.getElementById("answer").innerHTML = "<h3>Please enter a value</h3>";
    }else{
        divide(x,y);
    }
});


function add(x,y){
    var sum = x + y;
    document.getElementById("answer").innerHTML = "The answer is: " + "<h3>" + sum + "</h3>";
}

function subtract(x,y){
    var diff = x - y;
    document.getElementById("answer").innerHTML = "The answer is: " + "<h3>" + diff + "</h3>";
}

function multiply(x,y){
    var product = x * y;
    document.getElementById("answer").innerHTML = "The answer is: " + "<h3>" + product + "</h3>";
}

function divide(x,y){
    var div = x / y;
    document.getElementById("answer").innerHTML = "The answer is: " + "<h3>" + div + "</h3>";
}







