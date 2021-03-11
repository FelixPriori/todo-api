import {GraphQLServer} from 'graphql-yoga'
import faker from 'faker'

const userIds = {
  felix: faker.random.uuid(),
  kim: faker.random.uuid(),
  kent: faker.random.uuid(),
}

const users = [
  {
    id: userIds.felix,
    name: 'Felix',
    email: 'felix@example.com',
  },
  {
    id: userIds.kim,
    name: 'Kim',
    email: 'kim@example.com',
  },
  {
    id: userIds.kent,
    name: 'Kent',
    email: 'kent@example.com',
  },
]

const tasks = [
  {id: 1, user: userIds.felix, text: 'build my portfolio', completed: false},
  {id: 2, user: userIds.kim, text: 'eat tacos', completed: true},
  {id: 3, user: userIds.kent, text: 'do some acting', completed: false},
  {id: 4, user: userIds.kim, text: 'find a new job', completed: false},
]

const typeDefs = `
  type Query {
    users: [User!]!
    tasks: [Task!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    tasks: [Task!]!
  }

  type Task {
    id: ID!
    text: String!
    user: User!
    completed: Boolean!
  }
`

const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      return users
    },
    tasks(parent, args, ctx, info) {
      return tasks
    },
  },
  User: {
    tasks({id}, args, ctx, info) {
      return tasks.filter(({user}) => id === user)
    },
  },
  Task: {
    user({user}, args, ctx, info) {
      return users.find(({id}) => user === id)
    },
  },
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => {
  console.log('The server is up on http://localhost:4000/')
})
