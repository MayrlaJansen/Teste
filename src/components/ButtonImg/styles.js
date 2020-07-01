import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a, .placeholder {
        display: flex;
        justify-content: center;
        width: 30%;

        @media(min-width: 900px){
            width: 40%;
        }
    }

    a {
        cursor: pointer;
    }

    #btn-image {
        img {
            width: 100%;
        }
    }

    div#btn-pagination {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img#btn-pagination {
        width: 70%;
        min-width: 60px;
        border-radius: 10px;
        transition: 0.2s ease-out;

        @media(min-width: 600px) {
            width: 90%;
        }

        @media(min-width: 900px) {
            width: 70%;
        }
        
        @media(min-width: 1800px) {
            width: 85%;
        }
    }

    img#btn-pagination:hover {
        background: ${props => props.theme.palette.primary.dark};
        border-radius: 10px;
        width: 75%;
        transition: 0.2s ease-in;

        @media(min-width: 900px) {
            width: 75%;
        }

        @media(min-width: 1900px) {
            width: 90%;
        }
    }

    img#btn-pagination-disabled {
        width: 100%;
        opacity: 0;
    }
`