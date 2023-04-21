import { type todos, type todo } from '../types'

export function formatTodo (NoFilteredtodos: todos): todos {
  return NoFilteredtodos.map((todo: todo) => ({
    id: todo.id,
    title: todo.title,
    completed: todo.completed
  }))
}
