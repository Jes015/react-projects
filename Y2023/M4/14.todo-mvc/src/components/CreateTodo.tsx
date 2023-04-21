import { type todoTitle } from '../types'

interface props {
  addTodo: (title: todoTitle) => void
}

const CreateTodo: React.FC<props> = ({ addTodo }) => {
  const handleSumbit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const newTodoTitle: todoTitle = { title: form.get('input') as string }
    addTodo(newTodoTitle)
    const inputChild = event.currentTarget.elements.namedItem('input') as HTMLInputElement
    inputChild.value = ''
  }

  return (
  <form onSubmit={handleSumbit}>
    <input
      name='input'
      className='new-todo'
      placeholder='Add new todo'
      autoFocus
    />
  </form>
  )
}

export default CreateTodo
