import styled from 'styled-components'

export const Container = styled.div`
    div#background {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: static;
        width: 100%;
        height: 100%;
        padding: 10px 0px;
        overflow: hidden;

        @media (min-width: 900px) {
            height: 90vh;
            overflow: hidden;
            padding-top: 4%;
            justify-content: center;
        }
    }

    img#background {
        width: 70%;
        pointer-events: none;

        @media(min-width: 900px) {
            margin-right: 0;
            width: 50%;
        }

        @media(min-width: 1200px) {
            width: 45%;
            max-width: 1720px;
        }
    }

    #bluetextbox {
        background-color: ${props => props.theme.palette.primary.main};
        color: ${props => props.theme.palette.background.main};
        position: static;
        padding: 20px;
        width: 100%;
        bottom: 20%;
        text-indent: 2em;

        ul {
            margin: 0;
            text-indent: 0;
        }

        @media(min-width: 650px) {
            padding: 20px;
            width: 100%;
        }

        @media(min-width: 900px) {
            position: absolute;
            z-index: 1;
            display: flex;
            width: 35%;
            height: auto;
            top: 20%;
            transform: translate(0, -20%);
            left: 0;
            padding: 10px;
        }
        
    }

    #balao-fala {
        position: absolute;
        background-color: ${props => props.theme.palette.primary.main};
        color: ${props => props.theme.palette.background.main};
        padding: 20px;
        width: 50%;
        left: 3%;
        top: 105vh;
        border-radius: 20px 0px 20px 20px;

        @media(min-width: 650px) {
            top: 90vh;
        }

        @media(min-width: 900px) {
            left: 70%;
            top: 30%;
            border-radius: 0px 20px 20px 20px;
            width: 25%;
        }
    }

    .canto-balao {
        display: block;
        height: 30px;
        width: 30px;
        background: inherit;
        position: absolute;
        top: 0;
        right: -29px;
        clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
        box-shadow: inherit;

        @media(min-width: 900px) {
            left: -29px;
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
        }
    }

`
