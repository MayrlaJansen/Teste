import React, { useState, useEffect, useRef } from 'react'
import { Box, Typography } from '@material-ui/core'

import Container from './styles'

import btn1 from '../../assets/images/01.jpeg'
import btn2 from '../../assets/images/02.jpeg'
import btn3 from '../../assets/images/03.jpeg'
import btn4 from '../../assets/images/04.jpeg'
import btn5 from '../../assets/images/05.jpeg'

export default function(props) {
    const { texts } = props

    const btn1_ref = useRef(null)

    const [current, setCurrent] = useState(1)

    useEffect(() => {
        btn1_ref.current.focus()
    }, [])

    return (
        <Container>
            <Box id="table-buttons">
                <Box className="table-button">
                    <img
                        src={btn1}
                        ref={btn1_ref}
                        alt="DDL"
                        className="table-button-img"
                        tabIndex="0"
                        onClick={() => setCurrent(1)}
                    />
                </Box>
                <Box className="table-button">
                    <img
                        src={btn2}
                        alt="DML"
                        className="table-button-img"
                        tabIndex="0"
                        onClick={() => setCurrent(2)}
                    />
                </Box>
                <Box className="table-button">
                    <img
                        src={btn3}
                        alt="DQL"
                        className="table-button-img"
                        tabIndex="0"
                        onClick={() => setCurrent(3)}
                    />
                </Box>
                <Box className="table-button">
                    <img
                        src={btn4}
                        alt="DTL"
                        className="table-button-img"
                        tabIndex="0"
                        onClick={() => setCurrent(4)}
                    />
                </Box>
                <Box className="table-button">
                    <img
                        src={btn5}
                        alt="DCL"
                        className="table-button-img"
                        tabIndex="0"
                        onClick={() => setCurrent(5)}
                    />
                </Box>
            </Box>
            <Box id="table-text">
                <Typography variant="body1">
                    {texts[current-1].content}
                </Typography>
            </Box>
        </Container>
    )
}
