import React, { Component } from 'react'
import styled from 'styled-components'

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            dropdown: false,
            scrolled: false
        }
    }
    toggleDropDown = () => {
        if (this.state.dropdown === false) {
            this.setState({
                dropdown: true
            })
        } else {
            this.setState({
                dropdown: false
            })
        } 
    }
    handleScroll = () => {
        let topOfPage = window.pageYOffset;
        // Check if it was scrolled back to the top.
        if (topOfPage <= 600) {
            this.setState(() => {
                return {scrolled: false}
            })
        } else {
            this.setState(() => {
                return {scrolled: true}
            })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll); 
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <NavBarWrapper>
                <nav className={this.state.scrolled ? "navbar navbar-expand-lg fixed-top coloredNav" : "navbar navbar-expand-lg fixed-top"} onScroll={() => console.log('scrolled')}>
                    <a className="navbar-brand" href="#">HarmonizeHolos</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Начало</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" onClick={() => this.toggleDropDown()}>
                                    Услуги
                                </a>
                                <div className={this.state.dropdown ? "dropdown-menu" : "hidden"}>
                                    <a className="dropdown-item" href="#">Холотропно Дишане</a>
                                    <a className="dropdown-item" href="#">Соул Колаж</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Медитация</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Часове</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Блог</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">За мен</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Контакти</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </nav>
            </NavBarWrapper>
        )
    }
}

const NavBarWrapper = styled.div`
    .navbar-brand {
        color: gold !important;
    }
    .navbar {
        background: none;
        color: white;
        a {
            color: white;
            text-decoration: none !important;
        }
    }
    .coloredNav {
        background: rgb(70,130,180, 0.7);
    }
    .hidden {
        display: none;
    }
    .dropdown-menu {
        display: block;
    }
    .form-control {
        border-radius: 20px;
        background: none; 
        ::placeholder {
            color: white;
        }
    }
    .btn {
        border-radius: 25px;
        color: steelblue !important;
        border-color: steelblue !important;
    }
    .btn:hover {
        background: steelblue;
        color: white !important;
    }
`
