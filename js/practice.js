// /**
//  * Created by lloyd on 10/11/16.
//  */
 "use strict"

// TODO 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223
console.log("Write a JavaScript function that reverse a number. Go to the editor");
//This is how i did it:
var x = "123456";

function reverse(j) {
    var output = "";
    var yourNumber = j.toString();
    for(var i = 0; i < yourNumber.length + 1; i++){
        output = output + yourNumber.charAt(yourNumber.length -i);
    }return output;

}
console.log("this is how i did it: " + reverse(x));


//This is how ***http://www.w3resource.com*** did it:
function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log("this is how w3resource.com did it: " + reverse_a_number(32243));

// TODO 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
//     Click me to see the solution
console.log(" Write a JavaScript function that checks whether a passed string is palindrome or not");
function isPalindrome(n) {
    n = n + "";
    var checkForPalindrome = (n.split("").reverse().join("") == n);
    return checkForPalindrome;
}

console.log("Is madam a palindrome? " + isPalindrome("madam"));
console.log("Is dog a palindrome? " + isPalindrome("dog"));


// TODO 3. Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
console.log("Write a JavaScript function that generates all combinations of a string.")
function comboNations(n) {

}


// TODO 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
console.log("Write a JavaScript function that returns a passed string with letters in alphabetical order.");
function sortString(n){
    var NewArray = n.split("").sort().join("");
    return NewArray;
}
console.log("Converting webmaster to: " + sortString("webmaster"));

// TODO 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter
// TODO  of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
console.log("Write a JavaScript function that accepts a string as a parameter and converts the first letter of " +
    "each word of the string in upper case. Go to the editor");
function upperFirst(n){
    var NewUpper = n.charAt(0).toUpperCase() + n.substring(1);
    return NewUpper;
}
console.log(upperFirst("hello"));

// TODO 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
console.log("Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.");
function longestWordInString(words) {
    var arrayOfWords = words.split(" ");
    console.log(arrayOfWords);
    arrayOfWords.forEach(function (element, index) {
        var longestWord = "";
        console.log(typeof element);
        if (element[index].length > longestWord.length) {
            longestWord = element[index];
        } return longestWord;
    })
}

console.log(longestWordInString("Web Development Tutorial"));

// TODO 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
//     Example string : 'The quick brown fox'
// Expected Output : 5

// function howManyVowels(string) {
//     string.forEach(function (element) {
//         var vowels = ["a", "e", "i", "o", "u"];
//         var numberOfVowels = 0;
//         if(element.charAt() = )
//     })return numberOfVowels;
//
// }
// console.log(howManyVowels("The quick brown fox"));

// How w3resource.com did it:
function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;
    for(var x = 0; x < str1.length ; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
            vcount += 1;
        }
    }
    return vcount;
}
console.log(vowel_count("The quick brown fox"));


// TODO 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.



function test_prime(n) {
    if (n==1) {
        return false;
    } else if(n == 2) {
        return true;
    }else {
        for(var x = 2; x < n; x++) {
            if(n % x == 0) {
                return false;
            }
        }
        return true;
    }
}

console.log("Is 37 a prime number? " + test_prime(37));

// TODO 9. Write a JavaScript function which accepts an argument and returns the type. Go to the editor
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.




// TODO 10. Write a JavaScript function which returns the n rows by n columns identity matrix. Go to the editor



// TODO 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
console.log( "11. Write a JavaScript function which will take an array of numbers stored " +
    "and find the second lowest and second greatest numbers, respectively.");

// var arrayOfNumbers = [1,2,3,4,5,6,7,8,9];
// function secondLowSecondHigh(number){
//     number.sort();
//     number.forEach(function (element, index) {
//         var secLowSecondHigh = [];
//         secLowSecondHigh.push(element).splice(1, 1);
//         secLowSecondHigh.push(element).splice((number.length()) -1, 1);
//
//         //colors.splice(colors.indexOf('green'), 1)
//     });
//     return secLowSecondHigh;
// }
// arrayOfNumbers.splice(1, 1);
// console.log(secondLowSecondHigh(arrayOfNumbers));

//How w3resource did it /answer :
/**
 * @return {string}
 */
function Second_Greatest_Lowest(arr_num)
{
    arr_num.sort(function(x,y)
    {
        return x-y; // <-- sorts arr_num lowest to highest, y-x would reverse it.
    });
    var uniqa = [arr_num[0]];
    var result = [];
    for(var j=1; j < arr_num.length; j++) {
        if(arr_num[j-1] !== arr_num[j]) {
            uniqa.push(arr_num[j]);}
    }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
    return result.join(',');
}

console.log(Second_Greatest_Lowest([1,2,3,4,5]));

//
// TODO 12. Write a JavaScript function which says whether a number is perfect. Go to the editor
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.



// TODO 13. Write a JavaScript function to compute the factors of a positive integer. Go to the editor



// TODO 14. Write a JavaScript function to convert an amount to coins. Go to the editor
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//     Output : 25, 10, 10, 1



// TODO 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. Go to the editor



// TODO 16. Write a JavaScript function to extract unique characters from a string. Go to the editor
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"



// TODO 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. Go to the editor



// TODO 18. Write a function for searching JavaScript arrays with a binary search. Go to the editor
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.



// TODO 19. Write a JavaScript function that returns array elements larger than a number. Go to the editor



// TODO 20. Write a JavaScript function that generates a string id (specified length) of random characters. Go to the editor
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"



// TODO 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. Go to the editor
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]



// TODO 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Go to the editor
// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2



// TODO 23. Write a JavaScript function to find the first not repeated character. Go to the editor
// Sample arguments : 'abacddbec'
// Expected output : 'e'



// TODO 24. Write a JavaScript function to apply Bubble Sort algorithm. Go to the editor
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
//     Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]



// TODO 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"



// TODO 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. Go to the editor
//



// TODO 27. Write a JavaScript function that returns the longest palindrome in a given string. Go to the editor
//
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
//



// TODO 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. Go to the editor
//



// TODO 29. Write a JavaScript function to get the function name. Go to the editor
//

