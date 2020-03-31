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
                                Каквото и да се върти в главата ви, не се колебайте да отправите своите въпроси. Ще се радвам да мога бъда от полза и 
                                вярвам, че заедно можем да открием търсените отговори. Понякога се иска кураж, за да направим първата стъпка!
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
