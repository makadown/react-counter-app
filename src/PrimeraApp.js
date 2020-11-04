import React from 'react';
import PropTypes from 'prop-types';

/** Recientemente React maneja los componentes de manera Funcional (Functional Components)
 * de modo que ya no se usan como clases.
 */
const PrimerApp = ({saludo, subtitulo}) => {

    return (
            <>
                <h1>{saludo}</h1>
                <p>Mi primera aplicación</p>
                <h3> { subtitulo} </h3>
            </>
            );
};

PrimerApp.propTypes = {
    saludo: PropTypes.string.isRequired
};

PrimerApp.defaultProps = {
    subtitulo: ''
}; 

export default PrimerApp;