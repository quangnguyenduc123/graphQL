"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Robot_name, _AdvancedRobot_name;
class Robot {
    constructor(name) {
        _Robot_name.set(this, void 0);
        this.privateField = 'It is private';
        __classPrivateFieldSet(this, _Robot_name, name, "f");
    }
    getName() {
        return __classPrivateFieldGet(this, _Robot_name, "f");
    }
}
_Robot_name = new WeakMap();
class AdvancedRobot extends Robot {
    constructor(name) {
        super(name);
        _AdvancedRobot_name.set(this, void 0); // can re-declare with same name 
        __classPrivateFieldSet(this, _AdvancedRobot_name, `Advanced ${name}`, "f");
    }
    getAdvancedRobotName() {
        return __classPrivateFieldGet(this, _AdvancedRobot_name, "f");
    }
}
_AdvancedRobot_name = new WeakMap();
const robot = new AdvancedRobot('Quang');
console.log(robot.privateField);
console.log('parent name', robot.getName());
console.log('child name', robot.getAdvancedRobotName());
