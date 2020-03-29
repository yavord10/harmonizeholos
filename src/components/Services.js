import React, { Component } from 'react'
import styled from 'styled-components'
import meditate from '../meditate.png'
import lie from '../lie.png'
import draw from '../draw.png'

export default class Services extends Component {
    render() {
        return (
            <ServicesWrapper>
                <div className="servicesSeparator">
                    <h3 className="servicesSeparatorText mx-auto" data-aos="fade-up">Услуги</h3>
                    <div className="separator mx-auto" data-aos="fade-left"></div>
                </div>
                <div className="servicesContainer row">
                    <div className="servicesCol col-10 col-md-3 col-lg-3 mx-auto">
                        <div className="serviceCard mx-auto" data-aos="flip-left">
                            <img src={meditate} alt="медитация"/>
                            <h5 className="serviceTitle">Холотропно Дишане</h5>
                            <p className="serviceText">
                                Холотропното дишане e мощен метод за себеизследване и себепознание, има силен терапевтичен и изцелителен ефект посредством разтоварване и освобождаване на 
                                натрупани енергийни блокажи, осъзнаване на важни и основни човешки ценности, както и разширяване на съзнанието, в това число представата ни за самите себе си, другите и света. 
                                “Холотропно” буквално означава “движение към цялостност”. 
                            </p>
                        </div>
                    </div>
                    <div className="servicesCol col-10 col-md-3 col-lg-3 mx-auto" >
                        <div className="serviceCard mx-auto" data-aos="flip-right">
                            <img src={lie} alt="холотропно дишане"/>
                            <h5 className="serviceTitle">Соул Колаж</h5>
                            <p className="serviceText">
                                Методът Соул Колаж е уникален метод за самопознание и себеизследване, който използва творческата страна на индивида, заедно с неговата интуиция и въображение. С помощта на 
                                създаваните карти-колажи всеки един постепенно открива различни аспекти от своята личност и обединявайки се с тях, оформя пъзела на цялостната си хармонична личност. 
                            </p>
                        </div>
                    </div>
                    <div className="servicesCol col-10 col-md-3 col-lg-3 mx-auto">
                        <div className="serviceCard mx-auto" data-aos="flip-left">
                            <img src={draw} alt="соул колаж"/>
                            <h5 className="serviceTitle">Медитация</h5>
                            <p className="serviceText">
                                Когато успеем да внесем осъзнато внимание в живота си, в това, което се проявява в настоящия момент, развиваме умението си за присъствие и приемане на настоящето и 
                                яснотата си. Възстановяваме пълнокръвната връзка с ритъма на живота, поемаме по пътя на грижата за собственото си здраве и благополучие. Медитацията е ефективен начин за 
                                дълбока релаксация на тялото и на ума.
                            </p>
                        </div>
                    </div>
                    <div className="servicesCol col-10 col-md-3 col-lg-3 mx-auto">
                        <div className="serviceCard mx-auto" data-aos="flip-right">
                            <img src={draw} alt="соул колаж"/>
                            <h5 className="serviceTitle">Хармонично Дишане</h5>
                            <p className="serviceText">
                                Възможността да се учим да контролираме дишането си, като възпитаме нов модел на пълноценно, хармонично дишане, който да замени старите нефункционални навици на повърхностно и 
                                плитко дишане, означава да можем да влияем на физическото си и психическо здраве. Така, хармонизирането на дихателните ни навици е ключов фактор за възстановяване на естествения ни баланс, 
                                който включва тялото, енергията и ума ни.
                            </p>
                        </div>
                    </div>
                </div>
            </ServicesWrapper>
        )
    }
}

const ServicesWrapper = styled.div`
    margin-bottom: 4rem;
    .serviceCard {
        background: var(--lightBlue);
        margin-top: 3rem;
        padding: 1rem;
        box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.2);
        .serviceTitle {
            color: var(--mainBlue);
            font-size: 1.5rem;
        }
        .serviceText {
            color: black;
        }
    }
    .separator {
        margin-top: 2rem;
        border: solid 3px var(--mainGold);
        border-radius: 10px;
        width: 3%;
    }
    .servicesSeparator {
        width: 100%;
    }
    .servicesSeparatorText {
        color: var(--mainDark);
        text-align: center;
        font-size: 2.5rem;
    }
    h3 {
        margin-top: 2rem;
        margin-left: 1rem;
    }
    .row {
        padding: 1rem;
    }
`
