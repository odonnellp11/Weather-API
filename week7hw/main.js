//codewars problem #1: Get Nth even number (redo)
function nthEven(n){
    return 2 * n -2
  }

console.log(nthEven(1));

//codewars problem #2: Reverse a String (NEW)

function solution(str){
    return str.split('').reverse().join('');
  }

console.log(solution('novedgninromdoog'))

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

function favFood(dict){
    const foods = Object.entries(person3);
}
console.log(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printInfo(){
        console.log(`This is ${this.name}. Theya are ${this.age} years old!`);
    }

    increaseAge(newAge){    
    this.age = newAge;
    }
}

function PersonN(name,age){
    this.name = name
    this.age = age

    this.printinfo = () => {
        console.log(`This is ${this.name}. Theya are ${this.age} years old!`);
    }
}

let person1 = new person('Charles', 23);

let person2 = new PersonN('Carlos', 24);

person1.printInfo();
person2.printinfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const promised_func = (word) => {
    return new Promise((resolve, reject) => {
        if (word.length > 10) {
            resolve(word);
        } else {
            reject(word);
        }
        
    })
}

promised_func('lkzljgalkdfsjgpsdfg')
.then( (result) =>{
    console.log("Big Word!!!")
}).catch( (result) => {
    console.log('Small Word :| ');
});
