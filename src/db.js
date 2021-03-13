import {v4 as uuidv4} from 'uuid'

const userIds = {
  felix: uuidv4(),
  kim: uuidv4(),
  kent: uuidv4(),
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
  {id: '1', user: userIds.felix, text: 'build my portfolio', completed: false},
  {id: '2', user: userIds.kim, text: 'eat tacos', completed: true},
  {id: '3', user: userIds.kent, text: 'do some acting', completed: false},
  {id: '4', user: userIds.kim, text: 'find a new job', completed: false},
]

const db = {
  users,
  tasks,
}

export default db
