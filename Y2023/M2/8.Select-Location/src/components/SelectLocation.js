
// Custom components
import Box from '@mui/material/Box'
import Select from './Select'

// React
import { useState } from 'react'
import Typography from '@mui/material/Typography'

// MUI
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

export default function SelectLocation () {
  const [departamento, setDepartamento] = useState(null)
  const [municipio, setMunicipio] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleLoading = (bol) => {
    setLoading(bol)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h5'>Colombia - {`${departamento || 'Sin seleccionar'} - ${municipio || 'Sin seleccionar'}`} </Typography>
      <Select nombre='departamento' setData={setDepartamento} url='https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=departamento&$group=departamento' handleLoading={handleLoading} />
      {departamento && <Select nombre='municipio' setData={setMunicipio} data={departamento} url='https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=' handleLoading={handleLoading} />}
      <Backdrop open={loading}><CircularProgress /></Backdrop>
    </Box>
  )
}
