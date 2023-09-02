import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { worker } from './mocks/browser';
import { initiateData } from './mocks/FakeDataStorage';

if (process.env.NODE_ENV === 'development') {
    initiateData();
    worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
