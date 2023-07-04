import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { appRoutes } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter />', () => {
    
    test('debe de mostrar el login si no está autenticado', () => {

        const router = createMemoryRouter(appRoutes, {
            initialEntries: ['/marvel']
        });

        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={ router } />
            </AuthContext.Provider>
        );

        expect( screen.getAllByText('Login').length ).toBe(2)

        
    });

    test('debe de mostrar el componente de Marvel si está autenticado', () => {

        const router = createMemoryRouter(appRoutes, {
            initialEntries: ['/login']
        })
    
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Juan Carlos'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={ router } />
            </AuthContext.Provider>
        );

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);

        

    });


});