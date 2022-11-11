import React from 'react';


const GridRightContainer = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="grid-markup__main-grid-block grid-markup__main-grid-block--right">
            {children}
        </div>
    );
};

export default GridRightContainer;