import SongSearcher from './SongSearcher'
import Container from '@mui/system/Container'
import { SnackbarProvider } from 'notistack'

export default function Main () {
  return (<Container maxWidth='xl'><SnackbarProvider maxSnack={3}><SongSearcher /></SnackbarProvider></Container>)
}
