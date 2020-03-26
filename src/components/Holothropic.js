import React from 'react'
import styled from 'styled-components'
import img from '../holo-bg.jpg'

export default function Holothropic() {
    return (
        <HolothropicWrapper>
            <div className="HolothropicContainer">
                    <div className="imgContainer">
                        <h5 className="HolothropicTitle">Холотропно Дишане</h5>
                    </div>
                    <div className="row">
                        <p className="paragraph mx-auto">
                            Холотропното дишане представлява мощен метод за себеизследване и себепознание. В продължение на дълги години практика Кристина и Станислав Гроф развиват психологически метод, 
                            работещ с необичайни състояния на съзнанието, като предлагат много радикална алтернатива за изцеление. Тези състояния имат тенденцията да ангажират вътрешните ресурси на човека или така наречения 
                            „вътрешен целител“, което води до един напълно индивидуален процес. И чрез личното преживяване всеки един може да разбере повече за себе си и да се преоткрие.</p>
                    </div>
                    <div className="row">
                        <p className="paragraph mx-auto">
                            Методът включва специфична дихателна техника на учестено и задълбочено дишане, което се прилага в легнала позиция и със затворени очи, на фона на специално структурирана музика. 
                            След това сесията продължава с рисуване на мандали и завършва със споделяне на преживяването.</p>
                    </div>
                    <div className="row">
                        <p className="paragraph mx-auto">
                            Ефектът от прилагането на метода е изцеление в най-широк смисъл посредством разтоварване на натрупани енергийни блокажи и напрежение, 
                            разширяване на представата ни за света, себе си и другите, формиране на т.нар. холотропно съзнание.</p>
                    </div>
                    <div className="row">
                        <p className="paragraph mx-auto">
                        „Холотропно“ буквално означава „движение към цялостност“. В този смисъл холотропното съзнание е цялостно съзнание, т.е. обединяващо, приемащо многото и 
                        различните аспекти от човешката психика или с други думи многото и различни субличности, формиращи „Аз-а“ или личността ни.</p>
                    </div>
            </div>
        </HolothropicWrapper>
    )
}

const HolothropicWrapper = styled.div`
    .HolothropicContainer {
        margin-bottom: 3rem;
        color: white;
        .HolothropicTitle {
            font-size: 3rem;
            color: white;
            margin-top: 3rem;
            margin-bottom: 3rem;
        }
        .imgContainer {
            background-image: url(${img});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            filter: grayscale(20%) brightness(80%);
            padding: 8rem;
            margin-bottom: 3rem;
            box-shadow: 0 0 10px var(--mainDark);
        }
        .paragraph {
            margin-bottom: 2rem;
            color: var(--mainDark) !important;
            width: 90%;
            padding-left: 1rem;
            text-align: left;
            animation: show-left 1s ease-in-out;
        }
        .divider {
            height: 5rem;
            width: 1rem;
            background: var(--mainBlue);
        }
    }
    @keyframes show-left {
        from {
            clip-path: inset(0% 100% 0% 0%);
        }
        to {
            clip-path: inset(0 0 0 0);
        }
    }
`