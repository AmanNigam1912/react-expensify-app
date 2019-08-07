import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    //header tag is built in html, not a react component
    <header>
        <h1>Expensify</h1>
        {/* Another link tag is <NavLink> which will style the link if I am currently 
        on that page like making it appear Red.
        activeClassName will only be applied when we are on that page.
        is-active is available in _base.scss
        exact is true so styling wont apply for dashboard when it's been applied to other links*/} 
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>       
    </header>
);

export default Header;