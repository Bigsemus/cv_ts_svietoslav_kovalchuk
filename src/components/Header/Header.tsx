import React from 'react';
import logo from '../../assets/Logo.png'
import { NavHashLink } from 'react-router-hash-link';
import LangBtn from "../LangBtn";
import useTranslation from "../../Hooks/useTranslation";
import ThemeSwitch from "../ThemtSwitch/ThemeSwitch";

const Header = () => {
    return (
        <div className="header__wrap">
            <LangBtn />
            <div className="header__logo">
                <img src={logo} alt="pixel-logo" />
                <a href="mailto:Svietoslav.Kovalchuk@gmail.com" className="header__logo-link logo-link logo-link--red">Svietoslav_Kovalchuk</a>
            </div>
            <ThemeSwitch />
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavHashLink
                            className="header__link"
                            activeStyle={{ color: 'rgb(177, 177, 177)' }}
                            smooth to={{ pathname: "/", hash: "#home" }}
                        >
                            {useTranslation('nav-bar.home')}
                        </NavHashLink>
                    </li>
                    <li className="header__item">
                        <NavHashLink
                            className="header__link"
                            activeStyle={{ color: 'rgb(177, 177, 177)' }}
                            smooth to={{ pathname: "/", hash: "#about" }}>
                            {useTranslation('nav-bar.about-me')}
                        </NavHashLink>
                    </li>
                    <li className="header__item">
                        <NavHashLink
                            className="header__link"
                            activeStyle={{ color: 'rgb(177, 177, 177)' }}
                            smooth to={{ pathname: "/studying", hash: "#studying" }}>
                            {useTranslation('nav-bar.studying')}
                        </NavHashLink>
                    </li>
                    <li className="header__item">
                        <NavHashLink
                            className="header__link"
                            activeStyle={{ color: 'rgb(177, 177, 177)' }}
                            smooth to={{ pathname: "/contact"}}>
                            {useTranslation('nav-bar.contact')}
                        </NavHashLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;