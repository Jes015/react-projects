import { type todoTitle } from '../types'
import CreateTodo from './CreateTodo'

interface props {
  addTodo: (title: todoTitle) => void
}

const Header: React.FC<props> = ({ addTodo }) => {
  return (
    <header className='header'>
     <h1>
        todo
        <img
          style={{ width: '60px', height: 'auto' }}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' alt='typescript logo' />
     </h1>
     <CreateTodo addTodo={addTodo}/>
    </header>
  )
}

export default Header
