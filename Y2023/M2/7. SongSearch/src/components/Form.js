// MUI
import { Box } from './muiR'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// Custom components
import HeaderSections from './HeaderSections'

// React
import { useState } from 'react'

export default function Form ({ httpRequest, addError }) {
  const [form, setForm] = useState({})

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleClick = (event) => {
    if (!form.name || !form.song) { addError('Llene todos los campos'); return }
    httpRequest(form)
    setForm({ name: '', song: '' })
  }

  const dataForm = [{ label: 'Nombre de artista', name: 'name', value: form.name, type: 'text' }, { label: 'Nombre de cancion', name: 'song', value: form.song, type: 'text' }]

  return (
    <Box>
      <HeaderSections name='Request' />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <TextField name={dataForm[0].name} value={dataForm[0].value} label={dataForm[0].label} type={dataForm[0].type} onChange={handleChange} />
        <TextField name={dataForm[1].name} value={dataForm[1].value} label={dataForm[1].label} type={dataForm[1].type} onChange={handleChange} />
        <Button variant='contained' onClick={handleClick}>Send Request</Button>
      </Box>
    </Box>
  )
}
