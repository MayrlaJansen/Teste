import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Router from '../../../routes'
import useDefineContent from './orientationUtils'
//styles
import {Container} from './styles'
import { ThemeProvider as StyledProvider }  from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../../../theme'

const content = () => <Grid id="center-container" item xs={12}> <Router/> </Grid>

export default function UI(){
  return (
    <>
      <CssBaseline/>
      <StyledProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Container container direction="row" justify="center" alignItems="center">
            {
              useDefineContent(content)
            }
          </Container>
        </ThemeProvider>
      </StyledProvider>
    </>
  );
}