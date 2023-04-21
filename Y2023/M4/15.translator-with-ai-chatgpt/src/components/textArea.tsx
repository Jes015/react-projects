import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface props {
  type: SectionType
  value: string
  placeholder: string
  autoFocus: boolean
  loading: boolean
  changeValue?: (payload: string) => void
}

const TextArea: React.FC<props> = ({ type, value, placeholder, autoFocus, loading, changeValue }) => {
  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    if (changeValue != null) changeValue(event.currentTarget.value)
  }

  return (
    <Form.Control as='textarea' disabled={SectionType.TO === type} value={value} placeholder={loading ? 'loading...' : placeholder} autoFocus={autoFocus} style={{ height: '150px ', resize: 'none' }} onInput={handleInput} />
  )
}

export default TextArea
