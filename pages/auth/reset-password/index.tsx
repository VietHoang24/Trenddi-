import React from 'react';
import Main from "@components/layout/main";
import ResetPasswordComponent from "@components/auth/reset-password";
import {NextPage} from "next";
// @ts-ignore
export const getServerSideProps = async ({query}) => {
    const token = query.token;
    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }
    return {
        props: { token },
    }
}
const ResetPassword: NextPage<{token: string}> = ({token}) => {
    return (
            <ResetPasswordComponent token={token}/>
    )
}

export default ResetPassword