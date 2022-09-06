import {FC} from "react";
import {Col, Form, Input, Row, Select, Typography} from "antd";

type Props = {
}
const Step3: FC<Props> = () => {
    return (
        <>
            <Typography.Title level={2}>Address detail</Typography.Title>
            <Form.Item label="Registered company address line 1" name="companyAddress">
                <Input/>
            </Form.Item>
            <Form.Item label="Address line 2" name="companyAddress2">
                <Input/>
            </Form.Item>
            <Row gutter={12}>
                <Col span={12}>
                    <Form.Item label="State" name="state">
                        <Select style={{width: '100%'}}></Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Postal code" name="postalCode">
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item label="Country" name="country">
                <Select></Select>
            </Form.Item>
        </>
    )
}

export default Step3;