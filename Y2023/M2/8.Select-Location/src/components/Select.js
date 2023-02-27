// UUID
import { v4 as uuidv4 } from 'uuid'

// React
import { useState, useEffect } from 'react'

// MUI
import Selecte from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'

export default function Select ({ nombre, url, data, setData, handleLoading }) {
  const [index, setIndex] = useState(0)
  const [elementos, setElementos] = useState(null)

  useEffect(() => {
    handleLoading(true)
    fetch((data) ? url + data : url).then(res => res.json()).then(res => { setElementos(res); setData(null); setIndex(0); setInterval(() => { handleLoading(false) }, 1000) }).catch(res => console.log(res))
  }, [data])

  const handleChange = (event, element) => {
    setIndex(event.target.value)
    if (!event.target.value) return
    setData(element.props.children)
  }
  return (
    <div>
      {elementos && elementos[0]
        ? <FormControl sx={{ width: '200px' }}>
          <InputLabel>{nombre}</InputLabel>
          <Selecte value={index} label={nombre} onChange={handleChange}>
            <MenuItem key={uuidv4()} value={0}>Elige un {nombre.toLowerCase()}</MenuItem>
            {elementos.map((element, index) => <MenuItem key={uuidv4()} value={index + 1}>{element[nombre]}</MenuItem>)}
          </Selecte>
        </FormControl> 
        : <h4>{nombre} not found</h4>}
    </div>
  )
}
