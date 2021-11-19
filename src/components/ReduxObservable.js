import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError, map, delay, mapTo } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { combineReducers } from 'redux';

const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULLFILLED = 'FETCH_USER_FULLFILLED';

//action creators
const fetchUser = username => ({ type: FETCH_USER, payload: username });
const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULLFILLED, payload });

//epic
const fetchUserEpic = action$ => action$.pipe(
  ofType(FETCH_USER),
  mergeMap(action => 
    ajax.getJSON(`https://api.github.com/users/${action.payload}`)
    .pipe(
      map(response => fetchUserFulfilled(response))
    )
  )
);

//Reducer
const users = (state = {}, action) => {
  switch(action.type) {
    case FETCH_USER_FULLFILLED:
      return {
        ...state,
        [action.payload.login]: action.payload
      };
    default:
      return state;
  }
};

const INCREMENT = 'INCREMENT';
const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';

const increment = () => {{ type: INCREMENT }};
const incrementIfOdd = () => {{ type: INCREMENT_IF_ODD }};

const incrementIfOddEpic = (action$, state$) => action$.pipe(
  ofType(INCREMENT_IF_ODD),
  filter(() => state$.value.counter % 2 === 1),
  map(() => increment())
);

const pingEpic = action$ => action$.pipe(
  ofType('PING'),
  delay(1000),
  mapTo({ type: 'PONG' })
);

export const pingReducer = (state = { isPinging: false} , action) => {
  switch(action.type) {
    case 'PING':
      return { isPinging: true };
    case 'PONG':
      return { isPinging: false };
    default:
      return state;
  }
};

export const rootEpic = (action$, store$, dependencies) =>
  combineEpics (
  pingEpic,
  fetchUserEpic
) (action$, store$, dependencies).pipe(
  catchError((error,source) => {
    console.error(error);
    return source;
  })
);

export const rootReducer = combineReducers({
  pingReducer,
  users
});

