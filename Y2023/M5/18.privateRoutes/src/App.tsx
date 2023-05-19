import { useState } from 'react'
import './App.css'
import { Routing } from './Routing'

function App () {
  const [auth, setAuth] = useState<boolean>(false)
  return (
    <Routing auth={auth} setAuth={setAuth} />
  )
}

export default App
