import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { Container } from './styles'
import BottomNav from '../../components/BottomNav'
import fundo from '../../assets/images/image1.png'

export default function () {
  const DesktopGreenDiv = () => {
    return (
      <>
        <div className='green-text-col'>
          <Box id='greentextbox' className='my-auto'>
            <Typography variant='body1'>
            Chegamos ao fim! Mas não pense que já aprendeu o bastante!
            <br />
            <br />
                Aqui foi mostrado apenas uma introdução para lhe dar um gostinho de quero mais, esperamos que você tenha aprendido o que foi passado e consiga avançar em seus estudos e colocar em prática o que aprendeu, afinal, a prática leva a perfeição!
                <br />
            <br />
            Agredecemos a paciência e atenção ao nosso material. 
            </Typography>
            <Typography variant='h6'>
                      Até a próxima!
            </Typography>
          </Box>
        </div>
      </>
    )
  }
  const MobileGreenDiv = () => {
    return (
      <>
        <Box id='greentextbox'>
          <Typography variant='body1'>
                    Chegamos ao fim! Mas não pense que já aprendeu o bastante!
            <br />
            <br />
                Aqui foi mostrado apenas uma introdução para lhe dar um gostinho de quero mais, esperamos que você tenha aprendido o que foi passado e consiga avançar em seus estudos e colocar em prática o que aprendeu, afinal, a prática leva a perfeição!
                <br />
            <br />
            Agredecemos a paciência e atenção ao nosso material. Até a próxima! 
          </Typography>
          <Typography variant='h6'>
                    Até a próxima!
          </Typography>
        </Box>
      </>
    )
  }
  return (
    <Container>
      <Box overflow='auto' width='1' height='1'>
        {(window.innerWidth < 850) ? MobileGreenDiv() : DesktopGreenDiv()}
        <Box id='background'>
          <img src={fundo} alt='Unidade de Saúde da Família de Porto Belo' id='background' />
        </Box>

      </Box>
      <Box id="base">
                <BottomNav prevPag="/p9" nextPag={false}></BottomNav> 
            </Box>
    </Container>
  )
}
