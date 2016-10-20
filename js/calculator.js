/**
 * Created by lloyd on 10/17/16.
 */
"use strict";


var lefty = document.getElementById("displayLeft");
var middle = document.getElementById("displayMiddle");
var righty = document.getElementById("displayRight");
var operator = ["+", "-", "*", "/"];
var numberPad = document.getElementsByClassName("numPad");

var clear = document.getElementById('clears')
.addEventListener('click', function () {
    lefty.value = ("");
    middle.value = ("");
    righty.value = ("");
});



document.getElementById('one')
    .addEventListener('click', function() {
        if (middle.value == "") {
            lefty.value = (lefty.value + this.innerHTML)
        } else if(middle.value == "="){
            lefty.value = ("");
            middle.value = ("");
            righty.value = ("");
            lefty.value = (lefty.value + this.innerHTML)
        }else {
            righty.value = (righty.value + this.innerHTML)
        }
    });

// document.getElementById('two')
//     .addEventListener('click', function() {
//         if (middle.value == "") {
//             lefty.value = (lefty.value + this.innerHTML)
//         } else if(middle.value == "="){
//             lefty.value = ("");
//             middle.value = ("");
//             righty.value = ("");
//             lefty.value = (lefty.value + this.innerHTML)
//         }else {
//             righty.value = (righty.value + this.innerHTML)
//         }
//     });
//
// document.getElementById('three')
//     .addEventListener('click', function() {
//         if (middle.value == "") {
//             lefty.value = (lefty.value + this.innerHTML)
//         } else if(middle.value == "="){
//             lefty.value = ("");
//             middle.value = ("");
//             righty.value = ("");
//             lefty.value = (lefty.value + this.innerHTML)
//         }else {
//             righty.value = (righty.value + this.innerHTML)
//         }
//     });
//
// document.getElementById('four')
//     .addEventListener('click', function() {
//         if (middle.value == "") {
//             lefty.value = (lefty.value + this.innerHTML)
//         } else if(middle.value == "="){
//             lefty.value = ("");
//             middle.value = ("");
//             righty.value = ("");
//             lefty.value = (lefty.value + this.innerHTML)
//         }else {
//             righty.value = (righty.value + this.innerHTML)
//         }
//     });
//
// document.getElementById('five')
//     .addEventListener('click', function() {
//         if (middle.value == "") {
//             lefty.value = (lefty.value + this.innerHTML)
//         } else if(middle.value == "="){
//             lefty.value = ("");
//             middle.value = ("");
//             righty.value = ("");
//             lefty.value = (lefty.value + this.innerHTML)
//         }else {
//             righty.value = (righty.value + this.innerHTML)
//         }
//     });
// document.getElementById('six')
//     .addEventListener('click', function() {
//         if (middle.value == "") {
//             lefty.value = (lefty.value + this.innerHTML)
//         } else if(middle.value == "="){
//             lefty.value = ("");
//             middle.value = ("");
//             righty.value = ("");
//             lefty.value = (lefty.value + this.innerHTML)
//         }else {
//             righty.value = (righty.value + this.innerHTML)
//         }
//     });
//
// document.getElementById('seven')
//     .addEventListener('click', function() {
//         if (middle.value == "") {
//             lefty.value = (lefty.value + this.innerHTML)
//         } else if(middle.value == "="){
//             lefty.value = ("");
//             middle.value = ("");
//             righty.value = ("");
//             lefty.value = (lefty.value + this.innerHTML)
//         }else {
//             righty.value = (righty.value + this.innerHTML)
//         }
//     });
//
// document.getElementById('eight')
//     .addEventListener('click', function() {
//         if (middle.value == "") {
//             lefty.value = (lefty.value + this.innerHTML)
//         } else if(middle.value == "="){
//             lefty.value = ("");
//             middle.value = ("");
//             righty.value = ("");
//             lefty.value = (lefty.value + this.innerHTML)
//         }else {
//             righty.value = (righty.value + this.innerHTML)
//         }
//     });
//
// document.getElementById('nine')
//     .addEventListener('click', function() {
//         if (middle.value == "") {
//             lefty.value = (lefty.value + this.innerHTML)
//         } else if(middle.value == "="){
//             lefty.value = ("");
//             middle.value = ("");
//             righty.value = ("");
//             lefty.value = (lefty.value + this.innerHTML)
//         }else {
//             righty.value = (righty.value + this.innerHTML)
//         }
//     });

document.getElementById('zero')
    .addEventListener('click', function() {
        if (middle.value == "") {
            if(lefty.value.charAt(0) != "0") {
                lefty.value = (lefty.value + this.innerHTML)
            }else if (lefty.value.charAt(0) == "0" && lefty.value.charAt(1) > "0") {
                lefty.value = (lefty.value + this.innerHTML)
            }
        } else if(middle.value == "="){
            lefty.value = ("");
            middle.value = ("");
            righty.value = ("");
            lefty.value = (lefty.value + this.innerHTML)
        }else {
            if(righty.value.charAt(0) != "0") {
                righty.value = (righty.value + this.innerHTML)
            }else if (righty.value.charAt(0) == "0" && righty.value.charAt(1) > "0") {
                righty.value = (righty.value + this.innerHTML)
            }
        }
    });

document.getElementById('decimal')
    .addEventListener('click', function() {
        if (middle.value == "") {
            if(lefty.value % 1 == 0) {
                lefty.value = (lefty.value + this.innerHTML);
            }
        } else {
            if(righty.value % 1 == 0) {
                righty.value = (righty.value + this.innerHTML);
            }
        }
    });

var adds = document.getElementById("addition")
    .addEventListener('click', function () {
        var RV = parseFloat(righty.value);
        var LV = parseFloat(lefty.value);
        middle.value = this.innerHTML;
        if(lefty.value != "" && righty.value != "" && middle.value != "") {
            lefty.value = RV + LV;
            righty.value = "";
        }
    });

var minus = document.getElementById("subtraction")
    .addEventListener('click', function () {
        var RV = parseFloat(righty.value);
        var LV = parseFloat(lefty.value);
        middle.value = this.innerHTML;
        if(lefty.value != "" && righty.value != "" && middle.value != "") {
            lefty.value = LV - RV;
            righty.value = "";
        }
    });

var multiply = document.getElementById("multiplication")
    .addEventListener('click', function () {
        var RV = parseFloat(righty.value);
        var LV = parseFloat(lefty.value);
        middle.value = this.innerHTML;
        if(lefty.value != "" && righty.value != "" && middle.value != "") {
            lefty.value = RV * LV;
            righty.value = "";
        }
    });

var divide = document.getElementById("division")
    .addEventListener('click', function () {
        var RV = parseFloat(righty.value);
        var LV = parseFloat(lefty.value);
        middle.value = this.innerHTML;
        if(lefty.value != "" && righty.value != "" && middle.value != "") {
            lefty.value = RV / LV;
            righty.value = "";
        }
    });
var posOrNeg = document.getElementById("posNeg")
    .addEventListener('click', function () {
        if (middle.value == "") {
            if(Math.abs(lefty.value) == lefty.value){
                lefty.value = -Math.abs(lefty.value)
            }else {
                lefty.value = Math.abs(lefty.value)
            }
        }else {
            if (Math.abs(righty.value) == righty.value) {
                righty.value = -Math.abs(righty.value)
            } else {
                righty.value = Math.abs(righty.value)
            }
        }
    });

var equation = document.getElementById("evaluate")
    .addEventListener('click', function () {
        var RV = parseFloat(righty.value);
        var LV = parseFloat(lefty.value);
        if(middle.value == "+") {
            lefty.value = (RV + LV);
            righty.value = "";
            middle.value = "=";
        }else if (middle.value == "-"){
            lefty.value = (LV - RV);
            righty.value = "";
            middle.value = "=";
        }else if (middle.value == "x"){
            lefty.value = (LV * RV);
            righty.value = "";
            middle.value = "=";
        }else if (middle.value == "÷"){
            lefty.value = (LV / RV);
            righty.value = "";
            middle.value = "=";
        }
    });
