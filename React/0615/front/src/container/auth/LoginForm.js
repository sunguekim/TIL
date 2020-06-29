import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {changeField,initializeForm,login} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm'
import {check} from '../../modules/user'

const LoginForm=(history)=>{
    const dispatch = useDispatch();
    const {form,auth,authError,user} = useSelector(({auth,user})=>({
        form:auth.login,
        auth:auth.auth,
        authError: auth.authError,
        user:user.user,
    }));
    //인풋 변경이벤트
    const onChange = e=>{
        const{value,name} = e.target;
        dispatch(
            changeField({
                form:'login',
                key:name,
                value
            })
        )
    }

    const onSubmit=e=>{
        e.preventDefault();
        const {username,password} = form;
        dispatch(login({username,password}));
    };

    useEffect(()=>{
        dispatch(initializeForm('login'))
    },[dispatch]);

    useEffect(()=>{
        if(authError){
            console.log('오류발생');
            console.log(authError);
            return
        }
        if(auth){
            console.log('로그인성공');
            dispatch(check());
        }
    },[auth,authError,dispatch]);

    useEffect(()=>{
        console.log(user)
        if(user){
            console.log(user)
            history.push('/')
        }
    },[history,user]);

    return(
        <div>
            <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            />
        </div>
    )
}

export default withRouter(LoginForm);