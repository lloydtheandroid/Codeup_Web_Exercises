/**
 * Created by lloyd on 10/6/16.
 */
var luckyNumber = Math.floor(Math.random()* 6)
var receipt = 60;
var total = "";


switch (luckyNumber) {
    case 0:
        total = receipt;
        break;
    case 1:
        total = receipt * .90;
        break;
    case 2:
        total = receipt * .75;
        break;
    case 4:
        total = receipt * .5;
        break;
    default:
        total = "free";
        break;
}
console.log("Your luck number is " + luckyNumber + " Your order is: " + total);


var number =  Math.floor(Math.random()* 12) + 1;
var month;
    switch (number){
        case 1:
           month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
           month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
           month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
           month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
           month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
           month = "November";
            break;
        case 12:
            month = "December";
            break;
    }
console.log("Your number is " + number + " your month is " +  month);

