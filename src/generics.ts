function genericFunction<T>(x: T): T {
    return x
}

//const genericArrowFunction1 = <T>(x: T): T => x => 
//=> syntax error fix by bellow
const genericArrowFunction = <T extends unknown>(x: T): T => x

// Generic Interface
interface GenericInterface<T> {
    (a: T): T
    someProp: T
}

interface GenericInterface<T> {
    <U>(a: U): U
    someProp: T
}

//Generic Classes
class GenericClass<P>{
    constructor(public props: P) { }

    getProps(): P {
        return this.props
    }

    //static A:P => error
    // static someMethod(p: P) => error
}


