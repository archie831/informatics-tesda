$(document).ready(()=>{

    $("#div1").fadeIn("slow");
    $("#div2").delay(1000).fadeIn("slow");
    $("#div3").delay(2000).fadeIn("slow");
    $("#div4").delay(3000).fadeIn("slow");

    // $("#div1").fadeIn(1000);
    // $("#div2").fadeIn(3000);
    // $("#div3").fadeIn(5000);
    // $("#div4").fadeIn(7000);

    $(".div").hover(function(){
        $(this).toggleClass("addClass3");
    });

    $("#header").click(()=>{
        alert("This is test");
    });

    $("#btn").click(()=>{
        $("#para").toggle();
    });

    $("#btn2").click(()=>{
        $("#box").slideToggle();
    });

    $("#btn3").click(()=>{
        $("#input1").focus();
    });

    $("#btn4").click(()=>{
        $("#box2").fadeToggle();
    });

    $("#header2").click(function(){
        $(this).toggleClass("addClass");
    });

    $(".input2").focus(function(){
        $(this).addClass("addClass2");
    });

    $(".input2").blur(function(){
        $(this).removeClass("addClass2");
    });



});