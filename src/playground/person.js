console.log('inside person.js');
const isAdult = (age) => {    
    if (age >17) {
        return true;
    }
    return false;
};

const canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default };