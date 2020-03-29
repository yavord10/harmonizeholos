import React from 'react'
import styled from 'styled-components'
import img from '../Eli.jpg'

export default function AboutMe() {
    return (
        <AboutMeWrappr>
            <div className="row rowTwo"></div>
            <div className="">
                <div className="row mb-3 headerRow">
                    <div className="mx-auto">
                        <div className="row">
                            <div className="col">
                                <div className="aboutMeImg mx-auto" data-aos="flip-up"/>
                            </div>
                            <div className="col" data-aos="zoom-in-left">
                                <h5 className="aboutMeTitle">Ели Димитрова</h5> 
                                <p className="mb-1">Психолог-консултант</p>
                                <p className="mb-3">Фасилитатор:</p>
                                <p className="paragraph">по <span className="blue">Холотропно дишане™</span> (2009)</p>
                                <p className="paragraph">по <span className="blue">СоулКолаж®</span> (2013)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mx-auto container">
                    <div className="aboutMeText mx-auto" data-aos="fade-up">
                        <p>Здравейте, казвам се Ели Димитрова. Живея и работя в гр. София. По специаност съм психолог-консултант, сертифицирана съм като фасилитатор по Холотропно дишане™ (2009) и по СоулКолаж® (2013). От години се занимавам и с медитация и духовни практики. Преминала съм обучение за консултант по когнитивно-поведенческа терапия, в група за личен опит по психодрама и лична терапия в неорайхианската школа.</p>
                        <p>Интересът ми – и професионален, и личен – е в областта на трансперсоналната психология (характерното за този клон е обединяването на опита и знанието на Запада и Изтока, както и признаването на духовните търсения и стремежи за естествено присъща човешка потребност); личностното развитие, еволюция и реализация; алтернативни лечебни системи; духовния път. По мое мнение основното в живота ни е да се свържем отново с вътрешните си ресурси, целебни сили, творчески потенциал, интуиция и мъдрост. Защото всичко е в нас от самото начало и сме съвършени в собственото си несъвършенство. А щастието е просто едно естествено състояние … нужно е само да си припомним най-краткия път до него, като се учим да бъдем осъзнати и да сме наясно с индивидуалната си ситуация и способности.</p>
                        <p>Вярвам, че във всеки човек се крие изключителен вътрешен потенциал, лична сила и интелигентност. Необходима е единствено безопасна среда на доверие и подкрепа, за да може този потенциал да се разгърне. Това е контейнерът, който се създава по време на всеки сеанс на лична работа със себе си, наречена терапия, личностно развитие, разширяване на съзнанието и прочие. Останалото е уникалния процес на осъзнаване и израстване на човека, заел се със собственото си изцеление. Колкото повече научаваме за самите себе си, ставаме все по-цялостни, по-здрави, по-толерантни и по-удовлетворени.</p>
                        <p>В тази посока предлагам психологическа помощ под формата на индивидуални консултации (които могат да бъдат и он лайн). Прилагам техники от когнитивно-поведенческа терапия, медитативни и различни дихателни техники за успокояване на ума и емоциите. Провеждам индивидуални и групови сесии по Холотропно дишане™ и/или СоулКолаж®. Сесиите могат да се съчетават и с индивидуални консултации.</p>
                    </div>
                </div>
            </div>
        </AboutMeWrappr>
    )
}

const AboutMeWrappr = styled.div`
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
    .col {
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