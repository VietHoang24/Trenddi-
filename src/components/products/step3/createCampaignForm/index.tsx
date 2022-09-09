import { Col, Form, Row } from 'antd';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import CustomButton from 'src/commonComponents/button';
import NotifyPopup from 'src/commonComponents/NotifyPopup';
import { setProductCurrentPageState } from 'store/productsSlice';
import CampaignBrand from './campaignBrand';
import CampaignBuget from './campaignBuget';
import CampaignGoal from './campaignGoal';
import FeeAndPayment from './feeAndPayment';
import router from "next/router";

import styles from './index.module.scss';
const CampaignFrame = () => {
  const [isOpen,setIsOpen] =useState(false)
  const dispatch=useDispatch();
  const onFinish = () => {
    
    router.push('/products/success')
  };
  const handlePreviousClick = () => {
    dispatch(setProductCurrentPageState('3'))
  }
  const handleNextClick=()=>{
     setIsOpen(true)
  }
  return (
    <>
      <Form layout="vertical" onFinish={onFinish} id='createCampaignForm'>
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
          <CustomButton background="black" title={'Next'} onClick={handleNextClick} />
        </Row>
        <NotifyPopup 
          status="warning" 
          title="Campaign Confirmation"
          message="Ads will be crated for this campaign once it has been approved"
          visible={isOpen}
          onCancel={()=>  setIsOpen(false)}
          htmlType="submit"
          form= "createCampaignForm"
        />
      </Form>
      
    </>
   
  );
};

export default CampaignFrame;
