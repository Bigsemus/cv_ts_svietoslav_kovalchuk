import React from 'react';

const GridMarkup = ({ children } : {children: React.ReactNode[] | React.ReactNode}) => {
    return (
        <div className="grid-markup">
            {children}
        </div>
    );
};

export default GridMarkup;