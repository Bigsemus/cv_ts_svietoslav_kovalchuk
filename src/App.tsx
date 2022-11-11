import React, {useContext, useEffect, useState} from 'react';
import './styles/reset.css'
import './styles/App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import AppRoutes from "./router/AppRoutes";
import Message from "./components/Message";
import {ThemeContext} from "./Context/contextTheme";
import mockMessageApi from "./services/mockMessageApi";
interface MessageType {
    id?: number;
    name?: string;
    txtEN?: string;
    txtUA?: string;
}
interface MyMessagesData {
    studyingMessages: MessageType[],
    aboutMessages: MessageType[],
}
function App() {
    const { theme } = useContext(ThemeContext);
    const [arrSMS, setArrSMS] = useState<MyMessagesData | null>(null);
    const renderStudyingMessages: () => React.ReactNode = () => <Message message={arrSMS?.studyingMessages} />
    const renderAboutMessages: () => React.ReactNode = () => <Message message={arrSMS?.aboutMessages} />
    const fetchMessage = React.useCallback(async () => {
        const arrOfObjectsOfMessage = await mockMessageApi.getMessage();
        setArrSMS(arrOfObjectsOfMessage);
        // eslint-disable-next-line
    }, [setArrSMS]);

    useEffect(() => {
        fetchMessage()
    }, [fetchMessage]);

    useEffect(()  => {
        document.body.style.background = theme.bodyBGColor;
        document.body.style.color = theme.colorText;
    }, [theme]);

    return (
        <div className="App">
            <header className="header" style={{background: theme.headerFooterBGColor}}>

                <div className="wrapper">
                    <Header />
                </div>
            </header>

            <main className="main">

            <AppRoutes
                renderStudyingMessages={renderStudyingMessages}
                renderAboutMessages={renderAboutMessages}
            />
            </main>
            <footer className="footer" style={{background: theme.headerFooterBGColor}}>
                <div className="wrapper">
                    <Footer />
                </div>
            </footer>
        </div>
    );
}

export default App;
