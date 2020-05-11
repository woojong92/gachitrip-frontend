import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { changeField, initializeForm } from "../../modules/auth";
import SigninPresenter from "../../components/auth/SigninPresenter";
import Router from 'next/router'

const SigninContainer = () => {
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        auth: auth.authError,
        user: user.user
    }));

    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: "login",
                key: name,
                value
            })
        );
    }

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        console.log("login");
        // 구현 예정
        const { email, password } = form;
        dispatch(login({email, password}));
    }

    // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
    useEffect(() => {
        dispatch(initializeForm("login"));
    }, [dispatch]);

    useEffect(() => {
        if(authError){
            console.log('오류 발생');
            console.log(authError);
            return;
        }
        if(auth){
            console.log("로그인 성공");
            console.log(auth);
            dispatch(check());// me로 바꿀 예정
        }
    }, [auth, authError, dispatch]);

    useEffext(() => {
        if(user) {
            Router.replace("/")
        }
    }, [user]);

    return (
        <SigninPresenter 
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}

export default SigninContainer;