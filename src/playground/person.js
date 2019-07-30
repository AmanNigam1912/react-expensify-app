console.log('inside person.js');
//export const isAdult = (age) => {
const isAdult = (age) => {    
    if (age >17) {
        return true;
    }
    return false;
};

//will return true if condition satisfies else false
//export const canDrink = (age) => age >= 21;
const canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;
//export default isSenior;

export { isAdult, canDrink, isSenior as default };
//export { isAdult, canDrink };