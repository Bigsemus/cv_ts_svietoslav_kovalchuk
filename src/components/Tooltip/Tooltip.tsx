import classNames from 'classnames/bind';
import React from 'react';

import styles from './Tooltip.module.scss';

interface Tooltip {
    tooltipText: string;
    tooltipLink?: string;
    tooltipUrl?: string;
    className?: string;
    classNameCursor?: string;
    position?: string;
}

const Tooltip = ({ tooltipText, tooltipLink, tooltipUrl, className, classNameCursor, position = 'top' }: Tooltip) => (
    <div className={classNames(styles.tooltipContainer, className)}>
        <div className={styles[position]}>
            <div className={classNames(styles.triangle, styles[position])} />
            <div className={styles.tooltip}>
                {tooltipText}
                <br/>
                <a
                    href={tooltipUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classNames(styles.link, classNameCursor)}
                >
                    {tooltipLink}
                </a>
            </div>
        </div>
    </div>
);

export default Tooltip;
