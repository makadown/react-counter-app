/* NOTA: Con el plugin de VSCode se tiene un atajo para crear rapidamente el
   componente funcional:    rafcp*/
import React from 'react';
import PropTypes from 'prop-types';

/** Recientemente React maneja los componentes de manera Funcional (Functional Components)
 * de modo que ya no se usan como clases.
 */
const CounterApp = ({value}) => {

    // handleAdd
    const handleAdd = (e) => {
        console.log(e)
    };

    return (
            <>
                <h1>CounterApp</h1>
                <h2> { value } </h2>

                <button onClick={ handleAdd }>+1</button>
            </>
            );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

export default CounterApp;