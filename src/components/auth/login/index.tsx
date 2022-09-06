import {Button, Col, Row, Space, Typography, Image, Form, Input} from 'antd'
import type {FC} from 'react'

import {ILoginForm} from "@components/auth/login/interfaces";
import {login} from "@api/auth";
import {BaseResponse} from "@api";
import {ILoginResponse} from "@api/auth/interfaces";
import {getConfigFromNext, saveToken, TOKEN_KEY} from "@common";
import {useRouter} from "next/router";
import styles from './index.module.scss'
import {useState} from "react";

type PropsType = {}
const LoginComponent: FC<PropsType> = () => {
    const router = useRouter()
    const [error, setError] = useState<string>('');
    const onFinish = async (values: ILoginForm) => {
        try {
            const data: BaseResponse<ILoginResponse> = await login(values);
            const token = data.data.token;
            saveToken(token);
            await router.replace('/')
        } catch (e: any) {
            setError(e.message)
        }
    };
    const onHandleSocialLogin = () => {
        location.href = `${getConfigFromNext().BE_BASE_URL}/auth/google`
    }
    const onHandleClickSignUp = async () => {
        await router.replace('/auth/register')
    }
    return (
        <Row className={styles.container}>
            <Col span={12} className={styles.imagesBackground}></Col>
            <Col span={12}>
                <Row justify="center" align="middle" style={{height: '100%'}}>
                    <Space direction="vertical" style={{width: '50%'}}>
                        <Typography.Title level={2}>Welcome</Typography.Title>
                        <div>
                            <Typography.Text>Don&apos;t have an account yet? </Typography.Text>
                            <Typography.Text className={styles.signUp} onClick={onHandleClickSignUp}>Sign
                                Up</Typography.Text>
                        </div>

                        <Button
                            style={{borderRadius: '10px', height: '3rem', marginTop: '1rem', width: '100%'}}
                            onClick={onHandleSocialLogin}
                        >
                            <Space align="center">
                                <Image
                                    src="/images/google-icon.jpg"
                                    preview={false}
                                    width={20}
                                />
                                <Typography.Text>Log In With Google</Typography.Text>
                            </Space>
                        </Button>

                        <Row justify="center" style={{margin: '10px 0'}}>
                            <Typography.Text strong type="secondary">
                                Or Log In With
                            </Typography.Text>
                        </Row>

                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item label="Email" name="email" rules={
                                [{
                                    required: true,
                                    message: 'Please input your email'
                                }]
                            }>
                                <Input style={{borderRadius: '10px', height: '3rem'}} type="email"/>
                            </Form.Item>
                            <Form.Item label="Password" name="password" rules={
                                [{
                                    required: true,
                                    message: 'Please input your password'
                                }]
                            }>
                                <Input.Password style={{borderRadius: '10px', height: '3rem'}}/>
                            </Form.Item>
                            <Row justify="center">
                                <Typography.Text style={{}} type="danger">{error}</Typography.Text>
                            </Row>
                            <Row justify="end">
                                <Typography.Text style={{cursor: "pointer"}} type="secondary"
                                                 onClick={() => router.replace('/auth/forget-password')}>Forgot
                                    Password?</Typography.Text>
                            </Row>
                            <Row style={{marginTop: '10px'}}>
                                <Button
                                    style={{
                                        borderRadius: '10px',
                                        height: '3rem',
                                        backgroundColor: '#f42c97',
                                        color: '#ffffff',
                                        width: '100%'
                                    }}
                                    htmlType="submit"
                                >
                                    Log In
                                </Button>
                            </Row>
                        </Form>
                    </Space>
                </Row>
            </Col>
        </Row>
    )
}

export default LoginComponent;
