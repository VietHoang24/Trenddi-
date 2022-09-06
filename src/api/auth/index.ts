import AxiosInstance from '../instance';
import {
    ICreateAccountRequest,
    IForgetPasswordRequest,
    ILoginRequest,
    ILoginResponse,
    IResetPasswordRequest
} from "./interfaces";
import {BaseResponse} from "../index";
const prePath = 'auth';
export const login =async (body: ILoginRequest): Promise<BaseResponse<ILoginResponse>> =>{
    return AxiosInstance.post(`${prePath}/login`, body);
}
export const createAccount =async (body: ICreateAccountRequest): Promise<BaseResponse<ILoginResponse>> =>{
    return AxiosInstance.post(`${prePath}/sign-up`, body);
}

export const forgetPassword =async (body: IForgetPasswordRequest): Promise<BaseResponse<void>> =>{
    return AxiosInstance.post(`${prePath}/forget-password`, body);
}

export const resetPassword =async (body: IResetPasswordRequest): Promise<BaseResponse<void>> =>{
    return AxiosInstance.post(`${prePath}/reset-password`, body);
}