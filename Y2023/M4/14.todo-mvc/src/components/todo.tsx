import type { todo, todoId } from '../types'

interface props {
  todo: todo
  handleRemoveTodos: ({ id }: todoId) => void
  handleCheck: ({ id, completed }: { id: string, completed: boolean }) => void
}

const Todo: React.FC<props> = ({ todo, handleRemoveTodos, handleCheck }) => {
  const handleClick = (): void => {
    handleRemoveTodos({ id: todo.id })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleCheck({ id: todo.id, completed: event.target.checked })
  }

  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={todo.completed}
        onChange={handleChange}
      />
      <label>{todo.title}</label>
      <button
        className='destroy'
        onClick={handleClick}
      />
      <input className='edit' defaultValue='Create a TodoMVC template' />
    </div>
  )
}

export default Todo
