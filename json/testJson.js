

var json = '{"fname" : "Archie", "lname" : "Baclay", "age" : 27}';
var obj = JSON.parse(json);

document.getElementById("display").innerHTML = `My name is ${obj.fname} ${obj.lname}. I am ${obj.age} years old. <br><br><br>`;

//===================================================================

let jsObj1 = {
    employee: [{
        fname: "Archie",
        lname: "Baclay"
    },{
        fname: "James",
        lname: "Bond"
    },{
        fname: "Bill",
        lname: "Gates"
    }],
    job: "Programmer"
}

let toJson = JSON.stringify(jsObj1);

console.log(toJson);

let toJsObj = JSON.parse(toJson);

console.log(toJsObj);

output = "";
toJsObj.employee.forEach(function(item){
    output += `
    <div>Employee: ${item.fname} ${item.lname}</div>
    <div>Job: ${toJsObj.job} <br><br>`
});
document.getElementById("display2").innerHTML = output;


//===================================================================

document.getElementById("btn").addEventListener("click", function(){myAjax()});

function myAjax(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let json = JSON.parse(this.responseText);
            let output = ""

            json.employees.forEach(function(item){
                output += `
                    <div class="item">
                        <div><b>Employee: </b> ${item.fname} ${item.lname}</div>
                        <div><b>Age: </b> ${item.age}</div>
                        <div><b>Job: </b> ${json.job}</div>
                        <div><b>Company: </b> ${item.company}</div><br>
                    </div>`;
            });
            document.getElementById("display3").innerHTML = output;
        }   
    };
    xhttp.open("GET", "test.json", true);
    xhttp.send();
}
