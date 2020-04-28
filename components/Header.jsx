import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Router from "next/router";
// import { useRouter } from "next/router";

const HeaderBox = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 80px;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    border-bottom: 1px solid #e5e5e5;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
`;

const LogoBox = styled.a`
    font-family: Baloo;
    font-size: 30px;
    font-weight: bold;
    color: #000;
    margin-right: 20px;
    cursor: pointer;
`;

const SignInBtn = styled.a`
    font-family: Baloo;
    font-size: 15px;
    color: #111;
    padding: 5px 10px;
    margin: 0 0.5rem;
    cursor: pointer;
    /* border: 1px solid #222; */
    /* border-radius: 5px; */
    /* background-color: blue; */
`;

const SignUpBtn = styled.div`
    font-family: Baloo;
    font-size: 15px;
    color: #111;
    padding: 5px 10px;
    margin: 0 0.5rem;
    cursor: pointer;
    /* border: 1px solid #222; */
    /* background-color: #42f5e6; */
    /* border-radius: 5px; */
`;

const RightBox = styled.div`
    display: flex;
`;

const AvatarBox = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid #e5e5e5;
    border-radius: 25px;
    background-color: blueviolet;
    cursor: pointer;
`;



function Header () {
    return (
        <HeaderBox>
        <Nav>
            <div>
                <Link href="/">
                    <LogoBox>Gachitrip</LogoBox>
                </Link>
            </div>
        
            
            { 
                false ? (
                    <RightBox>
                        <Link href="/signup">
                            <SignUpBtn>회원가입하기</SignUpBtn>
                        </Link>
                        
                        <Link href="/signin">
                            <SignInBtn>로그인하기</SignInBtn>
                        </Link>
                    </RightBox> 
                ) : (
                    <RightBox>
                        <AvatarBox onClick={() => Router.push('/@username')}/>
                    </RightBox>
                )
            }
        </Nav>
        </HeaderBox>
    )
}

export default Header;