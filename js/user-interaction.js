"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var yourName;
while (yourName == null || yourName.trim() == "" ) { //Check for null first, then check for empty string (or spaces).
    yourName = prompt("What is your name?");
}

// TODO: Show an alert message that welcomes the user based on their input.
alert("Hi " + yourName + ", welcome to Codeup!");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var pizza = confirm(yourName + ", do you like pizza?");

if (pizza) {
    alert("That is great, I like pizza too!");
} else {
    alert("Really, I thought everyone liked pizza");
}