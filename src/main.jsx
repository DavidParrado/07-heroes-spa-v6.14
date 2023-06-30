import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles.css';
import { PublicRoute } from './router/PublicRoute';
import { AuthProvider, LoginPage } from './auth';
import { PrivateRoute } from './router/PrivateRoute';
import { HeroesRoutes } from './heroes/routes/HeroesRoutes';
import { DcPage, HeroPage, MarvelPage, SearchPage } from './heroes';

const router = createBrowserRouter([
  {
    path: 'login/*',
    Component: PublicRoute,
    children: [
      { path: '*', Component: LoginPage }
    ]
  },
  {
    path: '*',
    Component: PrivateRoute,
    children: [
      {
        path: '*',
        Component: HeroesRoutes,
        children: [
          { path: '*', Component: () => <Navigate to="/marvel" /> },
          { path: 'marvel', Component: MarvelPage },
          { path: 'dc', Component: DcPage },
          { path: 'search', Component: SearchPage },
          { path: 'hero/:id', Component: HeroPage },
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={ router } />
    </AuthProvider>
  </React.StrictMode>
);
