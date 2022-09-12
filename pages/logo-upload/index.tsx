import React, { useState} from 'react';
import LogoUploadBox from "@components/logo-upload/logo-upload-box";
import LogoUploadPagingHeader from "@components/logo-upload/paging-header";
import LogoUploadBtnGroup from "@components/logo-upload/btn-group";
import style from "./logo-upload.module.css";
export default function LogoUpload() {

  const [currentStep, setCurrentStep] = useState<1|2|3>(1);
  const [images, setImages] = useState<any>([])

  return (
    <div className={style.logoUploadContainer}>
      <div className={style.subContainer}>
        <LogoUploadPagingHeader currentStep={currentStep}/>
        <LogoUploadBox />
        <LogoUploadBtnGroup onNext={() => {}}/>
      </div>
    </div>
  )
}
