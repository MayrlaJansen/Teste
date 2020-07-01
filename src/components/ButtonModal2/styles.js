import styled from 'styled-components'
import { Modal } from '@material-ui/core'

export const ModalOpener = styled.div`
    /* display: flex; */
    align-items: center;
    justify-content: center;
    width: 22%;
    height: 25%;
    min-width: 80px;

    @media(min-width: 900px) {
      width: 18%;
      height: 16%;
    }

    #btn-img {
        border-radius: 10%;
        width: 90%;
        cursor: pointer;
        transition: 0.2s ease-out;
    }
    
    #btn-img:hover {
        background-color: ${props => props.theme.palette.primary.light};
        width: 80%;
        transition: 0.2s ease-out;
    }

`

export const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;

  #center-modal{
    background: white;
    border: 3px solid  #87CEFA;
    width: 60%;
    height: 80%;
    border-radius: 15px;
    outline: 0;

    @media(min-width: 900px) {
      width: 70%;
      height: 40%;
    }
  }

  #close {
    cursor: pointer;
  }
  #modal-header {
    background: #1E90FF;
    color: ${props => props.theme.palette.background.main};
    overflow: hidden;
    width: 100%;
    height: 18%;
    border-radius: 9px;
  }

  #modal-content {
    /* display: flex; */
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 82%;
    padding: 15px;
    max-height: 600px;
    overflow: auto;
  }
  
`