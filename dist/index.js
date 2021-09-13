"use strict";
class Robot {
    constructor(name) {
        this._name = name;
    }
    static isColorAvailable(color) {
        return Robot.availableColors.includes(color);
    }
    askName() {
        console.log(`My name is ${this._name}`);
    }
    move(distance) {
        console.log(`${this._name} moved ${distance} km`);
    }
    // set method name(name is same with object.name bellow)
    set name(value) {
        this._name = 'PREFIX_' + value;
    }
    // get method
    get name() {
        return this._name + '_SUFFIX';
    }
    set color(color) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error('not vailable');
        }
        this._color = color;
    }
}
// Static site: static method, static property, constructor
Robot.availableColors = ['green', 'yellow'];
class FlyingRobot extends Robot {
    constructor(name, jetpackSize) {
        super(name);
        this.jetpakcSize = jetpackSize;
    }
    move(distance) {
        console.log(`${this._name} is flying`);
        super.move(distance);
    }
}
const fylingRobot = new FlyingRobot('Jim', 2);
fylingRobot.move(10);
fylingRobot.name = 'Quang';
console.log(`my name is ${fylingRobot.name}`); // => PREFIX_Quang_Suffix
