import React, { Component } from 'react'
import styled from 'styled-components'

export default class CustomForm extends Component {
    checkBox1 = document.getElementsByClassName('checkBox1')
    checkBox2 = document.getElementsByClassName('checkBox2')
    handleCheckBox = (e) => {
        if ((e.target === this.checkBox1[0]) && (e.target.checked === true)) {
            console.log('checkbox1 clicked')
            this.checkBox1[0].disabled = false
            this.checkBox2[0].disabled = true
        } else {
            this.checkBox1[0].disabled = false
            this.checkBox2[0].disabled = false
        }
        
        if ((e.target === this.checkBox2[0]) && (e.target.checked === true)) {
            console.log('checkbox2 clicked')
            this.checkBox1[0].disabled = true
            this.checkBox2[0].disabled = false
        }
    }
    render() {
        return (
            <CustomFormWrapper>
                <div className="customFormContainer mx-auto" data-aos="zoom-in-up">
                    <form data-abide noValidate action="https://docs.google.com/forms/u/3/d/e/1FAIpQLSdDbXnu4QvPBeU9wt-xQJ_NxHB_v0paxvYpG9mjfiMK25Ckog/formResponse">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Име и Презиме<span className="star">*</span></label>
                            <input type="text" className="form-control quantumWizTextinputPaperinputInput exportInput" id="exampleFormControlInput1" name="entry.1864553197" placeholder="Име Презиме" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Имейл Адрес<span className="star">*</span></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="entry.978179585" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Телефон</label>
                            <input type="tel" pattern="[0-9]{4} [0-9]{3} [0-9]{3}" className="form-control" id="exampleFormControlInput1" placeholder="0888 111 222" name="entry.2060910819"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Запитване</label>
                            <textarea type="text" className="form-control" id="exampleFormControlInput1" name="entry.2032084411" placeholder="Вашето запитване..."></textarea>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" className="checkBox1" name="entry.503765045" value="Желая да получавам допълтнителна информация по емейл" onClick={this.handleCheckBox}/><label htmlFor="exampleFormControlSelect1" className="ml-1">Желая да получавам информация по емейл</label>
                        </div>
                        <div className="form-group lastCheckbox">
                            <input type="checkbox" className="checkBox2" name="entry.503765045" value="Не желая да получавам информация по емейл" onClick={this.handleCheckBox}/><label htmlFor="exampleFormControlSelect1" className="ml-1">Не желая да получавам информация по емейл</label>
                        </div>
                        <button type="submit" className="btn">Изпрати</button>
                    </form>
                </div>
            </CustomFormWrapper>
        )
    }
}

const CustomFormWrapper = styled.div`
    .customFormContainer {
        padding: 1rem;
        width: 100%;
        box-shadow: 1px 1px 10px -5px grey;
        background: white;
        overflow-y: none;
    }
    .lastCheckbox {
        margin-top: -1rem;
    }
    .btn {
        background: var(--mainBlue);
        color: white;
        transition: transform 0.5s;
    }
    .btn:hover {
        transform: scale(1.1);
    }
    .star {
        color: crimson;
    }
`
