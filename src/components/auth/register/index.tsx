import {DoubleRightOutlined} from '@ant-design/icons'
import {Button, Col, Row, Space, Typography, Form, Input, Steps, Select} from 'antd'
import type {FC} from 'react'
import styles from './index.module.scss'
import {useState} from "react";
import InitRegisterStep from "@components/auth/register/init-register";
import {ILoginForm} from "@components/auth/login/interfaces";
import {BaseResponse} from "@api";
import {ILoginResponse} from "@api/auth/interfaces";
import {createAccount, login} from "@api/auth";
import StepsComponent from "@components/auth/register/steps";
import {useRouter} from "next/router";


type Props = {}

const RegistrationFormComponent: FC<Props> = () => {
    const [form] = Form.useForm()
    const router = useRouter()
    const [current, setCurrent] = useState(0)
    const [body, setBody] = useState<any>({})
    const handleNextStep = async (step: number) => {
        try {
            if (step < 5) {
                const values = form.getFieldsValue();
                setBody({...body, ...values})
                setCurrent(step);
            } else {
                await createAccount(body);
                await router.replace('/auth/login')
            }
        }catch (e) {
            console.error(e)
        }
    }
    return (
        <Form layout="vertical" form={form} className={styles.form}>
            {current === 0 ? <InitRegisterStep handleNextStep={handleNextStep}/> :
                <StepsComponent current={current} handleNextStep={handleNextStep}/>}
        </Form>
    )
}

export default RegistrationFormComponent
