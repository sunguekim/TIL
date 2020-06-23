import {createAction,handleActions} from 'redux-actions';
import produce from 'immer'

const CHANGE_FIELD ='auth/CHANGE_FIELD'
const INITIALIZE_FORM ='auth/INITIALIZE_FORM'


export const changeField =createAction(
    CHANGE_FIELD,
    ({form,key,value})=>({
        form,//reister,login 폼구분
        key,//username,password,passwordConfirm
        value,//실제 바꾸려는값
    })
)

export const initializeForm = createAction(INITIALIZE_FORM,form=>form);//register&login

const initialState={
    register:{
        username:'',
        password:'',
        passwordConfirm:'',
    },
    login:{
        username:'',
        password:'',
    }
}


const auth = handleActions(
    {
        [CHANGE_FIELD]:(state,{payload:{form,key,value}})=>
        produce(state,draft=>{draft[form][key]=value}),//form의 key값을 value로 바꾼다
        
        [initializeForm]:(state,{payload:form})=>({
            ...state,
            [form]:initialState[form],//폼 초기화
        })
    },
    initialState
);

export default auth;

