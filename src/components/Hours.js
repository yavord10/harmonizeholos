import React from 'react'
import styled from 'styled-components'
import CustomForm from './CustomForm'

export default function Hours() {
    return (
        <HoursWrapper>
            <h3 className="hoursTitle" data-aos="zoom-in-down">Услуги</h3>
            <div className="placeDiv p-3 mt-3">
                <h5>На място:</h5>
                <p>Медитация, Холотропно Дишане, Соул Колаж, Хармонично Дишане, Консултации</p>
            </div>
            <div className="onlineDiv p-3 my-3">
                <h5 className="hoursOnline">Он-лайн:</h5>
                <p>Медитация, Соул Колаж, Хармонично Дишане, Консултации</p>
            </div>
            <h5 className="mb-3">Направете запитване:</h5>
            <div className="formContainer container">
                <CustomForm />
            </div>
        </HoursWrapper>
    )
}

const HoursWrapper = styled.div`
    padding: 1rem;
    margin-top: 5rem;
    h3 {
        color: var(--mainBlue);
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    h5 {
        margin-left: 1rem;
        color: var(--mainDark);
    }
    .formContainer {
        width: 80%;
    }
    .sessionContainer {
        padding: 1rem;
        width: 80%;
        box-shadow: 1px 1px 10px -5px grey;
        background: white;
        overflow-y: none;
    }
    .btn {
        background: var(--mainBlue);
        color: white;
        transition: transform 0.5s;
    }
    .btn:hover {
        transform: scale(1.1);
    }
    .star {
        color: crimson;
    }
    p {
        color: var(--mainGold);
    }
`