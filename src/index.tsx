import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {TranslationProvider} from "./Context/contextLanguage";
import {ThemeProvider} from "./Context/contextTheme";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
            <TranslationProvider>
                <App />
            </TranslationProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
