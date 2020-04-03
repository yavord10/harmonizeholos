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
                        Много са причините, поради които може да търсите психологическа консултация и/или терапия. От въпроси, свързани с взаимоотношенията, работата или самооценката ви до изпитване на тъга, чувство на депресия, тревожност; може да сте по средата на някаква важна промяна в живота си като раждане на дете, загуба на близък, развод, заболяване; а може да търсите повече смисъл в живота или да чувствате, че тъпчете на едно място.
                    </p>
                    <p className="consP">Каквото и да ви подтиква да търсите помощ, означава, че нещо отвътре  ви кара да възстановите баланса си.  И това е така, защото да сме здрави не означава отсъствието на болест, а по-скоро това е състояние на баланс между тялото, ума и енергията ни.</p>
                    <p className="consP">
                    Когато този баланс се наруши, в съчетание с редица други фактори, се стига до проявата на различни симптоми, които могат причинят индивидуално страдание и дискомфорт. Симптомите не се проявяват внезапно, за тях има причина, която е възникнала назад във времето. Затова е необходимо заедно да изследваме причините за страданието или затруднението Ви и да разберем взаимовръзката между факторите, които в комбинация са довели до всичко това.
                    </p>
                    <p className="consP">
                    Това е и целта на психологическото консултиране да се опитаме да очертаем картината на дисбаланса, да предоставим на клиента адекватна информация и знание, за да може да погледне на ситуацията си от различна гледна точка и да избере стратегия за справяне.  Понякога в рамките на няколко сесии клиентът може да постигне по-голяма яснота и да се справи с проблема, а в други случаи са необходими повече сесии и психотерапевтична работа, която да помогне да се изследват вътрешните психични процеси и реакции на клиента.
                    </p>
                    <p className="consP">
                        От моя страна стремежът ми ще бъде съвместната ни работа да ви помогне:
                    </p>
                    <p className="consP listItem">-	Да опознаете повече себе си и да видите собствената си ситуация</p>
                    <p className="consP listItem">-	Да разпознаете присъщите ви силни страни, естествена мъдрост и вътрешен ресурс</p>
                    <p className="consP listItem">-	Да излекувате дълбоки рани или травми</p>
                    <p className="consP listItem">-	Да разпознаете и да замените модели, които вече не ви служат</p>
                    <p className="consP listItem">-	Да създадете по-удовлетворяващи отношения със себе си и другите</p>
                    <p className="consP listItem">-	Да изградите свои стратегии за справяне и взимане на решения</p>
                    <p className="consP listItem">-	Да живеете по-жизнен, креативен и удовледворителен живот</p>
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
