import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import {useFormik} from 'formik';
import classes from './FormikContact.module.scss';
import classNames from "classnames/bind";
import {ThemeContext} from "../../Context/contextTheme";
import useCursorPointerWithTheme from "../../Hooks/useCursorPointerWithTheme";
import useTranslation from "../../Hooks/useTranslation";
import emailjs from "emailjs-com";
import Tooltip from "../Tooltip/Tooltip";

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

    const [styleForTooltip, setStyleForTooltip] = useState(classes.hideTooltip)
    const [isErrorInput, setIsErrorInput] = useState(false)

    const handleShowTooltip = () => {
        setStyleForTooltip(classes.showTooltip);
    }

    const handleHideTooltip = () => {
        setStyleForTooltip(classes.hideTooltip);
    }

    const cx = classNames.bind(classes);

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

        const isEmpty= Object.keys(errors).length == 0;
        setIsErrorInput(isEmpty)
        return errors;
    };

    let disableForm = false;
    const [isSendingForm, setIsSendingForm] = useState(disableForm);
    const formWrapper = cx('sendingFormWrapper', {
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
            emailjs.sendForm('service_0016a8a', 'template_gmqr0fp', formElement, 'Bcfmdz3E5TNjZHIL1')
                .then(() => {
                    setIsSendingForm(false);
                    resetForm();
                })
                .catch((error) => {
                    console.error('FAILED...', error);
                    setIsSendingForm(false);
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
                    onMouseEnter={handleShowTooltip}
                    onMouseLeave={handleHideTooltip}
                >
                    <input
                        id="checkbox-1"
                        type="checkbox"
                        name='conditionsCheckbox'
                        onChange={formik.handleChange}
                    />
                    <label
                        htmlFor="checkbox-1"
                        className={styleCursorPointer}
                    >
                        <Tooltip
                            tooltipText={useTranslation('home-section-contact.conditions-tooltip')}
                            className={styleForTooltip}
                        />
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
            <div className={formWrapper}> </div>
        </>
    );
};

export default FormikContact;