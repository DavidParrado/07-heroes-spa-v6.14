import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, RouterProvider, Routes, createMemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';


describe('Pruebas en <PublicRoute />', () => {
    
    test('debe de mostrar el children si no está autenticado', () => {
        
        const router = createMemoryRouter([
            {
                path: '*',
                element: <PublicRoute />,
                children: [{ path: '*', element: <h1>Ruta pública</h1> }]
            }
        ]);

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta pública') ).toBeTruthy();

    });


    test('debe de navegar si está autenticado', () => { 

        const router = createMemoryRouter([
            {
                path: 'login',
                element: <PublicRoute />,
                children: [{ path: '*', element: <h1>Ruta pública</h1> }]
            },
            {
                path: 'marvel',
                element: <h1>Página Marvel</h1>
            }
        ], { initialEntries: ['/login']});
        
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={ router } />
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página Marvel') ).toBeTruthy();


    })

});