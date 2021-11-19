import React from 'react';
import { configureStore } from '@reduxjs/toolkit';

const ReduxTest = () => {
  
  const initialState = { value: 0 };

  function counterReducer(state = initialState, action) {
    if(action.type === 'counter/increment') {
      return {
        ...state,
        value: state.value + 1
        }
      }

    return state;
  }

  const increment = () => {
    return {
      type: 'counter/increment'
    }
  }

  const store = configureStore({ reducer: counterReducer });
  store.dispatch(increment());
  store.dispatch(increment());
  console.log(store.getState());

  const selectCounterValue = state => state.value;

  const currentValue = selectCounterValue(store.getState());
  console.log(currentValue);


  const addTodo = text => {
    return {
      type: 'todos/todoAdded', 
      payload: text
    }
  };

  const addTodoAction = {
    type: 'totos/todoAdded',
    payload: 'Buy Milk',
  }


  return (
    <div>Hello man</div>
  );
}

export default ReduxTest;
