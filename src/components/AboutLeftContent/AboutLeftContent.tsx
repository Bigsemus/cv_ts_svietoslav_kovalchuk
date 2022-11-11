import React, {useContext} from 'react';
import useTranslation from "../../Hooks/useTranslation";
import {ThemeContext} from "../../Context/contextTheme";
import classNames from "classnames/bind";
import useCursorPointerWithTheme from "../../Hooks/useCursorPointerWithTheme";
type Props = {
    renderAboutMessages?: () => React.ReactNode;
}
const AboutLeftContent: React.FC<Props> = (props) => {
    const { theme } = useContext(ThemeContext);
    let {renderAboutMessages} = props;
    const styleCursorPointer = useCursorPointerWithTheme();

    return (
        <>
            <p className="main-about__description">
                {useTranslation('home-section-about.main-about__description1')}
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    className={classNames("main__link-text main__link-text--red", styleCursorPointer)}
                    href="https://www.atlassian.com/software/jira">&nbsp;jira&nbsp;
                </a>
                {useTranslation('home-section-about.main-about__description2')}
            </p>

            {renderAboutMessages?.()}

            <h3 className="main__title-little">
                {useTranslation('home-section-about.main__title-little1')}
            </h3>
            <p className="main-about__special-case">
                {useTranslation('home-section-about.special-case1')}
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    className={classNames("main__link-text main__link-text--red", styleCursorPointer)}
                    href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882">
                    &nbsp;"Clean Code"&nbsp;
                </a>.
                {useTranslation('home-section-about.special-case2')}
            </p>
            <h3 className="main__title-little">
                {useTranslation('home-section-about.main__title-little2')}
            </h3>
            <ul className="main-about__text-color-list text-color-list">
                <li className="text-color-list__item">
                    <span
                        className="main__item-point"
                        style={{color: theme.linkColor}}
                    >
                        English
                    </span>
                    &nbsp;• B1 level
                </li>
                <li className="text-color-list__item">
                    <span
                        className="main__item-point"
                        style={{color: theme.linkColor}}
                    >
                        JavaScript
                    </span>
                    &nbsp;• Good knowledge.
                </li>
                <li className="text-color-list__item">
                    <span
                        className="main__item-point"
                        style={{color: theme.linkColor}}
                    >
                        React.js
                    </span>
                    &nbsp;• Good knowledge.
                </li>
                <li className="text-color-list__item">
                    <span
                        className="main__item-point"
                        style={{color: theme.linkColor}}
                    >
                        Redux/ Redux-Toolkit/ Redux-Thunk
                    </span>
                    &nbsp;• Good knowledge.
                </li>
                <li className="text-color-list__item">
                    <span
                        className="main__item-point"
                        style={{color: theme.linkColor}}
                    >
                        fn-component, hooks, HOC, custom-hook, router, scss.module, classNames, Formik
                    </span>
                    &nbsp;• Good knowledge.
                </li>
                <li className="text-color-list__item">
                    <span
                        className="main__item-point"
                        style={{color: theme.linkColor}}
                    >
                        CSS/SCSS/BEM methodology
                    </span>
                    &nbsp;• Good knowledge.
                </li>
                <li className="text-color-list__item">
                    <span
                        className="main__item-point"
                        style={{color: theme.linkColor}}
                    >
                        HTML5
                    </span>
                    &nbsp;• Good knowledge.
                </li>
                <li className="text-color-list__item">
                    <span
                        className="main__item-point"
                        style={{color: theme.linkColor}}
                    >
                        GIT
                    </span>
                    &nbsp;• Good knowledge.
                </li>
                <li className="text-color-list__item">
                    <span
                        className="main__item-point"
                        style={{color: theme.linkColor}}
                    >
                        TypeScript/ axios/ jest
                    </span>
                    &nbsp;• Basic knowledge.
                </li>
                <li className="text-color-list__item">
                    <span
                        className="main__item-point"
                        style={{color: theme.linkColor}}
                    >
                        jQuery/ Bootstrap
                    </span>
                    &nbsp;• Basic knowledge.
                </li>
                <li className="text-color-list__item">
                    <span
                        className="main__item-point"
                        style={{color: theme.linkColor}}
                    >
                        Poland
                    </span>
                    &nbsp;• A1 level
                </li>
                <li className="text-color-list__item">
                    <span
                        className="main__item-point"
                        style={{color: theme.linkColor}}
                    >
                        Team work
                    </span>
                    &nbsp;• Jira/Scrum master
                </li>
            </ul>
        </>
    );
};

export default AboutLeftContent;