import React from 'react'
import styled from 'styled-components'
import ScreenRotation from '@material-ui/icons/ScreenRotation'
import { Typography } from '@material-ui/core'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #2B97E6, #2FCA94);
  color: #FFF;

  #icon-size{
    font-size: 5rem;
  }
`

export default function(){
  
  return (
    <Container>
      <Typography variant="h4">Rotacione o celular</Typography>
      <ScreenRotation id="icon-size" />
    </Container>
  )
}
