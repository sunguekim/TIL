import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {changeField,initializeForm,register} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm'
import {check} from '../../modules/user';
import {withRouter} from 'react-router-dom'


const RegisterForm=({history})=>{
    const dispatch = useDispatch();
    const {form,auth,authError,user} = useSelector(({auth,user})=>({
        form:auth.register,
        auth:auth.auth,
        authError:auth.authError,
        user:user.user
    }));
    //인풋 변경이벤트
    const onChange = e=>{
        const{value,name} = e.target;
        dispatch(
            changeField({
                form:'register',
                key:name,
                value
            })
        )
    }

    const onSubmit=e=>{
        e.preventDefault();
        const {username,password,passwordConfirm} = form;
        if(password!==passwordConfirm){
            return
        }
        dispatch(register({username,password}));
    }
    //컴포넌트가 처음 렌더링 될때 폼 초기화
    useEffect(()=>{
        dispatch(initializeForm('register'))
    },[dispatch]);

    useEffect(()=>{
        if(authError){
            console.log('오류발생');
            console.log(authError);
            return
        }
        if(auth){
            console.log('회원가입성공');;
            console.log(auth);;
            dispatch(check());
        }
    },[auth,authError,dispatch]);

    useEffect(()=>{
        if(user){
            console.log('checkAPI성공')
            console.log(user)
        }
    },[user])

    useEffect(()=>{
        if(user){
            history.push('/')
        }

    },[history,user])

    return(
        <div>
            <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            />
        </div>
    )
}

export default withRouter(RegisterForm);