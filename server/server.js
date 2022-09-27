//import express

const express = require('express');

const app= express();

//listen is a method that accepts two arguments: number and function
//this is similar to the onReady function in JQuery, it listens for requests for files
app.listen(3000, function () {
    console.log('We\'re live!');
});

console.log('in server.js');