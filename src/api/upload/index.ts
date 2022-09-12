import axios from 'axios';
import FileSystem from "expo-file-system";
import AxiosInstance from '../instance';
import {BaseResponse} from "../index";

const prePath = 'upload';

export const getUploadLogoSignedUrl =async (fileName: string): Promise<string> =>{
  const data = await AxiosInstance.get(`${prePath}/get-signed-url?fileName=${fileName}`);
  return data.data;
}

export const uploadImageToCloud = async (signedUrl: string, file: any) => {
  let config = {
    headers: {
      "Content-Type": "image/jpeg",
      "Access-Control-Allow-Origin":"localhost:3002"
    }
  }
  const res = await axios.put(signedUrl, file.data_url, config);
  return res;
}