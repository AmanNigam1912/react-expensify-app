import React from 'react';

//they are fast as they don't have to manage any lifecycle
//className="header" will use the styles in partial _header.scss
//make another div inside div as taht will affect the header
const Header = (props) => (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                {props.subtitle &&  <h2 className="header__subtitle">{props.subtitle}</h2>}
            </div>
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