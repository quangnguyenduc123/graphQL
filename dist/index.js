"use strict";
// Boolean
var b = true;
//Number
var num = 1 + 1 + 1 + 0x1;
//String
var hello = 'Hello';
// Null and Undefined
var n = null;
var u = undefined;
function uppercaseFirstLetter(str) {
    // coz str maybe null => have to check, coz we set Strict in ts.config: true => error when writting
    if (str)
        return str[0].toUpperCase() + str.substr(1);
}
uppercaseFirstLetter(null);
// Void
function log(message) {
    console.log(message);
    //return message => can't return in void function
}
// Array 
var arr1 = ['a', 'b'];
var arr2 = ['a', 'b'];
//Tuple  arr with fixed length. variety of types
var tuple = ['a', 1];
tuple.push('abc'); // but we can't redeclare tuple = ['a', 1, 'abc']
// Enum, when not intialize value => value of enum increase +1 from 0, if Enum init with another type => have to init all values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Blue;
console.log(Color[2]);
// Type Assertions
var email = document.getElementById('email');
email === null || email === void 0 ? void 0 : email.addEventListener();
