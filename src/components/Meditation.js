import React from 'react'
import styled from 'styled-components'
import img from '../meditate-bg.jpg'

export default function Meditation() {
    return (
        <MeditationWrapper>
            <div className="meditationContainer">
                <div className="imgContainer" data-aos="zoom-in-down">
                    <h5 className="meditationTitle">Медитация</h5>
                </div>
                <div className="meditationText" data-aos="fade-up">
                    <p>
                        Да бъдем в присъствие и с осъзнатост е резултат от трениране на ума или с други думи това е друго ниво на живот, постижимо с помощта на много обикновена форма на медитация. Фокусирайки вниманието си за определен период от време върху начина на дишане – как въздуха навлиза и след това напуска тялото ни, може да ни помогне да променим качеството си на живот.
                    </p>
                    <p>Става въпрос за по-задълбочено разбиране относно индивидуалното ни състояние, а това е свързано със следните моменти:</p>
                    <ul className="meditationList mx-auto">
                        <li>разбирането как функционира ума ни – който постоянно е в движение и основната му функция е да генерира мисли;</li>
                        <li>спечелване на дистанция между себе си и мислите ни и развиване на способността да ги наблюдаваме, заедно с осъзнаването на това, че „Аз“ и мислите ми не сме едно и също нещо;</li>
                        <li>осъзнаване, че мислите и чувствата ни са преходни – появяват се и изчезват в ума ни като пръскащи се сапунени мехури;</li>
                        <li>и най-накрая, да разберем, че ние избираме дали да се свържем и да тръгнем след някоя мисъл или да се отдадем на някоя емоция.</li>
                    </ul>
                    <p>
                        Да пребиваваме в присъствие и осъзнатост включва също да се научим да фокусираме вниманието си върху мислите и чувствата си, сякаш сме само техни свидетели, т.е. без да ги оценяваме и критикуваме. Практикувайки редовно медитация, откриваме как да сме в това ново състояние на присъствие и осъзнатост, осъзнавайки своите чувства, мисли и усещания във всеки един момент от дадена конкретна ситуация. Разбираме какво означава да сме „тук и сега“ не само с тялото си, а и с ума си. Всичко това е процес на учене как да държим ума си там, където е тялото и вниманието ни.
                    </p>
                    <p>
                        Корените на това състояние на присъствие и осъзнатост са в будистката медитация, но напоследък има толкова много светски медитативни практики, разпространени на Запад, заради доказаните им ползи за физическото и ментално здраве на човека.
                    </p>
                </div>
            </div>
        </MeditationWrapper>
    )
}

const MeditationWrapper = styled.div`
    .meditationContainer {
        margin-top: 4rem;
        margin-bottom: 3rem;
        background: var(--lightGold);
        padding: 2rem;
        color: var(--mainDark);
        .meditationTitle {
            position: relative;
            z-index: 9999;
            font-size: 3rem;
            color: white;
            margin-bottom: 2rem;
        }
        .meditationList {
            width: 70%;
            
        }
        .meditationText {
            padding: 2rem;
            text-align: left;
        }
        .imgContainer {
            z-index: -1;
            background-image: url(${img});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            filter: grayscale(20%) brightness(80%);
            padding: 6rem;
            margin-bottom: 1rem;
            box-shadow: 0 0 10px var(--mainDark);
        }
    }
`