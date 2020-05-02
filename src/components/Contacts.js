import React from 'react'
import styled from 'styled-components'

export default function Contacts() {
    return (
        <ContactsWrapper>
            <h5 className="contactsTitle" data-aos="zoom-in-down">Контакти</h5>
            <div className="contactsText mx-auto">
                <p>Не се колебайте да задавете въпроси, да споделяте своите търсения, да търсите решения. Понякога е необходимо много малко, за да почувствате, че може да се справите и това е да 
                    получите подкрепа и разбиране. Не забравяйте, че всичко започва от самите вас! Всеки един е режисьора и актьора в своя филм, наречен живот!</p>
                <p>Може да се свържете с мен на е-мейл: <a href="mailto:holosbg@gmail.com">holosbg@gmail.com</a> или като отправите запитване, като натиснете бутона в горния десен ъгъл на екрана!</p>
            </div>
        </ContactsWrapper>
    )
}

const ContactsWrapper = styled.div`
    padding: 3rem;
    margin-top: 5rem;
    .contactsTitle {
        font-size: 3rem;
        color: var(--mainBlue);
    }
    .contactsText{
        margin-top: 5rem;
        margin-bottom: 5rem;
        width: 90%;
    }
`