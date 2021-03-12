const Task = {
  user({user}, args, {db}, info) {
    return db.users.find(({id}) => user === id)
  },
}

export default Task
