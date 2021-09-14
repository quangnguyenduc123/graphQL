interface Expirable {
    expiryDate: Date
}

interface ChocolateCake extends Expirable {

}

interface VanillaCake extends Expirable { }

const chocoCakes: ChocolateCake[] = [
    { expiryDate: new Date() }
]

const vanillaCakes: VanillaCake[] = [
    { expiryDate: new Date() }
]

// if we have only T => item.expiryDate cant be known => extends Expirable
const getExpiredItems = <T extends Expirable>(items: Array<T>) => {
    const currentDate = new Date().getTime()
    return items.filter(item => item.expiryDate.getDate() < currentDate)
}

const expiredChocoCakes = getExpiredItems(chocoCakes)
const expiredVanillaCakes = getExpiredItems(vanillaCakes)

// method 2: Create interface generic funtion
interface getExpiredItemsFunction {
    <T extends Expirable>(items: Array<T>): Array<T>
}
const getExpiredItems2: getExpiredItemsFunction = (items) => {
    const currentDate = new Date().getTime()
    return items.filter(item => item.expiryDate.getDate() < currentDate)
}


interface ShoppingCart<ItemId, Item> {
    items: Array<Item>
    addItem(this: ShoppingCart<ItemId, Item>, item: Item): void
    getItemById(this: ShoppingCart<ItemId, Item>, id: ItemId): Item | undefined
}

interface Item {
    id: number
    price: number
}

const cart: ShoppingCart<number, Item> = {
    items: [],
    addItem(item) {
        this.items.push(item)
    },
    getItemById(id) {
        return this.items.find(item => item.id === id)
    }
}