import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/bulma-switch/dist/css/bulma-switch.min.css';
// import './style/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
