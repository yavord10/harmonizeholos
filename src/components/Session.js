import React, { Component } from 'react'
import styled from 'styled-components'

export default class Session extends Component {
    render() {
        return (
            <SessionWrapper>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="sessionTextContainer mx-auto">
                            <h5 className="sessionTitle">
                                Направете Запитване
                            </h5>
                            <p className="sessionText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
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
                    </div>
                </div>
            </SessionWrapper>
        )
    }
}

const SessionWrapper = styled.div`
    .row {
        background: var(--mainGold);
        padding: 2rem;
        box-shadow: inset 0 0 10px grey;
    }
    .sessionContainer {
        padding: 1rem;
        width: 80%;
        box-shadow: 1px 1px 10px -5px grey;
        background: white;
        overflow-y: none;
    }
    .sessionTextContainer {
        margin-top: 10rem;
        width: 70%;
        .sessionTitle {
            color: var(--mainBlue);
            font-weight: bold;
            font-size: 1.5rem;
        }
        .sessionText {
            color: white;
        }
    }
    .btn {
        background: var(--mainBlue);
        color: white;
    }
`
