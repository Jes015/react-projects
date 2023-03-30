// React hooks
import { useId, useRef } from 'react'
import useFilter from '../hooks/useFilter'
// Custom styles
import styles from './filters.module.css'

export default function Filters () {
  const { filter, handleFilter } = useFilter()
  const rangeId = useRef(useId())
  const filterId = useRef(useId())

  const handleInput = (event) => {
    handleFilter(event.target.value)
  }

  return (
    <div className={styles.filters}>
      <div>
        <label id={rangeId}>Desde</label>
        <input defaultValue={filter.minPrice} onInput={handleInput} id={rangeId} type='range' step='100' min='10' max='2000' />
        <span className={styles.filters__rangeValue}>{filter.minPrice}</span>
      </div>
      <div>
        <label id={filterId}>Filtro</label>
        <select id={filterId}>
          <option>Todos</option>
          <option>Todos</option>
          <option>Todos</option>
        </select>
      </div>
    </div>
  )
}
