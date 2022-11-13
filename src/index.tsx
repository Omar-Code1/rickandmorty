import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeConfig } from './config/Theme.config';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </React.StrictMode>,
);
