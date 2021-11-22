import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
//import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';

//import mySaga from '../features/saga/saga';
import { rootEpic, rootReducer } from '../components/ReduxObservable';

import counterReducer from '../features/counter/counterSlice';
import { pokemonApi } from '../features/apiFetch/apiFetchSlice';

const epicMiddleware = createEpicMiddleware();

//const sagaMiddleware = createSagaMiddleware()
//const middleware =[...getDefaultMiddleware(), sagaMiddleware];

export default configureStore({
  reducer: {
    //Adds the generated reducer
    [pokemonApi.reducerPath]: pokemonApi.reducer,

    counter: counterReducer,

    rootReducer,
  },
  //middleware,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(epicMiddleware),
});

//sagaMiddleware.run(mySaga);

epicMiddleware.run(rootEpic);
