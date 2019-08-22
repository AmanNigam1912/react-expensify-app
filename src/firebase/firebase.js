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

export { firebase, database as default };