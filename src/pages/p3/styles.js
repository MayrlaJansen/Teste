import styled from 'styled-components'

export const Container = styled.div`

div#background {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        @media(min-width: 900px) {
            position: absolute;
            overflow: hidden;
            height: 100vh;
            padding-top: 0;
        }
    }

    img#background {
        width: 100%;
        margin-top: 10px;
        pointer-events: none;

        @media(min-width: 900px) {
            margin-top: 2%;
            width: 90%;
            max-width: 1600px;
        }

        @media(min-width: 1200px) {
            margin-top: 8%;
            width: 90%;
        }

        @media(min-width: 1800px) {
            margin-top: 1%;
            width: 70%;
        }
    }
    div#box1 {
        margin-top: 10%;
        margin-left:10%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;

        @media(min-width: 900px) {
            position: absolute;
            overflow: hidden;
            height: 19vh;
            padding-top: 0;
        }
        
    }
    img#navio{
        width: 30%;
        margin-top:4%;
        margin-left: -54%;
        }
    img#seta{
        width: 15%;
        margin-left: 3%;
        }
    img#box1 {
        position: absolute;
        width: 100%;
        margin-top: 10px;
        pointer-events: none;

        @media(min-width: 900px) {
            margin-top: 2%;
            width: 90%;
            max-width: 1600px;
        }

        @media(min-width: 1200px) {
            margin-top: 8%;
            width: 90%;
        }

        @media(min-width: 1800px) {
            margin-top: 1%;
            width: 70%;
        }
    }
    div#box2 {
        margin-top: 22%;
        margin-left:10%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;

        @media(min-width: 900px) {
            position: absolute;
            overflow: hidden;
            height: 29vh;
            padding-top: 0;
        }
        
    }
    img#conteiner{
        width: 25%;
        margin-top:4%;
        margin-left: -54%;
        }
    img#seta2{
        width: 15%;
        margin-left: 3%;
        }
    img#box2 {
        position: absolute;
        width: 100%;
        margin-top: 10px;
        pointer-events: none;

        @media(min-width: 900px) {
            margin-top: 2%;
            width: 90%;
            max-width: 1600px;
        }

        @media(min-width: 1200px) {
            margin-top: 8%;
            width: 90%;
        }

        @media(min-width: 1800px) {
            margin-top: 1%;
            width: 70%;
        }
    }
    #bluetextbox {
        background-color: #6495ED;
        text-align: center;
        
        color: ${props => props.theme.palette.background.main};
        padding: 20px;
        width: 100%;
        text-indent: 2em;
        z-index: 1;

        @media(min-width: 900px) {
            position: absolute;
            width: 85%;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    #textbox {
        background-color: #2661ab;
        color: ${props => props.theme.palette.background.main};
        padding: 20px;
        width: 80%;
        height: 80%;
        margin: auto;
        margin-bottom: 25vh;
        border-radius: 10px;
        padding: 51px;
        text-indent: 2em;

        @media (min-width: 900px) {
            border-radius: 10;
            position: absolute;
            display: flex;
            align-items: center;
            width: 38%;
            height: 20%;
            right: 12%;
            bottom: 10%;
            margin-bottom: 0;
        }
    }
`
