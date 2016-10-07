/**
 * Created by lloyd on 10/7/16.
 */
"use strict"

//while loop format
// while (condition) {
// perform action
// } //End of block


// Counter
// Accumulator

var i = 1; // counter

while (/* condition, return true */ i <= 21) {
    console.log(i);
    i += 1; //increment
} // end of a block

console.log("Your final number is " + i + " we are done!")


// Accumulator

var targetAmount = 100;
var amountSaved = 0; //accumulator
var j = 0;

while (amountSaved < targetAmount) {
    amountSaved += Math.floor(Math.random() * 10) + 1;
    j += 1;
}

console.log("You saved " + amountSaved + " dollars, there were " + j + " repetitions.");

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This is how you get a random number between 1 and 5
var cones;

while (allCones != 0) {
    cones = Math.floor(Math.random() * 5) + 1;
    if (allCones - cones >= 0) {
        allCones -= cones;
        console.log(cones + " cone(s) being sold " + allCones + " cone(s) left");
    } else if (allCones - cones < 0) {
        console.log("cannot sell you " + cones + " cones, I only have " + allCones + " cone(s) left");
    }
}
console.log("Yay, all cones sold! " + allCones);


// cones = Math.floor(Math.random() * 5) + 1;
// allCones -= cones;
// console.log(cones + "being sold" + allCones + "left");
// if {