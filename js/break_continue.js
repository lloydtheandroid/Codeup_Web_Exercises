/**
 * Created by lloyd on 10/10/16.
 */
"use strict"
var num = 1;

while (true) {
    var i = Math.floor((Math.random() * 50) +1);
    if (i % 2 != 0) {
        break;
    }
}
console.log("Random odd number to skip is: " + i);

for (num = 1; num <= 50; num += 2) {
    if (num == i) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + num);
    }
}


do {
    var rand = Math.floor(Math.random() * 50) + 1;
} while (rand % 2 == 0);

console.log("Random odd number to skip is: " + rand + " !!!!");
for (var j = 1; j <= 50; i++) if (j == rand) {
    console.log("Yike! Skipping number: " + rand);
    continue;
} else if (j % 2 != 0) {
    console.log("Here is an odd number: " + rand);
} else if (j >= 50) {
    break;
}
