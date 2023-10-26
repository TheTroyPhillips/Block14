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
//when a consonant is fount a consonant counter should add 1 and move on to the next letter

//approach

// create my constant and 2 counters one for the vowels and one for consonants
// after the counter create a  for equation that looks at the lenght of the word and go through
//it from the first letter to the last and count if the letter is a consonant or a vowel


const word1 = "hello";
let counter = 0;
let counterC = 0;
for(let i = 0; i < word1.length; i++){
    if(word1[i] === "e" || word1[i] === "a" || word1[i] === "i" || word1[i] === "o" || word1[i] === "u") counter += 1;
    else counterC += 1;
}

console.log(`There are ${counter} vowels and ${counterC} consonants in the sentence.`)

const word2 = "ukelele";
let counter2 = 0;
let counterC2 = 0;
for(let i = 0; i < word2.length; i++){
    if(word2[i] === "e" || word2[i] === "a" || word2[i] === "i" || word2[i] === "o" || word2[i] === "u") counter2 += 1;
    else counterC2 += 1;
}

console.log(`There are ${counter2} vowels and ${counterC2} consonants in the sentence.`)

const word3 = "awesome";
let counter3 = 0;
let counterC3 = 0;
for(let i = 0; i < word3.length; i++){
    if(word3[i] === "e" || word3[i] === "a" || word3[i] === "i" || word3[i] === "o" || word3[i] === "u") counter3 += 1;
    else counterC3 += 1;
}

console.log(`There are ${counter3} vowels and ${counterC3} consonants in the sentence.`)

const word4 = "onomonopia";
let counter4 = 0;
let counterC4 = 0;
for(let i = 0; i < word4.length; i++){
    if(word4[i] === "e" || word4[i] === "a" || word4[i] === "i" || word4[i] === "o" || word4[i] === "u") counter4 += 1;
    else counterC4 += 1;
}

console.log(`There are ${counter4} vowels and ${counterC4} consonants in the sentence.`)

const word5 = "textbook";
let counter5 = 0;
let counterC5 = 0;
for(let i = 0; i < word5.length; i++){
    if(word5[i] === "e" || word5[i] === "a" || word5[i] === "i" || word5[i] === "o" || word5[i] === "u") counter5 += 1;
    else counterC5 += 1;
}

console.log(`There are ${counter5} vowels and ${counterC5} consonants in the sentence.`)

const array1 = [1,2,3];
array1.reverse();


console.log(array1)