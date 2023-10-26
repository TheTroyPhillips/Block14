// create a const of the number array
// create a const equation for the odds that will say
// when the number is devided by 2 and get a non remainder number then
// the number must be even so do not include it

//approach

// get my num array
//get the equation for the even numbers to be excluded
// console log it 

const numArray = [2,4,6,8,11,20,15,22]
const odds = numArray.filter((num) => num % 2 === 1);


console.log(odds);

const numArray2 = [1,2,3,4,5,6,7,8,9,10]
const odds2 = numArray2.filter((num) => num % 2 === 1);


console.log(odds2);

const numArray3 = [70,42,55,81,21,91,34]
const odds3 = numArray3.filter((num) => num % 2 === 1);


console.log(odds3);

const numArray4 = [2,4,6,8,10,11,12]
const odds4 = numArray4.filter((num) => num % 2 === 1);


console.log(odds4);

