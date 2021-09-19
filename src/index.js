import { GraphQLServer } from 'graphql-yoga'

// Type defnitions(schema)
const typeDefs = `
    type Query{
        user: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        age: Int!
        email: String
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`
// Resolvers
const resolvers = {
    Query: {
        user() {
            return { id: '1', name: 'quang', age: '25' }
        },
        post() {
            return { id: '1', title: 'post1', body: 'Hay vl', published: true }
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => [
    console.log('The server is start')
])