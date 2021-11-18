import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { pokemonApi } from '../apiFetch/apiFetchSlice';
import "regenerator-runtime/runtime";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPokemon(action) {
   try {
      const pokemon = yield call(pokemonApi, action.payload.base_experience);
      yield put({type: "POKEMON_FETCH_SUCCEEDED", pokemon: pokemon});
   } catch (e) {
      yield put({type: "POKEMON_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("pokemonApi/executeQuery/pending", fetchPokemon);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
//function* mySaga() {
  //yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
//}

export default mySaga;
