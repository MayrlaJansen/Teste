# Info-UNASUS
Modelo para desenvolvimento de infográfico.

# Estrutura dos arquivos

```
src/
|
|-- components/
|     |-- core/
|-- pages/
      |-- p1/
          |-- index.js
          |-- styles.js
|-- store
|-- config.js
|-- index.js
|-- routes.js
|-- theme.js
|-- .gitignore
|-- package.json
|-- README.md
```
# O que é React?
Sobre o funcionamento do React segue um conjunto de links explicando seu funcionamento.

[Introdução ao React](https://pt-br.reactjs.org/docs/getting-started.html)

[Pensando do jeito React](https://pt-br.reactjs.org/docs/thinking-in-react.html)

[Iniciando no React - Diego Fernandes](https://www.youtube.com/watch?v=7A4UQGrFU9Q)

# O que são Hooks?
Para o estudo sobre os hooks, segue links de estudos:

[Introdução aos Hooks - React](https://pt-br.reactjs.org/docs/hooks-intro.html)

[React Hooks na prática - Diego Fernandes](https://www.youtube.com/watch?v=6WB16wZS61c)

# Como utilizar o sistema de Rotas
O sistema de rotas é feito através do react-router-dom onde é utilizado o lazy e o Suspense do React para gerar o lazy loading. Para adicionar uma rota primeiro o componente precisa ser importado e e ser passado como parâmetro para a função lazy como uma arrow function. Em seguida no HTML da página é utilizado o Route para definir o caminho da url será utilizado e qual componente será exibido quando a rota for acessada.

```
import React, { Suspense, lazy} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

const p1 = lazy(() => import('./pages/p1'))
const p1_creditos = lazy(() => import('./pages/p1_creditos'))
const p2 = lazy(() => import('./pages/p2'))

export default () => (
    <HashRouter>
        <Suspense fallback={<div></div>}>
            <Switch>
                <Route exact path="/" component={p1} />
                <Route path="/creditos" component={p1_creditos} />
                <Route path="/p2" component={p2} />
            </Switch>
        </Suspense>
    </HashRouter>
);
```
# Como organizar uma página do infográfico
Cada página é formada por uma pasta na qual contém dois arquivos um onde é o index.js e o outro onde é o styles.js sendo utilizado para guardar a estilização da página.

## Estrutura do arquivo index.js
```
import React from 'react'
import { Typography, Box } from '@material-ui/core'
import useStyles from './styles'
export default function () {
    const classes = useStyles()

    return (
        <>
            <Box overflow="auto" width="1" height="1">  
                <Typography variant="h1" className={classes.text}>
                    H1
                </Typography>
            </Box>
        </>
    )
}
```
## Estrutura do arquivo styles.js
```
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  text: {
    color: "#F0F0F0"
  },
  panels: {
    height: "65%",
    maxHeight: "200px"
  }
}));
```
# Como estilizar no material UI
## Como utilizar makeStyles
O material UI disponibiliza o Hook API para estilizar os componentes.

[MaterialUI-Estilos](https://material-ui.com/pt/styles/basics/#primeiros-passos)

## Como utilizar o styled-components no Material UI
Os componentes do material UI também podem ser customizado por meio do styled-components. E na documentação do Material UI sobre a interoperabilidade dos estilos ele menciona o uso do styled-components

[Interoperabilidade da Biblioteca de Estilo-Styled Components](https://material-ui.com/pt/guides/interoperability/#styled-components)

# Como utilizar o tema
O uso de tema facilita a estilização, pois define cores padrões e tamanho de fonte que será utilizada por todo o projeto.

## Usando tema no makeStyles
```
const styles = makeStyles(theme => ({
  headerTitle: {
    backgroundColor: theme.palette.primary.main,
    color: "#FFF"
  }
}));
```


## Usando tema no Styled-components
```
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

export const Container = styled(Grid)`
    width: 100%;
    height: 100vh !important; 

    #center-container{
        height: 100%;
        
        background-color: ${props => props.theme.palette.background.main};
    }
`
```