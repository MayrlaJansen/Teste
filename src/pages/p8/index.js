import React from 'react'
import { Typography, Box } from '@material-ui/core'
import BottomNav from '../../components/BottomNav'
import MomentTable from '../../components/MomentTable'
import { Container } from './styles'

import fundo from '../../assets/images/fundo_p8.png'

export default function() {
    const texts = [
        {
            content:
            ['Possui três comando: CREATE, ALTER, DROP.' , <br></br>,' CREATE DATABASE: é responsável pela criação de um novo banco de dados vazio. ' , <br></br>,'CREATE TABLE: irá criar uma nova tabela.' , <br></br>,' ALTER: por sua vez, é o comando utilizado para alterar uma tabela ou um banco de dados já existente.' , <br></br>,'DROP: é utilizado para remoção de uma tabela ou do banco de dados por completo. ']
        },
        {
            content:
                ['Possui três comandos para esta manipulação: INSERT, UPDATE e DELETE.' , <br></br>,'INSERT: estaremos inserindo dados a uma ou mais tabela de um banco de dados . ' , <br></br>,'UPDATE: é utilizado para atualizar os dados de uma ou mais tabelas.' , <br></br>,'DELETE: como seu próprio significado já diz, utilizaremos para excluir os dados de uma ou mais tabela em nosso banco de dados.']
        },
        {
            content:
            ['Possui apenas um comando:', <br></br>,'SELECT: é um dos principais comandos utilizados em SQL, pois com ele é possível realizar consultas aos dados que pertencem a uma determinada tabela. É um comando composto de várias opções que permite a elaboração de consultas das mais simples a mais elaboradas. ']
        },
        {
            content:
            ['Possui três comandos: COMMIT, SAVEPOINT e ROLLBACK.' , <br></br>,'COMMIT: salvar o trabalho feito.' , <br></br>,'SAVEPOINT – identificar um ponto em uma transação para que mais tarde você pode efetuar um ROLLBACK.' , <br></br>,'ROLLBACK – restaurar banco de dados ao original desde o último COMMIT.']
        },
        {
            content:
            ['Possui dois comandos: GRANT e REVOKE.' , <br></br>,'GRANT: atribui privilégios de acesso do usuário a objetos do banco de dados.' , <br></br>,'REVOKE – remove os privilégios de acesso aos objetos obtidos com o comando GRANT.']
        }
    ]

    
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
            <Box id="safe-area">
                <MomentTable texts={texts} />
            </Box>
            </Box>
            <Box id="base">
                <BottomNav prevPag="/p7" nextPag="/p9"></BottomNav> 
            </Box>
        </Container>
    )
}
