const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    },
]

module.exports = coffeeMenu


// .2
//const coffeenames = coffeeMenu.map((record) => record.name);
//console.log(coffeenames)


// .3
//const cheapdrinks = coffeeMenu.filter((record) => record.price <= 5);
//console.log(cheapdrinks)


// .4
//const evendrinks = coffeeMenu.filter((record) => record.price % 2 === 0);
//console.log(evendrinks)


// .5
//const totalcostnumbers = coffeeMenu.map((record) => record.price);

//const initialvalue = 0;

//const totalcost = totalcostnumbers.reduce((accumulator, current) => accumulator + current, initialvalue);
//console.log(totalcost)


// .6
//const seasonaldrinks = coffeeMenu.filter((record) => record.seasonal === true);
// console.log(seasonaldrinks)



// .7
const seasonaldrinks = coffeeMenu.filter((record) => record.seasonal === true);

const seasonalbeans = coffeeMenu.filter((record) => record.seasonal === true);