let obj = {
    fname : "John",
    lname : "Doe",
    age : 16,
    status: "married",
    fullName: () => `Hi! ${this.fname} ${this.lname} ${this.fname}`,
    fullName: function(){
        `Hi! ${this.fname} ${this.lname} ${this.fname}`
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







