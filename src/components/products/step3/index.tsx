import { Col, Form, Image, Row, Typography } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CustomButton from 'src/commonComponents/button';
import SelectCard from 'src/commonComponents/selectCard';
import { setProductCurrentPageState,setIsCPImpressionState
  ,setIsCPClickState,selectProductCurrentPageState,
   selectIsCPImpressionState,selectIsCPClickState } from 'store/productsSlice';
import styles from './index.module.scss';

import { } from 'store/productsSlice';
interface CreateCampaignProps{
  
}
const CreateCampaign = (props: CreateCampaignProps) => {
    const dispatch = useDispatch()
  
    const  isCPImpresion = useSelector(selectIsCPImpressionState);
    const  isCPClick = useSelector(selectIsCPClickState);
    console.log("iscpi: ",isCPImpresion)
    const handleClickCPM=()=>{
      console.log("cpm")
      dispatch(setIsCPImpressionState(true))
      dispatch(setIsCPClickState(false))
    }
     const handleClickCPC=()=>{
       dispatch(setIsCPClickState(true))
       dispatch(setIsCPImpressionState(false))
    }
  const onFinish=()=>{
    dispatch(setProductCurrentPageState('3.1'))
  }
  const handlePreviousClick=()=>{
        dispatch(setProductCurrentPageState('2'))
  }
  return (
    <>
          <Form layout="vertical" onFinish={onFinish} >
          <Row className={styles.container}>
            <Col span={24} className={styles.siteLayout}   >
              <Row className={styles.addProductBody} >
                <Col  xl={12} className={styles.bodyLeft}>
                  <Image src="/images/addproduct.png" preview={false} />
                </Col>
                <Col  xl={12} className={styles.bodyRight}>
                  <Row justify="center" gutter={[0, 8]}>
                    <Col span={24}>
                      <Typography.Title level={2}>
                        Select the goal that would make this campaign successful to you
                      </Typography.Title>
                    </Col>
                    <Col span={24}>
                      <Row justify="space-between" gutter={[24, 24]}>
                        <Col span={16}>
                          <SelectCard
                            isSelected={isCPImpresion}
                            title="CPM - Cost per impression"
                            cardIcon="/images/shopify.svg"
                            cardIconBg="rgba(243, 44, 151, 0.08)"
                            onClick={handleClickCPM}
                          />
                        </Col>
                        <Col span={16}>
                          <SelectCard
                            isSelected={isCPClick}
                            title="CPM - Cost per click"
                            cardIcon="/images/csv.svg"
                            cardIconBg="rgba(255, 166, 33, 0.08)"
                            onClick={handleClickCPC}
                          />
                        </Col>
                      </Row>
                    </Col>
                    
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="end" className={styles.bodyBottom}>
                    <Typography.Text >Not have mentioned format?</Typography.Text>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
           <Row justify="end" className={styles.buttonBox}>
          <CustomButton background='white' title="Previous" onClick={handlePreviousClick}/>
          <CustomButton background='black' title={"Next"} htmlType="submit"/>
          </Row>
          </Form>
       
    </>
  );
};

export default CreateCampaign;
