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

    const [tooltips, setTooltips] = useState<Record<string, boolean>>({
        tooltip1: false,
        tooltip2: false,
        tooltip3: false,
        tooltip4: false,
        tooltip5: false,
        tooltip6: false,
        tooltip7: false,
        tooltip8: false,
    });

    const handleShowTooltip = (numTooltip: string) => {
        setTooltips(prevState => ({
            ...prevState,
            [numTooltip]: true
        }));
    };

    const handleHideTooltip = (numTooltip: string) => {
        setTooltips(prevState => ({
            ...prevState,
            [numTooltip]: false
        }));
    };

    const getTooltipStyle = (tooltipKey: string) =>
        cx('tooltip', { tooltipShow: tooltips[tooltipKey] });



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
                        className={getTooltipStyle('tooltip1')}
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
                        className={getTooltipStyle('tooltip2')}
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
                        className={getTooltipStyle('tooltip3')}
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
                        className={getTooltipStyle('tooltip4')}
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
                        className={getTooltipStyle('tooltip5')}
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
                        className={getTooltipStyle('tooltip6')}
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
                        className={getTooltipStyle('tooltip7')}
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
                        className={getTooltipStyle('tooltip8')}
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