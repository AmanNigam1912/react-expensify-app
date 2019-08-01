const add = (a, b) => {
    return a + b;
}
console.log(add(55,6,1000));

const user = {
    name: 'Aman',
    cities: ['Lucknow', 'Mysore', 'Jaipur', 'Guna', 'Pune'],
    printPlacesLived() {    
            return this.cities.map((city) => this.name + ' has lived in ' + city);
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