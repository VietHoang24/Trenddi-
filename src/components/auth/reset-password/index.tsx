import {Button, Col, Row, Space, Typography, Form, Input} from 'antd'
import type {FC} from 'react'

import {useRouter} from "next/router";
import styles from './index.module.scss'
import {resetPassword} from "@api/auth";
import {IResetForm} from "@components/auth/reset-password/interfaces";
import {useState} from "react";

type PropsType = {
    token: string
}
const ResetPasswordComponent: FC<PropsType> = ({token}) => {
    const router = useRouter();
    const [error, setError] = useState<string>('');
    const onFinish = async (values: IResetForm) => {
        try {
            await resetPassword({...values, token});
            await router.replace('/auth/login')
        } catch (e: any) {
            setError(e.message)
        }
    };
    const onHandleClickLogin = async () => {
        await router.replace('/auth/login')
    }
    return (
        <Row className={styles.container}>
            <Col span={12} className={styles.imagesBackground}></Col>
            <Col span={12}>
                <Row justify="center" align="middle" style={{height: '100%'}}>
                    <Space direction="vertical" style={{width: '50%'}}>
                        <Typography.Title level={2}>Reset Password</Typography.Title>
                        <div>
                            <Typography.Text>Remember your password? </Typography.Text>
                            <Typography.Text className={styles.signUp} onClick={onHandleClickLogin}>Log
                                In</Typography.Text>
                        </div>
                        <div style={{marginBottom: '10px'}}>
                            <Typography.Text>Your password must be different from previous used
                                passwords.</Typography.Text>
                        </div>

                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item label="New Password" name="newPassword" rules={
                                [{
                                    required: true,
                                    message: 'Please input your new password'
                                }]
                            }>
                                <Input.Password style={{borderRadius: '10px', height: '3rem'}}/>
                            </Form.Item>
                            <Form.Item label="Confirm Password" name="confirmPassword"
                                       dependencies={['newPassword']}
                                       rules={
                                           [{
                                               required: true,
                                               message: 'Please input your confirm password'
                                           }, ({getFieldValue}) => ({
                                               validator(_, value) {
                                                   if (!value || getFieldValue('newPassword') === value) {
                                                       return Promise.resolve();
                                                   }

                                                   return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                               },
                                           }),]
                                       }>
                                <Input.Password style={{borderRadius: '10px', height: '3rem'}}/>
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
        </Row>
    )
}

export default ResetPasswordComponent;
