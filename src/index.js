import { GraphQLServer } from 'graphql-yoga'

const users = [{
    id: '1',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27
}, {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
}, {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
}]

const posts = [{
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
}, {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1'
}, {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: false,
    author: '2'
}]
// Type defnitions(schema)
const typeDefs = `
    type Query {
        greeting(name: String!): String!
        user: User!
        post: Post!
        add(a: Int!, b: Int!): Int!
        users(query: String): [User!]!
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
        author: User!
    }
`
// Resolvers
const resolvers = {
    Query: {
        add(parents, args, ctx, info) {
            return args.a + args.b
        },
        greeting(parents, args, ctx, info) {
            console.log(parents)
            console.log(ctx)
            console.log(info)
            return `Hello ${args.name}`
        },
        user() {
            return { id: '1', name: 'quang', age: '25' }
        },
        post() {
            return posts[0]
        },
        users(parents, args, ctx, info) {
            if (!args.query) {
                return users
            }
            return users.filter((user) => {
                return user.name.toLocaleLowerCase().includes(args.query.toLocaleLowerCase())
            })
        }
    },
    Post: {
        author(parent, args, ctx, info) {
            return users.find((user) => {
                return user.id === parent.author
            })
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