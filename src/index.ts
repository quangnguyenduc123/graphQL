// MERGE INTERFACE
interface Cart {
    calculateTotal(): number
}

interface Cart {
    x: number
}

interface Cart {
    calculateTotal(options: { discountCode: number }): number
}

let myCart: Cart = {
    x: 1,
    // coz Coz interface with method calculateTotal has 2 version: 1 no options, 2 has => options ?
    calculateTotal(options?: { discountCode: number }) {

        return 1
    }
}

// MERGE NAMESPACE
namespace MyNamespace {
    export const x: number = 10
    export interface SomeInterface {
        y: number
    }
}

namespace MyNamespace {
    export const getX = () => x
    export interface SomeInterface {
        x: number
    }
}

const someInterface: MyNamespace.SomeInterface = {
    x: 1,
    y: 2
}


// Merge Function
function someFunction(){
    return 10
}
namespace someFunction {
    export const someProperty = 20
}
console.log(someFunction.someProperty)
console.log(someFunction())

// ADD Static member to enum
enum Vegetables{
    Tomato = 'tomato',
    Onion = 'onion'
}
namespace Vegetables {
    export function makeSalad(){
        return Vegetables.Tomato + Vegetables.Onion
    }
}

// extends class
class Salad {}
namespace Salad{
    export const availableDressings = ['olive oil', 'yoghurt']
}
Salad.availableDressings.includes('olive oil')

