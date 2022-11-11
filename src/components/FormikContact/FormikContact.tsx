import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import {useFormik} from 'formik';
import classes from './FormikContact.module.scss';
import classNames from "classnames/bind";
import {ThemeContext} from "../../Context/contextTheme";
import useCursorPointerWithTheme from "../../Hooks/useCursorPointerWithTheme";
import useTranslation from "../../Hooks/useTranslation";
import emailjs from "emailjs-com";
import Tooltip from "../Tooltip/Tooltip";
import notify from "../../utils/helpers/notify";
import Toastify from "../Toastify/Toastify";
import {EMAIL_JS_API, EMAIL_SERVICE, EMAIL_TEMPLATE, PRIVACY_POLICY_API} from "../../utils/constants/api.constants";

interface FormValues {
    nameInput?: string,
    emailInput?: string,
    lastNameInput?: string,
    phoneInput?: string,
    sexRadio?: string,
    messageTextArea?: string,
    conditionsCheckbox?: string
}



const FormikContact = () => {
    const {theme} = useContext(ThemeContext);
    const styleCursorPointer = useCursorPointerWithTheme();
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const [isShowTooltip, setIsShowTooltip] = useState(false)
    const [isErrorInput, setIsErrorInput] = useState(false)

    const handleShowTooltip = () => {
        setIsShowTooltip(true);
    }

    const handleHideTooltip = () => {
        setIsShowTooltip(false);
    }

    const cx = classNames.bind(classes);

    const tooltipStyle = cx('tooltip', {
        tooltipShow: isShowTooltip,
    });

    const validate = (values: FormValues | HTMLFormElement) => {
        const errors: any = {};
        if (!values.nameInput) {
            errors.nameInput = 'Required';
        } else if (values.nameInput.length < 3 || values.nameInput.length > 20) {
            errors.nameInput = 'Must be 3 - 20 characters';
        }

        if (!values.emailInput) {
            errors.emailInput = 'Required';
        } else if (values.emailInput.length < 5) {
            errors.emailInput = 'Must be 5 characters or higher';
        }

        if (!values.phoneInput) {
            errors.phoneInput = 'Required';
        } else if (values.phoneInput.length < 13) {
            errors.phoneInput = 'Must be 13 characters at least';
        }

        if (values.conditionsCheckbox[0] !== 'on') {
            errors.conditionsCheckbox = 'Required';
        }

        const isEmpty = Object.keys(errors).length === 0;
        setIsErrorInput(isEmpty)
        return errors;
    };

    let disableForm = false;
    const [isSendingForm, setIsSendingForm] = useState(disableForm);
    const sendingBlurWrapper = cx('sendingBlurWrapper', {
        sending: isSendingForm,
    });

    const defaultHoverValues = useMemo(() => {
        return {
            isInputDark: false,
            isTextareaDark: false,
            isSexRadioDark: false,
            isCheckboxDARK: false,
            isDisabledSubmit: false,
        };
    }, []);
    const [valueStylesWithTheme, setValueStylesWithTheme] = useState(defaultHoverValues);
    const input = cx('inputLight', {
        inputDark: valueStylesWithTheme.isInputDark,
    });
    const textArea = cx('textarea', {
        textareaDark: valueStylesWithTheme.isTextareaDark,
    });
    const sexRadio = cx('sexRadio__item', {
        itemDARK: valueStylesWithTheme.isSexRadioDark,
    });
    const termConditionsCheckbox = cx('contactForm__checkbox', {
        checkboxDARK: valueStylesWithTheme.isCheckboxDARK,
    });
    const btnSubmit = cx('submitBtn', {
        disabledSubmitBtn : !isErrorInput,
    });

    useEffect(() => {
        setValueStylesWithTheme(
            theme.darkTheme === 'true'
                ? {
                    ...defaultHoverValues,
                    isInputDark: true,
                    isTextareaDark: true,
                    isSexRadioDark: true,
                    isCheckboxDARK: true
                }
                : {
                    ...defaultHoverValues,
                    isInputDark: false,
                    isTextareaDark: false,
                    isSexRadioDark: false,
                    isCheckboxDARK: false
                }
        )
    }, [theme, defaultHoverValues]);

    const formik = useFormik({
        initialValues: {
            nameInput: '',
            emailInput: '',
            lastNameInput: '',
            phoneInput: '',
            sexRadio: '',
            messageTextArea: '',
            conditionsCheckbox: ''
        },
        validate,
        onSubmit: (values, {resetForm}) => {
            const formElement: any = document.querySelector('.contact-form');
            setIsSendingForm(true);
            emailjs.sendForm(EMAIL_SERVICE, EMAIL_TEMPLATE, formElement, EMAIL_JS_API)
                .then(() => {
                    setIsSendingForm(false);
                    resetForm();
                    notify('Email sent successfully :)', 'success', null)
                })
                .catch((error) => {
                    const errorVariable = `FAILED... status: ${error.status} :(`
                    setIsSendingForm(false);
                    notify(errorVariable, 'error', null);
                });
        },
    });
    return (
        <>
            <form
                onSubmit={formik.handleSubmit}
                className="main-contact__contact-form contact-form"
            >
                <div className="contact-form__row contact-form__row--first">
                    <label>
                        {useTranslation('home-section-contact.contact-form__input1')} *
                        {formik.errors.nameInput ?
                            <div className={classes.errors}>{formik.errors.nameInput}</div> : null}
                        <input
                            name='nameInput'
                            className={input}
                            style={{background: theme.bgContactInput}}
                            ref={inputRef}
                            type="text"
                            placeholder="  John"
                            onChange={formik.handleChange}
                            value={formik.values.nameInput}
                        />
                    </label>
                    <label>
                        {useTranslation('home-section-contact.contact-form__input2')} *
                        {formik.errors.emailInput ?
                            <div className={classes.errors}>{formik.errors.emailInput}</div> : null}
                        <input
                            name='emailInput'
                            className={input}
                            style={{background: theme.bgContactInput}}
                            type="email"
                            placeholder="  example@email.com"
                            onChange={formik.handleChange}
                            value={formik.values.emailInput}
                        />
                    </label>
                </div>
                <div className="contact-form__row">
                    <label>
                        {useTranslation('home-section-contact.contact-form__input3')}
                        <input
                            name='lastNameInput'
                            className={input}
                            style={{background: theme.bgContactInput}}
                            type="text"
                            placeholder="  Johnson"
                            onChange={formik.handleChange}
                            value={formik.values.lastNameInput}
                        />
                    </label>

                    <label>
                        {useTranslation('home-section-contact.contact-form__input4')} *
                        {formik.errors.phoneInput ?
                            <div className={classes.errors}>{formik.errors.phoneInput}</div> : ''}
                        <input
                            name='phoneInput'
                            className={input}
                            style={{background: theme.bgContactInput}}
                            type="tel"
                            placeholder="  + 000 123 456 789"
                            onChange={formik.handleChange}
                            value={formik.values.phoneInput}
                        />
                    </label>
                </div>
                <div className={classes.sexRadio}>
                    <p className={classes.sexRadio__title}>
                        {useTranslation('home-section-contact.sexRadio-title')}
                    </p>
                    <div className={sexRadio}>
                        <input
                            id="radio-1"
                            type="radio"
                            name="sexRadio"
                            value="Male"
                            onChange={formik.handleChange}
                        />
                        <label
                            htmlFor="radio-1"
                            className={styleCursorPointer}
                        >
                            {useTranslation('home-section-contact.radio1')}
                        </label>
                    </div>

                    <div className={sexRadio}>
                        <input
                            id="radio-2"
                            type="radio"
                            name="sexRadio"
                            value="Female"
                            onChange={formik.handleChange}
                        />
                        <label
                            htmlFor="radio-2"
                            className={styleCursorPointer}
                        >
                            {useTranslation('home-section-contact.radio2')}
                        </label>
                    </div>

                    <div className={sexRadio}>
                        <input
                            id="radio-3"
                            type="radio"
                            name="sexRadio"
                            value="Other"
                            onChange={formik.handleChange}
                        />
                        <label
                            htmlFor="radio-3"
                            className={styleCursorPointer}
                        >
                            {useTranslation('home-section-contact.radio3')}
                        </label>
                    </div>
                </div>
                <textarea
                    name='messageTextArea'
                    className={textArea}
                    style={{background: theme.bgContactInput}}
                    placeholder="Message"
                    value={formik.values.messageTextArea}
                    onChange={formik.handleChange}
                />
                <div
                    className={termConditionsCheckbox}
                >
                    <Tooltip
                        tooltipText={useTranslation('home-section-contact.conditions-tooltip')}
                        tooltipLink={useTranslation('home-section-contact.conditions-tooltip-link')}
                        tooltipUrl={PRIVACY_POLICY_API}
                        className={tooltipStyle}
                        classNameCursor={styleCursorPointer}
                    />
                    <input
                        id="checkbox-1"
                        type="checkbox"
                        name='conditionsCheckbox'
                        onChange={formik.handleChange}
                    />
                    <label
                        htmlFor="checkbox-1"
                        className={styleCursorPointer}
                        onMouseEnter={handleShowTooltip}
                        onMouseLeave={handleHideTooltip}
                    >
                        {useTranslation('home-section-contact.conditions')}
                        {formik.errors.conditionsCheckbox ?
                            <div className={classes.errors}>{formik.errors.conditionsCheckbox}</div> : null}
                    </label>
                </div>
                <button
                    className={btnSubmit}
                    name='submit'
                    type="submit"
                >
                    {useTranslation('home-section-contact.submit')}
                </button>
            </form>
            <div className={sendingBlurWrapper}> </div>
            {Toastify()}
        </>
    );
};

export default FormikContact;