import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';


describe('Pruebas en el <PrivateRoute />', () => {

    test('debe de mostrar el children si está autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const router = createMemoryRouter([
            {
                path: '*',
                Component: PrivateRoute,
                children: [ { path: '*',element: (<h1>Ruta privada</h1>) } ]
            }
        ], { initialEntries: ['/search?q=batman']})

        
        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Juan Carlos'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={ router } />
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');

    });


    
});