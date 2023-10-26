// given a certain value check if the value is true or false
//if the value is falsey print:
//if "The boolean value false is falsy";
//"The null value is falsy";
//"undefined is falsy";
//"The number 0 is falsy (the only falsy number)";
//"The empty string is falsy (the only falsy string)";


//approach

//take the value and check in an if statement if the value is true or falsey

/*const valueToTest = "";
if(valueToTest){
    console.log(true);
} else if (valueToTest === false) {
    console.log("The boolean value false is falsy")
} else if (valueToTest === null) {
    console.log("The null value is falsy")
} else if (valueToTest === undefined) {
    console.log("undefined is falsy")
} else if (valueToTest === 0) {
    console.log("The number 0 is falsey (the only falsy number)")
} else if (valueToTest === "") {
    console.log("the empty string is falsy (the only falsy string)")
}*/


//given a certain value (a number)
//define a sum that is less than -1000
//define a sum that is a negative number
//define a sum that is equal to 0
//define a sum that is larger than 0
//define a sum that is greater than 100

//approach

//setup an equation for 2 numbers
// create an if statement that determines which result that sum corresponds to
//for whatever result the sum corresponds to, print the expected print for that result

/*const num1 = -1000;
const num2 = 0;

if(num1 + num2 > 100){
    console.log(`${num1 + num2} is greater than 100`)
} else if(num1 +num2 > 0) {
    console.log(`${num1 +num2} is greater than 0`)
} else if(num1 +num2 === 0) {
    console.log(`${num1 +num2} is equal to 0`)
} else if(num1 +num2 < -1000) {
    console.log(`${num1 +num2} is less than -1000`)
} else if(num1 +num2 < 0) {
    console.log(`${num1 +num2} is a negative number`)
} else if(num1 +num2 < -1000) {
    console.log(`${num1 +num2} is less than -1000`)
}*/


// first create a constant that defines num1 and num 2
// then create an if statement that decides if both numbers are equal to or greater than 5 then the script will print true
//if not then it will print false 

//approach

// set my constants 
//make an if else statement for the true or false queation of equal to or greater than 5

const numb1 = 5;
const numb2 = 4;

if(numb1 + numb2 >= 5){
    console.log(true)
}


