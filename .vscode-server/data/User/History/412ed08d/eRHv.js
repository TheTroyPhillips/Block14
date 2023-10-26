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

// create a code that accepts lowercasae letters and print how many consonants
//and vowels there are in the input
//when a vowel is found a counter should add 1 and move to the next letter


const word1 = "hello";
let counter = 0;
let counterC = 0;
for(let i = 0; i < word1.length; i++){
    if(word1[i] === "e" || word1[i] === "a" || word1[i] === "i" || word1[i] === "o" || word1[i] === "u") counter += 1;
    else counterC += 1;
}

console.log(`There are ${counter} vowels and ${counterC} consonants in the sentence.`)

