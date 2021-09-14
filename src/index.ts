interface Starship {
    name: string,
    enableHyperjump: boolean
}

// if we define: starship: StarShip => updateStarship require both name and enableHyperjump
// we just we update only 1 property => use Partial  => all properties of Starship becomes optional
const updateStarship = (id: number, starship: Partial<Starship>) => {
}

updateStarship(1, {
    name: 'Explorer'
})

const starships: Record<string, Starship> = {
    Explorer1: {
        name: "Explorer1",
        enableHyperjump: true
    },
    Explorer2: {
        name: "Explorer2",
        enableHyperjump: false
    }
}

type StarshipNameOnly = Pick<Starship, 'name'>

type StarshipWithoutName = Omit<Starship, 'name'>

type AvailableDrinks = 'Coffee' | 'Tea' | 'Lemonade'
type DrinkDoesntLike = 'Coffee' | 'Tea'
type DrinkLike = 'Tea'
let myDrink: Exclude<AvailableDrinks, DrinkDoesntLike> // => Lemonade

let anotherDrink: Extract<DrinkLike, AvailableDrinks>

interface StarShipProperties {
    color?: 'blue' | 'red' | 'green'
}

function paintStarShip(
    id: number,
    color: NonNullable<StarShipProperties['color']>
) {
    return {
        id,
        color
    }
}
type PaintStarShipReturn = ReturnType<typeof paintStarShip>
paintStarShip(1, 'green')


type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
    return class extends Base {
        deleted?: boolean
        delete() { }
    }
}

class Car {
    deleted?: boolean
    delete() { }
    constructor(public name: string) { }
}

class User {
    deleted?: boolean
    delete() { }
    constructor(public name: string) { }
}


interface MyObject {
    sayHello(): void
}

interface MyObjectThis {
    helloWorld(): string
}

const myObject: MyObject & ThisType<MyObjectThis> = {
    sayHello() {
        return this.helloWorld()
    }
}
myObject.sayHello = myObject.sayHello.bind({
    helloWorld() {
        return 'Hello World'
    }
})