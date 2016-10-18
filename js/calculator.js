/**
 * Created by lloyd on 10/17/16.
 */
"use strict";


//  Write down all the things a calculator does, all the features
//  What can you see and do with a calculator
//     --
//  # group activity - list out features a calculator.
//      - take in input
//      - add event listers to each button
//      - determine what we want that function or functions to do
//     Options:
//          1. add a new function for each button
//          ex. add function, five function, etc..
//          2. add the same function on each button's click event
//          ex. function handleButton () {
//                  console.log(this);
//                  var objectJustClicked = this;
//                  if (objectJustClicked.getAttribute('class') == "number") {
//                      handleNumber(objectJustClicked);
//                  } else if(objectJustClicked.getAttribute('class') == "operator") {
//                      handleOperator(objectJustClicked);
//                  } ....
//              }
//          3. add an event lister to buttons that are numbers that calls the handleNumber() function/.
//          then add event lister to buttons that are operators that calls handleOperator()
//                 - determining if the button is a number or an operator
//                 - if the button is a number, keep appending the numbers
//                 - if the button clicked is an operator - get ready to accept the next numeric input
//                 - if the operator display has something in it, then put new numeric inputs to the 2nd number display
//                 - how to handle a clear button - reset variables
//                 - since it's JS, don't forget that "1" + 1 = "11", parseInt("1") + parseInt(1) = 2
// If your displays are HTML inputs- then you'll use the .value attribute to paint the screen
// If your displays are other HTML elements - use .innerHTML or .innerText
// ## Yes, the process can be oversimplified to input->process->output, but what's really going on step by tiny step
// ### List out the specific steps that need to happen in order to add 1 plus 1 and get the result

        // <button id="one">1</button>
        //     document.getElementById('one')
        //         .addEventListener('click', function() {
        //             // if there's no operator selected yet, paint the number one to the left input
        //             // if there is an operator selected, paint the number one to the right ouput
        //         });

// document.getElementById('multiply')
//     .addEventListener('click', function() {
//         var leftInput = document.getElementById('leftInput').value;
//         var rightInput = document.getElementById('rightInput').value;
//         var result = leftInput * rightInput;
//         // clear out all the inputs
//         // set the .value or .innerHTML of the input to hold the new result
//     });

// <script type="text/javascript">
//     document.getElementById("button").addEventListener('click', function () {
//         var text = document.getElementById('text');
//         text.text = (text.text + ' after clicking');
//     });
// </script>


    var lefty = document.getElementById("displayLeft");
    var middle = document.getElementById("displayMiddle");
    var righty = document.getElementById("displayRight");

    document.getElementById('one')
        .addEventListener('click', function() {
            lefty.value = (lefty.value + this.innerHTML)
        });
    document.getElementById('two')
        .addEventListener('click', function() {
            lefty.value = (lefty.value + this.innerHTML)
        });
    document.getElementById('three')
        .addEventListener('click', function() {
            lefty.value = (lefty.value + this.innerHTML)
        });
    document.getElementById('four')
        .addEventListener('click', function() {
            lefty.value = (lefty.value + this.innerHTML)
        });
    document.getElementById('five')
        .addEventListener('click', function() {
            lefty.value = (lefty.value + this.innerHTML)
        });
    document.getElementById('six')
        .addEventListener('click', function() {
            lefty.value = (lefty.value + this.innerHTML)
        });
    document.getElementById('seven')
        .addEventListener('click', function() {
            lefty.value = (lefty.value + this.innerHTML)
        });
    document.getElementById('eight')
        .addEventListener('click', function() {
            lefty.value = (lefty.value + this.innerHTML)
        });
    document.getElementById('nine')
        .addEventListener('click', function() {
            lefty.value = (lefty.value + this.innerHTML)
        });
    document.getElementById('zero')
        .addEventListener('click', function() {
            lefty.value = (lefty.value + this.innerHTML)
        });

    var Clear = document.getElementById('C')
        .addEventListener('click', function () {
            lefty.value = ("");
            middle.value = ("");
            righty.value = ("");
        });

    var adds = document.getElementById("addition")
        .addEventListener('click', function () {
            var current = parseFloat(lefty.value);
            lefty.value  = ("");
            console.log(current);
            return current;
        });

    var equation = document.getElementById("evaluate")
        .addEventListener('click', function () {
            var secondValue = parseFloat(lefty.value);
            righty.value = (righty.value + (secondValue + adds));
            console.log(secondValue + adds)
        });
