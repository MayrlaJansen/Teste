import styled from 'styled-components'

export const Container = styled.div`
  div#background {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        margin-left: 10%;

        @media(min-width: 900px) {
            position: absolute;
            overflow: hidden;
            height: 90vh;
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
        /* background-color: #6495ED; */
        color: ${props => props.theme.palette.background.main};
        padding: 20px;
        width: 100%;
        text-indent: 2em;
        z-index: 1;

        @media(min-width: 900px) {
            position: absolute;
            width: 26%;
            left: 56%;
            margin-top: 7%;
            transform: translateX(-50%);
        }
    }
    #textbox2 {
        /* background-color: #6495ED; */
        color: ${props => props.theme.palette.background.main};
        padding: 20px;
        width: 100%;
        margin-top: 13%;
        text-indent: 2em;
        z-index: 1;

        @media(min-width: 900px) {
            position: absolute;
            width: 20%;
            left: 66%;
            bottom: 64%;
            transform: translateX(-50%);
        }
    }
    #textbox3 {
        /* background-color: #6495ED; */
        color: ${props => props.theme.palette.background.main}; 
        padding: 20px;
        width: 100%;
        margin-top: 25%;
        text-indent: 2em;
        z-index: 1;

        @media(min-width: 900px) {
            position: absolute;
            width: 20%;
            left: 72%;
            bottom: 46%;
            transform: translateX(-50%);
        }
    }
`
