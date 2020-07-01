import React from 'react'
import { Typography, Box } from '@material-ui/core'
import BottomNav from '../../components/BottomNav'
import { Container } from './styles'

import fundo from '../../assets/images/fundo_p7.png'

export default function() {
  
    return (
        <Container>
            <Box overflow="auto" width="1" height="1">
            <Box id="bluetextbox">
                    <Typography variant="body1">
                        <strong>Tipos de Linguagem SQL</strong>
                    </Typography>
                </Box>
                <Box id="background">
                    <img src={fundo} alt="" id="background" />
                </Box>
                <Box id="textbox">
                    <Typography variant="body1">
                    Pense assim, a linguagem SQL é uma só, porém ela é dividida em tipos de acordo com a funcionalidade dos comandos. Os tipos da linguagem SQL são:
                    <ul>
                        <li><strong>DDL - </strong>Data Definition Language - Linguagem de Definição de Dados.
São os comandos que interagem com os objetos do banco.</li>
                        <li><strong>DML - </strong>Data Manipulation Language - Linguagem de Manipulação de Dados.
São os comandos que interagem com os dados dentro das tabelas.</li>
                        <li><strong>DQL -</strong> Data Query Language - Linguagem de Consulta de dados.
São os comandos de consulta.</li>
                        <li><strong>DTL -</strong> Data Transaction Language - Linguagem de Transação de Dados.
São os comandos para controle de transação.</li>
                        <li><strong>DCL - </strong>Data Control Language - Linguagem de Controle de Dados.
São os comandos para controlar a parte de segurança do banco de dados.</li>  
                    </ul>
                    </Typography>
                </Box>          
            </Box>
            <Box id="base">
                <BottomNav prevPag="/p6" nextPag="/p8"></BottomNav> 
            </Box>
        </Container>
    )
}
