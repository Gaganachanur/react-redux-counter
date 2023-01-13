import React from 'react';

import {useSelector,useDispatch} from 'react-redux'

// Action creator

function Counter() {

  const hookSelector = useSelector((state)=>{
    return {
      count: state.count
    };
  })

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(incrementCounter(1));
  }

  function handleClickDecrement(){
    dispatch(decrement(1))
  }

  function incrementCounter(num) {
    return { type: 'INCREMENT', num: num }
  }
  function decrement(num){
  return {type:'DECREMENT', num:num}
  }

  
    return <div>
    <p>{hookSelector.count}</p>
    <button onClick={handleClick}>Increment</button>
    <button onClick={handleClickDecrement}>decrement</button>
    </div>;
}


export default Counter;