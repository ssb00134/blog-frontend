import { combineReducers } from 'redux';
<<<<<<< HEAD
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  loading,
});

export function* rootSaga() {
  yield all([authSaga()]);
}
=======
import auth from './auth';
import loading from './loading';

const rootReducer = combineReducers({ auth, loading });
>>>>>>> eb990b350175a89f94ce336362c2869c5efef5a9

export default rootReducer;
