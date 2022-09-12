import { getScreenSize } from '@common/index';
import { Col, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
interface HeadContentProps{
  currentTab:string;
  title: string;
}
const HeadContent = (props:HeadContentProps) => {
  const{currentTab,title}=props
  const [screenSize,setScreenSize]=useState<String>();
const [textLevel,setTextLevel] =useState< 2 | 1 | 4 | 3 | 5 | undefined>(1)

useEffect(() =>{
    setScreenSize(getScreenSize())
},[])
useEffect(() =>{
    switch(screenSize){
        case 'xs': setTextLevel(3)
            break;
        default: setTextLevel(1)
            
    }
},[screenSize])
const handleResize = () => {
   setScreenSize(getScreenSize())
}
// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})
  return (
	 <Row justify="space-between" align="middle" className={styles.steps}>
        <Col span={12}>

        <Typography.Title level={textLevel}>{title}</Typography.Title>
        </Col>
        <Col span={12} >
            <Row  justify="end"> 
               <div className={styles.headingRight}>
                  <Typography.Title level={4}>Step {Number(currentTab)<3?currentTab:3} of 3</Typography.Title>
                  <div className={styles.pagingItems}>
                    <div className={`${styles.pagingItem} ${Number(currentTab) >= 1 && styles.pagingItemActive}`}></div>
                    <div className={`${styles.pagingItem} ${Number(currentTab) >= 2 && styles.pagingItemActive}`}></div>
                    <div className={`${styles.pagingItem} ${Number(currentTab) >= 3 && styles.pagingItemActive}`}></div>
                  </div>
                </div>
            </Row>
                 
        </Col>
       
    </Row>
  )
}

export default HeadContent