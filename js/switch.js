/**
 * Created by lloyd on 10/6/16.
 */
var luckyNumber = Math.floor(Math.random()* 6)
var discount = luckyNumber;
var receipt = 60;
var total = "";


switch (discount) {
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
console.log("Your order is: " + total);


var month = "";
var number = 1;
    switch (number){
        case 1:
           month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
           month = "January";
            break;
        case 4:
            month = "February";
            break;
        case 5:
           month = "January";
            break;
        case 6:
            month = "February";
            break;
        case 7:
           month = "January";
            break;
        case 8:
            month = "February";
            break;
        case 9:
           month = "January";
            break;
        case 10:
            month = "February";
            break;
        case 11:
           month = "January";
            break;
        case 12:
            month = "February";
            break;
    }
console.log(month);