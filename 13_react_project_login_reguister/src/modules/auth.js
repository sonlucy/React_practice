import React from "react";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer"; // 불변성 관리를 위한 라이브러리(spread 대신 사용 가능)
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import * as authAPI from '../lib/api/auth';

// 액션 타입 정의
// const SAMPLE_ACTIONM = "auth/SAMPLE_ACTIONM";
// 액션 생성 함수
// export const sampleAction = createAction(SAMPLE_ACTIONM);

const CHANGE_FIELD = "auth/CHANGE_FIELD"; // 특정값을 업데이트
const INITIALIZE_FORM = "auth/INITIALIZE_FORM"  // 폼 초기화



// 회원가입 액션 타입 정의
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER'
);

// 로그인 액션 타입 정의
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN'
);

// 
export const register = createAction(REGISTER, ({ username, password }) => ({
  username,
  password
}));

// 로그인 액션 생성 함수
export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password
}));

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
// 사가들을 합치기
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga); //가장 마지막으로 디스패치된 액션만 처리
  yield takeLatest(LOGIN, loginSaga); //가장 마지막으로 디스패치된 액션만 처리
}




// 액션 생성 함수
// 입력값에 대한 업데이트 함수(액션 생성 함수)
export const changeField = createAction(
  CHANGE_FIELD,
  ({form, key, value}) => ({
    form,
    key,
    value,
  })
);

// 폼 호기화 함수(액션 생성 함수)
export const initialForm = createAction(
  INITIALIZE_FORM, (form) => form // register / login
);

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: ''
  },
  login: {
    username: '',
    password: ''
  },
  auth: null,
  authError: null
}


/*
export const register = createAction(
  REGISTER, ({username, password}) => ({
    username,
    password,
  })
);

export const login = createAction(
  LOGIN, ()
) */




// 초기 상태
/* const initialState = {}; */

// 리듀서 정의
/* const auth = handleActions(
  {
    [SAMPLE_ACTIONM]: (state, action) => state,
  },
  initialState
); */

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, {payload: {form, key, value}}) =>
    // immer 라이브러리 사용
    produce(state, draft => {
      draft[form][key] = value;  //
    }),
    [INITIALIZE_FORM]: (state, {payload: form}) => ({
      ...state,
      [form]: initialState[form],
    }),


    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    })


  },
  initialState
)

export default auth;