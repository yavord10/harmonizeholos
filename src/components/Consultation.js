import React from 'react'
import styled from 'styled-components'

export default function Consultation() {
    window.scrollTo(0,0)
    return (
        <ConsultationWrapper>
            <div className="consContainer">
                <i className="fas fa-lightbulb" data-aos="zoom-in"></i>
                <h5 className="consTitle" data-aos="zoom-in-right">
                    Психологическо консултиране
                </h5>
                <div className="consText container">
                    <p className="consP">
                        Много са причините, поради които може да търсите психологическа консултация и/или терапия. От въпроси, свързани с взаимоотношенията, 
                        работата или самооценката ви до изпитване на тъга, чувство на депресия, тревожност; може да сте по средата на някаква важна промяна в 
                        живота си като раждане на дете, загуба на близък, развод, заболяване; а може да търсите повече смисъл в живота или да искате да си 
                        обясните чувството на празнота. Каквото и да ви подтиква да търсите професионална помощ, от моя страна стремежът ми ще бъде 
                        съвместната ни работа да ви помогне:
                    </p>
                    <p className="consP listItem">-	Да опознаете повече себе си и да видите собствената си ситуация</p>
                    <p className="consP listItem">-	Да разпознаете присъщите ви силни страни, естествена мъдрост и вътрешен ресурс</p>
                    <p className="consP listItem">-	Да излекувате дълбоки рани или травми</p>
                    <p className="consP listItem">-	Да разпознаете и да замените модели, които вече не ви служат</p>
                    <p className="consP listItem">-	Да създадете по-удовлетворяващи отношения със себе си и другите</p>
                    <p className="consP listItem">-	Да изградите свои стратегии за справяне и взимане на решения</p>
                    <p className="consP listItem">-	Да живеете по-жизнен, креативен и удовледворителен живот</p>
                    <p className="consP">
                        Целта на психологическото консултиране е да се предостави на клиента адекватна информация и знание, 
                        за да може да погледне на ситуацията си от различна гледна точка и да му се помогне да избере стратегия да справяне. 
                        Обикновено в рамките на няколко сесии се постига по-голяма яснота по отношение на възможностите за справяне със ситуацията 
                        и/или проблема.</p>
                </div>
            </div>
        </ConsultationWrapper>
    )
}

const ConsultationWrapper = styled.div`
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
