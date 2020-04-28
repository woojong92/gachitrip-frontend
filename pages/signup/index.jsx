import Layout from "../../components/Layout";

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
    

    &[type='submit'] {
        background-color: #ffdb4d;
        cursor: pointer;
        font-weight: bold;
        
        ${props => !props.disabled && css`

            &:hover {
                background-color: #ffeb99;
            }
            &:active {
                background-color: #ffcc00;
            }
        `}
    }
`;


function SignupPage () { 
    const [email, setEmail] = useState('');
    const [usernaem, setUsername] = useState('');
    const [password, setPassword] =  useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const submitData = async (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <Layout>
        <Wrapper>
            <FormBox onSubmit={submitData}>
                <h1>회원가입</h1>
                <InputBox 
                    type="text"
                    onChange={ e => setEmail(e.target.value)}
                    placeholder="이메일을 입력해 주세요"
                    value={email}
                />
                <InputBox 
                    type="text"
                    onChange={ e => setUsername(e.target.value)}
                    placeholder="사용하실 아이디를 입력해 주세요"
                    value={usernaem}
                />
                <InputBox 
                    type="password"
                    onChange={ e => setPassword(e.target.value)}
                    placeholder="비밀번호를 입력해 주세요"
                    value={password}
                />
                <InputBox 
                    type="password"
                    onChange={ e => setCheckPassword(e.target.value)}
                    placeholder="비밀번호를 다시 한번 입력해 주세요"
                    value={checkPassword}
                />

                <InputBox 
                    disabled={!password || !email || !password || !checkPassword}
                    type="submit"
                    value="회원가입하기"
                />
            </FormBox>
        </Wrapper>
        </Layout>
    )

}

export default SignupPage;