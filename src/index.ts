class Robot {
    #name: string

    private privateField = 'It is private'

    constructor(name: string) {
        this.#name = name
    }

    getName() {
        return this.#name
    }
}

class AdvancedRobot extends Robot {
    #name: string // can re-declare with same name 

    constructor(name: string) {
        super(name)
        this.#name = `Advanced ${name}`
    }

    getAdvancedRobotName() {
        return this.#name
    }
}

const robot = new AdvancedRobot('Quang')
console.log(robot.privateField)

console.log('parent name', robot.getName())
console.log('child name', robot.getAdvancedRobotName())