import React, {useContext} from 'react';
import classes from "./ThemeSwitch.module.scss";
import {ThemeContext} from "../../Context/contextTheme";
import classNames from "classnames/bind";

const ThemeSwitch = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <div className={classes.toggleWrapper}>
            <input
                type="checkbox"
                className={classes.dn}
                id="dn"
                onChange={() => toggleTheme()}
            />
            <label htmlFor="dn" className={classes.toggle}>
                <span className={classes.toggle__handler}>
                  <span className={classNames(classes.crater, classes.crater__1)}> </span>
                  <span className={classNames(classes.crater, classes.crater__2)}> </span>
                  <span className={classNames(classes.crater, classes.crater__3)}> </span>
                </span>
                <span className={classNames(classes.star, classes.star__1)}> </span>
                <span className={classNames(classes.star, classes.star__2)}> </span>
                <span className={classNames(classes.star, classes.star__3)}> </span>
                <span className={classNames(classes.star, classes.star__4)}> </span>
                <span className={classNames(classes.star, classes.star__5)}> </span>
                <span className={classNames(classes.star, classes.star__6)}> </span>
            </label>
        </div>
    );
};

export default ThemeSwitch;

