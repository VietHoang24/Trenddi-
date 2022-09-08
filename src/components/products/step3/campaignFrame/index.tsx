import { Layout, Image, Form, Row, Col, Typography, Input, Select, DatePicker } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import Link from 'next/link';
import React, { useState } from 'react';
import BasicDatePicker from 'src/commonComponents/basicDatePicker';
import BasicInput from 'src/commonComponents/basicInput';
import BasicSelect from 'src/commonComponents/basicSelect';
import CustomButton from 'src/commonComponents/button';
import InputFrame from 'src/commonComponents/inputFrame/inputFrame';
import NotifyPopup from 'src/commonComponents/NotifyPopup';
import SelectCard from 'src/commonComponents/selectCard';
import CampaignBrand from './campaignBrand';
import CampaignBuget from './campaignBuget';
import CampaignGoal from './campaignGoal';
import FeeAndPayment from './feeAndPayment';
import styles from './index.module.scss';

const CampaignFrame = () => {
  const [isOpen,setIsOpen] =useState(false)
  const onFinish = () => {
    console.log("à thế à: ")
    setIsOpen(true)
  };
  const handlePreviousClick = () => {
    
  }
  return (
    <>
      <Form layout="vertical" onFinish={onFinish}>
        <Row className={styles.container}>
          <Col span={24} className={styles.campaignFrame}>
            <Row gutter={[48, 0]}>
              <Col xl={16} xs={24} className={styles.bodyLeft}>
                <CampaignGoal/>
                <CampaignBuget/>
                <CampaignBrand/>
              </Col>
              <Col xl={8} xs={24} className={styles.bodyRight}>
              <FeeAndPayment/>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="end" className={styles.buttonBox}>
          <CustomButton background="white" title="Previous" onClick={handlePreviousClick} />
          <CustomButton background="black" title={'Next'} htmlType="submit" />

        </Row>
      </Form>
      <NotifyPopup 
        status="warning" 
        title="Campaign Confirmation"
        message="Ads will be crated for this campaign once it has been approved"
        visible={isOpen}
        onCancel={()=>  setIsOpen(false)}
      />
    </>
   
  );
};

export default CampaignFrame;
