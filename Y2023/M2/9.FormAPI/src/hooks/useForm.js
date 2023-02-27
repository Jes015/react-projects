import { useEffect, useState } from 'react'
import helpHttp from '../helpers/helpHttp'

const http = helpHttp()

export default function useForm (initialForm, validateForm, initalErros) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(false)
  const [startHttp, setStartHttp] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length !== 0 || !startHttp) return
    setStartHttp(false)
    setLoading(true)
    http.post('https://formsubmit.co/ajax/23aa6337fc6384d1f6d17a497061fd22', { headers: { 'Content-Type': 'application/json', accept: 'application/json' }, body: form })
      .then(res => { setLoading(false); setResponse(true); setForm(initialForm); setTimeout(() => { setResponse(false) }, 3000) })
  }, [errors])

  const handleChange = (e) => {
    const { value, name } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleBlur = (e) => {
    handleChange(e)
  }

  const handleSumbit = (e) => {
    setErrors(validateForm(form))
    setStartHttp(true)
  }
  return { form, errors, loading, response, startHttp, handleChange, handleBlur, handleSumbit }
}
