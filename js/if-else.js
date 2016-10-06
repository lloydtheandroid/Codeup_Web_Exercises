/**
 * Created by lloyd on 10/6/16.
 */
"use strict"

var grade = (80 + 80 + 95)/3

if (grade > 80){
    console.log("You're awesome")
} else {
    console.log("you need to practice more!")
}

var Cameron = 180;
var Ryan = 250;
var George =  320;
var percent = (20/100);

if (Cameron > 200) {
    console.log("Great! With your discount, You pay " + (Cameron - (Cameron * percent)));
} else {
    console.log("You pay " + Cameron);
}
if (Ryan > 200) {
    console.log("Great! With your discount, You pay " + (Ryan - (Ryan * percent)));
} else {
    console.log("You pay " + Ryan);
}
if (George > 200) {
    console.log("Great! With your discount, You pay " + (George - (George * percent)));
} else {
    console.log("You pay " + George);
}

var flipAcoin = Math.floor(Math.random()* 2);

if (flipAcoin == 0){
    console.log("Buy a Car")
}else {
    console.log("Buy a House")
}

var flipAcoin = (0) ? "Buy a Car" : "Buy a House"