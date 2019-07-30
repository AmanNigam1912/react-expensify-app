import React from 'react';

//they are fast as they don't have to manage any lifecycle
const Header = (props) => (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle &&  <h2>{props.subtitle}</h2>}
        </div>
    );        

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;

// class Header extends React.Component {
//     //necessary to use this method(must)
//     render() {
//         //this is the reference to the current instance of this component
//         //takes the HTML attribute like <Header title="Test value"/> and converts it into object key value pairs
//         //console.log(this.props);
//         //return jsx
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }     
// }