import React, {useContext} from 'react';
import {v4 as uuid} from 'uuid';
import iconQuote from "../../assets/icon/a-icon-quote.png";
import {ThemeContext} from "../../Context/contextTheme";
import {TranslationContext} from "../../Context/contextLanguage";

type MyType = {
    id?: number;
    name?: string;
    txtEN?: string;
    txtUA?: string;
}

const Message = ({message}: { message?: MyType[] }) => {
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(TranslationContext);
    return (
        <div>
            {message?.map((sms: MyType) => {
                return (
                    <div
                        className={`main-about__color-massage main-about__color-massage--${sms.name}`}
                        style={{background: theme.bgMessage}}
                        key={uuid()}
                    >
                        <img className="main-about__icon-quote" src={iconQuote} alt="icon-quote" />
                            <p className="main-about__message-text">
                                {language.buttons.english === 'English' ? sms.txtEN : sms.txtUA}
                            </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Message;