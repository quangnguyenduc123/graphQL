interface IA {
    a: number
}

interface IB {
    b: number
}

function X(obj: IA & IB) {
    return obj.a + obj.b
}

function combine(objA, objB) {
    return { ...objA, ...objB }
}

const objA = { a: 1 }
const objB = { b: 2 }
const result = combine(objA, objB) // =< result will be any type => not good
console.log(result)

// Now object return has combination of ObjA and ObjB, explicit that argument is object, return a combine object
function combineFix<ObjA extends object, ObjB extends object>(objA: ObjA, objB: ObjB): ObjA & ObjB {
    return { ...objA, ...objB }
}
const objAFix = { a: 1 }
const objBFix = { b: 2 }
const resultFix = combineFix(objA, objB)
console.log(resultFix)

