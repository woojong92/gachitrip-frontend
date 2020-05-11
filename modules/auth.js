import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";
import createRequestSaga, { createRequestActionType } from "../lib/createRequestSaga"; 

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

const REGISTER = "auth/REGISTER";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
const REGISTER_FAILURE = "auth/REGISTER_FAILURE";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAILURE = "auth/REGISTER_FAILURE";

export const changeField = createAction(CHANGE_FIELD, 
    ({ form, key, value }) => ({
        form, // register, login
        key, // username, password, passwordConfirm 
        value, // 실제 바꾸려는 값
    }),
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); //register
export const register = createAction(REGISTER, ({email, username, password}) => ({
    email,
    username, 
    password
}));
export const login = createAction(LOGIN, ({email, password}) => ({
    email,
    password
}));

// 사가 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
    register: {
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
    },
    login: {
        email: "",
        password: "",
    },
    auth: null,
    authError: null
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => 
            produce(state, draft => {
                draft[form][key] = value; // ex: state.register.username을 바꿈
            }),
        [INITIALIZE_FORM]: (state, { payload: form}) => ({
            ...state,
            [form] : initialState[form],
        }),
        // 회원가입 성공
        [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        // 회원가입 실패
        [REGISTER_FAILURE]: (state, {payload: error}) => ({
            ...state,
            authError: error,
        }),
        // 로그인 성공
        [LOGIN_SUCCESS]: (state, {payload: auth}) => ({
            ...state,
            authError: null,
            auth,
        }),
        // 로그인 실패
        [LOGIN_FAILURE]: (state, {payload: error}) => ({
            ...state,
            authError: error,
        })
    },
    initialState,
);

export default auth;