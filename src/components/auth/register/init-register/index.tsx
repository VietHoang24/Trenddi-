import {Button, Col, Row, Space, Typography, Image, Form, Input, Checkbox} from 'antd'
import type {FC} from 'react'

import {getConfigFromNext} from "@common";
import {useRouter} from "next/router";
import styles from './index.module.scss'

type PropsType = {
    handleNextStep(step: number): void
}
const InitRegisterStep: FC<PropsType> = ({handleNextStep}) => {
    const router = useRouter()
    const onHandleSocialLogin = () => {
        location.href = `${getConfigFromNext().BE_BASE_URL}/auth/google`
    }
    const onHandleClickLogin = async () => {
        await router.replace('/auth/login')
    }
    return (
        <Row className={styles.container}>
            <Col span={12} className={styles.imagesBackground}></Col>
            <Col span={12}>
                <Row justify="center" align="middle" style={{height: '100%'}}>
                    <Space direction="vertical" style={{width: '50%'}}>
                        <Typography.Title level={2}>Create Account</Typography.Title>
                        <div>
                            <Typography.Text>Already have an account? </Typography.Text>
                            <Typography.Text className={styles.signUp}
                                             onClick={onHandleClickLogin}>Login</Typography.Text>
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
                                Or Sign Up With
                            </Typography.Text>
                        </Row>

                        <Form.Item label="Email" name="email" rules={
                            [{
                                required: true,
                                message: 'Please input your email'
                            }]
                        }>
                            <Input style={{borderRadius: '10px', height: '3rem'}} type="email"/>
                        </Form.Item>
                        <Form.Item label="Set Password" name="password" rules={
                            [{
                                required: true,
                                message: 'Please input your password'
                            }]
                        }>
                            <Input.Password style={{borderRadius: '10px', height: '3rem'}}/>
                        </Form.Item>
                        <Form.Item
                            name="acceptTerm"
                            valuePropName="checked"
                        >
                            <Checkbox>By creating an account you agree to our Terms of Service and Privacy Policy</Checkbox>
                        </Form.Item>
                        <Row style={{marginTop: '10px'}}>
                            <Button
                                style={{
                                    borderRadius: '10px',
                                    height: '3rem',
                                    backgroundColor: '#f42c97',
                                    color: '#ffffff',
                                    width: '100%'
                                }}
                                htmlType="button"
                                onClick={() => handleNextStep(1)}
                            >
                                Sign Up
                            </Button>
                        </Row>
                    </Space>
                </Row>
            </Col>
        </Row>
    )
}

export default InitRegisterStep;
