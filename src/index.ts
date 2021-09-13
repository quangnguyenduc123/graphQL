// Boolean
let b: boolean = true

//Number
let num: number = 1 + 0b1 + 0o1 + 0x1

//String
const hello: string = 'Hello'

// Null and Undefined
let n: null = null
let u: undefined = undefined

function uppercaseFirstLetter(str: string | null) {
    // coz str maybe null => have to check, coz we set Strict in ts.config: true => error when writting
    if (str)
        return str[0].toUpperCase() + str.substr(1)
}
uppercaseFirstLetter(null)

// PrimitiveTypes
type primitiveTypes = boolean | number | string | symbol | null | undefined

// Void
function log(message: string): void {
    console.log(message)
    //return message => can't return in void function
}

// Array 
let arr1: string[] = ['a', 'b']
let arr2: Array<string> = ['a', 'b']

//Tuple  arr with fixed length. variety of types
let tuple: [string, number] = ['a', 1]
tuple.push('abc')  // but we can't redeclare tuple = ['a', 1, 'abc']


// Enum, when not intialize value => value of enum increase +1 from 0, if Enum init with another type => have to init all values
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Blue
console.log(Color[2])// cant look up if value is string

// Type Assertions
const email = document.getElementById('email') // if we dont assert type => email can be null => cant access addEventListener or have to put ? or !
email?.addEventListener('change', e => { // ! means email cant be null => non null assertion operator
    const input = e.target as HTMLInputElement  // cur
    console.log(input.value)
})

function test(): any {
    return {
        name: 'Alice',
        cat: {
            name: 'Dinah'
        }
    };
}
const test1 = test();
console.log(test1.dog?.name) // => console log undefine
console.log(test1.dog!.name) // runtime error