import Layout from "../../components/Layout";

import React, {useState} from "react";
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/core";
import SignupContainer from "../../containers/auth/SignupContainer";



function SignupPage () { 
    const [email, setEmail] = useState('');
    const [usernaem, setUsername] = useState('');
    const [password, setPassword] =  useState('');
    const [checkPassword, setCheckPassword] = useState('');

    return (
        <Layout>
            <SignupContainer />
        </Layout>
    )

}

export default SignupPage;