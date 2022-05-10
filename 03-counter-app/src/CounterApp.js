import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({ value = 5 }) => {

  const [counter, setCounter] = useState(value);
  
  const handleAdd = (e) => {
    setCounter(counter + 1);
  }

  const handleReset = (e) => {
    setCounter(value);
  }

  const handleSubtract = (e) => {
    setCounter(counter - 1);
  }

  return (
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={ handleAdd }>Sumar</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleSubtract }>Restar</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp