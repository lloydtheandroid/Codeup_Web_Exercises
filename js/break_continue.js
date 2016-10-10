/**
 * Created by lloyd on 10/10/16.
 */
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

