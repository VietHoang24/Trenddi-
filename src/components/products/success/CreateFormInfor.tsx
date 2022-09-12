import { Col, Row, Typography,Image } from 'antd';
import React from 'react';
import BasicInput from 'src/commonComponents/basicInput';
import InputFrame from 'src/commonComponents/inputFrame/inputFrame';
import Line from 'src/commonComponents/line';
import styles from './index.module.scss';
const CreateFormInfor = () => {
  return (
    <InputFrame>
			
      <div className={styles.createFormInfor}>
        
        <div>
          <Typography.Text>
            <span className="secondary-color">Campaign name</span>
          </Typography.Text>
          <Typography.Title level={2}>Ads campaign 1</Typography.Title>
        </div>
        <Row>
          <Col span={24}>
             <Row gutter={[24, 0]} align="middle" justify='start'>
            <Col xs={8} md={4} >
              <InputFrame
                style={{
                  backgroundColor: '#F8F8F8 ',
                  cursor: 'pointer',
                  padding: '5px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100px',
                }}
              >
                 <Image src="/images/icons/uploadIcon.svg" preview={false} />
              </InputFrame>
            </Col>
            <Col  xs={16} md={20}>
              <Typography.Text>
                <span className="secondary-color">Campaign Goal</span>
              </Typography.Text>
              <Typography.Title level={4}>CTM - Cost per impression</Typography.Title>
            </Col>
          </Row>
          </Col>
         
          <Col span={24}>
             <Typography.Text>
            <span className="secondary-color">The country the product are sold: Australia</span>
          </Typography.Text>
          </Col>
         
        </Row>
        
        <Line/>

        <Row gutter={[8, 8]}>
          <Col sm={11} xs={24}>
            <Typography.Text>
              <span className="secondary-color">Campaign name</span>
            </Typography.Text>
            <Typography.Title level={4}>Ads campaign 1</Typography.Title>
          </Col>
          <Col sm={11} xs={24}>
            <Typography.Text>
              <span className="secondary-color">Campaign name</span>
            </Typography.Text>
            <Typography.Title level={4}>Ads campaign 1</Typography.Title>
          </Col>
          <Col sm={11} xs={24}>
            <Typography.Text>
              <span className="secondary-color">Campaign name</span>
            </Typography.Text>
            <Typography.Title level={4}>Ads campaign 1</Typography.Title>
          </Col>
          <Col sm={11} xs={24}>
            <Typography.Text>
              <span className="secondary-color">Campaign name</span>
            </Typography.Text>
            <Typography.Title level={4}>Ads campaign 1</Typography.Title>
          </Col>
          <Col sm={11} xs={24}>
            <Typography.Text>
              <span className="secondary-color">Campaign name</span>
            </Typography.Text>
            <Typography.Title level={4}>Maximize conversion value</Typography.Title>
          </Col>
        </Row>
        <Line/>
        <Row gutter={[8, 8]}>
          <Col sm={8} xs={24}>
            <InputFrame
              style={{
                backgroundColor: '#F8F8F8 ',
                cursor: 'pointer',
                padding: '15px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography.Title level={5}>Visa</Typography.Title>
            </InputFrame>
          </Col>
          
          <Col sm={16} xs={24}>
            <InputFrame style={{ cursor: 'pointer', padding: '15px' }}>
              <Typography.Title level={5}>Debit ***** ***** 5952</Typography.Title>
              <Typography.Text>
                <span className="secondary-color">Aaron Woolf</span>
              </Typography.Text>
            </InputFrame>
          </Col>
        </Row>
      </div>
    </InputFrame>
  );
};

export default CreateFormInfor;
