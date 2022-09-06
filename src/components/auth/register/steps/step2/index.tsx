import {FC} from "react";
import {Col, Form, Input, Row, Select, Typography} from "antd";

type Props = {
}
const Step2: FC<Props> = () => {
    return (
        <>
            <Typography.Title level={2}>Contact detail</Typography.Title>
            <Form.Item label="Contact email address" name="contactEmail">
                <Input/>
            </Form.Item>
            <Form.Item label="Finance contact email address" name="financeEmail">
                <Input/>
            </Form.Item>
            <Form.Item label="Mobile phone number" name="mobilePhone">
                <Input/>
            </Form.Item>
        </>
    )
}

export default Step2;