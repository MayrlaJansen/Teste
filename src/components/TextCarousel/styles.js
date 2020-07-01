import styled from 'styled-components';

const Container = styled.div`
    background-color: ${props => props.currentColor};
    color: ${props => props.theme.palette.background.main};
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2% 10%;
    border-radius: 15px;
    text-indent: 2rem;
    position: relative;
    transition: background-color 0.5s;

    @media (min-width: 900px) and (max-width: 1300px) {
        margin-bottom: 20vh;
    }

    @media(min-width: 900px) {
        height: 20vh;
    }

    @media(min-width: 1800px) {
        height: 25vh;
    }

    div#prev, div#next {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10%;
    }

    img#prev, img#next {
        cursor: pointer;
        width: 85%;
        border-radius: 10px;
        transition: 0.2s ease-out;
    }

    img#prev-disabled, img#next-disabled {
        width: 85%;
        opacity: 0.5;
        transition: 0.2s ease-out;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
    }

    div#prev {
        left: -5%;
    }

    div#next {
        right: -5%;
    }

    img#prev, img#prev-disabled {
        transform: scaleX(-1);
    }

    img#prev:hover, img#next:hover {
        background-color: ${props => props.theme.palette.secondary.light};
        border-radius: 10px;
        width: 100%;
        transition: 0.2s ease-out;
    }

    #indicator {
        position: absolute;
        bottom: 2%;
        display: flex;
        flex-direction: row;
    }

    .placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span.circle {
        display: block;
        width: 10px;
        height: 10px;
        background: ${props => props.theme.palette.background.main};
        border-radius: 50%;
        margin: 6px;
        opacity: 0.5;
        transition: 0.2s linear;
    }

    span.bigger {
        width: 15px;
        height: 15px;
        opacity: 1;
        transition: 0.2s linear;
    }
    
`

export default Container