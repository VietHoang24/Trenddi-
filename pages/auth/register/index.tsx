import React from 'react';
import Main from "@components/layout/main";
import RegistrationFormComponent from "@components/auth/register";

const Register: React.FC = () => {
    return (
        <Main>
            <RegistrationFormComponent/>
        </Main>
    )
}

export default Register