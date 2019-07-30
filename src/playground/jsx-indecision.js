//contain JSX
//it will get compiled and saved in app.js file in /public/scripts folder
//app.js in scripts will be used by index.html
//we will never manually change app.js in scripts it will chnage when we compile app.js in src folder

//here we will have features of react and react-dom
console.log('App.js is running')

// JSX - JavaScript XML
//it is a JS syntax extension, not part of core JS language
//provided to us by react, define our templates and inject data into it
//JSX makes working with templates much easier

const app ={
    title: 'Title'
    ,subtitle: 'Subtitle'
    ,options: []
};

//e is the event object, contains info about events
const onFormSubmit = (e) => {
    //e.preventDefault() will stop the full page refresh
    e.preventDefault();

    //e.target will point the element where event started on i.e form over here
    //indexed by name. name is option
    //.value will get the value entered by user
    const option = e.target.elements.option.value;

    if (option) {
        //push the user value to options array
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptionsArray();
    }
};

//following line is the o/p from babel for the above line
//var template = React.createElement("p", null, "This is JSX from app.js!");

//for object
// const user = {
//     name: 'Aman',
//     age: 27
//     ,location: 'Boston, MA'
// };
// //use of strings, number as follows
// // var userName = 'Aman';
// // var userAge = 25;
// // var userLocation = 'Boston, MA';
// function getLocation(location) {
//     if (location) {
//         //return location;
//         return <p>Location: {location}</p>
//     } 
//     //undefined, null, boolean are ignored by JSX
// }
// //ternary opeartor used below
// //logical and && operator used below is useful when 1st condition is true then 2nd condition is the o/p else no o/p as booleans are ignored in JSX
// const templateTwo = (
//     <div>
//         {/*{} inside it is any JS syntax.{} makes a JS expression */}
//         {/* <h1>{user}</h1> will throw an error, we cannot render object in react but can use its properties*/}
//         {/* we can render strings and numbers in{} */}
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {/* calling a function is an expression. so valid. return value will show in jsx 
//         <p>Location: {getLocation(user.location)}</p>*/}
//         {/* put tags inside {} will serve same as above
//         {<h3>my h3</h3>}*/}
//         {getLocation(user.location)}
//     </div>
// );

//get the elemnt by its id and gave div and id of app in index.html
const appRoot = document.getElementById('app');

const remove = () => {
    app.options = [];
    renderOptionsArray();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderOptionsArray = () => {
    //<p>This is JSX from app.js!</p> is completely static no dynamic values in it
    //This is basic JSX
    //wrap two or more tags in a div tag otherwise an error will occur
    //called as single root div or wrapper div
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={remove}>Remove All</button>
            {/* JSX supports arrays, inside [] we can provide numbers, string, booleans, undefined and null but not objects as they are not supported*/}
            {/* null, undefined and boolean won't show up as is in JSX */}
            {/* we can have arrays of JSX */}
            {/* providing key will allow JSX to optimize rendering process, re render individual things and keep track of where things are in the array */}
            {/*
                {
                    [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
                }
            */}
            {/*<ol> is an ordered list, a number list of items*/}        
            <ol>
                {
                   app.options.map((option) => <li key={option}>{option}</li>) 
                }
            </ol>
            {/* onSubmit will trigger the function when user submits a form */}
            {/* we reference the function and not call it like onFormSubmit() as that will store/use the return value from the fn */}
            <form onSubmit={onFormSubmit}>
            {/*name in input tag is a unique identifier that describes it */}
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderOptionsArray();
