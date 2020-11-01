import React from 'react';

/** Recientemente React maneja los componentes de manera Funcional (Functional Components)
 * de modo que ya no se usan como clases.
 */
const PrimerApp = () => {
    const saludo = 'Hola mundo desde PrimerApp!';
    return (
            <>
                <h1>{saludo}</h1>
                <p>Mi primera aplicación</p>
            </>
            );
};

export default PrimerApp;