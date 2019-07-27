$("#input").keypress(function(){
    let value = $(this).val().length;
    value < 7 ? $(".display").html("Username must be 8 characters") : $(".display").html("");
});
$("#input").keydown(function(){
    let value = $(this).val().length;
    value < 9 ? $(".display").html("Username must be 8 characters") : $(".display").html("");
});



