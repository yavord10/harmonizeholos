import React, { Component } from 'react'
import styled from 'styled-components'
import img from '.././sky.jpg'
import Services from './Services';
import Session from './Session';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <div className="imgContainer"/>
                <div className="homeModal">
                    <h3 className="homeTitle">Harmonize<span className="colorSpan">Holos</span></h3>
                    <h5 className="homeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                    <button className="homeButton">Регистрация</button>
                </div>
                <Services />
                <Session />
            </HomeWrapper>
        )
    }
}

const HomeWrapper = styled.div`
    .imgContainer {
        z-index: -1;
        width: 100%;
        height: 100vh;
        background-image: url(${img});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: grayscale(20%) brightness(70%);
        box-shadow: 0px 1px 10px -5px grey;
    }
    .homeTitle {
        color: white;
        .colorSpan {
            color: var(--mainBlue);
        }
    }
    .homeModal {
        z-index: 1;
        padding: 1rem;
        position: absolute;
        bottom: 40%;
        left: 25%;
        width: 50%;
    }
    .homeText {
        color: var(--mainBlue);
    }
    .homeButton {
        margin-top: 1rem;
        background none;
        border: solid 1px var(--mainBlue);
        color: white;
        font-size: 1.4rem;
    }
`