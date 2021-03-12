import {v4 as uuidv4} from 'uuid'

const Mutation = {
  createUser(parent, args, {db}, info) {
    const emailTaken = db.users.some(({email}) => args.data.email === email)

    if (emailTaken) throw new Error('Email taken')

    const user = {
      ...args.data,
      id: uuidv4(),
    }

    db.users.push(user)

    return user
  },
  deleteUser(parent, args, {db}, info) {
    const userIndex = db.users.findIndex(({id}) => id === args.id)

    if (userIndex < 0) throw new Error('User not found')

    const deletedUser = db.users.splice(userIndex, 1) // remove user

    // clean up tasks from deleted user
    db.tasks = db.tasks.filter(({user}) => user !== args.id)

    return deletedUser[0]
  },
  updateUser(parent, {id, data}, {db}, info) {
    const {email, name} = data
    const user = db.users.find((user) => user.id === id)

    if (!user) throw new Error('User not found')

    if (typeof email === 'string') {
      const emailTaken = db.users.some((user) => user.email === email)
      if (emailTaken) throw new Error('Email taken')
      user.email = email
    }

    if (typeof name === 'string') user.name = name

    return user
  },
  createTask(parent, args, {db}, info) {
    const userExists = db.users.some((user) => user.id === args.data.user)

    if (!userExists) throw new Error('User not found')

    const task = {
      ...args.data,
      id: uuidv4(),
    }

    db.tasks.push(task)

    return task
  },
  deleteTask(parent, args, {db}, info) {
    const taskIndex = db.tasks.findIndex(({id}) => String(id) === args.id)

    if (taskIndex < 0) throw new Error('Task not found')

    const deletedTask = db.tasks.splice(taskIndex, 1) // remove task

    return deletedTask[0]
  },
  updateTask(parent, {id, data}, {db}, info) {
    const {completed, text} = data
    const task = db.tasks.find((task) => String(task.id) === id)

    if (!task) throw new Error('Task not found')

    if (typeof completed === 'boolean') task.completed = completed
    if (typeof text === 'string') task.text = text

    return task
  },
}

export default Mutation
