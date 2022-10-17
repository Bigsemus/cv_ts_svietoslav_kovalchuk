import React, { useContext } from 'react';
import classes from './LangBtn.module.scss';
import { TranslationContext } from '../../Context/contextLanguage';
import useTranslation from "../../Hooks/useTranslation";
import {ThemeContext} from "../../Context/contextTheme";


const LangBtn = () => {
  const { toggleLanguage } = useContext(TranslationContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={classes.langBtn}>
      <select
          style={{background :theme.headerFooterBGColor}}
          onChange={(event) => {
              toggleLanguage(event.currentTarget.value);
          }}
      >
        <option
            value="English"
        >
            {useTranslation('buttons.english')}
        </option>
        <option
            value="Ukraine"
        >
            {useTranslation('buttons.ukraine')}
        </option>
      </select>
    </div>
  );
};

export default LangBtn;
