import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    div#background {
        display: flex;
        align-items: center;
        justify-content: center;
        position: static;
        width: 100%;
        height: 100%;
        padding: 10px 0px;
        overflow: hidden;

        @media (min-width: 900px) {
            z-index: 0;
            overflow: hidden;
            position: absolute;
            height: 95vh;
            margin-right: -10%;
            justify-content: flex-end;
            padding-top: 0;
        }
    }

    img#background {
        width: 80%;
        pointer-events: none;

        @media(min-width: 900px) {
            width: 70%;
            margin-right: -5%;
        }

        @media(min-width: 1200px) {
            width: 62%;
            max-width: 1720px;
        }

        @media(min-width: 1800px) {
            width: 65%;
            margin-right: -3%;
        }
    }

    .green-text-col{
        width: 45vw;
        height: 87%;
        position: absolute;
        left: 0;
        top: 0;
        margin: 0;
        padding: 10px 0;
        display: flex;
        align-items: center;
    }
    #greentextbox {
        background-color: #005385;
        color: ${props => props.theme.palette.background.main};
        position: static;
        padding: 20px;
        width: 100%;
        height: 70vh;
        margin-bottom: 1.25rem;
        ul {
            margin: 0;
        }

        @media(min-width: 650px) {
            padding: 20px;
            width: 100%;
        }

        @media(min-width: 900px) {
            position: relative !important;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            z-index: 1;
            width: 100%;
            min-height: 70%;
            max-height: 95%;
            padding: 15px 15px;
            border-radius: 0px 30px 30px 0px;
            * {
                position: relative !important;
            }
        }
    }

    #greentextbox p {
        margin-bottom: 2rem;
    }

    #greentextbox h6 {
        text-align: center;
    }

`
