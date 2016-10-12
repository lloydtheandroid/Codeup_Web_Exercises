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
    average(grades)
})();
