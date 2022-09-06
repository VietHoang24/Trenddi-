import {FC} from "react";
import {Col, Form, Input, Row, Select, Typography} from "antd";

type Props = {
}
const Step1: FC<Props> = () => {
    return (
        <>
            <Typography.Title level={2}>Company detail</Typography.Title>
            <Form.Item label="Company name" name="companyName">
                <Input/>
            </Form.Item>
            <Form.Item label="Company registration number" name="companyRegistrationNumber">
                <Input/>
            </Form.Item>
            <Form.Item label="Contact Name" name="contractName">
                <Input/>
            </Form.Item>
            <Form.Item label="Website URL (E-Commerce website)" name="webUrl">
                <Input/>
            </Form.Item>
        </>
    )
}

export default Step1;