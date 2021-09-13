class Robot {
    // instance site
    _color?: string
    _name: string

    // Static site: static method, static property, constructor
    static availableColors = ['green', 'yellow']
    static isColorAvailable(color: string) {
        return Robot.availableColors.includes(color)
    }

    constructor(name: string) {
        this._name = name
    }

    askName() {
        console.log(`My name is ${this._name}`)
    }

    move(distance: number) {
        console.log(`${this._name} moved ${distance} km`)
    }

    // set method name(name is same with object.name bellow)
    set name(value: string) {
        this._name = 'PREFIX_' + value
    }

    // get method
    get name() {
        return this._name + '_SUFFIX'
    }

    set color(color: string) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error('not vailable')
        }
        this._color = color
    }
}

class FlyingRobot extends Robot {
    private readonly jetpakcSize: number // only init in constructor, cant rewrite in others

    constructor(name: string, jetpackSize: number) {
        super(name)
        this.jetpakcSize = jetpackSize
    }

    move(distance: number) {
        console.log(`${this._name} is flying`)
        super.move(distance)
    }
}

const fylingRobot = new FlyingRobot('Jim', 2)
fylingRobot.move(10)
fylingRobot.name = 'Quang'
console.log(`my name is ${fylingRobot.name}`) // => PREFIX_Quang_Suffix