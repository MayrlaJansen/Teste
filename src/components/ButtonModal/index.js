import React, { useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

// styles
import { CustomModal, ModalOpener } from './styles'

import btn_img from '../../assets/images/autores.jpeg'

export default function ButtonModal (props) {
  const { image, modalContent, modalTitle } = props
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <ModalOpener className={props.className} onClick={handleOpen}>
        <img src={btn_img} id='btn-img' alt='' />
      </ModalOpener>

      <CustomModal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleClose}
      >
        <div id='center-modal'>
          <Box
            id='modal-header'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
          >
            <Box
              width={0.1}
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <span />
              {/* placeholder */}
            </Box>
            <Box
              width={0.8}
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <Typography variant='body1'>
                {modalTitle}
              </Typography>
            </Box>
            <Box
              width={0.15}
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <span id='close'>
                <CloseIcon onClick={handleClose} />
              </span>
            </Box>
          </Box>
          <Box id='modal-content' overflow='auto'>
            {modalContent}
          </Box>
        </div>
      </CustomModal>
    </>
  )
}
