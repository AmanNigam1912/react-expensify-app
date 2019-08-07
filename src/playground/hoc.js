//higher order component
//installing react-redux libraray. Allows to connect redux stores to react component's
//and make heavy use of pattern known as higher order component

//HOC: A component (HOC) that renders another component* (regular)
//these regular component would be 5-6 components that rendered by same HOC
//Goal of HOC is to reuse code
//Perform: Render hijacking
//perform: Prop manipulation
//perform: Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

//this component is *
const Info = (props) => (
    <div> 
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

//For HOC
//create a regular function not a react component
//argument name is WrappedComponent which is a common pattern
//this code will be reused
const withAdminWarning = (WrappedComponent) => {
    //the component created inside return is the HOC
    //here we are using a stateless functional component
    //Info from withAdminWarning(Info) is accessible here in props
    return (props) => (
        <div>
            {/* The message here would be displayed above the wrapped component */}   
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            {/* Info carrying the info object from .render is used as a spread operator */}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
             ) : (
                 <p>Please login to continue!</p>
             )}
        </div>
    );   
};

//what we get back from withAdminWarning is an alternative version of info component or a HOC
//AdminInfo is the component defined inside return of withAdminWarning
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="You are logged in!!" />, document.getElementById('app'));