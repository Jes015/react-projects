import { useEffect, useReducer } from 'react'
import type { reducerAction, translator, language, fromLanguage } from '../types'
import translate from '../services/translate'
import useDebounce from './useDebounce'

const initialState: translator = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  toTranslate: '',
  result: '',
  loading: false
}

const reducer = (state: translator, action: reducerAction): translator => {
  let newState = state

  if (action.type === 'interchangeLangugages') {
    if (state.fromLanguage === 'auto') return newState
    newState = {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      loading: true
    }
  } else if (action.type === 'setFromLanguage') {
    // avoid double value
    if (state.toLanguage === action.payload) return newState
    newState = {
      ...state,
      fromLanguage: action.payload
    }
  } else if (action.type === 'setToLanguage') {
    // avoid double value
    if (state.fromLanguage === action.payload) return newState
    newState = {
      ...state,
      toLanguage: action.payload
    }
  } else if (action.type === 'setToTranslate') {
    newState = {
      ...state,
      toTranslate: action.payload,
      loading: true
    }
  } else if (action.type === 'setResult') {
    newState = {
      ...state,
      result: action.payload,
      loading: false
    }
  }

  return newState
}

const useTranslate = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const debouncedValue = useDebounce(state.toTranslate, 500)

  useEffect(() => {
    console.log(debouncedValue)
    if (debouncedValue === '') return
    const { fromLanguage, toLanguage, toTranslate } = state
    translate({ fromLanguage, toLanguage, text: toTranslate }).then(res => { if (res == null) return; setResult(res) }).catch((err) => { setResult(err) })
  }, [state.fromLanguage, state.toLanguage, debouncedValue])

  const interchangeLangugages = (): void => {
    const action: reducerAction = { type: 'interchangeLangugages' }
    dispatch(action)
  }

  const setFromLanguage = (payload: fromLanguage): void => {
    const action: reducerAction = { type: 'setFromLanguage', payload }
    dispatch(action)
  }

  const setToLanguage = (payload: language): void => {
    const action: reducerAction = { type: 'setToLanguage', payload }
    dispatch(action)
  }

  const setToTranslate = (payload: string): void => {
    const action: reducerAction = { type: 'setToTranslate', payload, loading: true }
    dispatch(action)
  }

  const setResult = (payload: string): void => {
    const action: reducerAction = { type: 'setResult', payload, loading: false }
    dispatch(action)
  }

  return { state, interchangeLangugages, setResult, setFromLanguage, setToLanguage, setToTranslate }
}

export default useTranslate
