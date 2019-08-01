// app.js used only to import code defined elsewhere
// allows to have many small files as compared to big one
// same architecture used for styles.scss

// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';
//import AddOption from './components/AddOption.js';
//webpack will take it as a js file
import IndecisionApp from './components/IndecisionApp';
//grab css from normalize css directory
//normalize used to allow all the browsers to have the same stuff with the styles included
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//told webpack to run babel everytime it sees a js code
//webpack loads this file, runs it through babel and converting the jsx to react.createElement calls
//that is what gets stored in bundle
//const template = <p>test 123 jsx working</p>;
//ReactDOM.render(template, document.getElementById('app'));


// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     );
// }

// const jsx = (
//     <div>
//         {/* to render a react component use it as a tag in jsx */}
//         {/* Header with caps H is treated not as a string in app.js of scripts folder */}
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );

//stateless functional component - cannot use state but can use props
//props are passed here in argument same as this in class based components
//with the key value pairs
// const User = (props) => {
//     return (
//         <div>
//         {/* if it was a class based component the js exp would be this.props.name */}
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };

//ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']}/>, document.getElementById('app'));

//<div> is a child of layout. can be accessed by props.children in const Layout
// ReactDOM.render((
//     <Layout>
//         <div>
//             <h1>Page Title</h1>
//             <p>This is my page</p>
//         </div>
//     </Layout>
//     ), document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//if the tag starts with a lowecase letter in jsx it will assume we are creating an html element
// when using an upper case element it will search that in scope and refernce that in react.creatElement call
//ReactDOM.render(<User name="Aman" age={27}/>, document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//     }
//     getGreeting() {
//         return `Hi. My name is ${this.name}`;
//     }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());


//------------

// class NewSyntax {
//     //setup key value pairs
//     name = 'Jen';
//     //getGreeting fn is always valid for the class instance
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}`;
//     }
// }
// const newSyntax =  new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());