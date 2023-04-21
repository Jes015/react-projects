import type { todos, todoId } from '../types'
import Todo from './todo'
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface props {
  todos: todos
  handleRemoveTodos: ({ id }: todoId) => void
  handleCheck: ({ id, completed }: { id: string, completed: boolean }) => void
}

const Todos: React.FC<props> = ({ todos, handleRemoveTodos, handleCheck }) => {
  const [parent] = useAutoAnimate({ duration: 300 })

  return (
    <ul className='todo-list' ref={parent}>
      {todos.map(element => (
        <li
          key={element.id}
          className={element.completed ? 'completed' : ''}
        >
            <Todo
              key={element.id}
              todo={element}
              handleRemoveTodos={handleRemoveTodos}
              handleCheck={handleCheck}
            />
        </li>
      )) }
    </ul>
  )
}

export default Todos
