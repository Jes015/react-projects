import MusicNote from '@mui/icons-material/MusicNote'
import { Box, Typography, AppBar, Toolbar } from './muiR'

export default function Header () {
  return (
    <AppBar position='relative'>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MusicNote />
          <Typography variant='h6'>Song Searcher</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
