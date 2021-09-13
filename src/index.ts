// Functions [optional and default parameters]

function sum(a: number, b: number): number {
    return a + b
}

type MyFunc = (a: number, b: number) => number
const sum2: MyFunc = (a, b) => a + b

// a has default value is 0, can't have both optional and default in 1 parameter
function opt(a: number = 0, b?: number) {
    return a + (b || 0) // coz b can be null
}

// Overloads

function calcArea(width: number, height: number): number
function calcArea(length: number): number
function calcArea(...args: number[]): number {
    if (args.length === 2) {
        return args[0] + args[1]
    }
    return args[0]
}