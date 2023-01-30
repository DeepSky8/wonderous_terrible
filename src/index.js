import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.scss';
import App from './App';

import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root');
const appRoot = createRoot(container);
appRoot.render(<App tab="home" />)

reportWebVitals();

