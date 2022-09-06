const Cookies = require('js-cookie');
import getConfig from 'next/config';
export const TOKEN_KEY = 'token'

export const saveToken = (token: string) => {
    Cookies.set(TOKEN_KEY, token);
}

export const getToken = (): string | null => {
    return Cookies.get(TOKEN_KEY)
}

export const getConfigFromNext = () =>{
    return getConfig().publicRuntimeConfig
}