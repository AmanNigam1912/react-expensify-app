//express - tool to create web servers with node
//whatever is written in this file 
//it is not sth we run through webpack
//not sth that is going to run in browser 
//this we will run from command line using node terminal command

//require is the node way to import sth
const path = require('path');
const express = require('express');
const app = express(); //we have an express app
const publicPath = path.join(__dirname, '..', 'public'); //.. to go up a folder
const port = process.env.PORT || 3000;

//customize the app telling it where the files live and the port to listen on
//use this to register middleware
//middleware means sth that runs for each request
//if someone makes a request to the server, now want to run some code that log sth to the screen
//run code that serves up all assets from the public directory
app.use(express.static(publicPath)); 
//express.static() return value is passes here

//to match all unmatched routes use *, bcoz error occurs saying cannot  GET/create
//when we access the create expense page using the express server
//if it isn't a public folder, we serve the same page everytime
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

//port 3000 is available on every OS, for dev purposes, without any warning
app.listen(port, () => {
    console.log('Server is up!');
});