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
        /* color: #fa8c16; */
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


function Signin () { 
    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');

    const submitData = async (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <Wrapper>
            <FormBox onSubmit={submitData}>
                <h1>로그인하기</h1>
                <InputBox 
                    type="text"
                    onChange={ e => setEmail(e.target.value)}
                    placeholder="이메일 주소를 입력해주세요."
                    value={email}
                />
                <InputBox 
                    type="password"
                    onChange={ e => setPassword(e.target.value)}
                    placeholder="비밀번호를 입력해 주세요."
                    value={password}
                />

                <InputBox 
                    disabled={!password || !email}
                    type="submit"
                    // onChange={ e => setEmail(e.target.value)}
                    // placeholder="Email Address"
                    value="로그인하기"
                />
            </FormBox>
          
        </Wrapper>
    )

}

export default Signin;