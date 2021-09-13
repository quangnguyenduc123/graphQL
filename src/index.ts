interface A {
    someProp: number
}

interface B {
    someProp: number
}

let a: A = { someProp: 1 }
let b: B = a // if add another property in B => cant convert

interface Profile {
    readonly name: string // cant modify name
    age?: number // => make age optional => profile variable bellow dont have declare age
}

let profile: Profile = {
    name: 'John'
}

// Index Signature => help to describe dynamic properties
interface Signature {
    [key: string]: number
    //someProp: string => we can't decalare another property with another type => someProp have to be number
    someProp: number
}

const sig: Signature = { someProp: 3 }
sig.x = 1
sig.y = 2

//Call signature: to describe functions
interface Sum {
    (a: number, b: number): number
    prop1: string
}

const sum: Sum = (a, b) => a + b
sum.prop1 = 'a'

// Extending Interface
interface Parent {
    x: string
}

interface Parent2 {
    y: string
}

interface Child extends Parent, Parent2 { }

let child: Child = { x: 'some prop', y: 'another prop' }