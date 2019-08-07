//
//Object destructuring
//

// const person = {
//     name: 'Aman',
//     age: 27,
//     location: {
//         city: 'Boston',
//         temp: 80
//     }
// };

// //creates two variable's and gets those values from person's properties
// //here name comes from person.name 
// //can give a default value as shown below, will only be used when name is not present
// //can use different name and default together as well
// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// //get the temp property and put in new temperature const
// //but if we now try to use temp, we will get an error a it has been renamed
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);


//
//Array destructuring
//

const address = ['40 Parker Hill Ave', 'Boston', 'Massachusetts', '02120'];
//const address = [];

//for array destructuring we use []
//if we have x items in array, not necessary to create x local variables for destructuring
//synatx 1
//const [street, city, state, zip] = address;

//syntax 2
//const [street, city, state] = address;

//syntax 3
//const [, , state] = address;

//rename not possible here but can name anyting

//can set default
// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`); 

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffeeType, ,mediumPrice] = item;

console.log(`A medium ${coffeeType} costs ${mediumPrice}`);