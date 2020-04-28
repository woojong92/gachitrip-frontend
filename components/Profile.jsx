import React from "react";
import styled from "@emotion/styled";

const ProfileBox = styled.div`
    box-sizing: border-box;
    width: 80%;
    max-width: 800px;
    height: 200px;
    /* background-color: pink; */
    display: flex;
    flex: 1;
    /* flex-shrink: 1; */
    justify-content: flex-start;
    align-items: center;
    margin: 2rem;
    padding: 2rem;
    border-bottom: 1px solid #e5e5e5;
`;

const AvatarBox = styled.div`
    box-sizing: border-box;
    min-width: 50px;
    width: 120px;
    height: 120px;
    min-height: 50px;
    border-radius: 25px;
    background-color: hotpink;
`;

const ProfileDetailBox = styled.div`
    box-sizing: border-box;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
`;

const UsernameBox = styled.div`
    font-size: 25px;
`;

const BioBox = styled.div`
`;

function Profile ({username, bio}) {
 return (
    <ProfileBox>
        <AvatarBox/>
        <ProfileDetailBox>
            <UsernameBox>{username}</UsernameBox>
            <BioBox>{bio}</BioBox>
        </ProfileDetailBox>
    </ProfileBox>
 )
}

export default Profile;