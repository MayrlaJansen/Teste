import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

export default function(props) {

    const {image, id, to} = props

    return (
        <Container id={id}>
            {
                to?
                <Link to={to} id={id} alt="">
                    <img src={image} id={id} alt="" />
                </Link>
                :
                <div className="placeholder">
                    <img src={image} id={id} alt="" onClick={props.onClick} />
                </div>
            }
        </Container>
    )
}