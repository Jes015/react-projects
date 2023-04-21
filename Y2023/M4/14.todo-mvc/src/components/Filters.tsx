import { FILTERS_BUTTONS, type FILTER_VALUES } from '../consts'

interface props {
  filterSelected: FILTER_VALUES
  onChangeFilter: (filter: FILTER_VALUES) => void
}

const Filters: React.FC<props> = ({ filterSelected, onChangeFilter }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, key: FILTER_VALUES): void => {
    event.preventDefault()
    onChangeFilter(key)
  }
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''
          return (
            <li key={key}>
                <a href={href} className={className} onClick={(event) => { handleClick(event, key as FILTER_VALUES) }}>{literal}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Filters
