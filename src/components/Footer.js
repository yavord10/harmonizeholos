import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="row">
                <div className="col">
                    <div>
                        <p>Медитация</p>
                        <p>Соул Колаж</p>
                        <p>Холотропно Дишане</p>
                        <Link to="/замен"><p>За мен</p></Link>
                        <p>Контакти</p>
                    </div>
                </div>
                <div className="col">
                    <div className="firstCol">
                        <h5>H<span className="gold">H</span></h5>
                    </div>
                </div>
            </div>
            <div className="mb-0">
                <p className="mx-auto copyrightText">@HarmonizeHolos - Copyright 2020</p>
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    .row {
        padding: 2rem;
        background: var(--lightBlue)
    }
    .firstCol {
        margin-top: 5rem;
    }
    .col {
        p {
            color: white;
            text-decoration: none;
        }
    }
    h5 {
        color: white;
        font-size: 4rem;
    }
    .copyrightText {
        color: var(--mainBlue);
    }
    .gold {
        font-size: 4rem;
        margin-left: -0.6rem;
        color: var(--mainGold)
    }
`