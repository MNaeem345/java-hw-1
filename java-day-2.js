//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}




for(k in person3){
    console.log(`Favorite ${k} are ${person3[k]}`);
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

console.log("\n\n\n")
// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age; 

    this.printInfo = function printInfo() {
        console.log(this.name + " is " + this.age + " yrs old.");
    };
    this.ageChange = function ageChange(){
            this.age++ ; 
    };
    this.changeName = function changeName(newName) {
        this.name = newName;
    };
}
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


var Mike = new Person('Mike', 3);
Mike.printInfo();




