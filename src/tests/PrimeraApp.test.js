// import '@testing-library/jest-dom/extend-expect';
import React from 'react';
// import { render } from '@testing-library/react';
import PrimerApp from '../PrimeraApp';
import {createSerializer} from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('Pruebas en PrimeraApp', () => {
   /*  test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {
        const saludo = 'Hola, soy Goku';

        const {getByText} = render(<PrimerApp saludo={saludo}/>);

        expect(getByText(saludo)).toBeInTheDocument();
    }); */

    test('Debe mostrar <PrimeraApp/> correctamente ', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimerApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar subtitulo enviado por props ', () => {
        const saludo = 'Hola, soy Goku';
        const subTitulo = 'kame hame ha!';
        const wrapper = shallow( 
                <PrimerApp saludo={saludo} subtitulo={subTitulo}/>
                );
        // wrapper.find() es muuuy parecido a document.querySelector();
        const textoParrafo = wrapper.find('h3').text();
        expect(textoParrafo.trim()).toBe(subTitulo.trim());
    });
    
    
})
