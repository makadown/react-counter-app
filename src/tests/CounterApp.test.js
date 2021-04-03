import React from 'react';
// import { render } from '@testing-library/react';
import CounterApp from '../CounterApp';
import { createSerializer } from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('Pruebas de CounterApp', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar <CounterApp/> correctamente con su valor por defecto', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar subtitulo enviado por props ', () => {
        const valorNuevo = 100;
        const wrapperLocal = shallow(
            <CounterApp value={valorNuevo} />
        );
        const valor = wrapperLocal.find('h2').text();
        expect(+valor).toBe(valorNuevo);
    });

    test('Debe incrementar con el boton +1 ', () => {
        wrapper.find('button').at(0).simulate('click');
        const valor = wrapper.find('h2').text();
        expect(+valor).toBe(101);
    });

    test('Debe restablecer con el boton reset ', () => {
        const wrapperLocal = shallow(
            <CounterApp value={200} />
        );
        
        wrapperLocal.find('button').at(0).simulate('click');
        wrapperLocal.find('button').at(0).simulate('click');
        wrapperLocal.find('button').at(1).simulate('click');
        const valor = wrapperLocal.find('h2').text();
        expect(+valor).toBe(200);
    });

    test('Debe incrementar con el boton -1 ', () => {
        wrapper.find('button').at(2).simulate('click');
        const valor = wrapper.find('h2').text();
        expect(+valor).toBe(99);
    });
})
