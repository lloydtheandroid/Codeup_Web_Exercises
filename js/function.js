/**
 * Created by lloyd on 10/10/16.
 */
"use strict";

var myNameIs = 'Lloyd'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

function sayHello(name) {
    return("hello " + name + "!");
}


// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
console.log(sayHello(myNameIs));


// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.
function isOdd(number) {
    if(number % 2 == 0) {
    return("Your number " + number + " is even");
    } else {
        return ("Your number " + number + " is odd");
    }
}
// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.
console.log(isOdd(random));


function add(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (typeof(a) != "number" || isNaN(a) == true) {
        return("Inputs must be numeric");
    }else if(typeof(b) != "number" || isNaN(b) == true) {
        return("Inputs must be numeric");
      }else {
        return(a + b);
    }
}


function substract(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (typeof(a) != "number" || isNaN(a) == true) {
        return("Inputs must be numeric");
    }else if(typeof(b) != "number" || isNaN(b) == true) {
        return("Inputs must be numeric");
    }else {
        return (a - b);
    }
}

function multiply(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (typeof(a) != "number" || isNaN(a) == true) {
        return("Inputs must be numeric");
    }else if(typeof(b) != "number" || isNaN(b) == true) {
        return("Inputs must be numeric");
    }else {
        return (a * b);
    }
}

function divide(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (typeof(a) != "number" || isNaN(a) == true) {
        return("Inputs must be numeric");
    }else if(typeof(b) != "number" || isNaN(b) == true) {
        return("Inputs must be numeric");
    }else {
        return (a / b);
    }
}

function square(number) {
    number = parseInt(number);
    if (typeof(a) != "number" || isNaN(a) == true) {
        return("Inputs must be numeric");
    }else if(typeof(b) != "number" || isNaN(b) == true) {
        return("Inputs must be numeric");
    }else {
        return(multiply(number, number));
    }
}



function sumOfSquares(a , b) {
    a = parseInt(a);
    b = parseInt(b);
    if (typeof(a) != "number" || isNaN(a) == true) {
        return("Inputs must be numeric");
    }else if(typeof(b) != "number" || isNaN(b) == true) {
        return("Inputs must be numeric");
    }else {
        return(square(a) + square(b));
    }
}

