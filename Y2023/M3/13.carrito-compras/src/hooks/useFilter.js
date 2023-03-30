import { useContext } from 'react'

// Context
import { FilterContext } from '../context/filter.context'

export default function useFilter () {
  const { filter, setFilter } = useContext(FilterContext)

  const filterProducts = (products) => {
    return products.filter((product) => product.price > filter.minPrice)
  }

  const handleFilter = (newValue) => { setFilter({ ...filter, minPrice: newValue }) }

  return ({ filter, filterProducts, handleFilter })
}
