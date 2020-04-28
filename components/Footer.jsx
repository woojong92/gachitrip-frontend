import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
    display: flex;
    margin-top: auto;
    /* display: absolute; 
    left: 0;
    bottom: 0; */
    width: 100%;
    min-height: 200px;
    background-color: #2a2f36;
    /* position: absolute; */
`;

function Footer () {
    return (
        <Wrapper/>
    )

}

export default Footer;