import React, { useContext } from 'react';
import classes from "./CatFactWidget.module.scss";
import useCatFact from "../../Hooks/useCatFact";
import { ThemeContext } from "../../Context/contextTheme";

const CatFactWidget = () => {
  const { fact, refreshFact } = useCatFact();
  const { theme } = useContext(ThemeContext);

  return fact && (
    <div
      className={classes.factWrapper}
      style={{background: theme.bgCatFact}}
    >
      <p className={classes.title}>Cat Fact:</p>
      <p>{fact}</p>
      <button className={classes.button} type="button" onClick={refreshFact}>I need more!</button>
    </div>
  );
};

export default CatFactWidget;
