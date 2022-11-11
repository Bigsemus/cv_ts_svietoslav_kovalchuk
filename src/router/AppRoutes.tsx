import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import StudyingPage from "../pages/Studying";
import ContactPage from "../pages/ContactPage";
type Props = {
    renderStudyingMessages?: () => React.ReactNode;
    renderAboutMessages?: () => React.ReactNode;
}

const AppRoutes: React.FC<Props> = (props) => {
    let {renderStudyingMessages, renderAboutMessages} = props;
    return (
    <Switch>
        <Route exact path="/">
            <HomePage
                renderAboutMessages={renderAboutMessages}
            />
        </Route>
        <Route path="/studying">
            <StudyingPage
                renderStudyingMessages={renderStudyingMessages}
            />
        </Route>
        <Route path="/contact" component={ContactPage} />
        <Route path="*" component={HomePage} />
    </Switch>
)};

export default AppRoutes;