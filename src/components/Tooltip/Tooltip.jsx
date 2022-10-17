import classNames from 'classnames/bind';
import React from 'react';

import styles from './Tooltip.module.scss';

const Tooltip = ({ tooltipText, className, position = 'bottom' }) => (
  <div className={classNames(styles.tooltipContainer, styles[position] ,className)}>
    <div className={classNames(styles.triangle, styles[position])} />
    <div className={styles.tooltip}>
      {tooltipText}
    </div>
  </div>
);

export default Tooltip;
