import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import left from '../../assets/images/retornar.jpeg'
import right from '../../assets/images/botao_avancar.png'
import home from '../../assets/images/botao_home.jpeg'
import $ from 'jquery'

let StyledDiv = styled.div`
    position: absolute;
    width: 100%;
    display: block;
    bottom: -1%;
    .my-row{
        width: 100%;
        background-color: #ffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1%;
    }
    img{
        width: 15% !important;
        transition: all 0.8s;
        :hover{
            transform: scale(1.30);
        }
    }
    .ajustes{
        
    width: 45%;
    margin-left: 14%;;
    

    }
`

export default class BottomNav extends React.Component{

    componentDidMount(){
        if(this.props.nextPag == false) $('.next').hide();
    }
    render(){
        return (
            <StyledDiv>
                <div className="my-row">
                    <Link to={`${this.props.prevPag}`} className="text-center">
                        <img alt="" className="" src={left}></img>
                    </Link>
                    <div className="ajustes">
                        <Link to="/" className="text-center ajustes">
                            <img alt="" className="" src={home}></img>
                        </Link>
                    </div>
                    <Link to={`${this.props.nextPag}`} className="text-center next">
                        <img alt="" className="" src={right}></img>
                    </Link>
                </div>
            </StyledDiv>
        );
    }
}