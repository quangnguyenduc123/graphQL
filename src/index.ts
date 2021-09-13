import multiply, { multiplyBy2 } from './multiply'
import { multiplyBy2 as mBy2 } from './multiply'
import * as multiplyModule from './multiply'

const a = 2
const b = 6
console.log(multiply(a, b))

console.log(multiplyModule.default(a, b))
console.log(multiplyModule.multiplyBy2(a))