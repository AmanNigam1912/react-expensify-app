//import and export are ES6 features
//import file 
//import './utils.js';
//not an object it is a syntax
//in { } have the thing that was exported
//default exports are put before the braces
// name of default export need not be same as mentioned in exports, can be anything
// same does not apply to named exports, names need go match
//import subtract, { square, add } from './utils';
import isSenior,{ isAdult, canDrink } from './person';

console.log('app.js is running');
// console.log(square(4));
// console.log(add(100,25));
// console.log(subtract(100, 80));

console.log(isAdult(14));
console.log(canDrink(22));
console.log(isSenior(64));
