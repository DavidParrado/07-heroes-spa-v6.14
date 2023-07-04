import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { PublicRoute, PrivateRoute } from './';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../heroes';

export const appRoutes = [
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
]

const router = createBrowserRouter(appRoutes);

export const AppRouter = () => {
  return (
    <RouterProvider router={ router } />
  )
}
