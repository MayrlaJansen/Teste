import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import $ from 'jquery'
import Container from './styles'
import theme from './../../theme'
import arrow_button from '../../assets/images/Ativo 17.png'

export default function (props) {
  const { texts } = props

  const [current, setCurrent] = useState(1)
  const [currentColor, setColor] = useState(theme.palette.secondary.dark)

  const circles = texts.map(item => {
    return (
      <>
        {
          item.index === current
            ? <div className='placeholder'>
              <span className='circle bigger' />
              </div>
            : <div className='placeholder'>
              <span className='circle' />
            </div>
        }
      </>
    )
  })

  useEffect(() => {
    
      setColor('#2d57a7')
    
  }, [current])

  return (
    <Container currentColor={currentColor}>
      <Typography variant='body1'>
        {texts[current - 1].content}
      </Typography>
      <div id='indicator'>
        {circles}
      </div>
      {
        current !== 1
          ? <div id='prev'>
            <img src={arrow_button} alt='Voltar' id='prev' onClick={() => setCurrent(current - 1)} />
            </div>
          : <div id='prev'>
            <img src={arrow_button} alt='Voltar' id='prev-disabled' />
          </div>
      }
      {
        current !== texts.length
          ? <div id='next'>
            <img src={arrow_button} alt='Avançar' id='next' onClick={() => setCurrent(current + 1)} />
            </div>
          : <div id='next'>
            <img src={arrow_button} alt='Avançar' id='next-disabled' />
            </div>
      }
    </Container>
  )
}
