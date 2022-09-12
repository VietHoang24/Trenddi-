import React from 'react';
import style from "./logo-upload.module.css";

interface Props {
  currentStep: 1 | 2 | 3;
}
export default function LogoUploadPagingHeader({currentStep}: Props) {
  return (
    <div className={style.uploadHeaderContainer}>
      <div className={style.headingLeft}>
        Upload Logo
      </div>
      <div className={style.headingRight}>
        <div>Step {} of 3</div>
        <div className={style.pagingItems}>
          <div className={`${style.pagingItem} ${currentStep === 1 && style.pagingItemActive}`}></div>
          <div className={`${style.pagingItem} ${currentStep === 2 && style.pagingItemActive}`}></div>
          <div className={`${style.pagingItem} ${currentStep === 3 && style.pagingItemActive}`}></div>
        </div>
      </div>
    </div>
  )
}
