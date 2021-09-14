function someFn(myArgument: number | string) {
    if (typeof myArgument === 'string') { //ts doesnt know x is number or string => check typeof
        let x = myArgument.toUpperCase()
    }
    else {
        myArgument.toFixed()
    }
}
// Type guard with interface
interface Dog {
    bark(): void
    walk(): void
}

interface Cat {
    meow(): void
    walk(): void
}

function isDog(someObj: Dog | Cat): someObj is Dog {
    return 'bark' in someObj
}

function callMyPet(pet: Dog | Cat) {
    pet.walk()
    if (isDog(pet)) {
        pet.bark()
    }
    else {
        pet.meow()
    }
}

//Type guard with class
class A {
    a: number;
}
class B {
    b: number;
}
function simplify(value: A | B) {
    return value instanceof A ? value.a : value.b;
}
