import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './App.css'; // Custom styles must be after Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS with Popper.js included

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Wrap the App component with BrowserRouter here */}
      <App />
    </Router>
  </React.StrictMode>
);
