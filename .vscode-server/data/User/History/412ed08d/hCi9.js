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

// create a code that accepts lowercasae letters and print how many consonants
//and vowels there are in the input
//when a vowel is found a counter should add 1 and move to the next letter
//when a consonant is fount a consonant counter should add 1 and move on to the next letter


const word1 = "ukelele";
let counter = 0;
let counterC = 0;
for(let i = 0; i < word1.length; i++){
    if(word1[i] === "e" || word1[i] === "a" || word1[i] === "i" || word1[i] === "o" || word1[i] === "u") counter += 1;
    else counterC += 1;
}

console.log(`There are ${counter} vowels and ${counterC} consonants in the sentence.`)

