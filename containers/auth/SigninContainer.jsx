import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { changeField, initializeForm } from "../../modules/auth";
import SigninPresenter from "../../components/auth/SigninPresenter";

const SigninContainer = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.login
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
    }

    // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
    useEffect(() => {
        dispatch(initializeForm("login"));
    }, [dispatch])

    return (
        <SigninPresenter 
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}

export default SigninContainer;