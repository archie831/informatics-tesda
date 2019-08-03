//============================ CHECK NORIS JOKES ====================================

var btn = document.getElementById("btn");
// var output = document.getElementById("output");
var output = document.createElement("p");

btn.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();
    var url = "https://api.chucknorris.io/jokes/random";
    
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);

        if(xhr.readyState == 1){
            output.innerText = "Loading...";
            document.getElementById("content").appendChild(output);
        }

        if(xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.responseText);
            console.log(xhr.responseText);
            console.log(data);
    
            // output.innerHTML = `${data.value} <br> <img src="${data.icon_url}"><br>` ;
            
            output.innerText = data.value;
            document.getElementById("content").appendChild(output);


        }
    }
    xhr.open("GET", url);
    xhr.send();
});

//============================ COUNTRY SELECTOR ====================================

    var xhr2 = new XMLHttpRequest();
    var url = "https://restcountries.eu/rest/v2/all";
    
    xhr2.onreadystatechange = function(){
        // console.log(xhr2.readyState);

        if(xhr2.readyState == 4 && xhr2.status == 200){
            var data = JSON.parse(xhr2.responseText);

            // console.log(xhr2.responseText);
            // console.log(data);
            // console.log(data[0].name);

            data.forEach(function(item){
                var option = document.createElement("option");
                option.innerText = item.name;
                document.querySelector("#clist").appendChild(option);
            });
        }
    }
    xhr2.open("GET", url);
    xhr2.send();

//============================ RANDOM USER GENERATOR ====================================

var btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function(){
    clearElement();
});

function ajax(){
    var users = document.getElementById("inputUser").value;
    var url = `https://randomuser.me/api/?results=${users}`;
    var xhr3 = new XMLHttpRequest();

    xhr3.onreadystatechange = function(){

        if(xhr3.readyState == 4 && xhr3.status == 200){
            var data = JSON.parse(xhr3.responseText).results;

            data.forEach(function(item,index){
                index++;
                var para = document.createElement("p");
                para.innerText = `${index}. ${item.name.title}. ${item.name.first} ${item.name.last}`;
                document.querySelector("#userList").appendChild(para);

                para.setAttribute("class", "para");
                para.id = "para" + index;
                var image = document.createElement("img");
                image.src = item.picture.thumbnail;
                document.querySelector("#"+para.id).append(image);
            });
        }
    }
    xhr3.open("GET", url);
    xhr3.send();
}

function clearElement(){
    var para = document.querySelectorAll('.para');
    if(para.length){
        for (var i = 0; i < para.length; i++) {
                para[i].parentNode.removeChild(para[i]);
        }
        ajax();
    }else{
        ajax();
    }
}



