import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../heroes';



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
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={ router } />
  )
}
