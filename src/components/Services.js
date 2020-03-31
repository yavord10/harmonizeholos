import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Services extends Component {
    render() {
        return (
            <ServicesWrapper>
                <div className="servicesSeparator">
                    <h3 className="servicesSeparatorText mx-auto" data-aos="fade-up">Услуги</h3>
                    <div className="separator mx-auto" data-aos="fade-left"></div>
                </div>
                <div className="servicesContainer row">
                    <div className="servicesCol col-10 col-md-4 col-lg-4 mx-auto">
                        <div className="serviceCard mx-auto" data-aos="flip-left">
                            <i className="fas fa-lightbulb"></i>
                            <h5 className="serviceTitle">Психологическо консултиране</h5>
                            <div className="serviceText">
                                Психологическото консултиране е подход, ориентиран към оказване на краткосорчна психологическа помощ във връзка с преодоляване на конкретна 
                                трудност или проблем на клиента. 
                                <p className="personalParagraph">
                                    Обикновено в рамките на няколко сесии се постига по-голяма яснота по отношение на възможностите за справяне със ситуацията и/или проблема.
                                </p>
                                <Link to="/услуги/консултации"><button className="serviceCardBtn mx-auto btn">Прочетете Повече</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="servicesCol col-10 col-md-4 col-lg-4 mx-auto" >
                        <div className="serviceCard mx-auto" data-aos="flip-right">
                            <i className="fas fa-brain"></i>
                            <h5 className="serviceTitle">Психотерапия</h5>
                            <div className="serviceText">
                                <p><span className="green">Трансперсонална</span> психотерапия</p>
                                <p><span className="green">Когнитивно-поведенческа</span> психотерапия</p>
                                <p><span className="green">Основана на майндфулнес</span> психотерапия</p>
                                <p className="personalParagraph">
                                    Терапевтичната работа изисква посвещаване на време и постоянство за трайна промяна и за сформиране на нови нагласи и модели.    
                                </p>
                                <p className="">За провеждането на индивидуални сесии <span className="green">на място или онлайн</span> е необходимо лично договаряне.</p>
                            </div>
                            <Link to="/услуги/психотерапия"><button className="serviceCardBtn mx-auto btn">Прочетете Повече</button></Link>
                        </div>
                    </div>
                    <div className="servicesCol col-10 col-md-4 col-lg-4 mx-auto">
                        <div className="serviceCard mx-auto" data-aos="flip-left">
                            <i className="fas fa-route"></i>
                            <h5 className="serviceTitle mb-3">Личностно развитие</h5>
                            <div className="serviceText">
                                <p>Регулярни <span className="green">групови сесии</span> по:</p>
                                <p className="mt-3 mb-0">Холотропно дишане</p>
                                <p className="my-0">Соул Колаж</p>
                                <p className="my-0">Медитация</p>
                                <p className="mb-3">Хармонично Дишане</p>
                                <p className="personalParagraph">За провеждането на индивидуални сесии <span className="green">на място или онлайн</span> е необходимо лично договаряне.</p>
                                <Link to="/услуги/личностноразвитие"><button className="serviceCardBtn mx-auto btn">Прочетете Повече</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ServicesWrapper>
        )
    }
}

const ServicesWrapper = styled.div`
    margin-bottom: 4rem;
    .serviceCard {
        background: var(--lightBlue);
        margin-top: 3rem;
        padding: 1rem;
        box-shadow: 0px 0px 10px -5px grey;
        .serviceTitle {
            color: var(--mainBlue);
            font-size: 1.5rem;
        }
        .serviceText {
            color: var(--mainDark);
            text-align: center;
        }
        .green {
            font-weight: bold;
        }
        transition: transform 0.5s;
        i {
            color: var(--mainGold);
            font-size: 4rem;
            margin-bottom: 0.5rem;
        }
    }
    .serviceCard:hover {
        transform: scale(1.1);
    }
    .separator {
        margin-top: 2rem;
        border: solid 3px var(--mainGold);
        border-radius: 10px;
        width: 3%;
    }
    .servicesSeparator {
        width: 100%;
    }
    .servicesSeparatorText {
        color: var(--mainDark);
        text-align: center;
        font-size: 2.5rem;
    }
    h3 {
        margin-top: 2rem;
        margin-left: 1rem;
    }
    .row {
        padding: 1rem;
    }
    .personalParagraph {
        margin-top: 1rem;
    }
    .serviceCardBtn {
        border: solid 2px var(--mainBlue);
        color: var(--mainBlue);
        transition: transform 0.5s;
        outline: none;
    }
    .serviceCardBtn:hover {
        transform: scale(1.05);
    }
`
