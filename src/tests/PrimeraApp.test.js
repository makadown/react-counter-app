import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import PrimerApp from '../PrimeraApp';

describe('Pruebas en PrimeraApp', () => {
    test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {
        const saludo = 'Hola, soy Goku';

        const {getByText} = render(<PrimerApp saludo={saludo}/>);

        expect(getByText(saludo)).toBeInTheDocument();
    });
    
})
