import React from 'react'
import styled from 'styled-components'


const StyledClass = styled.div`
    h2 {
        color: red;
    }
`

export default function Class(props) {
    const { details } = props
    return (
        <StyledClass>
            <h2>
                {details.className}
            </h2>
            <p>{details.location}</p>
            <p>Attendies: {details.maxClassSize}</p>
        </StyledClass>
    )
}