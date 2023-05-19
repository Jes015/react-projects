
interface props {
  auth: boolean
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const Login = ({ auth, setAuth }: props) => {
  const handleClick = () => {
    setAuth(!auth)
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleClick}>{auth ? 'Logout' : 'Login'}</button>
    </>
  )
}
