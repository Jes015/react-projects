import Sheet from '@mui/joy/Sheet'
import ModalClose from '@mui/joy/ModalClose'
import Modal from '@mui/joy/Modal'

export default function BasicModal ({ children, open, handleModalOpen }) {
  const hanldeClose = () => {
    handleModalOpen()
  }

  return (
    <Modal onClose={hanldeClose} open={open} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Sheet variant='outlined' sx={{ border: 'none', width: '100%', maxWidth: '300px', maxHeight: '75vh' }}>
        <ModalClose
          sx={{
            top: 'calc(4/36 * var(--IconButton-size))',
            right: 'calc(4/36 * var(--IconButton-size))',
            boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
            borderRadius: '90%'
          }}
        />
        {children}
      </Sheet>
    </Modal>
  )
}
