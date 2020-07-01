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
        width: 90%;
        margin-top: 10px;
        pointer-events: none;

        @media(min-width: 900px) {
            margin-top: 2%;
            width: 100%;
            max-width: 1600px;
        }

        @media(min-width: 1200px) {
            margin-top: 8%;
            width: 100%;
        }

        @media(min-width: 1800px) {
            margin-top: 1%;
            width: 70%;
        }
    }

    #textbox {
        background-color: #043f5f;
        color: ${props => props.theme.palette.background.main};
        padding: 20px;
        width: 100%;
        text-indent: 2em;
        z-index: 1;
        margin-top: 8%;

        @media(min-width: 900px) {
            position: absolute;
            width: 85%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    #textbox2 {
        background-color: #043f5f;
        color: ${props => props.theme.palette.background.main};
        padding: 20px;
        width: 100%;
        margin-top: 18%;
        text-indent: 2em;
        z-index: 1;

        @media(min-width: 900px) {
            position: absolute;
            width: 85%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    #textbox3 {
        background-color: #043f5f;
        color: ${props => props.theme.palette.background.main}; 
        padding: 20px;
        width: 100%;
        margin-top: 30%;
        text-indent: 2em;
        z-index: 1;

        @media(min-width: 900px) {
            position: absolute;
            width: 85%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    #base{
        bottom: 2%;
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

`