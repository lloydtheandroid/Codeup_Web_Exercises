(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ["Ray","John","Adam", "Jenna"];


    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    for(var i = 0; i < names.length; i++){
        console.log(names[i]);
    }

    var grades = [100, 80, 90, 8 , 50];
    function average(gradesToAverage) {
        var total = 0;
        for(i = 0; i < grades.length; i++){
            total = total + gradesToAverage[i];
            console.log("iteration " + i);
            console.log(total);
        }console.log(total/grades.length);
    }
    average(grades);


    var shapes, names, i, htmlTable;
    shapes = ["square", "rectangle", "circle", "triangle"];
    names = ["Barry", "Jessica", "Clark"];

    function createHtmlTable(items) {
        var htmlTable = '<table>';
        for (i = 0; i < items.length; i++) {
            htmlTable += '<tr><td>' + (i + 1) + '</td><td>' + items[i] + '</td></tr>';
        }
        htmlTable += "</table>";
        return htmlTable
    }
    htmlTable = createHtmlTable(shapes);
    console.log(htmlTable);

    htmlTable = createHtmlTable(names);
    console.log(htmlTable);



})();

//Iterating over arrays
console.log("Iterating over arrays using for statement");
var arrayOfNumbers = [1, 2, 3, 4, 5];
for(var i = 0; i < arrayOfNumbers.length; i++) {
    console.log("The element at index " + i + " is " + arrayOfNumbers[i]);
}

console.log("Iterating over arrays using function");
arrayOfNumbers.forEach(function (element, index, array) {
    console.log("The element at index " + index + " is " + element);
});

//Mapping
console.log("Mapping an array and pushing to a new array");
var newArray = [];
[1,2,3,4,5].forEach(function (element, index, array) {
    newArray.push(element + 1);
});

function isEven(num) {
    return num % 2 == 0;
}

//Filtering
console.log("Filtering an array to a new array");
var arrayOfEvens = [];
[1,2,3,4,5].forEach(function (element, index, array) {
    if(isEven(element)) {
        arrayOfEvens.push(element);
    }
});

//Accumulate
console.log("Accumulate ");
var sum = 0;
[1,2,3,4,5].forEach(function (element, array) {
    sum += element;


//TODO Exercise 1
var names = ["john", "paul", "ringo", "george", "yoko"], upperNames = [], upperFirst;
names.forEach(function (element) {
    upperFirst = element.charAt(0).toUpperCase();
    element = upperFirst + element.substring(1, element.length);
    upperNames.push(element);
});
console.log(names);
console.log(upperNames);


//TODO Exercise 2s
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function multiplyAllNumbers(array) {
    var product = 1;
    array.forEach(function(element) {
        product *= element;
        return product;
    });
    console.log(product);
}
multiplyAllNumbers(numbers);


//TODO Exercise 3
var htmlTable = "<table>";
names.forEach(function (element, index, array) {
    htmlTable += "<tr><td>" + (index + 1) + "</td><td>" + element + "</td></tr>";
    return htmlTable += "</html>";
});

console.log(htmlTable);


});