/**
 * Created by lloyd on 10/12/16.
 */
"use strict";

//TODO Problem 1
//Make an array of strings containing all the states
//return only states that start with the letter T

var states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado',
    'Connecticut','Delaware','District of Columbia','Federated States of Micronesia',
    'Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas',
    'Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts',
    'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
    'New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota',
    'Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania',
    'Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas',
    'Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
var statesBeginWithT = [];
states.forEach(function (state, index) {
    if(state.charAt(0) == "T") {
        statesBeginWithT.push(state)
    }
});
console.log(statesBeginWithT);

//TODO Problem 2
//Make another function that returns a new array of all the states >= two "s" characters.
// var stateWithTwoS = [];
// var lowerCaseStates = [];
// var stateWithOneS = []
// states.forEach(function (state, index) {
//     lowerCaseStates.push(state);
//     if(lowerCaseStates.charAt(index) == "s"){
//         stateWithOneS.push(state);
//         if(stateWithOneS)
//     }
// })

// var wordWithS;
// var keyWord = ["fass", pass, tomato, yarn];
// for(var i = 0; i < keyWord.length; i++) {
//     if (keyWord[i] == "s") {
//         console.log(keyWord);
//         wordWithS = keyWord[i];
//         if(wordWithS[i])
//     }
// }

//Make a function that squares each number on an array
//take an array of numbers and make a forEach that multiplies each number by itself
//function should return the arrayOfSquares

var numbersInArray;
var squareOfNumbers;

//write a function that takes an array of lowercase names
//Uppercase the first letter of each name
//and returns only the names that start with "Y"

//Write a function that takes an array of numbers 1-10
//returns the sum of only the numbers divisible by 3