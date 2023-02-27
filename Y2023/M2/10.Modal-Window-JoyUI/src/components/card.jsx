import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import { useTheme } from '@mui/joy/styles'

export default function Card ({ handleModalOpen }) {
  const theme = useTheme()

  return (
    <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: theme.colorSchemes.dark.palette.background.backdrop }}>
      <div>
        <img style={{ width: '300px' }} src='https://picsum.photos/500/500' alt='random image' />
      </div>
      <div style={{ padding: 10, display: 'flex', flexDirection: 'column' }}>
        <Typography level='body3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo tempore eum nobis sequi error assumenda est at magnam praesentium, asperiores quidem labore voluptate dolorem hic eaque officia corrupti vel. Unde.</Typography>
        <Button onClick={handleModalOpen} sx={{ alignSelf: 'flex-end' }} variant='outlined' color='neutral'>Ver mas</Button>
      </div>
    </div>
  )
}
