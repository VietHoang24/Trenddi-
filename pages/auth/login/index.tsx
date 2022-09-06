import React from 'react';
import Main from "@components/layout/main";
import LoginComponent from "@components/auth/login";

const Login: React.FC = () => {
    return (
        <Main>
            <LoginComponent/>
        </Main>
    )
}

export default Login