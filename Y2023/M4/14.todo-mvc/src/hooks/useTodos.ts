import { useEffect, useState } from 'react'
import data from '../mocks/database.json'
import { getTodos, updateTodos } from '../services/todos'
import type { todos as todosType, todoId, todoTitle } from '../types'
import { type FILTER_VALUES, TODO_FILTERS } from '../consts'

interface reValues {
  filterSelected: FILTER_VALUES
  handleRemove: ({ id }: todoId) => void
  handleCheck: ({ id, completed }: { id: string, completed: boolean }) => void
  handleFilterChange: (filter: FILTER_VALUES) => void
  activeCount: number
  completedCount: number
  filteredTodos: todosType
  handleClearCompleted: () => void
  addTodo: ({ title }: todoTitle) => void
}

const useTodos = (): reValues => {
  const [todos, setTodos] = useState<todosType>(data)
  const [filterSelected, setFilterSelected] = useState<FILTER_VALUES>(TODO_FILTERS.ALL)

  useEffect(() => {
    getTodos()
      .then(todos => {
        setTodos(todos)
      })
      .catch(err => { console.log(err) })
  }, [])

  const handleRemove = ({ id }: todoId): void => {
    const todoIndex = todos.findIndex(element => id === element.id)

    if (todoIndex === -1) return

    const newTodos = [...todos]

    newTodos.splice(todoIndex, 1)

    setTodos(newTodos)
    updateTodos(newTodos)
  }

  const handleCheck = ({ id, completed }: { id: string, completed: boolean }): void => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(element => id === element.id)
    newTodos[todoIndex].completed = completed
    setTodos(newTodos)
    updateTodos(newTodos)
  }

  const handleFilterChange = (filter: FILTER_VALUES): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length

  const completedCount = todos.length - activeCount

  const filteredTodos: todosType = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
    updateTodos(newTodos)
  }

  const addTodo = ({ title }: todoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodos = [...todos, newTodo]

    setTodos(newTodos)
    updateTodos(newTodos)
  }

  return { filterSelected, handleRemove, handleCheck, handleFilterChange, activeCount, completedCount, filteredTodos, handleClearCompleted, addTodo }
}

export default useTodos
