import { ShoppingCart } from './shopping-cart'
import { calculateTotalAmount } from './calculate-total-amout'
import { Order } from './order'

const cart = new ShoppingCart()
console.log(`The cart's total is ${calculateTotalAmount(cart)}`)

const order = new Order
console.log(`The order's total is ${calculateTotalAmount(cart)}`)