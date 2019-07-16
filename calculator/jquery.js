$("#jqplus, #jqminus, #jqtimes, #jqdivide").click(function(){
    var btn = $(this).attr("id");
    function input1(){ return Number($("#jqInput1").val());}
    function input2(){ return Number($("#jqInput2").val());}
    switch(btn){
        case "jqplus":
            jqCheck(input1(), input2())? add(input1(), input2()): jqValError();
            function add(input1, input2){var sum = input1 + input2;jqAnswer(sum);}break;

        case "jqminus":
            jqCheck(input1(), input2())? subtract(input1(), input2()): jqValError();
            function subtract(input1, input2){var diff = input1 - input2;jqAnswer(diff);}break;

        case "jqtimes":
            jqCheck(input1(), input2())? multiply(input1(), input2()): jqValError();
            function multiply(input1, input2){var product = input1 * input2;jqAnswer(product);}break;
            
        case "jqdivide":
            jqCheck(input1(), input2())? division(input1(), input2()): jqValError();
            function division(input1, input2){var quotient = input1 / input2;jqAnswer(quotient);}break;  
    }
});

function jqCheck(input1,input2){if( input1 =="" || input2 =="" ){return false;}else{return true;}}
function jqValError(){
    $("#jqAnswer").html("Error incomplete values");
    $("#jqAnswer").css("color", "red");
}
function jqAnswer(data){
    $("#jqAnswer").html(data);
    $("#jqAnswer").css("color", "black");
}