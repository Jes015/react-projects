import { SortBy as SortByType } from '../types.d'

interface props {
  sortBy: SortByType
  toggleTableColorMode: () => void
  setSort: (sort: SortByType) => void
  resetUserList: () => void
  handleSearchParams: (param: string) => void
}

const Filters: React.FC<props> = ({ toggleTableColorMode, setSort, resetUserList, handleSearchParams, sortBy }) => {
  const handleColorFilter = () => {
    toggleTableColorMode()
  }
  const handleSortByCountry = () => {
    setSort(SortByType.NONE)
  }
  const handleResetData = () => {
    resetUserList()
  }
  const handleSearchParam = (event: React.FormEvent<HTMLInputElement>) => {
    handleSearchParams(event.currentTarget.value)
  }

  return (
        <div>
            <button onClick={handleColorFilter}>Change color</button>
            <button onClick={handleSortByCountry}>Default order</button>
            <button onClick={handleResetData}>Reset data</button>
            <input onInput={handleSearchParam}/>
        </div>
  )
}

export default Filters
