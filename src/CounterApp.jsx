import React from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {
    console.log('Rendering CounterApp :D');
    // my first Hook =)
    const [counter, setValue] = React.useState(value);

    const handleAdd = (event) => {
        // This is interesting... this is my very first attempt to use hooks
        console.log('handleAdd counter value before setValue', counter);
        setValue(counter+1); // this is one way to update the state        
        //setValue( (c) => c + 1 ); // this is another way to update the state


        // WARNING
        // Calling setValue() will not change the current counter value here...
        console.log('handleAdd counter value after setValue', counter); // counter will be the same value as before!
        // the new counter value will be shown by the useState() call in the next render.

        // EVERYTIME the setValue() is called,
        // after this method or any method that change the state value,
        // everything in this CounterApp will be executed again.
    }

    const handleSubstract = () => {
        setValue(counter-1);
    }

    const handleReset = () => {
        setValue(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSubstract }>
                -1
            </button>
            <button onClick={ handleReset }>
                RESET TO { value }
            </button>
        </>
       );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}