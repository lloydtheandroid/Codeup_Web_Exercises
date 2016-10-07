/**
 * Created by lloyd on 10/7/16.
 */

var bottles = 99;
var takeOneDown = 1;

while (bottles != 0){
    if (bottles >= 2) {
        console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer! Take one down, pass it around ");
        bottles -= takeOneDown;
        console.log(bottles + " bottles of beer on the wall!")
    }else {
        console.log(bottles + " bottle of beer on the wall, " + bottles +" bottle of beer! Take one down, pass it around ");
        bottles -= takeOneDown;
        console.log(bottles + " bottles of beer on the wall!")
    }
}
console.log("No bottles of beer on the wall. Somebody should go to the store!")

var chosenOne;

var flipAcoin = Math.floor(Math.random()* 2);

if (flipAcoin == 1){
    chosenOne = "!!Brad";
    } else chosenOne = "Nick";
console.log("I nominate " + chosenOne);