import React, {useState} from "react";
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/core";

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
`;

const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000; 
    background-color: #fff;
    margin: 10rem;
    padding: 2rem;
    width: 360px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 5px;
`;

const InputBox = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    margin: 0.5rem;
    padding: 0 10px;
    border-radius: 5px;
    border: 0;
    outline: none;
    background-color: #e5e5e5;
    font-size: 12px;

    &[type='submit'] {
        background-color: #ffdb4d;
        cursor: pointer;
        font-weight: bold;
        opacity: 0.5;
        ${props => !props.disabled && css`
            opacity: 1;
            &:hover {
                background-color: #ffeb99;
            }
            &:active {
                background-color: #ffcc00;
            }
        `}
    }
`;


function SignupPresenter ({form, onChange, onSubmit}) { 
    return (
        <Wrapper>
            <FormBox onSubmit={onSubmit}>
                <h1>회원가입</h1>
                <InputBox 
                    type="text"
                    name="email"
                    onChange={onChange}
                    placeholder="이메일을 입력해 주세요"
                    value={form.email}
                />
                <InputBox 
                    type="text"
                    name="username"
                    onChange={onChange}
                    placeholder="사용하실 아이디를 입력해 주세요"
                    value={form.usernaem}
                />
                <InputBox 
                    type="password"
                    name="password"
                    onChange={onChange}
                    placeholder="비밀번호를 입력해 주세요"
                    value={form.password}
                />
                <InputBox 
                    type="password"
                    name="passwordConfirm"
                    onChange={onChange}
                    placeholder="비밀번호를 다시 한번 입력해 주세요"
                    value={form.passwordConfirm}
                />

                <InputBox 
                    disabled={!form.password || !form.email || !form.password || !form.passwordConfirm}
                    type="submit"
                    value="회원가입하기"
                />
            </FormBox>
        </Wrapper>
    )

}

export default SignupPresenter;