import { Form } from 'react-bootstrap'
import { SUPPORTED_LENGUAGES, AUTO_LENGUAGE } from '../constants'
import { SectionType, type fromLanguage, type language } from '../types.d'

type props =
| { type: SectionType.FROM, language: fromLanguage, changeIdiom: (payload: fromLanguage) => void }
| { type: SectionType.TO, language: language, changeIdiom: (payload: language) => void }

const LanguageSelector: React.FC<props> = ({ type, language, changeIdiom }) => {
  const handleInput = (event: React.FormEvent<HTMLSelectElement>) => {
    changeIdiom(event.currentTarget.value as language)
  }

  return (
    <Form.Select aria-label='select idiom' onInput={handleInput} value={language}>
      { type === SectionType.FROM && <option value={AUTO_LENGUAGE}>Detectar</option>}
      {Object.entries(SUPPORTED_LENGUAGES).map(([key, language]) => (
        <option key={key} value={key}>
          {language}
        </option>
      ))}
    </Form.Select>
  )
}

export default LanguageSelector
