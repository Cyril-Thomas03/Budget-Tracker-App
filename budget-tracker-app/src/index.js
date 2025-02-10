import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import the main CSS
import App from './App'; // Import your main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  {/* Good practice for development */}
    <App />
  </React.StrictMode>
);
