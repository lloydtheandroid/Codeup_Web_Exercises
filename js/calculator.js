/**
 * Created by lloyd on 10/17/16.
 */
"use strict";


    var lefty = document.getElementById("displayLeft");
    var middle = document.getElementById("displayMiddle");
    var righty = document.getElementById("displayRight");
    var operator = ["+", "-", "*", "/"];

    document.getElementById('one')
        .addEventListener('click', function() {
            if (middle.value == "") {
                lefty.value = (lefty.value + this.innerHTML)
            } else if(middle.value == "="){
                Clear;
                lefty.value = (lefty.value + this.innerHTML)
            }else {
                righty.value = (righty.value + this.innerHTML)
            }
        });

    document.getElementById('two')
        .addEventListener('click', function() {
            if (middle.value == "") {
                lefty.value = (lefty.value + this.innerHTML)
            } else if(middle.value == "="){
                Clear;
                lefty.value = (lefty.value + this.innerHTML)
            }else {
                righty.value = (righty.value + this.innerHTML)
            }
        });

    document.getElementById('three')
        .addEventListener('click', function() {
            if (middle.value == "") {
                lefty.value = (lefty.value + this.innerHTML)
            } else if(middle.value == "="){
                Clear;
                lefty.value = (lefty.value + this.innerHTML)
            }else {
                righty.value = (righty.value + this.innerHTML)
            }
        });

    document.getElementById('four')
        .addEventListener('click', function() {
            if (middle.value == "") {
                lefty.value = (lefty.value + this.innerHTML)
            } else if(middle.value == "="){
                Clear;
                lefty.value = (lefty.value + this.innerHTML)
            }else {
                righty.value = (righty.value + this.innerHTML)
            }
        });

    document.getElementById('five')
        .addEventListener('click', function() {
            if (middle.value == "") {
                lefty.value = (lefty.value + this.innerHTML)
            } else if(middle.value == "="){
                Clear;
                lefty.value = (lefty.value + this.innerHTML)
            }else {
                righty.value = (righty.value + this.innerHTML)
            }
        });
    document.getElementById('six')
        .addEventListener('click', function() {
            if (middle.value == "") {
                lefty.value = (lefty.value + this.innerHTML)
            } else if(middle.value == "="){
                Clear;
                lefty.value = (lefty.value + this.innerHTML)
            }else {
                righty.value = (righty.value + this.innerHTML)
            }
        });

    document.getElementById('seven')
        .addEventListener('click', function() {
            if (middle.value == "") {
                lefty.value = (lefty.value + this.innerHTML)
            } else if(middle.value == "="){
                Clear;
                lefty.value = (lefty.value + this.innerHTML)
            }else {
                righty.value = (righty.value + this.innerHTML)
            }
        });

    document.getElementById('eight')
        .addEventListener('click', function() {
            if (middle.value == "") {
                lefty.value = (lefty.value + this.innerHTML)
            } else if(middle.value == "="){
                Clear;
                lefty.value = (lefty.value + this.innerHTML)
            }else {
                righty.value = (righty.value + this.innerHTML)
            }
        });

    document.getElementById('nine')
        .addEventListener('click', function() {
            if (middle.value == "") {
                lefty.value = (lefty.value + this.innerHTML)
            } else if(middle.value == "="){
                Clear;
                lefty.value = (lefty.value + this.innerHTML)
            }else {
                righty.value = (righty.value + this.innerHTML)
            }
        });

    document.getElementById('zero')
        .addEventListener('click', function() {
            if (middle.value == "") {
                lefty.value = (lefty.value + this.innerHTML)
            } else if(middle.value == "="){
                Clear;
                lefty.value = (lefty.value + this.innerHTML)
            }else {
                righty.value = (righty.value + this.innerHTML)
            }
        });

    document.getElementById('decimal')
        .addEventListener('click', function() {
                if (middle.value == "" && lefty.value) {
                    lefty.value = (lefty.value + this.innerHTML)
                } else {
                    righty.value = (righty.value + this.innerHTML)
                }
            });

    var clear = document.getElementById('clears')
        .addEventListener('click', function () {
            lefty.value = ("");
            middle.value = ("");
            righty.value = ("");
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
