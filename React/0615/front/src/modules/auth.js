import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects'
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga'
import * as authApi from '../lib/api/auth';

const CHANGE_FIELD ='auth/CHANGE_FIELD'
const INITIALIZE_FORM ='auth/INITIALIZE_FORM'

// const REGISTER = 'auth/REGISTER';
// const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
// const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

// const LOGIN = 'auth/LOGIN';
// const LOGIN_SUCCESS='auth/LOGIN_SUCCESS';
// const LOGIN_FAILURE='auth/LOGIN_FAILURE';

const[REGISTER,REGISTER_SUCCESS,REGISTER_FAILURE]=createRequestActionTypes(
    'auth/REGISTER'
);

const[LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE]=createRequestActionTypes(
    'auth/LOGIN'
);


export const changeField =createAction(
    CHANGE_FIELD,
    ({form,key,value})=>({
        form,//reister,login 폼구분
        key,//username,password,passwordConfirm
        value,//실제 바꾸려는값
    })
)

export const initializeForm = createAction(INITIALIZE_FORM,form=>form);//register&login

export const register = createAction(REGISTER,({username,password})=>(
    {username,password,
}));

export const login = createAction(LOGIN,({username,password})=>({
    username,password
}))

const registerSaga = createRequestSaga(REGISTER,authApi.register);
const loginSaga = createRequestSaga(LOGIN,authApi.login);
export function* authSaga(){
    yield takeLatest(REGISTER,registerSaga);
    yield takeLatest(LOGIN,loginSaga);
}

const initialState={
    register:{
        username:'',
        password:'',
        passwordConfirm:'',
    },
    login:{
        username:'',
        password:'',
    },
    auth:null,
    authError:null,
}


const auth = handleActions(
    {
        [CHANGE_FIELD]:(state,{payload:{form,key,value}})=>
        produce(state,draft=>{draft[form][key]=value}),//form의 key값을 value로 바꾼다
        
        [INITIALIZE_FORM]:(state,{payload:form})=>({
            ...state,
            [form]:initialState[form],//폼 초기화
            authError:null,
        }),

        [REGISTER_SUCCESS]:(state,{payload:auth})=>({
            ...state,
            authError:null,
            auth,
        }),
        [REGISTER_FAILURE]:(state,{payload:error})=>({
            ...state,
            authError:error,
        }),

        [LOGIN_SUCCESS]:(state,{payload:auth})=>({
            ...state,
            authError:null,
            auth,
        }),
        [LOGIN_FAILURE]:(state,{payload:error})=>({
            ...state,
            authError:error,
        })
    },
    initialState
);

export default auth;

