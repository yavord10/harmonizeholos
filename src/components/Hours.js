import React from 'react'
import styled from 'styled-components'

export default function Hours() {
    return (
        <HoursWrapper>
            <h3 className="hoursTitle">Часове</h3>
            <div className="onlineDiv">
                <h5 className="hoursOnline">Он-лайн</h5>
            </div>
            <div className="placeDiv">

            </div>
        </HoursWrapper>
    )
}

const HoursWrapper = styled.div`
    margin-top: 5rem;
`