import { Col, Row, Typography } from 'antd'
import React from 'react'
import BasicDatePicker from 'src/commonComponents/basicDatePicker'
import BasicInput from 'src/commonComponents/basicInput'
import InputFrame from 'src/commonComponents/inputFrame/inputFrame'

const CampaignBuget = () => {
  return (
	   <InputFrame>
                <Typography.Title level={3}>Campaign Budget</Typography.Title>
                <Row gutter={[24, 0]}>
                  <Col sm={8} xs={24}>
                    <BasicInput
                      name='buget'
                      rules={[
                        {
                          required: true,
                          message: 'Please enter Budget',
                        },
                      ]}
                      label={<Typography.Text>Budget</Typography.Text>}
                      useLabel={true}
                    />
                  </Col>
                  <Col sm={8}  xs={24}>
                    <BasicInput
                      name='dailyBudget'
                      rules={[
                        {
                          required: true,
                          message: 'Please enter Daily Budget',
                        },
                      ]}
                      label={<Typography.Text>CMP - Daily Budget</Typography.Text>}
                      useLabel={true}
                    />
                  </Col>
                  <Col sm={8}  xs={24}>
                    <BasicInput
                      name='maximumBudget'
                      rules={[
                        {
                          required: true,
                          message: 'Please enter Maximum CMP Bid',
                        },
                      ]}
                      label={<Typography.Text>Maximum CMP Bid</Typography.Text>}
                      useLabel={true}
                    />
                  </Col>
                  <Col md={12} xs={24}>
                    <BasicDatePicker
                      name='startDate'
                      rules={[
                        {
                          required: true,
                          message: 'Please enter Campaign start date',
                        },
                      ]}
                      label={<Typography.Text>Campaign start date</Typography.Text>}
                      useLabel={true}
                    />
                  </Col>
                  <Col md={12} xs={24}>
                    <BasicDatePicker
                      name='endDate'
                      rules={[
                        {
                          required: true,
                          message: 'Please enter Campaign end date',
                        },
                      ]}
                      label={<Typography.Text>Campaign end date</Typography.Text>}
                      useLabel={true}
                    />
                  </Col>
                </Row>
              </InputFrame>
  )
}

export default CampaignBuget