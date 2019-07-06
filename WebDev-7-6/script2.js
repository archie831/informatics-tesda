// // conditional operators
// // > - greater than
// // < - less than
// // >= - greater than or equal to
// // <= - less than or equal to
// // == - equal to
// // === equal to(same type)

// LOGICAL OPERATORS
// &&
// ||
function check(){
    var x = 100;
    var y = 200;
    if (x<y){
        alert('yes')
    }
    else{
        alert('They are not')
    }
}

function login(){
    var user = "admin";
    var pass = "1234"

    if(user=='admin' && pass=='1234'){
        alert('Success!');
    }
    else if(user=='admin' && pass!='1234'){
        alert('Correct Username but Wong password')
    }
    else{
        alert('Try Again')
    }

}

function multiple()
{
    var grade = 81;

    if(grade>94)
    {
        alert('Excellent');
    }
    else if(grade>90)
    {
        alert('Very Good')
    }
    else if(grade>84){
        alert('Good');
    }
    else if(grade>80){
        alert('Nice');
    }
    else if(grade>74){
        alert('Kapyot')
    }
    else{
        alert('Paningkamot')
    }



}

function execute(){
    var x = document.getElementById('1').value;
    var y = document.getElementById('2').value;
    var sum = Number(x) + Number(y);
    var a = '50';
    
    alert('Sum is: '+sum);
}

// JAVASCRIPT ACTIVITY

// 1. CREATE TWO TEXBOXES AND 4 BUTTONS
// 2. DISPLAY THE SUM, DIFFERENCE, PRODUCT AND QUOTIENT
// BASED FROM THE SELECTED BUTTON
// 3. DISPLAY ERROR IF ONE OF THE TEXTBOXES IS EMPTY
// 4. DISPLAY ERROR IF ONE OF THE TEXTBOXES IS NOT A NUMBER
  
// if(isNaN(x) || x==""){
//     errror
// }