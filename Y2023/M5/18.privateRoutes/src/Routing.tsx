import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { PrivateRoutes } from './components/PrivateRoutes'

const routes = ['users', 'admins', 'pepes', 'login']

interface props {
  auth: boolean
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
}
export const Routing = ({ auth, setAuth }: props) => {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: 103, justifyContent: 'center' }}>
        {routes.map((route) => <Link key={route} to={`/${route}`}>{route}</Link>)}
      </nav>
      <Routes>
        <Route index element={<><h1>Go to login</h1><Link to='/login'>Login</Link></>} />
        <Route path='/login' element={<Login auth={auth} setAuth={setAuth} />} />
        <Route element={<PrivateRoutes auth={auth} />}>
          <Route path='/users' element={<p>Useeeeeeeeeeeers</p>} />
          <Route path='/admins' element={<p>Admins</p>} />
          <Route path='/pepes' element={<p>Pepes</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
