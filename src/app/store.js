import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import mySaga from '../features/saga/saga';

import counterReducer from '../features/counter/counterSlice';
import { pokemonApi } from '../features/apiFetch/apiFetchSlice';

const sagaMiddleware = createSagaMiddleware()
//const middleware =[...getDefaultMiddleware(), sagaMiddleware];

export default configureStore({
  reducer: {
    //Adds the generated reducer
    [pokemonApi.reducerPath]: pokemonApi.reducer,

    counter: counterReducer,
  },
  //middleware,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);
