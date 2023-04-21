import { type User, SortBy } from '../types.d'

interface props {
  users: User[]
  tableColorMode: boolean
  setSort: (sort: SortBy) => void
}

const Table: React.FC<props> = ({ users, tableColorMode, setSort }) => {
  const getRowColor = (index: number) => {
    const backgroundColor = index % 2 === 0 ? '#333333' : '#555555'
    const newRowColor = tableColorMode ? backgroundColor : 'var(--background-body)'
    return newRowColor
  }

  const handleClickHeaders = (sort: SortBy) => {
    setSort(sort)
  }

  return (
    <table width='100%'>
      <thead>
        <tr>
            <th>Foto</th>
            <th onClick={() => { handleClickHeaders(SortBy.FIRSTNAME) }}>{SortBy.FIRSTNAME}</th>
            <th onClick={() => { handleClickHeaders(SortBy.LASTNAME) }}>{SortBy.LASTNAME}</th>
            <th onClick={() => { handleClickHeaders(SortBy.COUNTRY) }}>{SortBy.COUNTRY}</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.email} style={{ backgroundColor: getRowColor(index) }}>
              <td><img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}'s name`} /></td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
