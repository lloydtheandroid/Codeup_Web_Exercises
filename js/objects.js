(function(){
    "use strict";

    // TODO: Create person object
    // var person = todo;

    var person = {};
    person.firstName = "Lloyd";
    person.lastName = "Garrison";
    person.sayHello = function () {
        console.log("Hello " + person.firstName + " " + person.lastName);
    };


    // TODO: Create firstName and lastName properties in your person object; assign your name to them

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties

    // Say hello from the person object.
    person.sayHello();
})();
