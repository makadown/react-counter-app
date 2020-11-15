/* NOTA: Con el plugin de VSCode se tiene un atajo para crear rapidamente el
   componente funcional:    rafcp*/
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** Recientemente React maneja los componentes de manera Funcional (Functional Components)
 * de modo que ya no se usan como clases.
 */
const CounterApp = ({ value = 100}) => {

    // useState retorna un arreglo con 1 variable y 1 funcion
    const [counter, setCounter] = useState(value);
    // handleAdd
    const handleAdd = () => {
        setCounter((c) => c + 1);
    };

    const handleReset = () => setCounter((c) => value);

    const handleSubstract = () => setCounter((c) => c - 1);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

export default CounterApp;