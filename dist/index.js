"use strict";
// Functions [optional and default parameters]
function sum(a, b) {
    return a + b;
}
var sum2 = function (a, b) { return a + b; };
// a has default value is 0, can't have both optional and default in 1 parameter
function opt(a, b) {
    if (a === void 0) { a = 0; }
    return a + (b || 0); // coz b can be null
}
function calcArea() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 2) {
        return args[0] + args[1];
    }
    return args[0];
}
