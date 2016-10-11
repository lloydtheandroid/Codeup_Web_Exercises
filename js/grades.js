/**
 * Created by lloyd on 10/11/16.
 */
"use strict"
function getNumericGrade() {
    var grade = parseInt(prompt("Please input your grade."));

    while(isNaN(grade) || (grade < 0 || grade > 100)) {
        grade = parseFloat(prompt("Please enter a valid number"));
            console.log("This is get numeric grade" + grade);
            console.log("This is get numeric grade" + typeof(grade));
        }
        return grade;
}

function average3Grades() {
    var total = 0;
    for (var n = 0; n < 3; n++) {
        total = total + getNumericGrade();
        console.log(n);
        console.log("Total is average3Grads" + total);
    }
    return total/3;
}

console.log(average3Grades())

// if(average3Grades() >= 80) {
//     console.log("You're awesome! Grade: " + average3Grades());
// } else {
//     console.log("Your grade (" + average3Grades() + ") needs work");
// }
//
// function genericAverage() {
//     var total = 0;
//     var counter = 0;
//     var addAnotherGrade;
//     var average;
//
//     do {
//         total += getNumericGrade();
//         addAnotherGrade = confirm("Do you want to add another grade?");
//         counter++;
//     } while (addAnotherGrade);
//
//     average = total / counter;
//     return average
// }
//
// var finalGrade = genericAverage();
// if finalGrade >= 80 {
//     alert("You're awesome!");
// }else {
//     alert("You need some more practice");
// }

