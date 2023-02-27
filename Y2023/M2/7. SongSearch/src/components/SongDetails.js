// React
import { useState } from 'react'

// Material UI
import { Box } from './muiR'
import SongTabs from './SongTabs'

// Custom Components
import HeaderSections from './HeaderSections'
import SongLyric from './SongLyric'
import SongSinger from './SongSinger'
import CircularProgress from '@mui/material/CircularProgress'

export default function SongDetails ({ songInfo, loading }) {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <Box sx={{ maxWidth: '980px', flexGrow: 1 }}>
      <HeaderSections name='Song Details' />
      <SongTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
      {loading && <CircularProgress />}
      {songInfo &&
        <Box>
          {tabIndex === 0 && <SongSinger songInfo={songInfo} />}
          {tabIndex === 1 && <SongLyric songInfo={songInfo} />}
        </Box>}
    </Box>
  )
}
