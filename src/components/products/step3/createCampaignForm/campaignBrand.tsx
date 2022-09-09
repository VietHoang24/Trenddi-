import { Row, Typography } from 'antd'
import React from 'react'
import InputFrame from 'src/commonComponents/inputFrame/inputFrame'

const CampaignBrand = () => {
  return (
	 <InputFrame>
                <Typography.Title level={4}>Your brand will appear on you</Typography.Title>
                <Row gutter={[24, 0]}>
                </Row>
              </InputFrame>
  )
}

export default CampaignBrand