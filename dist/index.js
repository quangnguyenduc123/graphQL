"use strict";
var a = { someProp: 1 };
var b = a; // if add another property in B => cant convert
var profile = {
    name: 'John'
};
var sig = { someProp: 3 };
sig.x = 1;
sig.y = 2;
var sum = function (a, b) { return a + b; };
sum.prop1 = 'a';
var child = { x: 'some prop', y: 'another prop' };
