// Custom components
import Todos from './components/todos'
import Footer from './components/Footer'
import Header from './components/Header'

// Custom hooks
import useTodos from './hooks/useTodos'

function App (): JSX.Element {
  const { filterSelected, handleRemove, handleCheck, handleFilterChange, activeCount, completedCount, filteredTodos, handleClearCompleted, addTodo } = useTodos()
  return (
    <div className='todoapp'>
      <Header addTodo={addTodo} />
      <Todos handleRemoveTodos={handleRemove} handleCheck={handleCheck} todos={filteredTodos}/>
      <Footer
        handleFilterChange={handleFilterChange}
        filterSelected={filterSelected}
        activeCount={activeCount}
        completedCount={completedCount}
        handleClearCompleted={handleClearCompleted}
      />

    </div>
  )
}

export default App
