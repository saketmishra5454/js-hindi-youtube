// Primitive Datatypes
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt




const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber  = 34385736172383897n;


// Reference (Non-Primitive Datatypes)
// Array, Objevts, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];
let myObj = {
    name: "Saket",
    age: 19,

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)

//link of study
// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "SaketMishradotcom"

let anotherName = myYoutubename
// console.log(anotherName);
// anotherName = "chaiaurcode"

// console.log(myYoutubename)
// console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;

    userTwo.email = "Saket@google.com"

console.log(userOne.email);
console.log(userTwo.email);
