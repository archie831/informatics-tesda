
// let persons = ['John', 'Archie', 'Mark', 'Thanos'];

// for( x = 0; x < persons.length; x++){
//     console.log(persons[x]);
//     let output = `<li> ${persons[x]} </li>`
//     document.getElementById("container1").innerHTML = `<ul> ${output} </ul>`;
// }


// let persons2 = ['Tony', 'Jason', 'Marky', 'Stark'];

// let output = ""
// for( x = 0; x<persons2.length; x++){
//     // console.log(output += persons2[x]);
//    output += "<li>" + persons2[x] +  "</li>";
// }

// document.getElementById('container2').innerHTML =  `<ul> ${output} </ul>`;



//OBJECTS

// let person = {
//     fname : "John",
//     lname : "Doe",
//     age : 32
// }

//Arrya of Objects

let persons = [{
    fname : "John",
    lname : "Doe",
    age : 32,
    isMarried: false
},
{
    fname : "James",
    lname : "Bond",
    age : 40,
    isMarried: true
},
{
    fname : "Tony",
    lname : "Gonzaga",
    age: 3000,
    isMarried: true

}];

// persons.forEach(myFunction);
// function myFunction(item){
//     console.log(item)
// }

//OR

persons.forEach(function(item){
    console.log(item);
});

persons.forEach(item => console.log(item.fname));

let output = ""
persons.forEach(item =>{
    output += `<p><b>Your name is</b> ${item.fname} ${item.lname}. <b>Status:</b> ${item.isMarried} </p>`;
});

document.getElementById('container2').innerHTML = output;












