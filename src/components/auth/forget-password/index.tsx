import {Button, Col, Row, Space, Typography, Image, Form, Input} from 'antd'
import type {FC} from 'react'

import {ILoginForm} from "@components/auth/login/interfaces";
import {forgetPassword, login} from "@api/auth";
import {BaseResponse} from "@api";
import {ILoginResponse} from "@api/auth/interfaces";
import {getConfigFromNext, saveToken, TOKEN_KEY} from "@common";
import {useRouter} from "next/router";
import styles from './index.module.scss'
import {IForgetPasswordForm} from "@components/auth/forget-password/interfaces";
import {useState} from "react";
import Step1 from "@components/auth/forget-password/step1";
import Step2 from "@components/auth/forget-password/step2";

type PropsType = {}
const ForgetPasswordComponent: FC<PropsType> = () => {
    const [step, setStep] = useState(1);
    const handleNextStep = (step: number) =>{
        setStep(step)
    }
    const renderStep = () =>{
        switch (step){
            case 1: return <Step1 handleNextStep={handleNextStep} />
            case 2: return <Step2 handleNextStep={handleNextStep} />
        }
    }

    return (
        <Row className={styles.container}>
            <Col span={12} className={styles.imagesBackground}></Col>
            {renderStep()}
        </Row>
    )
}

export default ForgetPasswordComponent;
