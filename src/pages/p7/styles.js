import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    @media (min-width: 900px) {
        overflow-y: hidden !important;
    }
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


    #textbox {
        background-color: ${props => props.theme.palette.primary.main};
        color: ${props => props.theme.palette.background.main};
        padding: 120px;
        width: 60%;
        margin-top: 7%;
        text-indent: 2em;        
        z-index: 1;
        border-radius: 10%;

        @media(min-width: 900px) {
            position: absolute;
            width: 60%;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            padding: 80px;
        }

        @media(min-width: 1900px) {
            width: 60%;
            padding: 80px;
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
    #lightbluetextbox {
        background-color: ${props => props.theme.palette.primary.light};
        color: ${props => props.theme.palette.background.dark};
        display: flex;
        align-items: center;
        padding: 10px;
        margin: auto;
        width: 90%;
        bottom: 17%;
        height: fit-content;  
        text-indent: 2em;   
        margin-bottom: 25vh;   

        @media(min-width: 900px) {
            position: absolute;
            bottom: 15%;
            width: 70%;
            height: 20vh;
            left: 50%;
            transform: translateX(-50%);
            padding: 30px;
            box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.5);
            margin-bottom: 0;
        }

        @media(min-width: 1900px) {
            position: absolute;
            width: 60%;           
        }
        
        p {
            font-weight: 900;
            text-align: justify;
        }
    }

    #play-button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        margin-top: 10px;
        margin-bottom: 15px;
        width: 18%;        
        height: 10vh;
        max-height: 216px;

        @media(min-width: 900px) {
            position: absolute;
            margin: 0;
            bottom: 15%;
            left: 1%;
            width: 13%;        
            height: 20vh;
            max-height: 216px;
        }

        @media(min-width: 1900px) {
            left: 7%;
        }
    }
    
    #play-button-image {
        cursor: pointer;
        transition: all 0.2s ease-in;
        width: 80%;
        border-radius: 50%;

        @media(min-width: 900px) {
            width: 65%;
            max-width: 256px;
        }

        :hover {
            width: 70%;
            transition: all 0.2s ease-out;
            background: ${props => props.theme.palette.primary.lighter};
        }

        :focus {
            width: 75%;
            transition: all 0.2s ease-out;
            outline: 0;
            background: ${props => props.theme.palette.primary.light};
        }
    }
   
`
