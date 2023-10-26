/*function addTwoNums(num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        console.log(num1+ num2);
        return num1 + num2;
    }

    return "Sorry, please use actual numbers as the argument"
}

const mySum = addTwoNums(60, 100);

console.log(mySum);*/

/*function sayHelloToSomeone(someName) {
    console.log(`hello, ${someName}!`);
}
sayHelloToSomeone("Eric");

const sayHelooToSomeone2 = function (name) {
    console.log(`Hello, ${name}!`);
}

sayHelooToSomeone2("Kevein")*/

/*const sayHelloToSomeone = (name) => {
    return `Hello, ${name}!`;
}

console.log(sayHelloToSomeone("Troy"))*/

const budget = 50;
const price1 = 20;
const price2 = 25;

function giftSum(gift1, gift2) {
    return gift1 + gift2;
}
const giftTotal = giftSum(price1, price2)

function addTax(giftTotal) {
    return giftTotal + (giftTotal * 0.08);
}

const giftsWithTax = addTax(giftTotal);

function holidayShopping(budget, giftsWithTax) {
    return budget >= giftsWithTax;
}

holidayShopping(budget, giftsWithTax);

console.log(holidayShopping())