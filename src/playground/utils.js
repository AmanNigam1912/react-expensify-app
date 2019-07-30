console.log('utils.js is running');

//exports 1. default export 
//exports 2. named exports

//can export like this as well
export const square = (x) => x * x;
//const square = (x) => x * x;

export const add = (a, b) => a + b;
//const add = (a, b) => a + b;

//alternate syntax for exporting a default is as follows
const subtract = (a, b) => a - b;
export default subtract; //cannot put export before const in case of default
//can do as follows as well
//export default (a, b) => a - b;

//not object definition name: 'Aman' is not allowed
//export { square, add }; 
//named exports done only via {} 
//no text exports allowed like exports 'test' will throw and error

//default exports used only for one function 
//default exports used for 0 or 1 functions only
//export { square, add, subtract as default };