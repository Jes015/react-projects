import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'
import useTranslate from './hooks/useTranslate'
import { AUTO_LENGUAGE } from './constants'
import LanguageSelector from './components/languageSelector'
import { SectionType } from './types.d'
import TextArea from './components/textArea'

const App = () => {
  const { state, interchangeLangugages, setFromLanguage, setToLanguage, setToTranslate } = useTranslate()

  const handleClick = () => {
    interchangeLangugages()
  }

  return (
    <Container fluid>
      <h1>Translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <h2>From</h2>
            <LanguageSelector type={SectionType.FROM} language={state.fromLanguage} changeIdiom={setFromLanguage}/>
            <TextArea autoFocus placeholder='from' loading={state.loading} type={SectionType.FROM} value={state.toTranslate} changeValue={setToTranslate} />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button disabled={state.fromLanguage === AUTO_LENGUAGE} variant='link' onClick={handleClick}>interchange</Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <h2>To</h2>
            <LanguageSelector type={SectionType.TO} language={state.toLanguage} changeIdiom={setToLanguage}/>
            <TextArea autoFocus={false} placeholder='to' loading={state.loading} type={SectionType.TO} value={state.result} />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
