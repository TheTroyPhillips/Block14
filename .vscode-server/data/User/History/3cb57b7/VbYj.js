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

/*const budget = 50;
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

console.log(giftsWithTax)

function holidayShopping(budget, giftsWithTax) {
    return budget >= giftsWithTax;
}

holidayShopping(budget, giftsWithTax);

console.log(holidayShopping(budget, giftsWithTax))*/

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// create a function that when the customer has a subscription
//   there will then be a discount of 25% on the refill cost
//     then coming up with a total cost for the two parameters
// create a function for if the customer has a coupon
//   apply this $10 discount coupon after the subscription discount
//     if no subscription then just apply the coupon
// create a function that logs the grand total for the price of refill


function costPreDiscount(pricePerRefill * refills)
console.log(c)