import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { changeField, initializeForm, register } from "../../modules/auth";
import SignupPresenter from "../../components/auth/SignupPresenter";
import { check } from "../../modules/user"; // me로 변경
import Router from 'next/router'

const SignupContainer = () => {
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: "register",
                key: name,
                value
            })
        );
    }

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        console.log("register");
        // 구현 예정
        const { email, username, password, passwordConfirm } = form;
        if( [email, username, password, passwordConfirm].includes("") ) {
            console.log("빈 칸을 모두 입력하시오.");
            return;
        }

        if(password !== passwordConfirm){
            // TODO: 오류처리
            console.log("비밀번호가 일치하지 않습니다.")
            changeField({form: "register", key: "password", value: ""});
            changeField({form: "register", key: "passwordConfirm", value: ""});
            return;
        }
        // TODO: password 암호화
        dispatch(register({email, username, password}));
    }

    // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
    useEffect(() => {
        dispatch(initializeForm("register"));
    }, [dispatch])

    // 회원가입 성공/실패 처리
    useEffect(() => {
        if(authError){
            if( authError.response.status === 409 ) {
                console.log("이미 존재하는 계정입니다.");
                return;
            }

            // 기타 이유
            console.log("회원가입 실패");
            console.log(authError);
            return;
        }
        if(auth){
            console.log('회원가입 성공');
            console.log(auth);
            //dispatch(check());
            // TODO: 회원가입을 성공하였습니다. 로그인하기 버튼 화면
            Router.replace("/signin");
        }
    }, [auth, authError]);

    return (
        <SignupPresenter 
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}

export default SignupContainer;