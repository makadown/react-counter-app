import React from 'react'
import PropTypes from 'prop-types';

/*const miFuncion = (mensajito) => {
    return mensajito + ' Alterado';
}*/

export const FirstApp = ( {
        title, 
        subtitle, 
        numero
    } ) => {

    

/*    const newMessage = {
        message: 'Hola mundo',
        title: 'Mayito'
    };*/

    return (
        <>
            <h1>{ title } </h1>
            {/*<code>{ JSON.stringify(newMessage) }</code>*/}
            <p> { subtitle } </p>
            <p> { numero } </p>
        </>
    )
  }


  FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    numero: PropTypes.number
  }
// OJO: defaultProps entran antes que los propTypes
  FirstApp.defaultProps = {
    numero: 0,
    subtitle: 'No hay subtitulo',
    title: 'No hay titulo',
  }
  