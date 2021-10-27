import React from 'react';
import { useDispatch } from 'react-redux';
import { add, subtract } from '../redux/ducks/counter';

const Counter = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add());
  };

  const handleSubtract = () => {
    dispatch(subtract());
  };

  return (
    <div>
      <button onClick={handleAdd} style={{ margin: '5px' }}>
        +
      </button>
      <button onClick={handleSubtract} style={{ margin: '5px' }}>
        -
      </button>
    </div>
  );
};

export default Counter;
