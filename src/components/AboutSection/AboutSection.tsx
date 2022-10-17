import React from 'react';
import useTranslation from "../../Hooks/useTranslation";
import GridMarkup from "../GridMarkup/GridMarkup";
import GridLeftContainer from "../GridLeftContainer/GridLeftContainer";
import GridRightContainer from "../GrigRightContainer/GridRightContainer";
import AboutLeftContent from "../AboutLeftContent/AboutLeftContent";
import AboutRightContent from "../AboutRightContent/AboutRightContent";

type Props = {
    renderAboutMessages?: () => React.ReactNode;
}
const AboutSection: React.FC<Props> = (props) => {
    let {renderAboutMessages} = props;
    return (
        <section id="about" className="main__about main-about">
            <div className="wrapper">
                <h2 className="main__title">{useTranslation('home-section-about.about')}</h2>
                <hr className="main__line" />
                <GridMarkup>
                    <GridLeftContainer>
                        <AboutLeftContent
                            renderAboutMessages={renderAboutMessages}
                        />
                    </GridLeftContainer>
                    <GridRightContainer>
                        <AboutRightContent />
                    </GridRightContainer>
                </GridMarkup>
            </div>
        </section>
    );
};

export default AboutSection;