import React from 'react'
import { Typography, Box } from '@material-ui/core'
import BottomNav from '../../components/BottomNav'
import { Container } from './styles'
import { FadeIn } from 'animate-css-styled-components';
import fundo from '../../assets/images/fundo_p3.png'
import img1 from '../../assets/images/pag3_img1.jpeg'
import img2 from '../../assets/images/pag3_img2.jpeg'
import img3 from '../../assets/images/pag3_img3.jpeg'

export default function() {
    return (
        <Container>
            <Box width="1" height="1">
                <Box id="bluetextbox">
                    <Typography variant="body1">
                        <strong>Tabelas e Registros</strong>
                    </Typography>
                </Box>
                <Box id="background">
                    <img src={fundo} alt="" id="background" />
                </Box>
                <Box id="box1">
                    <img id="navio" className="fadeIn animated delay-1s" src={img1} alt="exemplo teste um dois"/>
                   <img id="seta" className="animated fadeIn delay-0s" src={img2} alt="exemplo teste um dois"/>
                   <Box id="textbox">
                    <Typography variant="body1">
                    O banco de dados pode ser representado por um grande navio que carrega vários containers.
                    </Typography>
                </Box>
                
                </Box>
                <Box id="box2">
                   <img id="conteiner" className="animated fadeIn delay-0s" src={img3} alt="exemplo teste um dois"/>
                   <img id="seta2" className="animated fadeIn delay-0s" src={img2} alt="exemplo teste um dois"/>
                   <Box id="textbox">
                    <Typography variant="body1">
                   Já as tabelas podem ser representadas pelos containers, em que cada container armazena várias coisas que possuem as mesmas características.
                    </Typography>
                </Box>
            </Box>
            </Box>
            <Box id="base">
                <BottomNav prevPag="/p2" nextPag="/p4"></BottomNav> 
            </Box>
        </Container>
    )
}
