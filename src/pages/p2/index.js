import React from 'react'
import { Typography, Box } from '@material-ui/core'
import BottomNav from '../../components/BottomNav'
import { Container } from './styles'

import fundo from '../../assets/images/image1.png'

export default function() {
    return (
        <Container>
            <Box id="mainbox" width="1" height="1">
            <Box id="bluetextbox">
                    <Typography variant="body1">
                        <strong>Banco de Dados: Conceitos</strong>
                    </Typography>
                </Box>
                <Box id="textbox">
                    <Typography variant="body1">
                        Banco de Dados sempre esteve presente na nossa vida, um exemplo é a lista telefônica. Com o surgimento dos computadores, passou-se a deixar de lado os arquivos físicos e comecou o processo de armazenamento de dados digital.<br/>
                    </Typography>
                </Box>
                <Box id="textbox2" className="animated fadeInDown">
                    <Typography variant="body1">
                    Um banco de dados é uma coleção organizada de dados (esquemas, tabelas, consultas, relatórios, exibições e outros objetos). Os dados são normalmente organizados para modelar aspectos da realidade de uma forma que suporta os processos de pedidos de informação, tais como modelar a disponibilidade de quartos em hotéis de uma forma que permita encontrar um hotel com vagas. [Ref 1]<br/>
                    </Typography>
                </Box>
                <Box id="textbox3">
                    <Typography variant="body1">
                    Podemos simplificar essa definição para: "Bancos de dados são coleções de dados interligados entre si e organizados para fornecer informações." <br/>
                    </Typography>
                    <Typography variant="body1">
                        Clique nas setas abaixo para entender mais sobre esse conceito.
                    </Typography>
                </Box>
                <Box id="background">
                    <img src={fundo} alt="" id="background" />
                </Box>
               
            </Box>
            <Box id="base">
                <BottomNav prevPag="/" nextPag="/p3"></BottomNav> 
            </Box>
        </Container>
    )
}
