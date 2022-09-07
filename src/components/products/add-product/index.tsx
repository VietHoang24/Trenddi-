import { Breadcrumb, Button, Col, Layout, Menu, Row, Space, Image, Typography, Form, Input } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import CustomButton from 'src/commonComponents/button';
import SelectCard from 'src/commonComponents/selectCard';
import styles from './index.module.scss';

const AddProduct = () => {
    const [isSelectedShopify,setIsSelectedShopify] =useState(true);
    const [isSelectedCsv,setIsSelectedCsv] =useState(false);
    const handleClickShopify=()=>{
      setIsSelectedShopify(true);
      setIsSelectedCsv(false);
    }
     const handleClickCsv=()=>{
      setIsSelectedShopify(false);
      setIsSelectedCsv(true);
    }
  const onFinish=()=>{
    alert("Finish")
  }
  return (
    <>
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            padding: '0 100px',
            backgroundColor: '#232323'
          }}
        >
          <div className={styles.header} >
            <div className={styles.headerLeft}>
              <Image src="/images/menu.svg" preview={false} />
              <Image src="/images/trendiiLogo.png" preview={false} />
            </div>
            <div className={styles.headerRight}>
              <Image src="/images/bell.svg" preview={false} />
              <Image src="/images/user.svg" preview={false} />
            </div>
          </div>
          
        </Header>
        <Content
          style={{
            padding: '0 100px',
            marginTop: "80px",
          }}
        >
          <Form layout="vertical" onFinish={onFinish} >
          <Row className={styles.container}>
            <Col span={24}>
              <Row justify="space-between" align="middle" className={styles.steps}>
                <Typography.Title level={1}>Add Product</Typography.Title>
                <Typography.Title level={3}>Step 1 of 3</Typography.Title>
              </Row>
            </Col>
            <Col span={24} className={styles.siteLayout}   >
              <Row className={styles.addProductBody} >
                <Col  xl={12} className={styles.bodyLeft}>
                  <Image src="/images/addproduct.png" preview={false} />
                </Col>
                <Col  xl={12} className={styles.bodyRight}>
                  <Row justify="center" gutter={[0, 8]}>
                    <Col span={24}>
                      <Typography.Title level={3}>Add your product data feed</Typography.Title>
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
                          <div className={styles.uploadFile}>
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
                                <Input style={{borderRadius: '10px', height: '3rem'}} type="email"/>
                            </Form.Item>
                      </div>
                    </Col>}
                     
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
           <Row justify="end" className={styles.buttonBox}>
          <CustomButton background='white' title="Previous" />
          <CustomButton background='black' title={"Next"} htmlType="submit"/>
          </Row>
          </Form>

        </Content>
       
      </Layout>
    </>
  );
};

export default AddProduct;
