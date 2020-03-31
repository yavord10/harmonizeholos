import React, { Component } from 'react'
import styled from 'styled-components'
import ServiceCard from './ServiceCard'
import holoImg from '../holo-bg.jpg'
import meditateImg from '../meditate-bg.jpg'
import harmonImg from '../harmonious.jpg'
import soulImg from '../soul-bg.jpg'

export default class servicesSeparator extends Component {
    constructor() {
        super();
        this.state = {
            cardNumber: 1,
            cardInfo: [
                {
                    img: holoImg, 
                    title: "Холотропно Дишане",
                    text: "Холотропното дишане e мощен метод за себеизследване и себепознание, има силен терапевтичен и изцелителен ефект посредством разтоварване и освобождаване на натрупани енергийни блокажи, осъзнаване на важни и основни човешки ценности, както и разширяване на съзнанието, в това число представата ни за самите себе си, другите и света. “Холотропно” буквално означава “движение към цялостност”. "
                },
                {
                    img: soulImg, 
                    title: "Соул Колаж",
                    text:"Методът Соул Колаж е уникален метод за самопознание и себеизследване, който използва творческата страна на индивида, заедно с неговата интуиция и въображение. С помощта на създаваните карти-колажи всеки един постепенно открива различни аспекти от своята личност и обединявайки се с тях, оформя пъзела на цялостната си хармонична личност."
                },
                {
                    img: meditateImg, 
                    title: "Медитация",
                    text:'Когато успеем да внесем осъзнато внимание в живота си, в това, което се проявява в настоящия момент, развиваме умението си за присъствие и приемане на настоящето и яснотата си. Възстановяваме пълнокръвната връзка с ритъма на живота, поемаме по пътя на грижата за собственото си здраве и благополучие. Медитацията е ефективен начин за дълбока релаксация на тялото и на ума.'
                },
                {
                    img: harmonImg, 
                    title: "Хармонично Дишане",
                    text:"Възможността да се учим да контролираме дишането си, като възпитаме нов модел на пълноценно, хармонично дишане, който да замени старите нефункционални навици на повърхностно и плитко дишане, означава да можем да влияем на физическото си и психическо здраве. Така, хармонизирането на дихателните ни навици е ключов фактор за възстановяване на естествения ни баланс, който включва тялото, енергията и ума ни."
                }
            ]
        }
    }
    handleDot = (e) => {
        if ((e.target.className === "dot dot1") || (e.target.className === "innerDot innerDot1")) {
            this.setState({cardNumber:1})
        } else if ((e.target.className === "dot dot2") || (e.target.className === "innerDot innerDot2")) {
            this.setState({cardNumber:2})
        } else if ((e.target.className === "dot dot3") || (e.target.className === "innerDot innerDot3")) {
            this.setState({cardNumber:3})
        } else if ((e.target.className === "dot dot4") || (e.target.className === "innerDot innerDot4")){
            this.setState({cardNumber:4})
        }
        console.log(this.state.cardNumber)
    }
    handleArrow = (e) => {
        e.target.parentNode.id = "clicked"
        if ((e.target.className === "leftArrow arrowBtn col-12") || (e.target.className === "fas fa-long-arrow-alt-left")) {
            if (this.state.cardNumber > 1) {
                setTimeout(() => this.setState({
                    cardNumber: this.state.cardNumber - 1
                }), 300)
            } else {
                setTimeout(() => this.setState({
                    cardNumber: 4
                }), 300)
            }
        }
        if ((e.target.className === "rightArrow arrowBtn col-12") || (e.target.className === "fas fa-long-arrow-alt-right")) {
            if (this.state.cardNumber < 4) {
                setTimeout(() => this.setState({
                    cardNumber: this.state.cardNumber + 1
                }), 300)
            } else {
                setTimeout(() => this.setState({
                    cardNumber: 1
                }), 300)
            }
        }
        e.target.parentNode.id = ""
        e.persist()
        setTimeout(() => {
            e.target.parentNode.id = "clicked"
        }, 50)
        console.log(e.target.parentNode)
    }
    render() {
        return (
            <ServicesTWrapper className="container">
                <div className="servicesSeparator">
                    <h3 className="servicesSeparatorText mx-auto" data-aos="fade-up">Методи</h3>
                    <div className="separator mx-auto" data-aos="fade-left"></div>
                </div>
                {this.state.cardNumber === 1 ? <ServiceCard prev={this.state.cardInfo[3]} info={this.state.cardInfo[0]} next={this.state.cardInfo[1]} handleArrow={this.handleArrow} state={this.state.cardNumber} handleDot={this.handleDot} /> 
                : this.state.cardNumber === 2 ? <ServiceCard prev={this.state.cardInfo[0]} info={this.state.cardInfo[1]} next={this.state.cardInfo[2]} handleArrow={this.handleArrow} state={this.state.cardNumber} handleDot={this.handleDot} />
                : this.state.cardNumber === 3 ? <ServiceCard prev={this.state.cardInfo[1]} info={this.state.cardInfo[2]} next={this.state.cardInfo[3]} handleArrow={this.handleArrow} state={this.state.cardNumber} handleDot={this.handleDot} />
                : this.state.cardNumber === 4 ? <ServiceCard prev={this.state.cardInfo[2]} info={this.state.cardInfo[3]} next={this.state.cardInfo[0]} handleArrow={this.handleArrow} state={this.state.cardNumber} handleDot={this.handleDot} />
                : null }
            </ServicesTWrapper>
        )
    }
}

const ServicesTWrapper = styled.div`
    padding: 1rem;
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
    .dot {
        z-index: 1;
        padding: 0.05rem;
        background: white;
        border: solid 2px var(--mainBlue);
        margin-left: 0.1rem;
        margin-right: 0.1rem;
        border-radius: 50%;
        transition: background 0.5s;
        cursor: pointer;
    }
    .innerDot {
        z-index: -1;
        background: var(--mainBlue);
        padding: 0.3rem;
        border-radius: 50%;
        transition: background 0.5s;
        transition: border 0.5s;
        cursor: pointer;
    }
    .dot:hover {
        border: solid 2px var(--mainDark);
        .innerDot {
            background: var(--mainDark);
        }
        transform: scale(1.1);
    }
    .clicked {
        border: solid 2px var(--mainDark);
        .innerDot {
            background: var(--mainDark);
        }
        transform: scale(1.1);
    }
    .dotContainer {
        margin-bottom: -1.2rem;
        margin-top: 4rem;
    }
    #clicked {
        .shadowRow {
            .shadowRow {
                animation: move-right 0.5s ease-in;
            }
        }
    }
    @keyframes move-right {
        0% {
            transform: translate(0px, 0px)
        }
        50% {
            transform: translate(500px, 0px)
        }
        51% {
            opacity: 0;
        }
        52% {
            transform: translate(-500px, 0px)
        }
        100% {
            transform: translate(0px, 0px)
            opacity: 1;
        }
    }
`