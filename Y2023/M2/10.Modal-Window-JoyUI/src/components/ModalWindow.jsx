import { useTheme } from '@mui/joy/styles/'
import Card from './card'
import BasicModal from './BasicModal'
import { useState } from 'react'

export default function ModalWindow ({ children }) {
  const [modalOpen, setModalOpen] = useState(false)
  const theme = useTheme()

  const getCards = () => {
    const cards = []
    for (let i = 0; i < 10; i++) {
      cards.push(<Card handleModalOpen={handleModalOpen} key={i + new Date()} />)
    }
    return cards
  }

  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <header style={{ textAlign: 'center', backgroundColor: theme.colorSchemes.dark.palette.background.level1 }}>{children}</header>
      <main>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10, padding: 15 }}>
          {getCards().map((element) => element)}
        </div>
      </main>
      <BasicModal open={modalOpen} handleModalOpen={handleModalOpen}>{getCards()[0]}</BasicModal>
    </>
  )
}
