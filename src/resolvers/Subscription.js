const Subscription = {
  task: {
    subscribe(parent, args, {pubsub}, info) {
      return pubsub.asyncIterator(`task`)
    },
  },
}

export default Subscription
