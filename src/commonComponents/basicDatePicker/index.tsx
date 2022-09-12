import { SELECT_TYPE } from '@common/index';
import { DatePicker, Form, Select } from 'antd';
import { NamePath } from 'antd/lib/form/interface';
import { CSSProperties, Key, ReactNode } from 'react';
import styles from './index.module.scss';

interface Props {
  name?: string;
  colon?: boolean;
  useLabel?: boolean;
  disabled?: boolean;
  label?: string | ReactNode;
  className?: string;
  classNameFormItem?: string;
  rules?: object[];
  defaultValue?: string | boolean;
  onChange?: (value: any, options: any) => void;
  allowClear?: boolean;
  initialValueForm?: string;
  noStyle?: boolean;
  namePath?: NamePath | undefined;
  key?: Key | null | undefined;
}

const BasicDatePicker = (props: Props) => {
  const{onChange}=props;
  const isRequired= props.rules
    ? props.rules.filter((r: any) => r.required === true).length > 0
    : false;

  return (
    <Form.Item
      label={props.useLabel ? props.label : ''}
      colon={props.colon || false}
      name={props.name ?? props.namePath}
      required={isRequired}
      rules={props.rules}
      className={props.classNameFormItem}
      initialValue={props.initialValueForm}
      noStyle={props.noStyle}
      key={props.key}
    >
      <DatePicker className={styles.item} onChange={onChange} />
    </Form.Item>
  );
};

export default BasicDatePicker;
