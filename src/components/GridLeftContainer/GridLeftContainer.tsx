import React from 'react';

const GridLeftContainer = ({children}: { children: React.ReactNode | React.ReactNode[] }) => {
    return (
        <div className="grid-markup__main-grid-block grid-markup__main-grid-block--left">
            {children}
        </div>
    );
};

export default GridLeftContainer;