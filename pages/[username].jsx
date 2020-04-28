import React, {useState} from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import Profile from "../components/Profile";
// import { GetServerSideProps } from 'next';
// import Router from 'next/router'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const ProfileNavigationBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: 80%;
    max-width: 500px;
    justify-content: space-between;
    margin: 4rem;
    /* align-items: center; */
    /* background-color: red; */
    
`;

const ProfileNavigationBtn = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 150px;
    height: 20px;
    /* background-color: hotpink; */
    margin: 0 1rem;
    border-bottom: ${props => props.isActive ? "3px solid #e5e5e5" : ""};
    cursor: pointer;
`;

function ProfileNavigation ({children, onClick, isActive}) {
    return (
        <ProfileNavigationBtn onClick={onClick} isActive={isActive}>{children}</ProfileNavigationBtn>
    )
}

export default function (props) {
    // write, video, picture
    const [ profileNav, setProfileNav ] = useState("write");
    
    const { username } = props;
    const _username = username.substr(1);
    const bio = "hello gachitrip!";

    return (
        <Layout>
            <Wrapper>
                <Profile username={_username} bio={bio}/>

                <ProfileNavigationBox>
                    <ProfileNavigation onClick={() => setProfileNav("write")} isActive={profileNav === "write"}>글</ProfileNavigation>
                    <ProfileNavigation onClick={() => setProfileNav("picture")} isActive={profileNav === "picture"}>사진</ProfileNavigation>
                    <ProfileNavigation onClick={() => setProfileNav("video")} isActive={profileNav === "video"}>비디오</ProfileNavigation>
                </ProfileNavigationBox>

                <div>
                    {profileNav}
                </div>

           </Wrapper>
        </Layout>
    )
} 

// https://www.gachitrip.com/@username
export const getServerSideProps = async (context) => {
    console.log(context.params.username);
    const res = { 
        ok: true,
        username: context.params.username 
    }//await fetch(`http://localhost:3000/api/post/${context.params.id}`)
    //const data = await res.json()
    return {props: { ...res }}
  }