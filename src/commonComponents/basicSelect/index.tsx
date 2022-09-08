import { SELECT_TYPE } from '@common/index';
import { Form, Select } from 'antd';
import { NamePath } from 'antd/lib/form/interface';
import { CSSProperties, Key, ReactNode } from 'react';
import styles from './index.module.scss';

interface Props {
  name?: string;
  colon?: boolean;
  useLabel?: boolean;
  options: SELECT_TYPE[];
  disabled?: boolean;
  label?: string | ReactNode;
  className?: string;
  classNameFormItem?: string;
  rules?: object[];
  placeholder?: string;
  loading?: boolean;
  mode?: 'multiple' | 'tags';
  defaultValue?: string | boolean;
  onChange?: (value: any, options: any) => void;
  onSearch?: (value: string) => void;
  allowClear?: boolean;
  showSearch?: boolean;
  filterOption?: boolean;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  initialValueForm?: string;
  noStyle?: boolean;
  selectStyle?: CSSProperties;
  size?: 'large' | 'middle' | 'small';
  namePath?: NamePath | undefined;
  key?: Key | null | undefined;
}

const BasicSelect = (props: Props) => {
  const isRequired = props.rules
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
      <Select
        getPopupContainer={props.getPopupContainer}
        className={props.className + ' ' + styles.item}
        disabled={props.disabled}
        placeholder={props.placeholder}
        loading={props.loading}
        mode={props.mode}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        allowClear={props.allowClear}
        showSearch={props.showSearch}
        filterOption={props.filterOption || true}
        size={props.size || 'large'}
        style={props.selectStyle}
      >
        {props.options.map((o: SELECT_TYPE, i: number) => (
          <Select.Option value={o.value} key={i}>
            {o.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default BasicSelect;
