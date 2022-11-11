import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Toastify.scss';

const Toastify = () => (
    <ToastContainer
        position="top-center"
        className="toast"
        toastClassName="container"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        pauseOnHover
        progressStyle={{
            background: 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55)',
        }}
    />
);

export default Toastify;
