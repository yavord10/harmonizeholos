import React from 'react'
import styled from 'styled-components'
import CustomForm from './CustomForm'

export default function Hours() {
    window.scrollTo(0,0)
    return (
        <HoursWrapper>
            <h3 className="hoursTitle" data-aos="zoom-in-down">Направете запитване</h3>
            <div className="placeDiv p-3 mt-3">
                <p>С попълването на представената по-долу форма, може да отправите своите въпроси, да споделите своя проблем или нужда, или просто да се регистрирате, за да получавате информация за организираните от мен събития. </p>
                <p>Ежемесечно организирам групови сесии за личностно себепознание и развитие, като използвам методите, с които работя. Ако се интересувате от конкретен метод и искате да получавате информация само и единствено за него, отбележете това в полето за “Запитване”. </p>
            </div>
            <div className="onlineDiv p-3 mb-3">
                <p>Възможно е и провеждането на индивидуални он-лайн консултации и терапии. В този случай може да използваме някоя от следните он-лайн платформи: <span className="dark">Google Hangouts, Zoom, Skype </span> в зависимост от вашите предпочитания.</p>
            </div>
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
    .dark {
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