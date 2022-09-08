import { Layout,Image, Col, Row, Typography } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import React from 'react'
import CampaignFrame from './campaignFrame';
import styles from './index.module.scss';
interface CampaignGoalProps{
  setCurrentTab?:React.Dispatch<React.SetStateAction<string>>;
}
const CampaignGoal = (props:CampaignGoalProps) => {
    const{setCurrentTab} = props;
  return (
	<>
		    <CampaignFrame/>
	</>
  )
}

export default CampaignGoal