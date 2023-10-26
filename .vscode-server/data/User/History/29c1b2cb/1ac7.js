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
console.log(timmy)

// create a function that when the customer has a subscription
//   there will then be a discount of 25% on the refill cost
//     then coming up with a total cost for the two parameters
// create a function for if the customer has a coupon
//   apply this $10 discount coupon after the subscription discount
//     if no subscription then just apply the coupon
// create a function that logs the grand total for the price of refill


function personsCost(pricePerRefill, refills) {
    return pricePerRefill * refills;
}

const pricePreDiscount = personsCost(pricePerRefill, refills)

console.log(timmy)