import Filters from './Filters'
import { type FILTER_VALUES } from '../consts'

interface props {
  activeCount: number
  completedCount: number
  filterSelected: FILTER_VALUES
  handleFilterChange: (filter: FILTER_VALUES) => void
  handleClearCompleted: () => void
}

const Footer: React.FC<props> = ({ activeCount, completedCount, handleClearCompleted, handleFilterChange, filterSelected }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onChangeFilter={handleFilterChange}
      />

      {
        completedCount > 0 &&
        (
            <button className='clear-completed' onClick={handleClearCompleted}>Borrar completadas</button>
        )
      }
    </footer>
  )
}

export default Footer
