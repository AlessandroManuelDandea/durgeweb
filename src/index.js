import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Contiene lo stile del loader e altre impostazioni
import App from './App';

// Funzione per nascondere il loader e mostrare l'app
const hideLoader = () => {
  const loader = document.getElementById('loader');
  const root = document.getElementById('root');
  if (loader) {
    loader.style.display = 'none'; // Nasconde il loader
  }
  if (root) {
    root.style.opacity = '1'; // Mostra l'app React
  }
};


// Una volta che React è pronto, nascondi il loader
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Nasconde il loader dopo il caricamento
window.onload = hideLoader;