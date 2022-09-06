import React from 'react';
import Main from "@components/layout/main";
import ForgetPasswordComponent from "@components/auth/forget-password";

const Login: React.FC = () => {
    return (
        <Main>
            <ForgetPasswordComponent/>
        </Main>
    )
}

export default Login