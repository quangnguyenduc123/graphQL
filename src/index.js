import { GraphQLServer } from 'graphql-yoga'

// Type defnitions(schema)
const typeDefs = `
    type Query{
        hello: String!
        name: String!
    }
`
// Resolvers
const resolvers = {
    Query: {
        hello() { return 'Hello world' },
        name() { return 'My name is Quang' }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => [
    console.log('The server is start')
])