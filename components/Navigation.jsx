import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 65px;
    border-bottom: 1px solid #e5e5e5;
`;

const NavigationBox = styled.div`
    box-sizing: border-box;
    width: 1024px;
    justify-content: flex-start;
    display: flex;
    margin: 1rem;
    @media (max-width: 768px) {
        width: 100%;
        
    }
`;

const A = styled.a`
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

function Navigation ({currentMenu}) {
    useEffect(() => {
        console.log('navigation')
    }, [currentMenu])
    return  (
        <Wrapper>
            <NavigationBox>
                <Link href="/"><A>홈</A></Link>
                <Link href="/community"><A>커뮤니티</A></Link>
                <Link href="/together"><A>같이여행</A></Link>
                <Link href="/contents"><A>콘텐츠</A></Link>
            </NavigationBox>
        </Wrapper>
    )
}

// Navigation.defaultProps = {
//     children: PropTypes.string
// }

export default Navigation;