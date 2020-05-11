import Layout from "../../components/Layout";
import React, {useState} from "react";
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/core";
import SignupContainer from "../../containers/auth/SignupContainer";



function SignupPage () { 
    return (
        <Layout>
            <SignupContainer />
        </Layout>
    )

}

export default SignupPage;