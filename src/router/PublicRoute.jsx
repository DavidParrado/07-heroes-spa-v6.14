import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../auth';


export const PublicRoute = () => {

    const { logged } = useContext( AuthContext );

    return (!logged)
        ? <Outlet />
        : <Navigate to="/marvel" />
}
