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
    
    #safe-area {
        width: 60%;
        /* height: 100%; */
        margin: auto;
        margin-top: -27%;
        
        @media(min-width: 900px) {
            height: 100%;
            margin-top: 30vh;
        }

        @media(min-width: 1200px) { 
            margin-top: 35vh;
        }

        @media(min-width: 1800px) {
            width: 70%;
            margin-top: 33vh;
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
  
`
