import React, { Component } from 'react'
import styled from 'styled-components'

export default class Services extends Component {
    render() {
        return (
            <ServicesWrapper>
                <div className="servicesSeparator">
                    <h3 className="servicesSeparatorText">Услуги</h3>
                </div>
                <div className="servicesContainer row">
                    <div className="servicesCol col-10 col-md-4 col-lg-4 mx-auto">
                        <div className="serviceCard mx-auto">
                            <h5 className="serviceTitle">Медитация</h5>
                            <p className="serviceText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="servicesCol col-10 col-md-4 col-lg-4 mx-auto">
                        <div className="serviceCard mx-auto">
                            <h5 className="serviceTitle">Холотропно Дишане</h5>
                            <p className="serviceText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="servicesCol col-10 col-md-4 col-lg-4 mx-auto">
                        <div className="serviceCard mx-auto">
                            <h5 className="serviceTitle">Соул Колаж</h5>
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
    margin-bottom: 3rem;
    .serviceCard {
        margin-top: 3rem;
        padding: 1rem;
        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2);
        .serviceTitle {
            color: gold;
        }
        .serviceText {
            color: black;
        }
    }
    .servicesSeparator {
        width: 100%;
    }
    h3 {
        margin-top: 2rem;
        margin-left: 1rem;
    }
`
