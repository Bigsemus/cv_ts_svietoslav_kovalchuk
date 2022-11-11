import classNames from "classnames/bind";
import classes from "./useCursorPointerWithTheme.module.scss";
import {useContext, useEffect, useState} from "react";

import {ThemeContext} from "../Context/contextTheme";

const useCursorPointerWithTheme = () => {
    const { theme } = useContext(ThemeContext);
    const cx = classNames.bind(classes);
    const valueStylesWithTheme = {
        isInteractiveElementHTMLDark: false,
    };
    const [valueLink, setValueLink] = useState(valueStylesWithTheme);
    const interactiveElementHTML = cx('interactiveElementHTML', {
        interactiveElementHTMLDark: valueLink.isInteractiveElementHTMLDark,
    });
    useEffect(() => {
        setValueLink(
            theme.darkTheme === 'true'
                ? { ...valueStylesWithTheme, isInteractiveElementHTMLDark: true }
                : { ...valueStylesWithTheme, isInteractiveElementHTMLDark: false }
        )
        // eslint-disable-next-line
    }, [theme])

   return interactiveElementHTML
};

export default useCursorPointerWithTheme;

