import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = ({ auth = false }) => {
  return (
    auth ? <><h1>Hablalo pa</h1><Outlet /></> : <Navigate to='/login' />
  )
}
