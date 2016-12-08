/**
 * Created by lloyd on 11/7/16.
 */
"use strict";
var array = ["e", "a", "g", "c", "i", "d", "f", "b", "h"];

function sortThis(element){
    var len = element.length;
    for (var i = len-1; i>=0; i--){
        for(var j = 1; j<=i; j++){
            if(element[j-1]>element[j]){
                var temp = element[j-1];
                element[j-1] = element[j];
                element[j] = temp;
                console.log(temp)
            }
        }
    }
    return element;
}