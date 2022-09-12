import { Col, Form, Row, Typography } from 'antd';
import CustomButton from 'src/commonComponents/button';
import InputFrame from 'src/commonComponents/inputFrame/inputFrame';
import CreateFormInfor from './CreateFormInfor';
import styles from './index.module.scss';
const CreateCampaignSuccess = () => {
  return (
    <>
      <Form layout="vertical">
        <Row className={styles.container}>
          <Col span={24} className={styles.campaignFrame}>
            <Row gutter={[48, 0]} justify="space-between" align='middle'>
              <Col xl={10} xs={24} className={styles.bodyLeft}>
                <InputFrame style={{height: "200px"}}><></></InputFrame>
                <Typography.Title level={1}>
                  <p style={{fontSize:"50px"}}>
                    Thanks <br />
                    Your campaign is now <br />
                    be ing approved
                  </p>
				        <CustomButton background="black" title={'View Campaign'}
                 htmlType="submit" width={"150px"} height="50px"/>
                </Typography.Title>
			
          		
       	 		
              </Col>
              <Col xl={12} xs={24} className={styles.bodyRight}>
                <CreateFormInfor />
              </Col>
            </Row>
          </Col>

        </Row>
       
      </Form>
    </>
  );
};

export default CreateCampaignSuccess;
