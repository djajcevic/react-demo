import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {initFaro, initFaroOTEL} from './reportWebVitals';

initFaroOTEL()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
