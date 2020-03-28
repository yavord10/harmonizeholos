import React from 'react'
import styled from 'styled-components'

export default function Contacts() {
    return (
        <ContactsWrapper>
            <h5 className="contactsTitle">Контакти</h5>
            <div className="contactsText mx-auto">
                <p>Не се колебайте да задавате вашите въпроси, да споделяте вашето мнение или съмнение, най-важното е да бъдете активни. Направете първата стъпка и се свържете с мен.</p>
                <p>За уговаряне на консултации, провеждане на сесия по Холотропно дишане, Соул Колаж или медитация, моля, 
                    свържете се с мен на този е-мейл : <a href="mailto:holosbg@gmail.com">holosbg@gmail.com</a> или попълнете регистрационната форма в полето за Регистрация .</p>
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