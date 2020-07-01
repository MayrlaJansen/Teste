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
