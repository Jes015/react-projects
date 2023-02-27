import { Box, Typography, Grid } from './muiR'
import MusicNoteRounded from '@mui/icons-material/MusicNoteRounded'

export default function SongSinger ({ songInfo }) {
  return (
    <Grid container spacing={1} columns={{ sm: 2, xs: 2 }}>
      <Grid item sm={1} xs={2}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='subtitle1'>{songInfo.artistName.toUpperCase()}</Typography>
          <MusicNoteRounded fontSize='small' />
        </Box>
        <Box sx={{ height: '60vh', overflowY: 'auto' }}>
          <Typography variant='caption'>{songInfo.artistDesc}</Typography>
        </Box>
      </Grid>
      <Grid item sm={1} xs={2}>
        <img style={{ width: '80%' }} src={songInfo.artistImage} />
      </Grid>
    </Grid>
  )
}
