function productValue(){return document.getElementById("product").value;}

function priceValue(){return document.getElementById("price").value;}

function quatityValue(){return document.getElementById("quatity").value;}

function cashValue(){return document.getElementById("cash").value;}

function getTotal(){
    if(productValue() == "" || priceValue() == "" || quatityValue() == ""){
        error1();
    }else if( isNaN(priceValue()) || isNaN(quatityValue())){
        error4();
    }else{
        var total = priceValue() * quatityValue();
        document.getElementById("display1").innerHTML = total;
        document.getElementById("display1").style.color = "black";
    }
}

function save(){
    var total = priceValue() * quatityValue();
    if(productValue() == "" || priceValue() == "" || quatityValue() == "" || cashValue() == ""){
        error2();
    }else if( total <= cashValue() ){

        var change = cashValue() - total;

        document.getElementById("display2").style.display = "none";
        document.getElementById("showProd").innerHTML = productValue();
        document.getElementById("showPrice").innerHTML = priceValue();
        document.getElementById("showQuan").innerHTML = quatityValue();
        document.getElementById("showTotal").innerHTML = total;
        document.getElementById("showCash").innerHTML = cashValue();
        document.getElementById("showChange").innerHTML = change;
    }else{
        error3();
    }
}

function error1(){
    document.getElementById("display1").innerHTML = "Incomplete values";
    document.getElementById("display1").style.color = "red";
}

function error2(){
    document.getElementById("display2").innerHTML = "Incomplete values";
    document.getElementById("display2").style.color = "red";
}

function error3(){
    document.getElementById("display2").innerHTML = "Insufficient Funds!";
    document.getElementById("display2").style.color = "red";
    document.getElementById("display2").style.display = "block";
}

function error4(){
    document.getElementById("display1").innerHTML = "Price or Quantity is not a number";
    document.getElementById("display1").style.color = "red";
}

