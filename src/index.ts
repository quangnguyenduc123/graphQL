type SomeType = string
type MyConditionalType = SomeType extends string ? string : null

function someFunction<T>(value: T) {
    type A = T extends boolean ? 'TYPE A' : T extends string ? 'TYPE B' : T extends number ? 'TYPE C' : 'TYPE D'
    const someOtherFunction = (someArg: T extends boolean ? 'TYPE A' : 'TYPE B') => { }
    return someFunction
}

