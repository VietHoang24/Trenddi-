import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Modal } from 'antd';
import styles from './index.module.scss';


interface IProps {
  status: 'success' | 'warning' | 'error';
  title: string;
  message: string;
  visible: boolean;
  className?: string;
  closable?: boolean;
  width?: string | number;
  onCancel: () => void;
  afterClose?: () => void;
  onTryAgain?: () => void;
  onDelete: () => void;
  labelBtnDelete?: string;
  loading?: boolean;
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
            
          </div>
        </div>
      )}
    </Modal>
  );
};
export default NotifyPopup;
