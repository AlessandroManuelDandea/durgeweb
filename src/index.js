import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';


const hideLoader = () => {
  const loader = document.getElementById('loader');
  const root = document.getElementById('root');
  if (loader) {
    loader.style.display = 'none';
  }
  if (root) {
    root.style.opacity = '1';
  }
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.onload = hideLoader;