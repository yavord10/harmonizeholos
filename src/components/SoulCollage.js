import React from 'react'
import styled from 'styled-components'
import img from '../soul-bg.jpg'

export default function SoulCollage() {
    return (
        <SoulCollageWrapper>
            <div className="SoulCollageContainer">
                <div className="imgContainer" data-aos="zoom-in-down">
                    <h5 className="SoulCollageTitle">Соул Колаж</h5>
                </div>
                <div className="soulText mx-auto" data-aos="fade-up">
                    <p>
                        Методът СоулКолаж® е приятен творчески метод за себе-изследване и има силен терапевтичен ефект. 
                        Стъпва на творческия потенциал на човека, като разгръща въображението, интуицията и съзидателната му сила.</p>
                    <p>
                        Това, от което се нуждаем е лична мотивация, време и много списания. Защото всеки участник става част от процес на създаване на индивидуално тесте от карти – колажи. 
                        Всяка карта се изработва отделно, за определено време, като се използват различни изображения и картинки от списания; всяка карта-колаж отразява една характерна 
                        черта или аспект от индивидуалността на човек.</p>
                    <p>
                        Картите-колажи се разпределят в четири групи: 1) Комитет – това е т.нар. психологическо измерение или карти, изобразяващи личностните ни характеристики; 2) 
                        Общност – тук се включват членове от обкръжението ни, от реалния живот, които са изиграли и/или играят важна роля в живота ни; при изработването на тези карти могат 
                        де се използват снимки на реални хора, домашни любимци, важни места и т.н. 3) Спътници – т.нар. тотеми или животни на силата, които съответстват на всяка една от енергийните ни чакри; 
                        за да ги открием се провежда специален вид визуализираща медитация, която се води от обучен фасилитатор; 4) Съвет – т.нар. измерение на архетипите – 
                        това са универсални модели, събирателни универсални образи, които могат да влияят и ръководят определени етапи от живота ни.</p>
                    <p>
                        Като резултат от прилагането на този метод се сдобиваме със собствено и уникално тесте от карти, които взети заедно разкриват нашата многообразна и пъстра личност.     
                    </p>
                </div>
            </div>
        </SoulCollageWrapper>
    )
}

const SoulCollageWrapper = styled.div`
    .SoulCollageContainer {
        padding: 2rem;
        margin-top: 4rem;
        margin-bottom: 3rem;
        color: var(--mainDark);
        .SoulCollageTitle {
            z-index: 9999;
            position: relative;
            font-size: 3rem;
            color: white;
            margin-bottom: 2rem;
            margin-top: 3rem;
            margin-bottom: 3rem;
        }
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
    .soulText {
        padding: 2rem;
        text-align: left;
    }
`