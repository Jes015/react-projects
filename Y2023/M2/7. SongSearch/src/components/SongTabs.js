import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { AppBar } from './muiR'

export default function SongTabs ({ tabIndex, setTabIndex }) {
  const handleChange = (event, newIndex) => {
    setTabIndex(newIndex)
  }

  return (
    <AppBar variant='dense' position='relative'>
      <Tabs value={tabIndex} onChange={handleChange}>
        <Tab label='Singer' />
        <Tab label='Lyric' />
      </Tabs>
    </AppBar>
  )
}
