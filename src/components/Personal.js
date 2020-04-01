import React from 'react'
import styled from 'styled-components'

export default function Personal() {
    window.scrollTo(0,0)
    return (
        <PersonalWrapper>
            <div className="consContainer">
                <i className="fas fa-route" data-aos="zoom-in"></i>
                <h5 className="consTitle" data-aos="zoom-in-right">
                    Личностно развитие
                </h5>
                <div className="consText container">
                    <p className="consP">
                        За поддържане на баланса и качеството на живота си е необходимо да отделяме периодично внимание на мислите, чувствата и общото си състоянието. Всичко е взаимосвързано и както постоянно се променят външните, вторични обстоятелства, така се променят и потребностите ни, усещанията и вътрешния ни свят от чувства и мисли. Ключът е в развиване на осъзнатост и присъствие към случващото се. За да поддържаме хармонията и радостта от съществуването си, е добре да развием умение да регистрираме промените, които настъпват навън и вътре в нас.
                    </p>
                    <p className="consP">В тази връзка предлагам периодични занимания с всички описани на този сайт методи (Холотропно дишане, Хармонично дишане, СоулКолаж и Медитация), които дават възможност да продължаваме да се развиваме и обучаваме относно вътрешната ни психична динамика с помощта на инсайти, работа с възприятието ни, самонаблюдение и себеизследване. </p>
                    <p className="consP">
                        Използвайте това знание добре, за да бъдете здрави, хармонични и цялостни в живота си!</p>
                </div>
            </div>
        </PersonalWrapper>
    )
}

const PersonalWrapper = styled.div`
    padding: 2rem;
    margin-top: 5rem;
    .fas {
        font-size: 5rem;
        color: var(--mainGold);
    }
    .consTitle {
        margin-top: 1rem;
        margin-bottom: 2rem;
        font-size: 3rem;
        color: var(--mainBlue);
    }
    .consText {
        text-align: left;
        color: var(--mainDark);
    }
    .consP {
        margin-bottom: 2rem;
    }
`