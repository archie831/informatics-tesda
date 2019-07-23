let obj = {
    fname : "John",
    lname : "Doe",
    age : 16,
    status: "Single",
    // fullName: () => { return `Hi! ${this.fname} ${this.lname} ${this.fname}`},
    // this keyword will not work in arrow function. this will refer to window object instead of the object literal.
    // fullName: () => console.log(this),
    // OUTPUT: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

    fullName(){
        return `Hi! ${this.fname} ${this.lname}`    
    },
    isMarried(){
        if(this.status == "married"){return "Yes"}else{return "No"}
    },
    isMinor: function(){
        if(this.age < 18){return "Minor"}else{return "Legal age"}
    }
}

class MyClass{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    isMinor(){
        if(this.age < 18 ){
            return "Yes"
        }else{
            return "No"
        }
    }
}

let person1 = new MyClass("Archie", "100", "Male");







