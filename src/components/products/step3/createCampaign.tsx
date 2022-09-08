import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Col, Form, Input, Modal, Row, Typography, Image } from 'antd';
import styles from './index.module.scss';
import CustomButton from 'src/commonComponents/button';

export interface AddProductModalProps {
  openModal?: boolean;
  handleOk?: () => void;
  confirmLoading?: boolean;
  onCancel?: () => void;
  showModal?: () => void;
  handleCancel?: () => void;
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddProductModal = (props: AddProductModalProps) => {
  const { openModal, handleOk, confirmLoading, handleCancel, showModal, setOpenModal } = props;
  const onFinish = () => {
    setOpenModal && setOpenModal(false);
  };

  return (
    <>
      <Modal
        title="Add product"
        visible={openModal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        closeIcon={<></>}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} className={styles.modalAddProduct}>
          <Row>
            <Col span={24}>
              <Typography.Text>
                We need information about your E-commerce platform and product data URL, or you can
                upload your product data file.
              </Typography.Text>
              <Col span={24} className={styles.modalInput}>
                <div>
                  <Form.Item
                    label={<Typography.Text>E-commerce platform</Typography.Text>}
                    name="platform"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter E-commerce platform',
                      },
                    ]}
                  >
                    <Input style={{ borderRadius: '10px', height: '3rem' }} type="text" />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label={<Typography.Text>E-commerce URL</Typography.Text>}
                    name="url"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter E-commerce URL',
                      },
                    ]}
                  >
                    <Input style={{ borderRadius: '10px', height: '3rem' }} type="text" />
                  </Form.Item>
                </div>

                <div className={styles.uploadFile} onClick={showModal}>
                  <Image src="/images/uploadIcon.svg" preview={false} />
                  <Typography.Title level={5}>Upload File</Typography.Title>
                </div>
              </Col>
            </Col>
          </Row>
          <Row justify="end" className={styles.buttonModal}>
            <CustomButton background="white" title="Cancel" onClick={handleCancel} />
            <CustomButton background="black" title={'ADD'} htmlType="submit" />
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default AddProductModal;
