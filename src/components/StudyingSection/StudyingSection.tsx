import React, {useContext} from 'react';
import GridLeftContainer from "../GridLeftContainer/GridLeftContainer";
import GridRightContainer from "../GrigRightContainer/GridRightContainer";
import GridMarkup from "../GridMarkup/GridMarkup";
import CatFactWidget from "../CatFactWidget/CatFactWidget";
import {ThemeContext} from "../../Context/contextTheme";
import useTranslation from "../../Hooks/useTranslation";

type Props = {
    renderStudyingMessages?: () => React.ReactNode;
}

const StudyingSection: React.FC<Props> = (props) => {
    let {renderStudyingMessages} = props;
    const { theme } = useContext(ThemeContext);
    return (
        <section id="studying" className="main__about main-about main__about main-about--studying-page">
            <div className="wrapper">
                <h2 className="main__title">
                    {useTranslation('studying-section.intro-title')}
                </h2>
                <hr className="main__line" />
                <GridMarkup>
                    <GridLeftContainer>
                        <h3 className="main__title-little">
                            {useTranslation('studying-section.intro-sub-title')}
                        </h3>
                        <p className="main-about__special-case">
                            {useTranslation('studying-section.intro1')}
                            <br />
                            {useTranslation('studying-section.intro2')}
                        </p>

                        <h3 className="main__title-little">
                            {useTranslation('studying-section.intro-sub-title2')}
                        </h3>
                        {renderStudyingMessages?.()}
                    </GridLeftContainer>
                    <GridRightContainer>
                        <div className="main-intro__slider-wrap main-intro__slider-wrap--studying-page">
                            <div className="main-intro__slider-title">Svietoslav Kovalchuk</div>
                        </div>
                        <CatFactWidget />
                    </GridRightContainer>
                </GridMarkup>
                <h3 className="main__title-little">Points</h3>
                <ul className="main-about__text-color-list text-color-list">
                    <li className="text-color-list__item">
                        <span
                            className="main__item-point"
                            style={{color: theme.linkColor}}
                        >
                            EPAM
                        </span>
                        &nbsp;• Production project :
                        July 2022 - till now

                    </li>
                    <li className="text-color-list__item">
                        <span
                            className="main__item-point"
                            style={{color: theme.linkColor}}
                        >
                            EPAM University Program
                        </span>
                        &nbsp;• Pre-Production Lab Education :
                        September 2021 - July 2022

                    </li>
                    <li className="text-color-list__item">
                        <span
                            className="main__item-point"
                            style={{color: theme.linkColor}}
                        >
                            EPAM University Program
                        </span>
                        &nbsp;• Pre-Lab Education :
                        April 2021 - August 2021

                    </li>
                    <li className="text-color-list__item">
                        <span
                            className="main__item-point"
                            style={{color: theme.linkColor}}
                        >
                            IT STEP Academy
                        </span>
                        &nbsp;• WEB development :
                        May 29th, 2020 - July 10th, 2020

                    </li>
                    <li className="text-color-list__item">
                        <span
                            className="main__item-point"
                            style={{color: theme.linkColor}}
                        >
                            ITEA Academy
                        </span>
                        &nbsp;• JavaScript advanced :
                        November 29th, 2019 - December 23th, 2019
                    </li>
                    <li className="text-color-list__item">
                        <span
                            className="main__item-point"
                            style={{color: theme.linkColor}}
                        >
                            ITEA Academy
                        </span>
                        &nbsp;• JavaScript based :
                        November 15th, 2019 - December 29th, 2019
                    </li>
                    <li className="text-color-list__item">
                        <span
                            className="main__item-point"
                            style={{color: theme.linkColor}}
                        >
                            ITEA Academy
                        </span>
                        &nbsp;• HTML, CSS :
                        October 7th, 2019 - November 15th, 2019
                    </li>
                    <li className="text-color-list__item">
                        <span
                            className="main__item-point"
                            style={{color: theme.linkColor}}
                        >
                            English Time school/ Personal tutor
                        </span>
                        &nbsp;• English lavel - B1 :
                        2017 - till now
                    </li>
                    <li className="text-color-list__item">
                        <span
                            className="main__item-point"
                            style={{color: theme.linkColor}}
                        >
                            Dnipro State University of Internal Affairs
                        </span>
                        &nbsp;• Bachelor of law :
                        September 1st, 2010 - till April 30th, 2016
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default StudyingSection;