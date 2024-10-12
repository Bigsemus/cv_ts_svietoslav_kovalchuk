import React, {useContext, useEffect, useMemo, useState} from 'react';
import useTranslation from "../../Hooks/useTranslation";
import PEAKS_Dark from "../../assets/layoutGallery/PEAKS_Dark.png";
import CSS_methodologies from "../../assets/layoutGallery/CSS_methodologies.png";
import Health_care from "../../assets/layoutGallery/Health_care.png";
import Engineering_company from "../../assets/layoutGallery/Engineering_company.png";
import order_form from "../../assets/layoutGallery/order_form.png";
import movie_library from "../../assets/layoutGallery/movie_library.png";
import movie_shop from "../../assets/layoutGallery/movie_shop.png";
import Company from "../../assets/layoutGallery/Company.png";
import Photographer from "../../assets/layoutGallery/Photographer.png";
import Krea from "../../assets/layoutGallery/Krea.png";
import Front_End from "../../assets/layoutGallery/Front_End.png";
import Black_White from "../../assets/layoutGallery/Black_White.png";
import {ThemeContext} from "../../Context/contextTheme";
import classNames from 'classnames/bind';
import classes from "./AboutRightContent.module.scss";
import useCursorPointerWithTheme from "../../Hooks/useCursorPointerWithTheme";
import {PRIVACY_POLICY_API} from "../../utils/constants/api.constants";
import Tooltip from "../Tooltip";

const AboutRightContent = () => {
    const { theme } = useContext(ThemeContext);
    const styleCursorPointer = useCursorPointerWithTheme();
    const cx = classNames.bind(classes);

    const [isShowTooltip1, setIsShowTooltip1] = useState(false);
    const [isShowTooltip2, setIsShowTooltip2] = useState(false);
    const [isShowTooltip3, setIsShowTooltip3] = useState(false);
    const [isShowTooltip4, setIsShowTooltip4] = useState(false);
    const [isShowTooltip5, setIsShowTooltip5] = useState(false);
    const [isShowTooltip6, setIsShowTooltip6] = useState(false);
    const [isShowTooltip7, setIsShowTooltip7] = useState(false);
    const [isShowTooltip8, setIsShowTooltip8] = useState(false);

    const handleShowTooltip = (numTooltip: string) => {
        switch (numTooltip) {
            case 'tooltip1':
                setIsShowTooltip1(true);
                break;
            case 'tooltip2':
                setIsShowTooltip2(true);
                break;
            case 'tooltip3':
                setIsShowTooltip3(true);
                break;
            case 'tooltip4':
                setIsShowTooltip4(true);
                break;
            case 'tooltip5':
                setIsShowTooltip5(true);
                break;
            case 'tooltip6':
                setIsShowTooltip6(true);
                break;
            case 'tooltip7':
                setIsShowTooltip7(true);
                break;
            case 'tooltip8':
                setIsShowTooltip8(true);
                break;
        }

    }

    const handleHideTooltip = (numTooltip: string) => {
        switch (numTooltip) {
            case 'tooltip1':
                setIsShowTooltip1(false);
                break;
            case 'tooltip2':
                setIsShowTooltip2(false);
                break;
            case 'tooltip3':
                setIsShowTooltip3(false);
                break;
            case 'tooltip4':
                setIsShowTooltip4(false);
                break;
            case 'tooltip5':
                setIsShowTooltip5(false);
                break;
            case 'tooltip6':
                setIsShowTooltip6(false);
                break;
            case 'tooltip7':
                setIsShowTooltip7(false);
                break;
            case 'tooltip8':
                setIsShowTooltip8(false);
                break;
        }
    }

    const tooltipStyle_1 = cx('tooltip', {
        tooltipShow: isShowTooltip1,
    });

    const tooltipStyle_2 = cx('tooltip', {
        tooltipShow: isShowTooltip2,
    });

    const tooltipStyle_3 = cx('tooltip', {
        tooltipShow: isShowTooltip3,
    });

    const tooltipStyle_4 = cx('tooltip', {
        tooltipShow: isShowTooltip4,
    });

    const tooltipStyle_5 = cx('tooltip', {
        tooltipShow: isShowTooltip5,
    });

    const tooltipStyle_6 = cx('tooltip', {
        tooltipShow: isShowTooltip6,
    });

    const tooltipStyle_7 = cx('tooltip', {
        tooltipShow: isShowTooltip7,
    });

    const tooltipStyle_8 = cx('tooltip', {
        tooltipShow: isShowTooltip8,
    });



    const valueStylesWithTheme = useMemo(() => {
        return {
            isLinkHover: false,
        };
    }, []);

    const [valueLink, setValueLink] = useState(valueStylesWithTheme);
    const link = cx('accordeonlink', {
        active: valueLink.isLinkHover,
    });

    useEffect(() => {
        setValueLink(
            theme.darkTheme === 'true'
                ? { ...valueStylesWithTheme, isLinkHover: true }
                : { ...valueStylesWithTheme, isLinkHover: false }
        )
    }, [theme, valueStylesWithTheme])
    return (
        <>
            <h3 className="main__title-little">
                {useTranslation('home-section-about.main__title-little3')}
            </h3>
            <div className="main-about__flickr flickr">
                <div className="flickr__item">
                    <Tooltip
                        tooltipText={useTranslation('home-section-galery.conditions-tooltip-1')}
                        className={tooltipStyle_1}
                    />
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://brightyards.com/ycocoon/"
                        onMouseEnter={() => handleShowTooltip('tooltip1')}
                        onMouseLeave={() => handleHideTooltip('tooltip1')}
                    >
                        <img src={order_form} alt="PEAKS_Dark"/>
                    </a>
                </div>
                <div className="flickr__item">
                    <Tooltip
                        tooltipText={useTranslation('home-section-galery.conditions-tooltip-2')}
                        className={tooltipStyle_2}
                    />
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/Health-Care_RESPONSIVE_Layout/"
                        onMouseEnter={() => handleShowTooltip('tooltip2')}
                        onMouseLeave={() => handleHideTooltip('tooltip2')}
                    >
                        <img src={Health_care} alt="Health_care"/>
                    </a>
                </div>
                <div className="flickr__item">
                    <Tooltip
                        tooltipText={useTranslation('home-section-galery.conditions-tooltip-3')}
                        className={tooltipStyle_3}
                    />
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/Engineering-Company_LAYOUT/"
                        onMouseEnter={() => handleShowTooltip('tooltip3')}
                        onMouseLeave={() => handleHideTooltip('tooltip3')}
                    >
                        <img src={Engineering_company} alt="Epam_company"/>
                    </a>
                </div>
                <div className="flickr__item">
                    <Tooltip
                        tooltipText={useTranslation('home-section-galery.conditions-tooltip-4')}
                        className={tooltipStyle_4}
                    />
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://movies-library-teal.vercel.app"
                        onMouseEnter={() => handleShowTooltip('tooltip4')}
                        onMouseLeave={() => handleHideTooltip('tooltip4')}
                    >
                        <img src={movie_library} alt="Epam_company"/>
                    </a>
                </div>
                <div className="flickr__item">
                    <Tooltip
                        tooltipText={useTranslation('home-section-galery.conditions-tooltip-5')}
                        className={tooltipStyle_5}
                    />
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://movie-shop-eight.vercel.app"
                        onMouseEnter={() => handleShowTooltip('tooltip5')}
                        onMouseLeave={() => handleHideTooltip('tooltip5')}
                    >
                        <img src={movie_shop} alt="Epam_company"/>
                    </a>
                </div>
                <div className="flickr__item">
                    <Tooltip
                        tooltipText={useTranslation('home-section-galery.conditions-tooltip-6')}
                        className={tooltipStyle_6}
                    />
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/PEAKS-hiking-club_LAYOUT/"
                        onMouseEnter={() => handleShowTooltip('tooltip6')}
                        onMouseLeave={() => handleHideTooltip('tooltip6')}
                    >
                        <img src={PEAKS_Dark} alt="PEAKS_Dark"/>
                    </a>
                </div>
                <div className="flickr__item">
                    <Tooltip
                        tooltipText={useTranslation('home-section-galery.conditions-tooltip-7')}
                        className={tooltipStyle_7}
                    />
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/Hello-Front-End_Layout/"
                        onMouseEnter={() => handleShowTooltip('tooltip7')}
                        onMouseLeave={() => handleHideTooltip('tooltip7')}
                    >
                        <img src={Front_End} alt="Front_End"/>
                    </a>
                </div>
                <div className="flickr__item">
                    <Tooltip
                        tooltipText={useTranslation('home-section-galery.conditions-tooltip-8')}
                        className={tooltipStyle_8}
                    />
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/Photographer_Business-card_GRID_Layout/"
                        onMouseEnter={() => handleShowTooltip('tooltip8')}
                        onMouseLeave={() => handleHideTooltip('tooltip8')}
                    >
                        <img src={Photographer} alt="Photographer"/>
                    </a>
                </div>
            </div>
            <h3 className="main__title-little">
                {useTranslation('home-section-about.main__title-little4')}
            </h3>
            <ul className="main-about__list-accordeon-links list-accordeon-links">
                <li className="list-accordeon-links__item">
                    <a
                        className={classNames(link, styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Bigsemus"
                    >
                        GitHab
                    </a>
                </li>
                <li className="list-accordeon-links__item">
                    <a
                        className={classNames(link, styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/GAME_rock-scissors-paper_JS/"
                    >
                        Rock/Scissors/Paper_Fun
                    </a>
                </li>
                <li className="list-accordeon-links__item">
                    <a
                        className={classNames(link, styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.canva.com/design/DAGTS7v4DY4/SVr8Y1nXsMufT6Vm1MK_pQ/view?utm_content=DAGTS7v4DY4&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel#"
                    >
                        WEB_CV
                    </a>
                </li>
            </ul>
        </>
    );
};

export default AboutRightContent;