import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Col, Form, Input, Modal, Row, Typography, Image } from 'antd';
import styles from './index.module.scss';
import CustomButton from 'src/commonComponents/button';
import ImageUploading from 'react-images-uploading';
import { getUploadLogoSignedUrl, uploadImageToCloud } from '@api/upload';
import { SwapOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { setProductCurrentPageState } from 'store/productsSlice';
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
  const [images, setImages] = useState<any[]>([])
  const [borderUpload,setBorderUpload]=useState('')
  const [checkUploadFile, setCheckUploadFile] = useState(false)
  const dispatch = useDispatch();
  const onChange = (imageList: any[], addUpdateIndex: any) => {
    // data for submit
    setImages(imageList);
    setCheckUploadFile(false)
  };
  const onUpload = async () => {
    let formData = new FormData();
    formData.append('logo', images[0]);
    const url = await getUploadLogoSignedUrl(images[0]?.file?.name);
    const uploadRes = await uploadImageToCloud(url, images[0])
  }
  const onFinish = () => {
    if (!images[0]) {
      return
    }
    else {
      onUpload();
      dispatch(
        setProductCurrentPageState('3')
      )
      setOpenModal && setOpenModal(false);
    }

  }
  const handleAddClick = () => {
    if (!images[0]) {
      setCheckUploadFile(true)
      setBorderUpload("#ff4d4f")
    }
    else{
      setCheckUploadFile(false)
      setBorderUpload("")
    }
  }
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
          <Row  >
            <Col span={24}>
              <Typography.Text >
                We need information about your E-commerce platform and
                product data URL, or you can upload your product data file.
              </Typography.Text>
              <Col span={24} className={styles.modalInput}>

                <div  >
                  <Form.Item
                    label={<Typography.Text >E-commerce platform</Typography.Text>}
                    name="platform" rules={
                      [{
                        required: true,
                        message: 'Please enter E-commerce platform'
                      }]
                    }>

                    <Input style={{ borderRadius: '10px', height: '3rem' }} type="text" />
                  </Form.Item>
                </div>
                <div  >
                  <Form.Item
                    label={<Typography.Text >E-commerce URL</Typography.Text>}
                    name="url" rules={
                      [{
                        required: true,
                        message: 'Please enter E-commerce URL'
                      }]
                    }>

                    <Input style={{ borderRadius: '10px', height: '3rem' }} type="text" />

                  </Form.Item>
                </div>

                <Row>
                  <Form.Item
                    label={<Typography.Title level={5}>Upload File</Typography.Title>}
                    name="upload" rules={
                      [{
                        required: false,
                        message: 'Please enter E-commerce URL'
                      }]
                    }>
                    <>
                      <ImageUploading
                        allowNonImageType
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={30}
                        dataURLKey="data_url"
                      >
                        {({
                          // imageList,
                          onImageUpload,
                          // onImageRemoveAll,
                          onImageUpdate,
                          onImageRemove,
                          isDragging,
                          dragProps,
                        }) => (
                          // write your building UI
                          <div className={`upload__image-wrapper ${styles.imageWrapper}`}>
                            {images[0] ? <div className={styles.imageItem}>
                              <img src={images[0]['data_url']} alt="" width="100" style={{ borderRadius: "5px" }} />
                              <div className={styles.uploadBtnHolder}>
                                <SwapOutlined className={styles.changeImageIcon} onClick={() => onImageUpdate(0)} />
                              </div>
                            </div>
                              : <div
                                style={isDragging ? { color: 'red' } : undefined}
                                className={styles.uploadIcon}
                                onClick={onImageUpload}
                                {...dragProps}
                              >
                                <div className={styles.uploadFile} onClick={showModal} style={{borderColor:borderUpload}}>
                                  <Typography.Text >Upload File</Typography.Text>
                                  <Image src="/images/icons/uploadIcon.svg" preview={false} />
                                </div>
                              </div>
                            }                      </div>
                        )}

                      </ImageUploading>
                      {checkUploadFile && <Typography.Text style={{ color: "#ff4d4f"}}>
                        Please upload file
                      </Typography.Text>}
                    </>


                  </Form.Item>


                </Row>



              </Col>
            </Col>
          </Row>
          <Row justify="end" className={styles.buttonModal}>
            <CustomButton background='white' title="Cancel" onClick={handleCancel} />
            <CustomButton background='black' title={"ADD"} htmlType="submit" onClick={handleAddClick} />
          </Row>
        </Form>

      </Modal>
    </>
  );
};

export default AddProductModal;