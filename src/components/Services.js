import React, { Component } from 'react'
import styled from 'styled-components'
import meditate from '../meditate.png'
import lie from '../lie.png'
import draw from '../draw.png'

export default class Services extends Component {
    render() {
        return (
            <ServicesWrapper>
                <div className="servicesSeparator">
                    <h3 className="servicesSeparatorText mx-auto" data-aos="fade-up">Методи</h3>
                    <div className="separator mx-auto" data-aos="fade-left"></div>
                </div>
                <div className="servicesContainer row">
                    <div className="servicesCol col-10 col-md-3 col-lg-3 mx-auto">
                        <div className="serviceCard mx-auto" data-aos="flip-left">
                            <img src={meditate} alt="медитация"/>
                            <h5 className="serviceTitle">Медитация</h5>
                            <p className="serviceText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="servicesCol col-10 col-md-3 col-lg-3 mx-auto" >
                        <div className="serviceCard mx-auto" data-aos="flip-right">
                            <img src={lie} alt="холотропно дишане"/>
                            <h5 className="serviceTitle">Холотропно Дишане</h5>
                            <p className="serviceText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="servicesCol col-10 col-md-3 col-lg-3 mx-auto">
                        <div className="serviceCard mx-auto" data-aos="flip-left">
                            <img src={draw} alt="соул колаж"/>
                            <h5 className="serviceTitle">Соул Колаж</h5>
                            <p className="serviceText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="servicesCol col-10 col-md-3 col-lg-3 mx-auto">
                        <div className="serviceCard mx-auto" data-aos="flip-right">
                            <img src={draw} alt="соул колаж"/>
                            <h5 className="serviceTitle">Хармонично Дишане</h5>
                            <p className="serviceText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
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
        box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.2);
        .serviceTitle {
            color: var(--mainBlue);
            font-size: 1.5rem;
        }
        .serviceText {
            color: black;
        }
    }
    .separator {
        margin-top: 2rem;
        border: solid 2px var(--mainGold);
        border-radius: 10%;
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
`
