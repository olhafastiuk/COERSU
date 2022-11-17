import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './homepage/Homepage';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Homepage />
    </React.StrictMode>,
);

reportWebVitals();
