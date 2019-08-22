import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    //header tag is built in html, not a react component
    <header className="header">
        <div className="content-container">
            <Link className="header__title" to="/">
                <h1>Expensify</h1>
            </Link>
            {/* Another link tag is <NavLink> which will style the link if I am currently 
            on that page like making it appear Red.
            activeClassName will only be applied when we are on that page.
            is-active is available in _base.scss
            exact is true so styling wont apply for dashboard when it's been applied to other links 
            <!--<NavLink className= "header__subtitle1" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink className= "header__subtitle3" to="/help" activeClassName="is-active">Help</NavLink>       */}
        </div>
    </header>
);

export default Header;