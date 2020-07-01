import styled from 'styled-components'
// import { createMuiTheme } from '@material-ui/core'
import fundo from '../../assets/images/fundo_pagInicia.png'
// const { breakpoints } = createMuiTheme()
import header from '../../assets/images/header.jpg'
export const Header = styled.div`
    width: 100%;
    height: 35%;
    background-image: url(${header});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 575px){
        height: 32%
    }
    

`
export const Title = styled.div`
    text-align: center;
    font-size: 50px;
    position: absolute;
    width: 60%;
    top: 25%;
    left: 20%;
    @media (max-width: 815px){
        font-size: 40px;
        top: 15%;
        width: 70%;
        left: 15%;
    }
    @media (max-width: 575px){
        font-size: calc(5vw + 1vh);
        top: 20%;
        width: 80%;
        left: 10%;
    }
    
`
export const Content = styled.div`
    text-align: justify;
    font-size: 22px;
    position: absolute;
    width: 80%;
    top: 46%;
    left: 10%;
    @media (max-width: 815px){
        font-size: 18px;
      
    }
    @media (max-width: 576px){
        top: 34%;
        font-size: calc(2vw + 1vh);
    }
   
`
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${fundo});
    background-size: 100% 100%;
    overflow: hidden;

    h1 {
        color: ${props => props.theme.palette.background.main};
        font-weight: 400;
        text-align: end;
    }

    #title {
        width: 55%;
        position: absolute;
        top: 5%;
        right: 5%;

        @media(min-width: 900px){
            width: 50%;
            top: 7%;
            right: 7%;
        }
    }

    #pessoas {
        width: 60%;
        max-width: 600px;
        position: absolute;
        bottom: 5%;
        left: 5%;
        
        @media(min-width: 900px){
            width: 60%;
            max-width: 900px;
        }
    }

    #iniciar {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 35vh;
        bottom: 7%;
        right: 35%;

        @media(min-width: 900px) {
            height: 50vh;
            bottom: 7%;
            right: 40%;

        }
    }

    a#btn-iniciar {
        width: 100%;       
    }

    img#btn-iniciar {
        width: 90%;
        max-width: 330px;
        transition: 0.2s ease-out;

        :hover {
            width: 100%;
            transition: all 0.2s ease-in;
        }
    }
    .btn-modal-creditos {
        position: absolute;
        margin: auto;
        margin-top: 74vh;
        margin-left: 95vh;

        @media(min-width: 900px) {
            position: absolute;
            margin: 0;
            bottom: 5%;
            right: 15%;
        }

        @media(min-width: 1200px) {
            bottom: 10%;
            right: 15%;
        }
    }
    .btn-modal-citar {
        position: absolute;
        margin: auto;
        margin-top: 75vh;
        margin-right: 80vh;

        @media(min-width: 900px) {
            position: absolute;
            margin: 0;
            bottom: 5%;
            right: 72%;
        }

        @media(min-width: 1200px) {
            bottom: 10%;
            right: 68%;
        }
    }

   
`