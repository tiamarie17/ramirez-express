//import express

const express = require('express');

const app= express();

//This function sets things up and takes a string that is the file path for the folder
//Makes the server public folder available to anyone who wants them
app.use(express.static('./server/public'));



//listen is a method that accepts two arguments: number and function
//this is similar to the onReady function in JQuery, it listens for requests for files

app.listen(3000, () => {
    console.log('We\'re live!');
});

console.log('in server.js');