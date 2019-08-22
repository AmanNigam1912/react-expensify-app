//connect the db
//other files can use this by importing
//* as means it takes all named exports from firebase and dumps them on a 
//new variable called firebase
//we don't do it like 
//import firebase from 'firebase';
//as firebase doesn't have any default exports
//so instead of manually taking named exports we take all as in *
import * as firebase from 'firebase';

//this is equivalent to a password to the firebase db
const firebaseConfig = {
    apiKey: "AIzaSyCQIdOb9oge12Qo9QWw1Jw2LmdPf9gDu_U",
    authDomain: "expensify-5f901.firebaseapp.com",
    databaseURL: "https://expensify-5f901.firebaseio.com",
    projectId: "expensify-5f901",
    storageBucket: "",
    messagingSenderId: "499354322131",
    appId: "1:499354322131:web:f53f0c1b377a8686"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ref() gets the reference to the root of our db
//set() provides the data we want to set
//firebase has many features like database, authentication, etc
//to access database we use firebase.database() with no arguments passed
const database = firebase.database();

//integrate arrays in firebase. as they are not supported in  firebase
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val() 
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });  

database.ref('expenses').push({
  description: 'Buy fruits',
  note: '',
  amount: 4000,
  createdAt: 123456789
});

//child_removed --> gets fired when one of our expenses gets deleted
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child_changed --> gets fired when one of our expenses changes
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child_added --> gets fired everytime an expense is added
//gets not only called for new children but also for the existing one's
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//push will create a unique id automatically, inside of it will reside the title and body
// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

//database.ref('notes/-Lmfb1qGhDKd9gO6tjm4').remove();

//for reading data single time use once()
//database.ref()
// database.ref('job/company')
//   .once('value')
//   //data is available as an argument to then 
//   .then((snapshot) => {
//     const val = snapshot.val(); //returns the data we requested
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

//for reading data and to notify of the changes from the server use on()
//to run code when value comes back, pass a callback
//we will not use promise then and catch as that gets call only when
//it resolved or reject
//but we need to read everytime data changes
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(31);
// }, 3500);

// setTimeout(() => {
//   //to unsubscribe or cancel all subscriptions on the root reference
//   database.ref().off(onValueChange);
// }, 7000);

// //this wont appear in console but will change in the firebase database
// setTimeout(() => {
//   database.ref('age').set(32);
// }, 10500);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

//ref is short form of reference
//it gives refernce to a specific part of our database
//ex. in sql we have different tables to store data into individual pieces
//ex. in mongodb we have collections, a users collection, a expenses collection
//similarly for firebase we have refernces
//so reference different parts of my database and store information there
//so store users in one location and expenses in another
//if no argument passed into ref we are getting reference to the root of the database
//hence whatever provided in set is getting set in the root under expensify-5f901
//set() used to set a value for a specific reference
//set() can store any of the database type like object, string, boolean, number, array etc
//if .set() is used twice, the first set is overwritten with the second
// database.ref().set({
//   //set returns a promise
//     name: 'Aman Nigam',
//     age: 27,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Boston',
//       country: 'United States'    
//     }
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((e) => {
//   console.log('This failed', e);
// });

//update can change existing values,
//can add a new vale,
//can remove a value
//update supports promises i.e. then and catch
// database.ref().update({
//   // name: 'Shubh',
//   // age: 28,
//   // job: 'Software developer',
//   // isSingle: null
//   //job: 'Manager',
//   //update doesn't update nested objects
//   //but update location to be the new object 
//   // location: {
//   //   city: 'New York'
//   // }
//   //i quotes as it contains /
//   //'location/city': 'New York'
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

//equivalent to .remove see docs
//firebase.google.com/docs
// database.ref('isSingle').set(null);   

// database.ref().
//         remove().
//         then(() => {
//           console.log('Remove successful');
//         }).catch((e) => {
//           console.log('Remove failed:', e);
//         });

//database.ref().set('This is my data.');

//ref() used to refernce which part of db we are tryig to change
//to overwrite a particular property of the object defined in set
//reference just the 'age' part of set and set the number inside set()
//this will leave every other thing in set untouched and just changing the age part of set
// database.ref('age').set(28);

// database.ref('location/city').set('Lucknow');
// database.ref('location/country').set('India');

//will set up new root child named 'attributes' with two children inside-> height and weight
// database.ref('attributes').set({
//   height: 64, //inches
//   weight: 120 //pounds
// }).then(() => {
//   console.log('attributes ref data saved!');
// }).catch((e) => {
//   console.log('error:', e);
// });
//changing of data happening is asynchronous
//meaning a call to set doesn't mean it complete before next line runs
//call to set communicates with firebase servers
//initialize that request off to the firebase servers
//servers process that request and then they have to respond
//letting us know if things failed or gone well
//failed maybe because of some permission issue
