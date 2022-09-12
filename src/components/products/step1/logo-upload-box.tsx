import React, { useState } from 'react';
import style from "./logo-upload.module.css";
import ImageUploading from 'react-images-uploading';
import { getUploadLogoSignedUrl, uploadImageToCloud } from "@api/upload";
import { Row } from 'antd';
import CustomButton from 'src/commonComponents/button';
import { setProductCurrentPageState } from 'store/productsSlice';
import { useDispatch } from 'react-redux';

export default function LogoUploadBox() {
  const [images, setImages] = useState<any[]>([])
  const dispatch=useDispatch();
  const onChange = (imageList: any[], addUpdateIndex: any) => {
    // data for submit
    setImages(imageList);
  };
  const onUpload = async () => {
    let formData = new FormData();
    formData.append('logo', images[0]);
    const url = await getUploadLogoSignedUrl(images[0]?.file?.name);
    const uploadRes = await uploadImageToCloud(url, images[0])
  }
  const handleNextClick=() => {
    dispatch(
     setProductCurrentPageState('2')
   )
 }
  return (
    <>
    <div className={style["upload-box"]}>
    <div>
      <ImageUploading
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
          <div className={`upload__image-wrapper ${style.imageWrapper}`}>
            {images[0] ? <div className="image-item">
              <img src={images[0]['data_url']} alt="" width="100" style={{ borderRadius: "5px" }} />
              <div className={style.uploadBtnHolder}>
                <button className={style.lightBtn} onClick={() => onImageUpdate(0)}>Change</button>
              </div>
            </div>
              : <div
                style={isDragging ? { color: 'red' } : undefined}
                className={style.uploadIcon}
                onClick={onImageUpload}
                {...dragProps}
              >
                <img src="/images/icons/cloud-upload-icon.svg" />
              </div>
            }
            <div className={style.desTxt}>Drag or drop your <span className={style.highlightTxt}>Logo</span> here or</div>
            <div className={style.uploadBtnHolder}>
              <button className={style.lightBtn} onClick={onUpload}>Upload</button>
            </div>
            <div className={style.recommendedFormat}>
              PNG or SVG format is recommended
            </div>
          </div>
        )}

      </ImageUploading>
    </div>
   
  </div>
  
  <Row justify="end" className={style.buttonNext}>
            <CustomButton background='black' title={"Next"} htmlType="submit" onClick={handleNextClick}/>
  </Row>
    </>
  
  )
}
