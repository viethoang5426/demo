import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import "@elastic/eui/dist/eui_theme_light.css";
import './index.css'
import {EuiProvider } from '@elastic/eui';
import { AuthContextProvider } from './Context/AuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EuiProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </EuiProvider>
);

