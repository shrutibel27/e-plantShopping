// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store/store'; // Import the configured Redux store
import App from './App'; // Import your main App component

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Wrap the App component with Provider */}
    <App />
  </Provider>
);
