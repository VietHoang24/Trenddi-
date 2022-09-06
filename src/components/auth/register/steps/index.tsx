import type {FC} from 'react'
import {Button, Col, Form, Input, Row, Select, Space, Steps, Typography} from "antd";
import styles from './index.module.scss'
import {DoubleRightOutlined} from "@ant-design/icons";
import Step1 from "@components/auth/register/steps/step1";
import Step2 from "@components/auth/register/steps/step2";
import Step3 from "@components/auth/register/steps/step3";
import Step4 from "@components/auth/register/steps/step4";

type Props = {
    current: number,
    handleNextStep(step: number): void
}
const steps = [
    {
        title: "Step 01",
        description: "Company Detail",
        icon: <div>01</div>,

    },
    {
        title: "Step 02",
        description: "Contact Detail",
        icon: <div>02</div>,

    },
    {
        title: "Step 03",
        description: "Address Detail",
        icon: <div>03</div>,

    },
    {
        title: "Step 04",
        description: "Agreement",
        icon: <div>04</div>,

    }
]

const StepsComponent: FC<Props> = ({current, handleNextStep}) => {
    const renderStep = () => {
        switch (current) {
            case 1:
                return <Step1/>
            case 2:
                return <Step2/>
            case 3:
                return <Step3/>
            case 4:
                return <Step4/>
        }
    }
    const step = current - 1;
    return (
        <Row className={styles.container}>
            <Col span={12}>
                <Row
                    justify="center"
                    align="middle"
                    className={styles.stepContainer}
                >
                    <div>
                        <Steps
                            direction="vertical"
                            className={styles.steps}
                            current={step}
                            onChange={(value: number) => handleNextStep(value)}
                        >
                            {steps.map((item: any, index: number) => (
                                <Steps.Step
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    icon={item.icon}
                                    className={step === index ? styles.active : step < index ? styles.disable : ''}
                                />
                            ))}
                        </Steps>
                    </div>
                </Row>
            </Col>
            <Col span={12}>
                <Row justify="center" align="middle" className={styles.contentContainer}>
                    <Space direction="vertical" style={{width: '50%'}}>
                        {renderStep()}
                        <Row justify="space-between" align="middle" style={{marginTop: '10px'}}>
                            <Typography.Text strong type="secondary" className={styles.btn_pre}
                                             onClick={() => handleNextStep(current - 1)}>
                                Previous step
                            </Typography.Text>
                            <Button className={styles.btn_next} onClick={() => handleNextStep(current + 1)}>
                                {current === 4 ? 'Create account' : 'Next'} <DoubleRightOutlined/>
                            </Button>
                        </Row>
                    </Space>
                </Row>
            </Col>
        </Row>
    )
}

export default StepsComponent;