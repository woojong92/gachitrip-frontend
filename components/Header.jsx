import React, {useState, useEffect} from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Router from "next/router";
import {SearchOutlined, StarOutlined, AlignRightOutlined} from "@ant-design/icons";
import { Menu, Dropdown } from 'antd';
import Navigation from "./Navigation";

// import { useRouter } from "next/router";
``
const HeaderBox = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    border-bottom: 1px solid #e5e5e5;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    /* @media (max-width: 1024px) {
        width: 768px;
    } */
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const LogoBox = styled.a`
    font-family: Baloo;
    font-size: 30px;
    font-weight: bold;
    color: #000;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
        color: #000
    }
`;

const HeaderBtn = styled.a`
    font-family: Baloo;
    font-size: 16px;
    color: #111;
    padding: 5px 10px;
    /* margin: 0 0.5rem; */
    cursor: pointer;
    &:hover {
        color: #555555;
    }
`;

const NavigationBox = styled.div`
    width: 400px;
    justify-content: space-around;
    display: flex;
    @media (max-width: 1024px) {
        width: 300px;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const A = styled.a`
    color: #111;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
        color: #111
    }
`;

const LeftBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const RightBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

const AvatarBox = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid #e5e5e5;
    border-radius: 25px;
    background-color: blueviolet;
    margin: 0 0.5rem;
    cursor: pointer;
`;

const SearchIcon = styled(SearchOutlined)`
    box-sizing: border-box;
    outline: none;
    font-size: 16px;
    margin: 0 0.5rem;
`;

const StarIcon = styled(StarOutlined)`
    box-sizing: border-box;
    outline: none;
    font-size: 16px;
    margin: 0 0.5rem;
`;

const AlignRightOutlinedIcon = styled(AlignRightOutlined)`
    box-sizing: border-box;
    outline: none;
    display: none;
    font-size: 20px;
    margin: 0 0.5rem;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
    }
`;

const ToggleBox = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0.3rem 1rem;
    display: none;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
    border-bottom: 1px solid #e5e5e5;
`;

const SubMenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 65px;
    border-bottom: 1px solid #e5e5e5;
`;

const SubMenuInner = styled.div`
    box-sizing: border-box;
    width: 1024px;
    justify-content: flex-start;
    display: flex;
    margin: 1rem;
    @media (max-width: 768px) {
        width: 100%;
        
    }
`;

const SubMenuA = styled.a`
    color: #111;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #111
    }
    margin-right: 1rem;
`;

const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => Router.push('/@username')}>
            My Story
        </div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => Router.push('/write')}>
            새 글 쓰기
        </div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => Router.push('/draft')}>
          임시글
        </div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => Router.push('/setting')}>
          설정
        </div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => console.log("logout")}>
          로그아웃
        </div>
      </Menu.Item>
    </Menu>
  );

 



function Header () {
    const [logedIn, setLogedIn] = useState(true)
    const [toggled, setToggled] = useState(false)
    const handleToggle = () => {
        setToggled(!toggled)
    }
    const [currentMenu, setCurrentMenu] = useState("community")
    
    return (
        <>
        <HeaderBox>
        <Nav>
            <LeftBox>
                <Link href="/">
                    <LogoBox>Gachitrip</LogoBox>
                </Link>

                <NavigationBox>
                    <Link href="/" onClick={() => setCurrentMenu("community")}><A>커뮤니티</A></Link>
                    <Link href="/together" ><A onClick={() => setCurrentMenu("together")}>같이여행</A></Link>
                    <Link href="/contents" onClick={() => setCurrentMenu("contents")}><A>스토어</A></Link>
                </NavigationBox>
            </LeftBox>

            { 
                logedIn ? (
                    <>
                        <RightBox>
                            <Link href="/search">
                                <SearchIcon />
                            </Link>
                            <Link href="/me/list">
                                <StarIcon />
                            </Link>
                            {/* <AvatarBox onClick={() => Router.push('/@username')}/> */}
                            <Dropdown overlay={menu} trigger={['click']}>
                                <AvatarBox />
                            </Dropdown>
                        </RightBox>
                        <AlignRightOutlinedIcon onClick={handleToggle}/>
                    </>
                ) : (
                    <>
                    <RightBox>
                        <Link href="/search">
                            <SearchIcon />
                        </Link>
                        <Link href="/signup">
                            <HeaderBtn>회원가입하기</HeaderBtn>
                        </Link>
                        <Link href="/signin">
                            <HeaderBtn>로그인하기</HeaderBtn>
                        </Link>
                        
                    </RightBox>
                    <AlignRightOutlinedIcon onClick={handleToggle}/>
                    </> 
                )
            }
        </Nav>
        
        </HeaderBox>
        {
            toggled ? (
                logedIn ? 
                    <ToggleBox>
                        <Link href="/"><A>홈</A></Link>
                        <Link href="/community"><A>커뮤니티</A></Link>
                        <Link href="/together"><A>같이여행</A></Link>
                        <Link href="/contents"><A>콘텐츠</A></Link>
                        <hr color="#e5e5e5" width="100%" size="1px"/>
                        
                        <Link href="/@username"><A>My Story</A></Link>
                        <Link href="/write"><A>새 글 쓰기</A></Link>
                        <Link href="/draft"><A>임시글</A></Link>
                        <Link href="/setting"><A>설정</A></Link>

                        <hr color="#e5e5e5" width="100%" size="1px"/>
                        <Link href="/logout"><A>로그아웃하기</A></Link>

                    </ToggleBox> : 
                    <ToggleBox>
                        <Link href="/"><A>홈</A></Link>
                        <Link href="/community"><A>커뮤니티</A></Link>
                        <Link href="/together"><A>같이여행</A></Link>
                        <Link href="/contents"><A>콘텐츠</A></Link>     
                        <hr color="#e5e5e5" width="100%" size="1px"/>
                        <Link href="/signup"><A>회원가입하기</A></Link>
                        <Link href="/signin"><A>로그인하기</A></Link>           
                    </ToggleBox>
                ) : 
                null
        }
        {/* <SubMenuWrapper>
                {
                    currentMenu === "community" ? (
                        <SubMenuInner>
                            <Link href="/"><SubMenuA>Home</SubMenuA></Link>
                            <Link href="/community"><SubMenuA>스토리</SubMenuA></Link>
                            <Link href="/together"><SubMenuA>사진</SubMenuA></Link>
                            <Link href="/contents"><SubMenuA>영상</SubMenuA></Link>
                            <Link href="/contents"><SubMenuA>질문과 답변</SubMenuA></Link>
                        </SubMenuInner>
                    ) : (
                        <SubMenuInner>
                            <Link href="/"><SubMenuA>같이여행</SubMenuA></Link>
                            <Link href="/community"><SubMenuA>스토리</SubMenuA></Link>
                            <Link href="/together"><SubMenuA>사진</SubMenuA></Link>
                            <Link href="/contents"><SubMenuA>영상</SubMenuA></Link>
                            <Link href="/contents"><SubMenuA>질문과 답변</SubMenuA></Link>
                        </SubMenuInner>
                    )
                }
        </SubMenuWrapper> */}
        {/* <Navigation currentMenu={currentMenu}/> */}
        </>
    )
}

export default Header;