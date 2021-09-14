import {IOrder} from './calculate-total-amout'

export class ShoppingCart implements IOrder{
    calculateTotal(){
        return 100
    }
}