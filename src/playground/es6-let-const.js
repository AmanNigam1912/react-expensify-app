// with var based variables we can overwrite a variable
// also declare variable more than once but with different values 
// with var we can reassign and redefine as well
var nameVar = 'Aman';
var nameVar = 'Shubh';
console.log('nameVar', nameVar);

// reassign in let is also valid in es6
// but cannot redefine a variable in es6
let nameLet = 'Jen';
//let nameLet = 'Julie';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// const we cannot redefine them in es6
// const we cant reassign them in es6
const nameConst = 'Frank';
//const nameConst = 'Gunther';
//nameConst = 'Gunther';
console.log('nameConst', nameConst);

//var based is function scope i.e. cannot be accessed outside the function
function getPetName() {
    const petName = 'Hal';
    return petName;
}
//give a runtime error
//getPetName();
const petName = getPetName();
console.log(petName); 
//let and const are also function scoped

//Block scoping
//like for loop and if statements
//var variables are function scope so firstName is available outside if as well
//var is not limited to the curly brackets
//let and const are block scope i.e set of opening and closing curly brackets
// var fullName = 'Aman Nigam';
// if (fullName) {
//     //split, splits the string into array of string based on spaces
//     //var firstName = fullName.split(' ')[0];
//     let firstName = fullName.split(' ')[0];
//     console.log(firstName);
// }
// //with const and let, next line not accessible
// console.log(firstName);


const fullName = 'Aman Nigam';
let firstName;
if (fullName) {
    //split, splits the string into array of string based on spaces
    //var firstName = fullName.split(' ')[0];
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
//with const and let, next line not accessible
console.log(firstName);
