// React
import { useState, createContext } from 'react'

export const FilterContext = createContext()

export function FilterProvider ({ children }) {
  const [filter, setFilter] = useState({
    filter: 'all',
    minPrice: 10
  })

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}
