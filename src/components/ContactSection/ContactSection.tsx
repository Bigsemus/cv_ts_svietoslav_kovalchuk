import React, {useContext, useEffect, useMemo, useState} from 'react';
import address from "../../assets/icon/a-icon-address/Combined Shape.png";
import phone from "../../assets/icon/a-icon-phone/Combined Shape.png";
import email from "../../assets/icon/a-icon-email/Combined Shape.png";
import useTranslation from "../../Hooks/useTranslation";
import {ThemeContext} from "../../Context/contextTheme";
import classNames from "classnames/bind";
import classes from "./ContactSection.module.scss";
import useCursorPointerWithTheme from "../../Hooks/useCursorPointerWithTheme";
import FormikContact from "../FormikContact";

const ContactSection = () => {
    const {theme} = useContext(ThemeContext);
    const styleCursorPointer = useCursorPointerWithTheme();
    const cx = classNames.bind(classes);


    const defaultHoverValues = useMemo(() => {
        return {
            isLinkHover: false,
        };
    }, []);


    const [valueStylesWithTheme, setValueStylesWithTheme] = useState(defaultHoverValues);
    const link = cx('contactlink', {
        active: valueStylesWithTheme.isLinkHover,
    });

    useEffect(() => {
        setValueStylesWithTheme(
            theme.darkTheme === 'true'
                ? {...defaultHoverValues, isLinkHover: true}
                : {...defaultHoverValues, isLinkHover: false}
        )
    }, [theme, defaultHoverValues])

    return (
        <section id="contact" className="main__contact main-contact">
            <div className="wrapper">
                <h2 className="main__title">
                    {useTranslation('home-section-contact.title')}
                </h2>
                <hr className="main__line" />
                <div className="grid-markup">
                    <div className="grid-markup__main-grid-block grid-markup__main-grid-block--left">
                        <h3 className="main__title-little">
                            {useTranslation('home-section-contact.main__title-little')}
                        </h3>

                        <FormikContact />

                    </div>
                    <div className="grid-markup__main-grid-block grid-markup__main-grid-block--right">
                        <h3 className="main__title-little">
                            {useTranslation('home-section-contact.title-little2')}
                        </h3>
                        <p className="main-contact__sub-title-information">
                            {useTranslation('home-section-contact.sub-title')}
                        </p>
                        <div className="main-contact__data-company data-company">
                            <img src={address} alt="address-icon" />
                            <span className="data-company__item">
                                {useTranslation('home-section-contact.data-company__item1')}
                            </span>
                            <span className="data-company__item">
                                {useTranslation('home-section-contact.data-company__item2')}
                            </span>
                            <span className="data-company__item">
                                {useTranslation('home-section-contact.data-company__item3')}
                            </span>
                        </div>
                        <p className="main-contact__contact contact">
                            <img className="contact__logo" src={phone}
                                 alt="phone-icon" />
                            {useTranslation('home-section-contact.phone')}
                            <a
                                className={classNames(link, styleCursorPointer)}
                                href="tel:+380500890028"
                            >
                                &nbsp;+380500890028
                            </a>
                        </p>
                        <p className="main-contact__contact">
                            <img className="contact__logo" src={email}
                                 alt="phone-icon" />
                            {useTranslation('home-section-contact.email')}
                            <a
                                className={classNames("contact__link main__link-text main__link-text--primary", styleCursorPointer)}
                                href="mailto:Svietoslav.Kovalchuk@gmail.com">&nbsp;Svietoslav.Kovalchuk@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;