import React from 'react'
import styled from 'styled-components'
import img from '../harmonious.jpg'

export default function Harmonious() {
    return (
        <HarmoniousWrapper>
            <div className="HarmoniousContainer">
                <div className="imgContainer" data-aos="zoom-in-down">
                    <h5 className="HarmoniousTitle">Хармонично Дишане</h5>
                </div>
                <div className="HarmoniousText" data-aos="fade-up">
                    <p>
                        Хармоничното дишане е метод, с помощта на който се упражняваме да развием капацитета на дихателната си система. Както знаем дихателният процес е автономен и всеки човек диша, 
                        без да мисли или полага специални усилия за това. Обаче, всеки един диша различно и това зависи от здравословното му и общо състояние, свързано с тялото, ума и емоциите. Ако човек е 
                        напрегнат, дишането му е ограничено и напрегнато, както и ако е спокоен и отпуснат, дишането му ще бъде по-спокойно и по-плавно. Това е така, защото тялото и енергията ни са обусловени от 
                        напреженията ни, от емоциите и ума ни.</p>
                    <p>Най-общо казано, човек не използва потенциала си да диша пълноценно. Напротив, обичайно човек диша повърхностно и плитко. Често дишането е фрагментирано, напрегнато и нехармонично. 
                        В резлутат на ежедневния стрес, на който хората сме изложени, се формират неправилни навици на дишане, които от своя страна влияят на цялостното ни общо състояние.</p>
                    <p>
                        Добрата новина е, че можем да тренираме дишането си, както тренираме тялото си. Това означава, че с помощта на специални упражнения можем да променяме неправилните си навици на дишане, 
                        да развиваме способността си да дишаме по-пълно, по-координирани и по-релаксирано. Дишането е свързано с нашата енергия, а доброто функциониране на енергията ни влияе на физическото ни и 
                        умствено състояние.</p>
                    <p>
                        Хармоничното дишане има за цел да помогне на всеки заинтересуван да се научи да диша по-дълбоко, пълно, плавно и релаксирано. И това да се превърне в нов и траен навик да дишаме така постоянно.</p>
                    <p>
                        Не е случайно, че в повечето йога системи се поставя акцент върху качеството на дишане. В наши дни все повече се доказва научно колко важно е пълноценното и хармонично дишане от гледна точка 
                        на здравословното състояние на човек – както физическото, така и психическото. Чрез регулярни практики за контролиране на дишането си можем да намалим хормоните на стреса, да успокоим 
                        нервната си система, да регулираме нивата на кислород, въглероден двуокис и pH в кръвта си. Тези практики имат и силен терапевтичен ефект по отношение на депресивни, тревожни и пост-травматични 
                        състояния.</p>
                </div>
            </div>
        </HarmoniousWrapper>
    )
}

const HarmoniousWrapper = styled.div`
    .HarmoniousContainer {
        margin-top: 4rem;
        margin-bottom: 3rem;
        background: var(--lightGold);
        padding: 2rem;
        color: var(--mainDark);
        .HarmoniousTitle {
            position: relative;
            z-index: 9999;
            font-size: 3rem;
            color: white;
            margin-bottom: 2rem;
        }
        .HarmoniousText {
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
            padding: 1rem;
            padding-top: 5rem;
            padding-bottom: 4rem;
            box-shadow: 0 0 10px var(--mainDark);
        }
    }
`