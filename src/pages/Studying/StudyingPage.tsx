import React from 'react';
import StudyingSection from "../../components/StudyingSection";
type Props = {
    renderStudyingMessages?: () => React.ReactNode;
}

const StudyingPage: React.FC<Props> = (props) => {
    let {renderStudyingMessages} = props;
    return (
        <>
            <StudyingSection renderStudyingMessages={renderStudyingMessages}/>
        </>
    );
};

export default StudyingPage;