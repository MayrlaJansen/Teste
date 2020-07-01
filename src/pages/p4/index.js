import React from 'react'
import { Typography, Box } from '@material-ui/core'

import { Container } from './styles'
import BottomNav from '../../components/BottomNav'
import fundo from '../../assets/images/fundo_p4.jpeg'

export default function() {
    return (
        <Container>
            <Box overflow="auto" width="1" height="1">
                <Box id="bluetextbox">
                    <Typography variant="body1">
                        <strong>Tipos de Banco de Dados</strong>
                    </Typography>
                </Box>
                <Box id="background">
                    <img src={fundo} alt="" id="background" />
                </Box>
                <Box id="textbox">
                    <Typography variant="body1">
                        <i><strong>"Quais são os bancos disponíveis?"</strong></i><br/>
                    </Typography>
                </Box>
                <Box id="textbox2">
                    <Typography variant="body1">
                    <i><strong>"Quais as suas principais diferenças?"</strong></i>
                    <br/>
                    </Typography>
                </Box>
                <Box id="textbox3">
                    <Typography variant="body1">
                   <i><strong>"É melhor optar por um banco de dados relacional ou não relacional?"</strong></i> <br/>
                    </Typography>
                </Box>
            </Box>
            <Box id="base">
                <BottomNav prevPag="/p3" nextPag="/p5"></BottomNav> 
            </Box>
        </Container>
    )
}
