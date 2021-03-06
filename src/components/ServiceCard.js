import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function ServiceCard(props) {
    return (
        <ServiceCardWrapper img={props.info.img}>
            <div className="row shadowRow mx-auto" data-aos="flip-down">
                <button className="rightArrow arrowBtn col-12" onClick={props.handleArrow}>
                    <i className="fas fa-long-arrow-alt-right"></i>
                </button>
                <Link to={`/${props.link}`}>
                    <div className="mx-auto row shadowRow">
                        <div className="row shadowRow">
                            <div className="row shadowRow lastRow">
                                <div className="col-12 col-md-6 col-lg-6 serviceCol">  
                                    <div className="serviceImgContainer mx-auto"></div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 serviceCol">
                                    <div className="textContainer mx-auto">
                                        <h5 className="serviceTitle">
                                            {props.info.title}
                                        </h5>
                                        <div className="serviceSeparator mx-auto"/>
                                        <p className="serviceText">
                                            {props.info.text}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="dots row mx-auto" onClick={props.handleDot}>
                                            <div className={props.state === 1 ? "dot dot1 clicked" : "dot dot1"}>
                                                <div className="innerDot innerDot1"></div>
                                            </div>
                                            <div className={props.state === 2 ? "dot dot2 clicked" : "dot dot2"}>
                                                <div className="innerDot innerDot2"></div>
                                            </div>
                                            <div className={props.state === 3 ? "dot dot3 clicked" : "dot dot3"}>
                                                <div className="innerDot innerDot3"></div>
                                            </div>
                                            <div className={props.state === 4 ? "dot dot4 clicked" : "dot dot4"}>
                                                <div className="innerDot innerDot4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <button className="leftArrow arrowBtn col-12" onClick={props.handleArrow}>
                    <i className="fas fa-long-arrow-alt-left"></i>
                </button>
            </div>
        </ServiceCardWrapper>
    )
}

const ServiceCardWrapper = styled.div`
    padding: 2rem;
    .serviceCol {
        padding: 2rem;
    }
    .shadowRow {
        box-shadow: 0px 0px 10px grey;
    }
    .dots {
        margin-bottom: 0.5rem;
    }
    .textContainer {
        padding-top: 1rem;
        padding-bottom: 2rem;
        width: 95%;
        color: var(--mainDark);
        .serviceSeparator {
            width: 5%;
            border: solid 3px var(--mainBlue);
            margin-bottom: 1rem;
            border-radius: 10px;
            margin-top: 1rem;
        }
        .serviceTitle {
            color: var(--mainDark);
            font-size: 1.8rem;
        }
        animation: zoom-in 0.5s ease-in-out;
    }
    .serviceImgContainer {
        padding-top: 2rem;
        padding-bottom: 2rem;
        width: 95%;
        height: 20rem;
        background-image: url(${props => props.img});
        background-position: center;
        background-size: cover;
        animation: zoom-in 0.5s ease-in-out;
        box-shadow: 0 0 10px -5px grey;
    }
    .arrowBtn {
        background: var(--mainGold);
        border: var(--mainGold);
        color: white;
        outline: none;
        padding: none;
        transition: background 0.5s;
    }
    .arrowBtn:hover {
        background: var(--mainDark);
    }
    .leftArrow {
        text-align: left;
    }
    .rightArrow {
        text-align: right;
    }
    .fas {
        font-size: 1.5rem;
    }
    @keyframes zoom-in {
        0% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
    @media (max-width: 500px) {
        .serviceImgContainer {
            display: none;
        }
        .textContainer {
            margin-top: 0.5rem;
            padding: 0;
            padding-bottom: 1rem;
        }
        .serviceCol {
            padding-top: 0;
            padding-bottom: 0;
        }
    }
`