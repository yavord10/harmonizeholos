import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            dropdownMethods: false,
            dropdownServices: false,
            scrolled: false
        }
    }
    toggleDropDown = (e) => {
        if (e  === "Methods") {
            if (this.state.dropdownMethods === false) {
                this.setState({
                    dropdownMethods: true
                })
                this.setState({
                    dropdownServices: false
                })
            } else {
                this.setState({
                    dropdownMethods: false
                })
            } 
        } else if (e === "Services") {
            if (this.state.dropdownServices === false) {
                this.setState({
                    dropdownServices: true
                })
                this.setState({
                    dropdownMethods: false
                })
            } else {
                this.setState({
                    dropdownServices: false
                })
            } 
        }
    }
    handleScroll = () => {
        let topOfPage = window.pageYOffset;
        // Check if it was scrolled back to the top.
        if (topOfPage <= 15) {
            this.setState(() => {
                return {scrolled: false}
            })
        } else {
            this.setState(() => {
                return {scrolled: true}
            })
        }
    }
    handleClick = (e) => {
        let stateToggle = this.state.toggle;
        if ((e.target.className === "fas fa-bars") || (e.target.className === "navbar-toggler")) {
            this.setState(() => {
                return{
                    toggle: true
                }
            })
        }
        if ((stateToggle === true) && (e.target.className != "nav-link dropdown-toggle")) { 
            this.setState(() => {
                return{
                    toggle: false
                }
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
            <NavBarWrapper onClick={this.handleClick}>
                <nav className={this.state.scrolled ? "navbar navbar-expand-lg fixed-top coloredNav" : "navbar navbar-expand-lg fixed-top topColorNav"} onScroll={() => console.log('scrolled')}>
                    <Link to="/" className="navbar-brand"><span className="white">Harmonize</span>Holos</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {this.state.toggle ? <i className="fas fa-times"/> : <i className="fas fa-bars"/> }
                    </button>
                    <div className={this.state.toggle ? "navbar-collapse" : "navbar-collapse collapse ml-auto"} id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Link to="/" onClick={() => window.scrollTo(0,0)}>
                                <li className="nav-item nav-link">
                                    Начало
                                </li>
                            </Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" onClick={() => this.toggleDropDown("Methods")}>
                                    Методи
                                </a>
                                <div className={this.state.dropdownMethods ? "dropdown-menu" : "hidden"} onClick={() => this.toggleDropDown("Methods")}>
                                    <Link to="/холотропнодишане" className="dropdown-item" onClick={() => window.scrollTo(0,0)}>Холотропно дишане</Link>
                                    <Link to="/соулколаж" className="dropdown-item" onClick={() => window.scrollTo(0,0)}>Соул Колаж</Link>
                                    <Link to="/медитация" className="dropdown-item" onClick={() => window.scrollTo(0,0)}>Медитация</Link>
                                    <Link to="/хармоничнодишане" className="dropdown-item" onClick={() => window.scrollTo(0,0)}>Хармонично дишане</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" onClick={() => this.toggleDropDown("Services")}>
                                    Услуги
                                </a>
                                <div className={this.state.dropdownServices ? "dropdown-menu" : "hidden"} onClick={() => this.toggleDropDown("Services")}>
                                    <Link to="/услуги/консултации" className="dropdown-item" onClick={() => window.scrollTo(0,0)}>Психологическо Консултиране</Link>
                                    <Link to="/услуги/психотерапия" className="dropdown-item" onClick={() => window.scrollTo(0,0)}>Психотерапия</Link>
                                    <Link to="/услуги/личностноразвитие" className="dropdown-item" onClick={() => window.scrollTo(0,0)}>Личностно развитие</Link>
                                </div>
                            </li>
                            <Link to="/блог" onClick={() => window.scrollTo(0,0)}>
                                <li className="nav-item nav-link">
                                    Блог
                                </li>
                            </Link>
                            <Link to="/замен" onClick={() => window.scrollTo(0,0)}>
                                <li className="nav-item nav-link">
                                    За мен
                                </li>
                            </Link>
                            <Link to="/контакти" className="nav-item nav-link" onClick={() => window.scrollTo(0,0)}>
                                Контакти
                            </Link>
                        </ul>
                        <Link to="/резервация" className="navbtnLink"><button className="reservationNav btn">Направете Запитване</button></Link>
                    </div>
                </nav>
            </NavBarWrapper>
        )
    }
}

const NavBarWrapper = styled.div`
    .navbar-brand {
        color: var(--mainBlue) !important;
        font-family: 'Pattaya', sans-serif;
    }
    .white{
        color: white;
    }
    .navbar {
        background: none;
        color: white;
        a {
            color: white;
            text-decoration: none !important;
        }
        padding: 0;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .coloredNav {
        background: rgba(58, 51, 71, 0.8);
    }
    .topColorNav {
        background: var(--mainDark);
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
    a, a:active, a:hover, a:focus, a:visited {
        ouline: 0 !improtant;
        outline: none !important;
        text-decoration: none;
    }
    .btn {
        color: white !important;
        font-weight: 500;
        border-color: none;
        border-radius: 1px;
        background: var(--mainGold);
        outline: none;
        oultine: 0
        cursor: pointer;
        transition: color 0.5s, border-color 0.5s, font-size 0.5s;
    }
    .btn:hover {
        color: white !important;
        font-size: 1.1rem;
        outline: none;
    }
    .dropdown-item {
        color: var(--mainBlue) !important;
    }
    .dropdown-item:active {
        background: var(--lightBlue) !important;
    }
    .nav-link {
        cursor: pointer;
        padding: 1rem;
        transition: background-color 0.5s ease;
        width: 6rem;
    }
    .nav-link: hover {
        background-color: var(--lightBlue);
        color: var(--mainDark);
    }
    .navbar-toggler-icon {
        color: white !important;
    }
    .fas {
        color: white !important;
    }
    @media (max-width: 992px) {
        .navbar-collapse {
            padding: 1rem;
        }
    }
`
