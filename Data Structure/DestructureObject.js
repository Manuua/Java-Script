'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'], 
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; 
  },

  orderDelivery: function({time,adress,mainIndex,starterIndex}) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverid to  ${adress} at ${time}`);
  },
};

restaurant.orderDelivery({
  time:'18:33',
  adress:'Via Angelo Tavanti 23, Firenze, Italy',
  mainIndex: 2,
  starterIndex: 2,
 })

const {name, location, categories, openingHours} = restaurant;
console.log(name, location, categories, openingHours);

const {
    name : restaurantName,
    location : restaurantLocation, 
    categories : restaurantCategories, 
    openingHours : restaurantOpeningHours
} = restaurant;

// Same data with diferrent names
 console.log(restaurantName, restaurantLocation, restaurantCategories, restaurantOpeningHours);

 const {menu = [], starterMenu: starters = []} = restaurant;
 console.log(menu, starters);

 //multating variables

 let a = 111;
 let b = 999;
 const obj ={a: 23, b:7, c:14};

({a,b} = obj);
console.log(a,b);

//Objetos Organizados

// const {friday:{open , close} }= openingHours;
// console.log(open, close);