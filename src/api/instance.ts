import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import getConfig from 'next/config';
import {TOKEN_KEY} from "../common";

const __DEV__ = getConfig().publicRuntimeConfig.REACT_ENV === 'dev';

const AxiosInstance = Axios.create({
    timeout: 20000,
    baseURL: getConfig().publicRuntimeConfig.BE_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

AxiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localStorage.getItem(TOKEN_KEY)
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        }
        return config;
    },
    (error: any) => {
        if (__DEV__) {
            console.error('API Request Error:', error);
        }
        return Promise.reject(error);
    },
);

AxiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    async (error: AxiosError<any>) => {
        if (__DEV__) {
            console.error('API Response Error:', error);
        }

        const errorMessage = error?.response?.data?.message;
        if (errorMessage) {
            return Promise.reject(new Error(errorMessage));
        }
        return Promise.reject(error);
    },
);

export default AxiosInstance;
