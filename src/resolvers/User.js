const User = {
  tasks({id}, args, {db}, info) {
    return db.tasks.filter(({user}) => id === user)
  },
}

export default User
