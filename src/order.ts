import {IOrder} from './calculate-total-amout'

export class Order implements IOrder {
    calculateTotal(){
        return 100
    }
}