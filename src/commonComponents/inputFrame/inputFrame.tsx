import { Col, Row } from 'antd';
import React, { ReactNode } from 'react';
interface InputFrameProps {
  children: ReactNode;
  style?: React.CSSProperties;
}
import styles from './index.module.scss';
const InputFrame = (props:InputFrameProps) => {
	const{children,style} = props
  return (
    <Row >
      <Col span={24} style={style} className={styles.inputFrame} >
       {children}
      </Col>
    </Row>
  );
};

export default InputFrame;
