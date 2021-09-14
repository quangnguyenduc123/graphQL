export interface IOrder {
    calculateTotal(): number
    // products: Array<any> if add more property => causes changes in multiple files
}

export function calculateTotalAmount(order: IOrder) {
    let total = order.calculateTotal()
    const discount = total * .1
    total -= discount
    const tax = total * .2

    total += tax
    return total
}