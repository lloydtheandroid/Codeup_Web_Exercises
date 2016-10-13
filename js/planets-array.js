/**
 * Created by lloyd on 10/13/16.
 */
"use strict";

(function(){
    "use strict";

    //.push - adds to end of array
    //.unshift - adds to beginning of array
    //.pop - removes from end of array
    //.shift - removes from beginning of array
    //.indexOf
    //.splice to add, remove or replace elements of an array
    //.reverse
    //.sort

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.unshift("Sun");
    logPlanets();

    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.push("Pluto");
    logPlanets();

    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.shift();
    logPlanets();

    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.pop();
    logPlanets();

    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log(planets.indexOf("Earth"));

    console.log('Using splice to remove the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var removed = planets.splice(planets.indexOf("Earth") + 1, 1);
    console.log("I removed planet " + removed);
    logPlanets();

    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.splice(planets.indexOf("Earth") + 1, 0, removed[0]);
    logPlanets();

    console.log("Reversing the order of the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.reverse()
    logPlanets();

    console.log("Sorting the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.sort
    logPlanets();
})();
