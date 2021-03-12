const Query = {
  users(parent, args, {db}, info) {
    return db.users
  },
  tasks(parent, args, {db}, info) {
    return db.tasks
  },
}

export default Query
