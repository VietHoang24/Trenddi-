import { Col, Row, Typography } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import BasicInput from 'src/commonComponents/basicInput'
import BasicSelect from 'src/commonComponents/basicSelect'
import InputFrame from 'src/commonComponents/inputFrame/inputFrame'
import { selectIsCPClickState, selectIsCPImpressionState } from 'store/productsSlice'

const CampaignGoal = () => {
  const  isCPImpresion = useSelector(selectIsCPImpressionState);
  const  isCPClick = useSelector(selectIsCPClickState);
  return (
	 <InputFrame>
                {isCPImpresion&&<Typography.Title level={3}>
                  Campaign goal: CMP - Cost per impression
                </Typography.Title>}
                {isCPClick&&<Typography.Title level={3}>
                  Campaign goal: CMP - Cost per click
                </Typography.Title>}
                <Row gutter={[24, 0]}>
                  <Col md={12} xs={24}>
                    <BasicInput
                      name='campaignName'
                      rules={[
                        {
                          required: true,
                          message: 'Please enter Campaign name',
                        },
                      ]}
                      label={<Typography.Text>Campaign name</Typography.Text>}
                      useLabel={true}
                    />
                  </Col>
                  <Col  md={12} xs={24}>
                    <BasicSelect
                      name='countrySelected'
                      defaultValue={'2'}
                      rules={[
                        {
                          required: false,
                          message: 'Please Select the country where products are sold',
                        },
                      ]}
                      options={[
                        { value: '2', label: 'United State' },
                        { value: '1', label: 'Vietnam' },
                      ]}
                      label={
                        <Typography.Text>
                          Select the country where products are sold
                        </Typography.Text>
                      }
                      useLabel={true}
                    />
                  </Col>
                </Row>
    </InputFrame>
  )
}

export default CampaignGoal