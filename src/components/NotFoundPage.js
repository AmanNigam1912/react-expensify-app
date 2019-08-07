import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        {/*404! - <a href="/">Go Home</a> 
        by using anchor tag will cause full page refresh i.e. interaction
        with the server and we don't want that as we want to use client side routing only.
        Link tag is similar to href, here we provide to attribute
        So by using link we use client side routing as opposed to server side routing.
        Documentation for this can be found at https://reacttraining.com/react-router/web/api/ */}
        404! - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;