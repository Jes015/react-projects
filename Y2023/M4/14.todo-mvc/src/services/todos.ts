import { formatTodo } from '../adapters/todos'
import { type todos } from '../types'

const apiKey = import.meta.env.VITE_JSONBIN_APIKEY

export const getTodos = async (): Promise<todos> => {
  try {
    const response = await fetch('https://api.jsonbin.io/v3/b/64306a37ace6f33a2206a10e', { headers: { 'X-Master-Key': apiKey } })
    const responseJson = await response.json()

    if ('message' in responseJson) throw new Error('error')

    return formatTodo(responseJson.record)
  } catch (error) {
    throw new Error('Error, you need an API key or your quota is over')
  }
}

export const updateTodos = (todos: todos): void => {
  try {
    fetch('https://api.jsonbin.io/v3/b/64306a37ace6f33a2206a10e',
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Master-Key': apiKey },
        body: JSON.stringify(todos)
      })
      .then(res => {
        if ('message' in res) throw new Error()
      })
      .catch(() => {
        throw new Error('Error, you need an API key or your quota is over')
      })
  } catch (error) {
    throw new Error('Error, you need an API key or your quota is over')
  }
}
