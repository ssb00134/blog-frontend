import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = (type) => {
<<<<<<< HEAD
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작
=======
  const SUCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}FAILURE`;
  return [type, SUCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCEESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type));
>>>>>>> eb990b350175a89f94ce336362c2869c5efef5a9
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
<<<<<<< HEAD
    yield put(finishLoading(type)); // 로딩 끝
=======
    yield put(finishLoading(type));
>>>>>>> eb990b350175a89f94ce336362c2869c5efef5a9
  };
}
