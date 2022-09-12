import React from 'react'
import style from "./logo-upload.module.css";

interface Props {
  onNext: () => void;
}
export default function LogoUploadBtnGroup({ onNext }: Props) {
  return (
    <div className={style.btnGroup}>
      <button className={style.nextBtn} onClick={onNext}>Next</button>
    </div>
  )
}
