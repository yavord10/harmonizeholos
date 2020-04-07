import React, { Component } from 'react'
import styled from 'styled-components'
import img from '.././sky.jpg'
import Services from './Services';
import ServicesT from './ServicesT';
import Session from './Session';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <div className="imgContainer"/>
                <div className="homeModal" data-aos="zoom-in">
                    <h3 className="homeTitle">Harmonize<span className="colorSpan">Holos</span></h3>
                    <p className="homeText">Или как да бъдем по-хармонични и цялостни, как да живеем по-хармонично и цялостно, как отношенията ни да бъдат по-хармонични и цялостни, 
                    как обкръжението ни да бъде по-хармонично и цялостно. Всичко започва от самите нас – осъзнаването, промяната, израстването, еволюцията!</p>
                    <Link to="/резервация"><button className="homeButton">Регистрация</button></Link>
                </div>
                <ServicesT />
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
        top: 35%;
        left: 25%;
        width: 50%;
    }
    .homeText {
        color: white;
        font-weight: bold;
        font-size: 0.9rem;
    }
    .homeButton {
        margin-top: 1rem;
        background rgba(58, 51, 71, 0.8);
        border: none;
        color: white;
        font-size: 1.4rem;
        outline: none;
        transition: background 0.5s;
        transition: font-size 0.5s;
        border-radius: 3px;
        padding: 0.5rem;
        padding-top: 0.3rem;
    }
    .homeButton:hover {
        font-size: 1.6rem;
    }   
    @media (max-width: 500px) {
        .homeModal {
            top: 20%;
            width: 80%;
            left: 10%;
        }
    }
`