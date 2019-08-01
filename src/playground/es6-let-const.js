var nameVar = 'Aman';
var nameVar = 'Shubh';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName;
}
const petName = getPetName();
console.log(petName); 

const fullName = 'Aman Nigam';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
