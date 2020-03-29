import React from 'react'
import styled from 'styled-components'

export default function ServiceCard(props) {
    return (
        <ServiceCardWrapper img={props.img}>
            <div className="row shadowRow" data-aos="flip-down">
                <button className="rightArrow arrowBtn col-12" onClick={props.handleArrow}>
                    <i className="fas fa-long-arrow-alt-right"></i>
                </button>
                <div className="mx-auto row shadowRow">
                    <div className="row shadowRow">
                        <div className="col-12 col-md-6 col-lg-6 serviceCol">  
                            <div className="serviceImgContainer mx-auto"></div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 serviceCol">
                            <div className="textContainer mx-auto">
                                <div className="serviceSeparator mx-auto"/>
                                <h5 className="serviceTitle">
                                    {props.title}
                                </h5>
                                <p className="serviceText">
                                    {props.text}
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
            margin-bottom: 0.5rem;
            border-radius: 10px;
        }
        .serviceTitle {
            color: var(--mainGold);
            font-size: 1.5rem;
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
            margin-top: 1rem;
            padding: 0;
            height: 6rem;
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