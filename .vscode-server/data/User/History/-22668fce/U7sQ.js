const myName = "Troy"; /*string */
const gravConstant = 9.8;
let isLoggedIn = true; /* true and false are booleans */

console.log(gravConstant +10);

const num1 = 5;
const num2 = 5;

console.log(num1 === num2); /* compare if equal */

console.log(num1 !== num2); /* compare if not equal */

const person1 = "John";
const person2 = "John";

console.log(person1 === person2);

const value1 = 5;
const value2 = "5";

console.log(value1 == value2);  /* double equals ignores the type so this is true */
console.log(value1 === value2); /* tripple equals does check for the same type */

const firstNum = 10;
const secondNum = 50;
const thirdNum = 10;

console.log(firstNum > secondNum); /* is firstNum greater than secondNum this is false */
console.log(firstNum > thirdNum); /* this is false becuase the two values are equal which is not greater than */
console.log(firstNum >= thirdNum); /* >= is greater than or equal so this is now true */

const hasCoupon = true;

//    if user has coupon, give user discount else pay full price
//    if(/*condition to check*/){
        // thing to do if condition is true
//    } else {
    // thing to do if condition is not true
//    }

if(hasCoupon === true){ //dont have to put === true or false as long as it evaluates to a boolean
    console.log("you pay a discounted rate");
} else {
    console.log("the full price is $50");
}

if(!hasCoupon === true){ //putting the !(not!) makes it inverse so not hasCoupon
    console.log("you pay a discounted rate");
} else {
    console.log("the full price is $50");
}

const searchResult = ""; // if there is an empty string it will always be false

if(searchResult){
    console.log("There is a result for your movie!");
} else {
    console.log("Sorry no movie found");
}

const numResults = 0; // if there is a 0 it is the same as an empty string it results in a false

if(numResults){
    console.log("There is a result or results for your movie!");
} else {
    console.log("Sorry no movie found");
}

//&& is only true if everything is true

let isRaining = true;
let isWarm = true;

console.log(isRaining && isWarm && "Lunch"); //this is true because both operands are true

let isPourning = false;
let isHot = true;

if(isPourning || isHot){ // the || is or so if pouring or hot the statement is true if both are false then the statement is false
    console.log("one of those is true")
} else {
    console.log("both of those must be false")
}






