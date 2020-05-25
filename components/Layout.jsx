import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
`;

const LayoutBox = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export default function Layout ({ children, navigation, footer }) {
    return (
        <Wrapper>
            <Header />
            {
                // navigation && <Navigation/>
            }
            <LayoutBox>{ children }</LayoutBox>
           {
               footer && <Footer/>
           }
        </Wrapper>
    )
}

Layout.defaultProps = {
    children: PropTypes.string.isRequired,
    // navigation: PropsTypes.boolean
}