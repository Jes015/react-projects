import './App.css'
import Table from './components/Table'
import Filters from './components/filters'
import useApp from './hooks/useApp'

function App () {
  const { hasNextPage, isLoading, isError, filteredUsers, tableColorMode, toggleTableColorMode, sortBy, setSort, resetUserList, handleSearchParams, handlePagination } = useApp()

  return (
    <>
    <header>
      <h1>Prueba tecnica</h1>
      <Filters handleSearchParams={handleSearchParams} resetUserList={() => { resetUserList().catch(err => { console.log(err) }) }} toggleTableColorMode={toggleTableColorMode} setSort={setSort} sortBy={sortBy} />
    </header>
    <main>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Ha ocurrido un error</h3>}
      {!isLoading && filteredUsers[0] == null && isError && <h3>Error : No hay usuarios</h3>}
      {!isError && filteredUsers[0] && (<><Table users={filteredUsers} tableColorMode={tableColorMode} setSort={setSort} /> {hasNextPage && <button onClick={() => { handlePagination() }}>Cargar mas</button>}</>)}
    </main>
    </>
  )
}

export default App
