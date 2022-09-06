import {Button, Col, Row, Space, Typography, Image, Form, Input} from 'antd'
import type {FC} from 'react'

import {forgetPassword} from "@api/auth";
import {BaseResponse} from "@api";
import {useRouter} from "next/router";
import styles from './index.module.scss'
import {IForgetPasswordForm} from "@components/auth/forget-password/interfaces";

type PropsType = {
    handleNextStep(step: number): void
}
const Step2: FC<PropsType> = ({handleNextStep}) => {
    const router = useRouter()
    const onHandleClickResend = async () => {
        handleNextStep(1)
    }
    return (
        <Col span={12}>
            <Row justify="center" align="middle" style={{height: '100%'}}>
                <Space direction="vertical" style={{width: '50%'}}>
                    <Typography.Title level={2}>Email Has Been Sent</Typography.Title>
                    <div style={{marginBottom: '15px'}}>
                        <Typography.Text>Didn&apos;t receive the link? </Typography.Text>
                        <Typography.Text className={styles.login} onClick={onHandleClickResend}>Resend</Typography.Text>
                    </div>
                    <div style={{marginBottom: '10px'}}>
                        <Typography.Text>Please check your inbox and click in the received link to reset password.</Typography.Text>
                    </div>

                    <Row style={{marginTop: '10px'}}>
                        <Button
                            style={{
                                borderRadius: '10px',
                                height: '3rem',
                                backgroundColor: '#f42c97',
                                color: '#ffffff',
                                width: '100%'
                            }}
                            onClick={()=>router.replace('/auth/login')}
                        >
                            Log in
                        </Button>
                    </Row>
                </Space>
            </Row>
        </Col>
    )
}

export default Step2;
