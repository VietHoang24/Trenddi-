import {Button, Col, Row, Space, Typography, Image, Form, Input } from 'antd'
import type {FC} from 'react'

import {forgetPassword} from "@api/auth";
import {useRouter} from "next/router";
import styles from './index.module.scss'
import {IForgetPasswordForm} from "@components/auth/forget-password/interfaces";
import {useState} from "react";

type PropsType = {
    handleNextStep(step: number): void
}
const Step1: FC<PropsType> = ({handleNextStep}) => {
    const router = useRouter()
    const [error, setError] = useState<string>('');
    const onForgetPassword = async (values: IForgetPasswordForm) => {
        try {
            await forgetPassword(values);
            handleNextStep(2);
        } catch (e:any) {
            setError(e.message)
        }
    };
    const onHandleClickLogin = async () => {
        await router.replace('/auth/login')
    }
    return (
        <Col span={12}>
            <Row justify="center" align="middle" style={{height: '100%'}}>
                <Space direction="vertical" style={{width: '50%'}}>
                    <Typography.Title level={2}>Forgot Password</Typography.Title>
                    <div style={{marginBottom: '15px'}}>
                        <Typography.Text>Remember Password? </Typography.Text>
                        <Typography.Text className={styles.login} onClick={onHandleClickLogin}>Log In</Typography.Text>
                    </div>
                    <div style={{marginBottom: '10px'}}>
                        <Typography.Text>Don&apos;t worry,it&apos;s happen to best of us.</Typography.Text>
                    </div>
                    <div>
                        <Typography.Text>Enter the email associated with your account and we&apos;ll send and an email with reset password link</Typography.Text>
                    </div>

                    <Form layout="vertical" onFinish={onForgetPassword}>
                        <Form.Item label="Email" name="email" rules={
                            [{
                                required: true,
                                message: 'Please input your email'
                            }]
                        }>
                            <Input style={{borderRadius: '10px', height: '3rem'}} type="email"/>
                        </Form.Item>
                        <Row justify="center">
                            <Typography.Text type="danger">{error}</Typography.Text>
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
                                Send
                            </Button>
                        </Row>
                    </Form>
                </Space>
            </Row>
        </Col>
    )
}

export default Step1;
