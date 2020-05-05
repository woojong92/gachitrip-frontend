import React from "react";
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
    width: 1000px;
    justify-content: space-around;
    display: flex;
`;

const A = styled.a`
    color: #111;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #111
    }
`;

function Navigation () {
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