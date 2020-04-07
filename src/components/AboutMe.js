import React from 'react'
import styled from 'styled-components'
import img from '../Eli.jpeg'
import Certificates from './Certificates'

export default function AboutMe() {
    return (
        <AboutMeWrappr>
            <div className="row rowTwo"></div>
            <div className="">
                <div className="row mb-3 headerRow">
                    <div className="mx-auto">
                        <div className="row smallerRow">
                            <div className="col-5 mx-auto">
                                <div className="aboutMeImg mx-auto" data-aos="zoom-in-right"/>
                            </div>
                            <div className="col-5 mx-auto" data-aos="zoom-in-left">
                                <h5 className="aboutMeTitle">Ели Димитрова</h5> 
                                <p className="mb-1">Психолог-консултант</p>
                                <p className="mb-3">Фасилитатор:</p>
                                <p className="paragraph">по <span className="blue">Холотропно дишане™</span> (2009)</p>
                                <p className="paragraph">по <span className="blue">СоулКолаж®</span> (2013)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="firstDiv">
                    <h5 className="aboutMeTitle firstTitle" data-aos="zoom-in">Здравейте</h5>
                    <div className="separator mx-auto" data-aos="fade-left"></div>
                </div>
                <div className="row mt-3 mx-auto container">
                    <div className="aboutMeText mx-auto" data-aos="fade-up">
                        <p>
                            Казвам се Ели Димитрова. Живея и работя в гр. София. Предлагам психологически консултации, психотерапия и методи за личностно себеизследване и израстване.
                        </p>
                        <p>
                            Психичното здраве е един от компонентите на хармоничната личност. Когато балансът е нарушен, всеки човек има способността и свободата да възстанови здравето си, и да поддържа радостта в живота си. 
                        </p>
                        <p>
                            За процеса на изцеление и възстановяване на баланса е необходимо взаимодействието и споделената отговорност между психолог и клиент. От моя страна предлагам 
                            безопасна среда на доверие и подкрепа, професионалните си познания и разбиране за човешката психика и индивидуалния си подход, съобразен с нуждите на клиента. Останалото е 
                            уникалния процес на осъзнаване и израстване на човека, заел се със собственото си изцеление, защото себепознанието само по себе си е и изцеление. Колкото повече опознаваме себе си, 
                            ставаме все по-цялостни, по-здрави и по-хармонични личности.
                        </p>
                    </div>
                </div>
                <h5 className="aboutMeTitle" data-aos="zoom-in">Моят Подход</h5>
                <div className="separator mx-auto" data-aos="fade-left"></div>
                <div className="aboutMeText mx-auto container" data-aos="fade-up">
                    <p>Моят опит е свързан с това, че всяко взаимоотношение в терапията е уникално и хората израстват и се променят по различни начини, поради което съм обучена в разни методи и 
                        търся най-добрия за всеки клиент път.  Терапията е процес на взаимодействие и заедно откриваме онова, което най-добре отговаря на нуждите ви. Като ваш терапевт осигурявам безопасна 
                        среда, емпатично и уважително отношение, за да може да разкриете всичко онова, което занимава ума ви.</p>
                    <p>Ориентирана съм към преживелищни, творчески методи, експресивни и невербални, които помагат на клиента да разтовари своите напрежения, да открие своите отговори и обяснения, да осъзнае 
                        и види своите възможности. Вербалната част от терапията е спомагателна и дава възможност да се обединм и осъзнаем новия си опит.
                        Привлечена съм и практикувам медитативни и други духовни практики, които развиват човешкия потенциал и качества, дават един различен поглед за смисъла на съществуването ни. 
                        Вярвам, че духовното развитие е част от здравата, пълноценна личност.  </p>
                    <p>Целта ми е да ви помогна да се научите да се вглеждате по-надълбоко в себе си, да развиете по-творческо, любознателно отношение към живота си, да се научите да бъдете в присъствие и 
                        да виждате ясно своята ситуация, да възприемате себе си и света по един по-здрав, цялостен и балансиран начин.</p>
                </div>
                <h5 className="aboutMeTitle" data-aos="zoom-in">Моята Професионална и Лична Подготовка</h5>
                <div className="separator mx-auto" data-aos="fade-left"></div>
                <div className="aboutMeText mx-auto container" data-aos="fade-up">
                    <p>Завършила съм специалност психология в Нов български университет (НБУ). Допълнителните ми обучения са: 2008 г. Когнитивно-поведенческа терапия към Института по екология на мисленето; 2009 г. Фасилитатор в метода Холотропно дишане® към Гроф трансперсонален тренинг; 2013 г. Фасилитатор в метода СоулКолаж® към обучителния тренинг на Сиена Фрост; 2015 г. Обучение за медиатор към Центъра за разрешаване на спорове; 2017 г. Европейска сертификационна програма по Трансперсонално дишане (Пневмосинтезис); 2020 г. Фасилитатор по Хармонично дишане към обучителната програма на Фабио Андрико към Международния институт за тибетски науки. </p>
                    <p>Личната ми работа по себеизследване и себепознание включва: психодрама за личен опит (100 часа); нео-райхианска терапия за личен опит (100 часа индивидуална и 100 часа групова работа); холотропно дишане за личен опит – групово и индивидуално (250 часа); когнитивно-поведенческа терапия за личен опит (50 часа). Освен това имам дългогодишен опит с медитативни и други дихателни техники, които прилагам като част от духовния ми път в Дзогчен.</p>
                </div>
                <Certificates />
            </div>
        </AboutMeWrappr>
    )
}

const AboutMeWrappr = styled.div`
    .firstDiv {
        margin-top: 3rem;
    }
    .aboutMeImg {
        width: 11rem;
        height: 11rem;
        border-radius: 50%;
        background-image: url(${img});
        background-position: center;
        background-size: cover;
        fitler: grayscale(20%) brightness(70%);
        box-shadow: 2px 2px 10px -5px grey;
    }
    .separator {
        margin-top: 1rem;
        border: solid 3px var(--mainGold);
        border-radius: 10px;
        width: 3%;
    }
    .col-5 {
        margin-bottom: 5rem;
        margin-top: 5rem;
    }
    .aboutMeTitle {
        margin-top: 0.5rem;
        color: var(--mainBlue);
        font-weight: bold;
        font-size: 1.5rem;
    }
    .blue {
        color: var(--mainDark);
        font-weight: bold;
    }
    .paragraph {
        margin-top: -1rem;
    }
    .aboutMeText {
        padding: 1rem;
        p {
            color: var(--mainDark);
        }
    }
    .headerRow {
        background: var(--lightBlue);
        margin-top: 5rem;
        box-shadow: inset 0 0 10px grey;
    }
`