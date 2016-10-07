/**
 * Created by lloyd on 10/6/16.
 */
"use strict"

var firstGrade = 70;
var secondGrade = 80;
var thridGrade = 95;

var message;

var average = (firstGrade + secondGrade + thridGrade)/3;

if (average > 80){
    message = "You're awesome"
} else {
    message = "you need to practice more!"
}

console.log(message);

var Cameron = 180;
var Ryan = 250;
var George =  320;
var percent = (20/100);
var discountAmount = 200
var message;

if (Cameron > discountAmount) {
    message = "Cameron - Great! With your discount, You pay " + (Cameron - (Cameron * percent));
} else {
    message = "Cameron - You pay " + Cameron;
}
console.log(message)

if (Ryan > discountAmount) {
    message = "Ryan - Great! With your discount, You pay " + (Ryan - (Ryan * percent));
} else {
    message = "Ryan - You pay " + Ryan;
}
console.log(message)

if (George > discountAmount) {
    message = "George - Great! With your discount, You pay " + (George - (George * percent));
} else {
    message = "George - You pay " + George;
}
console.log(message)

//Number 3

var flipAcoin = Math.floor(Math.random()* 2);

if (0 == flipAcoin){
    console.log("Buy a Car")
}else {
    console.log("Buy a House")
}

var totalInDollars = 100;
var currency = "EUR";
var total;



switch (currency) {
    case "MXN": // {
        total = totalInDollars * 19.26;
        break; //}
    case "CNY":
        total = totalInDollars * 1.5;
        break;
    case "EUR":
        total = totalInDollars * 1.11;
        break;
    default:
        total = totalInDollars;
        break;
}
console.log(total)