import React from 'react'
import { Typography, Box, Tooltip } from '@material-ui/core'
import BottomNav from '../../components/BottomNav'
import { Container } from './styles'
import TextCarousel from '../../components/TextCarousel'

import fundo from '../../assets/images/fundo_p5.png'

export default function () {
  const text = [
    {
      index: 1,
      content: 'Antes de explicar os tipos de bancos de dados disponíveis, é necessário definir suas duas categorias: banco de dados relacionais e não relacionais.'
    },
    {
      index: 2,
      content: 'Bancos de dados relacionais são fundamentados no paradigma da orientação a conjuntos. Seus dados são armazenados em estruturas denominadas tabelas. Cada tabela é composta por colunas (atributos e linhas), tuplas ou registros.'
    },
    {
      index: 3,
      content: 'Eles costumam ser mais utilizados para dados tabulares, de fácil inserção e recuperação. Sua linguagem é o SQL (Structured Query Language) e seus principais representantes são Oracle, SQL Server, MySQL e PostgreSQL.'
    }
  ]
  return (
    <Container>
      <Box overflow="auto" width="1" height="1">
        <Box id="bluetextbox">
                    <Typography variant="body1">
                        <strong>Tipos de Banco de Dados</strong>
                    </Typography>
                </Box>
        <Box id='background'>
          <img src={fundo} alt='' id='background' />
        </Box>
        <Box id='safe-area'>
          <TextCarousel texts={text} />
        </Box>
      
      </Box>
      <Box id="base">
                <BottomNav prevPag="/p4" nextPag="/p6"></BottomNav> 
            </Box>
    </Container>
  )
}
