import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import img from '../logo.png'

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="row">
                <div className="col">
                    <div className="firstCol">
                        <img src={img}></img> 
                    </div>
                </div>
                <div className="col">
                    <div>
                        <Link to="/медитация" onClick={() => window.scrollTo(0,0)}><p>Медитация</p></Link>
                        <Link to="/соулколаж" onClick={() => window.scrollTo(0,0)}><p>Соул Колаж</p></Link>
                        <Link to="/холотропнодишане" onClick={() => window.scrollTo(0,0)}><p>Холотропно Дишане</p></Link>
                        <Link to="/замен" onClick={() => window.scrollTo(0,0)}><p>За мен</p></Link>
                        <Link to="/контакти" onClick={() => window.scrollTo(0,0)}><p>Контакти</p></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="facebookDiv">
                        <a href="https://www.facebook.com/HarmonizeHolos/"><i className="fab fa-facebook-square"></i></a>
                        <a href="mailto:holosbg@gmail.com" className="ml-3"><i className="fas fa-envelope"></i></a>
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
        margin-top: 1.5rem;
        img {
            width: 8rem;
            height: 8rem;
        }
    }
    .col {
        p {
            color: var(--mainDark);
            text-decoration: none;
            font-family: 'Pattaya', sans-serif;
        }
        p:hover {
            transform: scale(1.1);
            color: var(--mainBlue);
        }
    }
    h5 {
        color: white;
        font-size: 4rem;
    }
    .copyrightText {
        color: var(--mainGold);
        padding-bottom: 0;
        padding-top: 0.5rem;
    }
    .gold {
        font-size: 4rem;
        margin-left: -0.6rem;
        color: var(--mainGold)
    }
    i {
        font-size: 2.5rem;
        color: var(--mainGold);
        cursor: pointer;
    }
    i: hover {
        transform: scale(1.1);
        color: var(--mainDark);
    }
    .facebookDiv {
        margin-top: 4.5rem;
    }
`