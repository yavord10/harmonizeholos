import React, { Component } from 'react'
import styled from 'styled-components'
import CustomForm from './CustomForm'

export default class Session extends Component {
    render() {
        return (
            <SessionWrapper>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="sessionTextContainer mx-auto" data-aos="zoom-in-right">
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
                        <CustomForm />
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
    .sessionTextContainer {
        margin-top: 10rem;
        width: 70%;
        .sessionTitle {
            color: var(--mainBlue);
            font-weight: bold;
            font-size: 2rem;
        }
        .sessionText {
            color: white;
        }
    }
    @media (max-width: 767px) {
        .sessionTextContainer {
            margin-top: 0rem;
        }
    }
`
