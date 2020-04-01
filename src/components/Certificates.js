import React from 'react'
import img1 from '../certificate1.jpeg'
import img2 from '../certificate2.jpeg'
import img3 from '../certificate3.jpeg'
import img4 from '../certificate4.jpeg'
import img5 from '../certificate5.jpeg'
import img6 from '../certificate6.jpeg'
import img7 from '../certificate7.png'
import styled from 'styled-components'

export default function Certificates() {
    return (
        <CertificatesWrapper>
            <h5 className="aboutMeTitle" data-aos="zoom-in">Сертификати</h5>
            <div className="separator mx-auto" data-aos="fade-left"></div>
            <div className="row container mx-auto" data-aos="fade-right">
                <div className="col-6 col-lg-4 col-md-4 mb-3">
                    <img src={img1} alt="certificate"/>
                </div>
                <div className="col-6 col-lg-4 col-md-4 mb-3">
                    <img src={img2} alt="certificate"/>
                </div>
                <div className="col-6 col-lg-4 col-md-4 mb-3">
                    <img src={img3} alt="certificate"/>
                </div>
                <div className="col-6 col-lg-4 col-md-4 mb-3">
                    <img src={img4} alt="certificate"/>
                </div>
                <div className="col-6 col-lg-4 col-md-4 mb-3">
                    <img src={img5} alt="certificate"/>
                </div>
                <div className="col-6 col-lg-4 col-md-4 mb-3">
                    <img src={img6} alt="certificate"/>
                </div> 
                <div className="col-6 col-lg-4 col-md-4 mb-3 mx-auto">
                    <img src={img7} alt="certificate"/>
                </div> 
            </div>
        </CertificatesWrapper>
    )
}

const CertificatesWrapper = styled.div`
    .separator {
        margin-top: 1rem;
        border: solid 3px var(--mainGold);
        border-radius: 10px;
        width: 3%;
    }
    img {
        width: 100%;
        height: 100%;
        z-index: -1;
        transition: transform 0.5s;
        box-shadow: 0px 0px 5px grey;
    }
    .row {
        width: 60%;
        margin-top: 3rem;
    }
    img:hover{
        cursor: pointer;
        position: relative;
        transform: scale(1.5);
        z-index: 9999;
        box-shadow: 0px 0px 15px grey;
    }
`