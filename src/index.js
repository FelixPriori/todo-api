import {GraphQLServer} from 'graphql-yoga'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Task from './resolvers/Task'
import db from './db'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    User,
    Task,
  },
  context: {
    db,
  },
})

server.start(() => {
  console.log('The server is up on http://localhost:4000/')
})
