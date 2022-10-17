import React from 'react';
import IntroSection from "../../components/IntroSection";
import AboutSection from "../../components/AboutSection";

type Props = {
    renderAboutMessages?: () => React.ReactNode;
}

const HomePage: React.FC<Props> = (props) => {
    let {renderAboutMessages} = props;
    return (
        <>
            <IntroSection />
            <AboutSection
                renderAboutMessages={renderAboutMessages}
            />
        </>
    );
};

export default HomePage;