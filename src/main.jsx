import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { AuthProvider } from './auth';
import { AppRouter } from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);
