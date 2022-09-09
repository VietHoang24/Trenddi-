import { Breadcrumb, Button, Col, Layout, Menu, Row, Space, Image, Typography, Form, Input, Modal } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import CustomButton from 'src/commonComponents/button';
import SelectCard from 'src/commonComponents/selectCard';
import AddProductModal from './createCampaign';
import styles from './index.module.scss';
import router from "next/router";
import { setProductCurrentPageState } from 'store/productsSlice';
import { useDispatch } from "react-redux";

interface CreateCampaignProps{
 
}
const CreateCampaign = (props: CreateCampaignProps) => {
    const dispatch = useDispatch()
    const [isSelectedShopify,setIsSelectedShopify] =useState(true);
    const [isSelectedCsv,setIsSelectedCsv] =useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const handleClickShopify=()=>{
      setIsSelectedShopify(true);
      setIsSelectedCsv(false);
    }
     const handleClickCsv=()=>{
      setIsSelectedShopify(false);
      setIsSelectedCsv(true);
    }
  const showModal = () => {
    setOpenModal(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

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
                            isSelected={isSelectedShopify}
                            title="CPM - Cost per impression"
                            cardIcon="/images/shopify.svg"
                            cardIconBg="rgba(243, 44, 151, 0.08)"
                            onClick={handleClickShopify}
                          />
                        </Col>
                        <Col span={16}>
                          <SelectCard
                            isSelected={isSelectedCsv}
                            title="CPM - Cost per click"
                            cardIcon="/images/csv.svg"
                            cardIconBg="rgba(255, 166, 33, 0.08)"
                            onClick={handleClickCsv}
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
         <AddProductModal 
            openModal={openModal} 
            setOpenModal={setOpenModal}
            handleOk={handleOk}   
            confirmLoading={confirmLoading}
              onCancel={handleCancel}
              handleCancel={handleCancel}
              showModal={showModal}
        />   
    </>
  );
};

export default CreateCampaign;
