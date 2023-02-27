// Mui
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import Typography from '@mui/joy/Typography'

// Custom components
import ModalWindow from './components/ModalWindow'

export default function App () {
  return (
    <CssVarsProvider
      defaultMode='dark'
      modeStorageKey='demo_dark-mode-by-default'
      disableNestedContext
    >
      <CssBaseline />
      <ModalWindow><Typography level='h6'> Modal Window</Typography></ModalWindow>
    </CssVarsProvider>
  )
}
