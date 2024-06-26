import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactGA from 'react-ga4';
import App from './App';
import {HelmetProvider, Helmet} from 'react-helmet-async'

ReactGA.initialize(process.env.REACT_APP_GA_ID);
if (process.env.REACT_APP_GA_ID != undefined) {
  console.log('GA4 Connected');
}
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
