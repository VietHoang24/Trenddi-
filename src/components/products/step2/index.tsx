import { Breadcrumb, Button, Col, Layout, Menu, Row, Space, Image, Typography, Form, Input, Modal } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import CustomButton from 'src/commonComponents/button';
import SelectCard from 'src/commonComponents/selectCard';
import AddProductModal from './addProductModal';
import styles from './index.module.scss';
import router from "next/router";
import { useDispatch } from "react-redux";
import { setProductCurrentPageState } from 'store/productsSlice';
interface AddProductProps{
 
}
const AddProduct = (props:AddProductProps) => {
  const dispatch = useDispatch();

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
    dispatch(
      setProductCurrentPageState('3')
    )
  }
  const handlePreviousClick=() => {
     dispatch(
      setProductCurrentPageState('1')
    )
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
                      <Typography.Title level={2}>Add your product data feed</Typography.Title>
                    </Col>
                    <Col span={24}>
                      <Row justify="space-between" gutter={[24, 0]}>
                        <Col span={12}>
                          <SelectCard
                            isSelected={isSelectedShopify}
                            title="Intergrate Shopify Feed"
                            cardIcon="/images/shopify.svg"
                            cardIconBg="rgba(243, 44, 151, 0.08)"
                            onClick={handleClickShopify}
                          />
                        </Col>
                        <Col span={12}>
                          <SelectCard
                            isSelected={isSelectedCsv}
                            title="Upload a product CSV"
                            cardIcon="/images/csv.svg"
                            cardIconBg="rgba(255, 166, 33, 0.08)"
                            onClick={handleClickCsv}
                          />
                        </Col>
                      </Row>
                    </Col>
                    {isSelectedShopify&&<Col span={24} className={styles.uploadFileBox}>
                        <Form.Item label={<Typography.Text>Upload product CSV file</Typography.Text>}
                         name="email" rules={
                                [{
                                    required: true,
                                    message: 'Please upload product CSV file'
                                }]
                            }>
                          <div className={styles.uploadFile} onClick={showModal}>
                            <Image src="/images/uploadIcon.svg" preview={false} />
                            <Typography.Title level={5}>Upload File</Typography.Title>
                        </div>

                      </Form.Item>
                    </Col>
                    }
                    {isSelectedCsv&&<Col span={24} className={styles.uploadFileBox}>
                     
                      <div  >
                            <Form.Item label={ <Typography.Text>Enter Shopify link</Typography.Text>}
                             name="link" rules={
                                [{
                                    required: true,
                                    message: 'Please enter Shopify link'
                                }]
                            }>
                                <Input style={{borderRadius: '10px', height: '3rem'}} type="text"/>
                            </Form.Item>
                      </div>
                    </Col>}
                     
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
          <CustomButton background='white' title="Previous" onClick={handlePreviousClick} />
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

export default AddProduct;
