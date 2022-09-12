import { Col, Row, Typography } from 'antd';
import React from 'react';
import BasicInput from 'src/commonComponents/basicInput';
import InputFrame from 'src/commonComponents/inputFrame/inputFrame';
import styles from './index.module.scss';
const FeeAndPayment = () => {
  return (
    <InputFrame>
      <div className={styles.FeeAndPayment}>
        <Typography.Title level={4}>Fees And Payment Method</Typography.Title>
        <Typography.Text>
          <span className="secondary-color">Maximum CMP Bid:</span> $5
        </Typography.Text>
        <Typography.Title level={4}>Payment Method</Typography.Title>
        <Row gutter={[8, 8]}>
          <Col sm={12} xs={24}>
            <InputFrame style={{ backgroundColor: '#F8F8F8 ', cursor: 'pointer', padding: '15px' }}>
              <Typography.Title level={5}>Debit/Credit card</Typography.Title>
            </InputFrame>
          </Col>
          <Col sm={12} xs={24}>
            <InputFrame style={{ cursor: 'pointer', padding: '15px' }}>
              <Typography.Title level={5}>Debit/Credit card</Typography.Title>
            </InputFrame>
          </Col>
        </Row>
        <BasicInput
          name='cardNumber'
          rules={[
            {
              required: true,
              message: 'Please enter Card Number',
            },
          ]}
          label={<Typography.Text>Card Number</Typography.Text>}
          useLabel={true}
        />
        <BasicInput
          name='cardName'
          rules={[
            {
              required: true,
              message: 'Please enter Name On Card',
            },
          ]}
          label={<Typography.Text>Name On Card</Typography.Text>}
          useLabel={true}
        />
        <BasicInput
          name='expiryDate'
          rules={[
            {
              required: true,
              message: 'Please enter Expiry Date',
            },
          ]}
          label={<Typography.Text>Expiry Date</Typography.Text>}
          useLabel={true}
        />
      </div>
    </InputFrame>
  );
};

export default FeeAndPayment;
