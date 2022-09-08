import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Col, Modal, Row } from 'antd';
import CustomButton from '../button';
import styles from './index.module.scss';


interface IProps {
  status: 'success' | 'warning' | 'error';
  title: string;
  message: string;
  visible: boolean;
  className?: string;
  closable?: boolean;
  width?: string | number;
  onCancel?: () => void;
  afterClose?: () => void;
  onTryAgain?: () => void;
  onDelete?: () => void;
  labelBtnDelete?: string;
  loading?: boolean;
  onConfirm?: () => void;
}
const NotifyPopup = ({
  status,
  title,
  message,
  visible,
  width,
  onCancel,
  afterClose,
  className,
  closable,
  onTryAgain,
  onDelete,
  labelBtnDelete,
  loading,
  onConfirm
}: IProps) => {
  return (
    <Modal
      closeIcon={<></>}
      width={width}
      visible={visible}
      className={`mainModal ${className}`}
      footer={false}
      closable={closable}
      onCancel={onCancel}
      afterClose={afterClose}
    >
      {status === 'success' && (
        <div className={styles.content}>
          <CheckCircleOutlined className={styles['content__icon--success']} />
          <div className={styles.content__title}> {title} </div>
          <div className={styles.content__message}> {message} </div>
          <div className={styles.content__button}>
           <Row justify="center" gutter={[24, 0]}>
        <Col>
          <CustomButton background="white" title="Previous" />
        </Col>
        <Col>
          <CustomButton background="black" title={'Next'} htmlType="submit" />
        </Col>
        </Row>
          </div>
        </div>
      )}
      {status === 'error' && (
        <div className={styles.content}>
          <ExclamationCircleOutlined
            className={styles['content__icon--error']}
          />
          <div className={styles.content__title}> {title} </div>
          <div className={styles.content__message}> {message} </div>
          <div className={styles.content__button}>
            <Row justify="center" gutter={[24, 0]}>
        <Col>
          <CustomButton background="white" title="Previous" />
        </Col>
        <Col>
          <CustomButton background="black" title={'Next'} htmlType="submit" />
        </Col>
        </Row>
          </div>
        </div>
      )}
      {status === 'warning' && (
        <div className={styles.content}>
          <ExclamationCircleOutlined
            className={styles['content__icon--warning']}
          />
          <div className={styles.content__title}> {title} </div>
          <div className={styles.content__message}> {message} </div>
          <div className={styles.content__button}>
            <Row justify="center" gutter={[24, 0]}>
        <Col>
          <CustomButton background="white" title="Cancel" onClick={onCancel} />
        </Col>
        <Col>
          <CustomButton background="black" title={'Confirm'} htmlType="submit" onClick={onConfirm} />
        </Col>
        </Row>
          </div>
        </div>
      )}
       
    </Modal>
  );
};
export default NotifyPopup;
