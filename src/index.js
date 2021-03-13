import {GraphQLServer, PubSub} from 'graphql-yoga'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Task from './resolvers/Task'
import Subscription from './resolvers/Subscription'
import db from './db'

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Task,
  },
  context: {
    db,
    pubsub,
  },
})

server.start(() => {
  console.log('The server is up on http://localhost:4000/')
})
