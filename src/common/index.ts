const Cookies = require('js-cookie');
import moment from 'moment';
import getConfig from 'next/config';
import { DATE_DISPLAY } from 'src/constant/common';
export const TOKEN_KEY = 'token';

export const saveToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  return Cookies.get(TOKEN_KEY);
};

export const getConfigFromNext = () => {
  return getConfig().publicRuntimeConfig;
};
export interface SELECT_TYPE {
  value: any;
  label: string;
}

export const convertToDateUtc = (
  date: string | moment.Moment,
  startDate = true,
  currentFormat = DATE_DISPLAY,
) => {
  if (startDate) {
    return moment(date, currentFormat).startOf('date').utc().format();
  } else {
    return moment(date, currentFormat).endOf('date').utc().format();
  }
};
export const getScreenSize = () => {
  if (window.innerWidth >= 1600) {
    return 'xxl';
  } else if (window.innerWidth >= 1200) {
    return 'xl';
  } else if (window.innerWidth >= 992) {
    return 'lg';
  } else if (window.innerWidth >= 768) {
    return 'md';
  } else if (window.innerWidth >= 576) {
    return 'sm';
  } else {
    return 'xs';
  }
};
