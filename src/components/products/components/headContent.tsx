import { Row, Typography } from 'antd'
import React from 'react'
import styles from './index.module.scss'
interface HeadContentProps{
  currentTab:string;
  title: string;
}
const HeadContent = (props:HeadContentProps) => {
  const{currentTab,title}=props
  return (
	 <Row justify="space-between" align="middle" className={styles.steps}>
                <Typography.Title level={1}>{title}</Typography.Title>
                <Typography.Title level={3}>Step {Number(currentTab)<3?currentTab:3} of 3</Typography.Title>
    </Row>
  )
}

export default HeadContent