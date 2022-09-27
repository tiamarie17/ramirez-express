//common function syntax
function add(n1, n2){
    return n1+n2;
}

//Assigning functions to variables
const add = function (n1, n2){
    return n1+n2;
}

//Arrow functions are commonly used in server
const add = (n1, n2) => {
    return n1+n2;
}

// Condensed arrow function
const add = (n1, n2) => n1 + n2;

const sayHi = () => console.log('Hello');

sayHi(); 

//Passing functions as arguments

$('button').on('click', () => {
    people.push('Edan');
}

