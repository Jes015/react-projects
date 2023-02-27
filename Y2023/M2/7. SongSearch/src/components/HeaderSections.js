import { AppBar, Box, Toolbar, Typography } from './muiR'

export default function HeaderSections ({ name }) {
  return (
    <AppBar sx={{ borderRadius: '5px 5px 0px 0px', mb: 1 }} position='relative'>
      <Toolbar variant='dense'>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='subtitle1'>{name}</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
