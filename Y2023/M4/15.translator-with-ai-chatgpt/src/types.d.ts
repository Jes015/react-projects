import type { AUTO_LENGUAGE, SUPPORTED_LENGUAGES } from './constants'

type language = keyof typeof SUPPORTED_LENGUAGES
type autoLanguage = typeof AUTO_LENGUAGE
type fromLanguage = language | autoLanguage

interface translator {
  fromLanguage: fromLanguage
  toLanguage: language
  toTranslate: string
  result: string
  loading: boolean
}

type reducerAction =
| { type: 'interchangeLangugages' }
| { type: 'setFromLanguage', payload: fromLanguage }
| { type: 'setToLanguage', payload: language }
| { type: 'setToTranslate', payload: string, loading: true }
| { type: 'setResult', payload: string, loading: false }

enum SectionType {
  FROM = 'from',
  TO = 'to'
}

export { SectionType, type translator, type reducerAction, type language, type autoLanguage, type fromLanguage }
