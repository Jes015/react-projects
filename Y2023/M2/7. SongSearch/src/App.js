// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Custom Components
import Header from './components/Header'
import Main from './components/Main'

const darkTheme = createTheme({ palette: { mode: 'dark' } })

export default function App () {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Main />
    </ThemeProvider>
  )
}
