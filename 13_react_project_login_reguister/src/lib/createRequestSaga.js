import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

// 요청을 위한 액션 타입을 
export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

// createRequestSaga함수는 API 요청을 처리하는 비동기 함수를 만들어주는 함수입니다.
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작
    // 성공 액션을 디스패치합니다.
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data
      });
    } catch (e) {
      // 실패 액션을 디스패치합니다.
      yield put({
        type: FAILURE,
        payload: e,
        error: true
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}