import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll); 
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <NavBarWrapper>
                <nav className={this.state.scrolled ? "navbar navbar-expand-lg fixed-top coloredNav" : "navbar navbar-expand-lg fixed-top topColorNav"} onScroll={() => console.log('scrolled')}>
                    <Link to="/" className="navbar-brand"><span className="white">Harmonize</span>Holos</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Link to="/" onClick={() => window.scrollTo(0,0)}>
                                <li className="nav-item nav-link">
                                    Начало
                                </li>
                            </Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" onClick={() => this.toggleDropDown()}>
                                    Услуги
                                </a>
                                <div className={this.state.dropdown ? "dropdown-menu" : "hidden"} onClick={() => this.toggleDropDown()}>
                                    <Link to="соулколаж" className="dropdown-item" onClick={() => window.scrollTo(0,0)}>Соул Колаж</Link>
                                    <Link to="холотропнодишане" className="dropdown-item" onClick={() => window.scrollTo(0,0)}>Холотропно дишане</Link>
                                    <Link to="/медитация" className="dropdown-item" onClick={() => window.scrollTo(0,0)}>Медитация</Link>
                                </div>
                            </li>
                            <Link to="/методи" className="nav-item" onClick={() => window.scrollTo(0,0)}>
                                <li className="nav-link">Методи</li>
                            </Link>
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
    .btn {
        border-radius: 25px;
        color: white !important;
        border-color: white !important;
    }
    .btn:hover {
        background: var(--mainBlue);
        color: white !important;
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
`
