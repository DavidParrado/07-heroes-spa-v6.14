import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';


export const PrivateRoute = () => {

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();
    
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );
    

    return (logged)
        ? <Outlet />
        : <Navigate to="/login" />
}
