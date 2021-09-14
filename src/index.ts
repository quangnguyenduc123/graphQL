interface Animal {
    name: string
    group: string | undefined
    setGroup(group: string): void
}

class Cat implements Animal {
    name: string
    group: string | undefined

    constructor(name: string) {
        this.name = name
    }

    setGroup(group: string) {
        this.group = group
    }
}

class Dog implements Animal {
    name: string
    group: string | undefined

    constructor(name: string) {
        this.name = name
    }

    setGroup(group: string) {
        this.group = group
    }

    bark() { }
}

interface AnimalConstructor<T> {
    new(name: string): T
}

function initializeAnimal<T extends Animal>(Animal: AnimalConstructor<T>, name: string) {
    const animal = new Animal(name)
    animal.setGroup('mammals')
    return animal
}

const cat = initializeAnimal(Cat, 'Felix')
const dog = initializeAnimal(Dog, 'Ava')
dog.bark()// coz dog is Animal type, doesnt have bark in Dog => use Generic
