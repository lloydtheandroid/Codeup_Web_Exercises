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


// How Luis did it:
var i, statesWithALetterTAtTheBeginning = [];
for(i = 0; i < states.length; i++) {
    if (states[i][0] == "T"){
        statesWithALetterTAtTheBeginning.push(states[i]);
    }
}

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

var wordWithS;
var keyWord = ["fass", "pass", "tomato", "yarn"];
for(var i = 0; i < keyWord.length; i++) {
    if (keyWord[i] == "s") {
        console.log(keyWord);
        wordWithS = keyWord[i];
        if(wordWithS[i]){

        }
    }
}

// How Luis did it
var i, statesWithMoreThan2LetterS = [];
for(i = 0; i < states.length; i++) {
    if (states[i].indexOf("s") < states[i].lastIndexOf("s")) {
        statesWithMoreThan2LetterS.push(states[i]);
    }
}

//Make a function that squares each number on an array
//take an array of numbers and make a forEach that multiplies each number by itself
//function should return the arrayOfSquares

// How Lu
var numbersInArray = [1, 2, 3, 4, 6, 7];

function squares(numbers) {
    var squared = [];
    numbers.forEach(function (number) {
        squared.push(number * number)
    });
    return squared;
}

console.log(squares(numbersInArray))

//write a function that takes an array of lowercase names
//Uppercase the first letter of each name
//and returns only the names that start with "Y"

var ListOfNames = ["joy" , "john", "yoko", "ringo", "paul", "george"];

function lowercaseNamesWithY(names) {
    var namesWithY = [];
    names.forEach(function (name, index) {
        if(name[0].toUpperCase() == "Y"){
            namesWithY.push(name.substring(0, 1).toUpperCase() + name.substring(1));
        }
    });
    return namesWithY;
}

console.log(lowercaseNamesWithY(ListOfNames));

//Write a function that takes an array of numbers 1-10
//returns the sum of only the numbers divisible by 3

var arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];

function onlyDivisibleByThree(numbers) {
    var sum = 0;
    numbers.forEach(function (number) {
        if(number % 3 == 0) {
            sum += number;
        }
    });
    return sum;
}

console.log(onlyDivisibleByThree(arrayOfNumbers));