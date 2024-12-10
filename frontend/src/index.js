import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@elastic/eui/dist/eui_theme_light.css";
import {EuiProvider } from '@elastic/eui';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EuiProvider>
    <App />
  </EuiProvider>
);

