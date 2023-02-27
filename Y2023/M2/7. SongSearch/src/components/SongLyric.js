import { Box, Typography } from './muiR'
import MusicNoteRounded from '@mui/icons-material/MusicNoteRounded'

export default function SongLyric ({ songInfo }) {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='subtitle1'>{songInfo.songName.toUpperCase()}</Typography>
        <MusicNoteRounded fontSize='small' />
        <Typography variant='caption'>{songInfo.artistFeat ? 'Feat' : 'Owner'}</Typography>
      </Box>
      <Typography variant='caption'>{'API not working'.toUpperCase()}</Typography>
    </Box>
  )
}
