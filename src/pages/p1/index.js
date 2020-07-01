import React from 'react'
import { Typography, Box } from '@material-ui/core'

import { Container } from './styles'
import { Title } from './styles'
import { Header } from './styles'
import { Content } from './styles'
import ButtonImg from '../../components/ButtonImg'
import ButtonModal from '../../components/ButtonModal'
import ButtonModal2 from '../../components/ButtonModal2'
//assets
import btn_iniciar from '../../assets/images/iniciar.jpeg'
import creditos from './creditos';
import citar from './citar';


export default function() {
    return (
        <Container>
            <Header>
                <Title><strong>Introdução a Banco de Dados</strong></Title>
            </Header>
            <Content>Neste material, você poderá aprender uma base sobre como iniciar um banco de dados e as principais considerações a serem levadas em conta. Vamos lá?</Content>
            <Box id="iniciar">
                <ButtonImg image={btn_iniciar} id={"btn-iniciar"} to={"p2"} />
            </Box>
            <ButtonModal
                        modalTitle={'Autores'}
                        modalContent={creditos()}
                        className="btn-modal-creditos"
                    />
             <ButtonModal2
                        modalTitle={'Referências'}
                        modalContent={citar()}
                        className="btn-modal-citar"
                    />
        </Container>
    ) 
}
