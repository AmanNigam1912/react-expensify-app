import React from 'react';
//BrowserRouter used once to create the router
//Route for every single page like one for home, one for about, one for help
//Provide path we want to match for and what to do when user visits that path
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
//../ go up a folder from the current directory
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

//A React component, a stateless function component
const AppRouter = () => (
    // only one instance created and children will be added inside 
    <BrowserRouter>
        <div>
            {/* will header on every page */}
            <Header />
            <Switch>
            {/* Switch will check though each route and stop when it finds a match
            but when no match is found it will run the last route <Route component={NotFoundPage}/>
            <div>
                will have it's own components 
                route will have some props , so no opening and closing of tags required   
                tells react router whenever matched the '/' path render ExpenseDashboardPage component
                if we have more than one route we break them, so we always keep rout in one div tag.
                exact value is false by  default, setting it to true will allow the ExpenseDashboardPage
                component to be shown only when path is "/" not "/create" or any other path starting with "/"*/}
                <Route path="/" component={ ExpenseDashboardPage } exact={ true }/>
                {/* to allow client side JS to take care of all other url other than the
                first we make a small change in webpack.config.js 
                so if any 404 error occurs due to url not found as with /create below we will use index.html
                for that. As we use server just once to get 1st page after that client side js takes care of other
                url being visited after that */}
                <Route path="/create" component={ AddExpensePage }/>
                {/* /:id will dynamically match anything that comes after / could be 44, 107, testing, etc.
                in dev tools the :id value given in url say 99 is present in match->params->id:"99" */}
                <Route path="/edit/:id" component={ EditExpensePage }/>
                <Route path="/help" component={ HelpPage }/>
                {/* path prop is optional*/}
                <Route component={NotFoundPage}/>
            {/*</div> */}
            </Switch>
        </div>        
    </BrowserRouter>
);

export default AppRouter;