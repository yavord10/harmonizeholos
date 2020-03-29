import React from 'react'
import styled from 'styled-components'

export default function Hours() {
    return (
        <HoursWrapper>
            <h3 className="hoursTitle" data-aos="flip-up">Резервация</h3>
            <div className="placeDiv p-3 mt-3">
                <h5>На място:</h5>
                <p>Медитация, Холотропно Дишане, Соул Колаж, Хармонично Дишане, Консултации</p>
            </div>
            <div className="onlineDiv p-3 my-3">
                <h5 className="hoursOnline">Он-лайн:</h5>
                <p>Медитация, Соул Колаж, Хармонично Дишане, Консултации</p>
            </div>
            <h5 className="mb-3">Направете запитване:</h5>
            <div className="sessionContainer mx-auto">
                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScTxho6Mik9N2aZTGnM-XrgfJTKpP3JX1jQ7ncN1RlUW63bLg/formResponse">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Име</label>
                        <input type="text" className="form-control quantumWizTextinputPaperinputInput exportInput" id="exampleFormControlInput1" name="entry.1045781291" placeholder="Име" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Презиме</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Презиме" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Имейл Адрес</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="entry.1065046570"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Сесия</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Холотропно Дишане</option>
                            <option>Медитация</option>
                            <option>Соул Колаж</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Час</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="19:30" />
                    </div>
                    <button type="submit" className="btn">Прати</button>
                </form>
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
    .sessionContainer {
        padding: 1rem;
        width: 70%;
        box-shadow: 1px 1px 10px -5px grey;
        background: white;
        overflow-y: none;
        color: var(--mainDark);
    }
    .btn {
        background: var(--mainGold);
    }
    p {
        color: var(--mainGold);
    }
`