// Materia UI
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/system/Container'

// Custom components
import FormAPI from './components/FormAPI'

// Theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})
export default function App () {
  return (<ThemeProvider theme={darkTheme}><CssBaseline /><Container maxWidth='sm'><FormAPI /></Container></ThemeProvider>)
}
