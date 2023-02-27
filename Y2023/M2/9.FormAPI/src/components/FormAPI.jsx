// MUI
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import TextField from '@mui/material/TextField'
import Box from '@mui/system/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import LinearProgress from '@mui/material/LinearProgress'

// Custom hooks
import useForm from '../hooks/useForm'

// Inital form
const initalForm = {
  name: '',
  correo: '',
  asuntos: ''
}

// Initial erros
const initalErros = {
  name: 'Invalid field',
  correo: 'Invalid field',
  asuntos: 'Invalid field'
}

const validationForm = (form) => {
  let errors = {}
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  const regexComments = /^.{1,255}$/

  if (!form.name.trim() || !regexName.test(form.name.trim())) errors.name = 'Invalid field'
  if (!form.correo.trim() || !regexEmail.test(form.correo.trim())) errors.correo = 'Invalid field'
  if (!form.asuntos.trim() || !regexComments.test(form.asuntos.trim())) errors.asuntos = 'Invalid field'

  return errors
}

export default function FormAPI () {
  const { form, errors, loading, response, handleSumbit, handleBlur, handleChange } = useForm(initalForm, validationForm, initalErros)

  console.log('Render')

  return (
    <Box sx={{ mt: 2 }}>
      <AppBar position='relative' sx={{ mb: 2 }}>
        {loading && <LinearProgress />}
        <Toolbar variant='dense'>
          <Typography variant='h6'>Contact me</Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, justifyItems: 'stretch' }}>
          <TextField value={form.name} onChange={handleChange} onBlur={handleBlur} {...(errors.name && { error: true, helperText: errors.name })} name='name' label='Nombre' />
          <TextField value={form.correo} onChange={handleChange} onBlur={handleBlur} {...(errors.correo && { error: true, helperText: errors.correo })} name='correo' label='Correo' />
          <TextField value={form.asuntos} onChange={handleChange} onBlur={handleBlur} sx={{ gridColumn: 'span 2' }} {...(errors.asuntos && { error: true, helperText: errors.asuntos })} name='asuntos' label='Asunto' />
          <Button onClick={handleSumbit} variant='contained' sx={{ gridColumn: 'span 2' }}>Enviar</Button>
          {response && <Alert severity='success' sx={{ gridColumn: 'span 2', backgroundColor: 'rgb(46, 72, 50)' }}>Datos enviados</Alert>}
        </Box>
      </Box>
    </Box>
  )
}
