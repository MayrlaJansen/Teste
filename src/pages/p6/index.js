import React from 'react'
import { Typography, Box } from '@material-ui/core'
import BottomNav from '../../components/BottomNav'
import TextCarousel from '../../components/TextCarousel'
import { Container } from './styles'

import fundo from '../../assets/images/fundo_p6.png'
import img1 from '../../assets/images/img1_p6.jpeg'
import img2 from '../../assets/images/img2_p6.jpeg'
import img3 from '../../assets/images/img3_p6.jpeg'
import img4 from '../../assets/images/img4_p6.jpeg'
export default function() {
    const text = [
        {
          index: 1,
          content: 'Os bancos relacionais são a opção ideal para sistemas ERP, CRM ou de gerenciamento financeiro, em que é necessária uma grande consistência de dados. Criado em 1970 por Edgar Frank Codd esse modelo é o sucessor dos modelos hierárquico e em rede.'
        },
        {
          index: 2,
          content: 'Já os bancos de dados não relacionais são soluções para situações nas quais os bancos relacionais não atendem. Umexemplo são os ambientes com dados mistos (imagens, mapas e tabelas), que não podem ser tabulados em linhas e colunas. Também é utilizado em grandes soluções baseadas em nuvem.'
        },
        {
          index: 3,
          content: 'Eles são conhecidos como NoSQL (Not Only SQL, ou em português, não apenas SQL). Buscam consistência nas informações armazenadas, disponibilidade do banco de dados e tolerância ao particionamento das informações. Seus bancos mais conhecidos são MongoDB, Redis e Cassandra.'
        },
        {
            index: 4,
            content: 'A escolha do banco de dados ideal depende primordialmente de sua aplicação. Para este mini curso iremos utilizar o banco de dados SQL e nas próximas páginas entederemos mais sobre a linguagem.'
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
        <Box id="box1">
            <img id="img1" className="animated fadeIn delay-0s" src={img1} alt="exemplo teste um dois"/>
            <img id="img2" className="animated fadeIn delay-0s" src={img2} alt="exemplo teste um dois"/>
        </Box>
        <Box id='safe-area'>
          <TextCarousel texts={text} />
        </Box>
        <Box id="box2">
            <img id="img3" className="animated fadeIn delay-0s" src={img3} alt="exemplo teste um dois"/>
            <img id="img4" className="animated fadeIn delay-0s" src={img4} alt="exemplo teste um dois"/>
        </Box>
      </Box>
      <Box id="base">
                <BottomNav prevPag="/p5" nextPag="/p7"></BottomNav> 
            </Box>
        </Container>
    )
}
