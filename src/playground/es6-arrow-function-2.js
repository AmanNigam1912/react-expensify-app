// arguments object - no longer bound with arrow functions

//arrow functions don't have their own this binding

// const add = function (a, b) {
//     //dont have access to arguments inside of arrow functions
//     console.log(arguments);
//     return a + b;
// }
// console.log(add(55,6,1000));

const add = (a, b) => {
    //dont have access to arguments inside of arrow functions
    //console.log(arguments);
    return a + b;
}
console.log(add(55,6,1000));


// this keyword - no longer bound with arrow functions

// const user = {
//     name: 'Aman',
//     cities: ['Lucknow', 'Mysore', 'Jaipur', 'Guna', 'Pune'],
//     //function defined on object body
//     printPlacesLived: function () {
//         // console.log(this.name);
//         // console.log(this.cities);
//         const that = this;

//         this.cities.forEach(function (city) {
//             //this.name is not accessible here
//             //console.log(this.name + ' has lived in ' + city);
//             console.log(that.name + ' has lived in ' + city);
//         });
//     }
// };

//arrow function doesn't bind its own this value
const user = {
    name: 'Aman',
    cities: ['Lucknow', 'Mysore', 'Jaipur', 'Guna', 'Pune'],
    //method defined on object body
    //printPlacesLived: function () {
    printPlacesLived() {    
    //printPlacesLived: () => {
    //we lose access to this.cities using => {} as in previous line
        //with map we can transform each item like a new array back
        //map does not effect this array at all
        //const cityMessages = this.cities.map((city) => {
            return this.cities.map((city) => this.name + ' has lived in ' + city);
            //{
            //return city + '!';
            //return this.name + ' has lived in ' + city;
        //});

        //return cityMessages;
        //for each we can do sth like print
        // this.cities.forEach((city) => {
        //    console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 3, 4, 5],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());