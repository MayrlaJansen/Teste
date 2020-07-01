import React from 'react'
import { Typography, Box } from '@material-ui/core'
import BottomNav from '../../components/BottomNav'
import { Container } from './styles'

import fundo from '../../assets/images/fundo_p9.png'

export default function() {
    return (
        <Container>
            <Box overflow="auto" width="1" height="1">
                <Box id="bluetextbox">
                    <Typography variant="body1" className='my-auto'>
                    Podemos perceber que banco de dados é um assunto bem extenso mas não necessariamente complicado. Passamos aqui um pequena introdução sobre tudo que o assunto engloba, porém existe muito mais a ser estudado.
                        <br />
                        <br />
                    É importante lembrar que existe uma viabilidade da comunicação entre bancos de dados distintos, em diferentes computadores e até mesmo em diferentes plataformas de software. 
                        <br />
                        <br />
                       Para um estudo mais completo, indicamos os tópicos abaixo:
                        <br />
                       <ul>
                            <li>Sistema Gerenciador de Banco de Dados (SGBD);</li>
                            <li>Abstração de dados;</li>
                            <li>O papel do Database Administrator.</li>
                       </ul>
                    </Typography>
                </Box>
                <Box id="background">
                    <img src={fundo} alt="" id="background" />
                </Box>
                <Box id="balao-fala">
                    <Typography variant="body1" className="inline">
                    <i>“Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso”</i> – Swami Vivekananda, pensador hindu

                    </Typography>
                    <span className="canto-balao" />
                </Box>
            <Box id="base">
                <BottomNav prevPag="/p8" nextPag="/p10"></BottomNav> 
            </Box>
            </Box>
        </Container>
    )
}
