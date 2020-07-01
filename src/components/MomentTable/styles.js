import styled from 'styled-components'

const Container = styled.div`  
    width: 100%;
    height: 60vh;
    background-color: #a6dced;
    color: #000;
    border-radius: 15px;
    margin: 10px 0px;
    padding: 5px;
    display: flex;
    flex-direction: row;

    @media(min-width: 900px) {
        flex-direction: column;
        height: 50vh;
        margin: 15px 0px;
        padding: 10px;
    }

    @media(min-width: 1900px) {
        margin: 30px 0px;
    }

    #table-text {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5%;
        text-indent: 2rem;
        width: 80%;
        height: 100%;
        margin-top: -5%;

        @media(min-width: 900px) {
            width: 100%;
            height: 65%;
        }
    }

    #table-buttons {
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media(min-width: 900px) {
            align-items: center;
            flex-direction: row;
            width: 100%;
            height: 35%;
        }
    }

    .table-button {
        /* 4 aqui é o número de botões */
        height: calc(100%/4);
        display: flex;
        justify-content: center;
        align-items: center;

        @media(min-width: 900px) {
            width: calc(100% / 4);        
        }
    }

    .table-button-img {
        width: 85%;
        border-radius: 5px;
        transition: 0.2s ease-out;

        @media(min-width: 900px) {
            width: 65%;
            border-radius: 10px;
        }
    }

    .table-button-img:hover {
        background-color: ${props => props.theme.palette.secondary.light};
        width: 90%;
        transition: 0.2s ease-out;

        @media(min-width: 900px) {
            width: 70%;
        }
    }

    .table-button-img:focus {
        background-color: ${props => props.theme.palette.secondary.lighter};
        outline: 0;
        width: 95%;
        transition: 0.2s ease-out;

        @media(min-width: 900px) {
            width: 75%;
        }
    }
`

export default Container