import React from 'react';
import {NavHashLink} from "react-router-hash-link";

const Footer = () => {
    return (
        <div className="grid-markup">
            <div className="grid-markup__footer-grid-block grid-markup__footer-grid-block--col1">
                <a href="mailto:Svietoslav.Kovalchuk@gmail.com" className="footer__logo-link logo-link logo-link--red">Svietoslav_Kovalchuk</a>
                <p className="footer__sub-title">
                    A true business companion
                </p>
                <h4 className="footer__title">SOCIAL</h4>
                <div className="footer__list-social-link list-social-link">
                    <a className="disabled"
                       rel="noopener noreferrer"
                       href="https://www.youtube.com/">
                        <div className="list-social-link__item list-social-link__item--youtube"> </div>
                    </a>
                    <a target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.linkedin.com/in/svietoslav-kovalchuk/">
                        <div className="list-social-link__item list-social-link__item--linkedin"> </div>
                    </a>
                    <a className="disabled" href="https://twitter.com/explore">
                        <div className="list-social-link__item list-social-link__item--twitter"> </div>
                    </a>
                    <a className="disabled" href="https://www.facebook.com/enespanol">
                        <div className="list-social-link__item list-social-link__item--facebook"> </div>
                    </a>
                </div>
            </div>
            <div className="grid-markup__footer-grid-block grid-markup__footer-grid-block--col2">
                <h4 className="footer__title">FEATURES</h4>
                <ul>
                    <li>
                        <a className="footer__item-link disabled" href="#!">Engagement</a>
                    </li>
                    <li>
                        <a className="footer__item-link disabled" href="#!">Retention</a>
                    </li>
                    <li>
                        <a className="footer__item-link disabled" href="#!">Funnels</a>
                    </li>
                </ul>
            </div>
            <div className="grid-markup__footer-grid-block grid-markup__footer-grid-block--col3">
                <h4 className="footer__title">RESOURCES</h4>
                <ul>
                    <li>
                        <a className="footer__item-link disabled" href="#!">Enterprise</a>
                    </li>
                    <li>
                        <a className="footer__item-link disabled" href="#!">SaaS</a>
                    </li>
                    <li>
                        <a className="footer__item-link disabled" href="#!">Financial services</a>
                    </li>
                    <li>
                        <a className="footer__item-link disabled" href="#!">Consumer Tech</a>
                    </li>
                </ul>
            </div>
            <div className="grid-markup__footer-grid-block grid-markup__footer-grid-block--col4">
                <h4 className="footer__title">MENU</h4>
                <ul>
                    <li>
                        <NavHashLink
                            className="footer__item-link"
                            activeStyle={{ color: 'rgb(177, 177, 177)' }}
                            smooth to={{ pathname: "/", hash: "#home" }}
                        >
                            Home
                        </NavHashLink>
                    </li>
                    <li>
                        <a className="footer__item-link disabled" href="#!">Portfolio</a>
                    </li>
                    <li>
                        <a className="footer__item-link disabled" href="#!">My work</a>
                    </li>
                    <li>
                            <NavHashLink
                                className="footer__item-link"
                                activeStyle={{ color: 'rgb(177, 177, 177)' }}
                                smooth to={{ pathname: "/", hash: "#about" }}>
                                About me
                            </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            className="footer__item-link"
                            activeStyle={{ color: 'rgb(177, 177, 177)' }}
                            smooth to={{ pathname: "/studying", hash: "#studying" }}>
                            Studying
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            className="footer__item-link"
                            activeStyle={{ color: 'rgb(177, 177, 177)' }}
                            smooth to={{ pathname: "/contact"}}>
                            Contact
                        </NavHashLink>
                    </li>
                </ul>
            </div>
            <div className="grid-markup__footer-grid-block grid-markup__footer-grid-block--col5">
                <h4 className="footer__title">INFORMATION</h4>
                <ul>
                    <li>
                        <a className="footer__item-link disabled" href="#!">About us</a>
                    </li>
                    <li>
                        <a className="footer__item-link disabled" href="#!">Terms & Conditions</a>
                    </li>
                    <li>
                        <a className="footer__item-link disabled" href="#!">User’s guide</a>
                    </li>
                    <li>
                        <a className="footer__item-link disabled" href="#!">Support center</a>
                    </li>
                    <li>
                        <a className="footer__item-link disabled" href="#!">Press info</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;