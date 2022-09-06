export interface ILoginRequest {
    email: string;
    password: string;
}

export interface IForgetPasswordRequest {
    email: string;
}

export interface IResetPasswordRequest {
    token: string;
    newPassword: string;
    confirmPassword: string;
}

export interface ILoginResponse {
    token: string,
    displayName: string,
    firstName: string,
    lastName: string,
    email: string,
    financeEmail: string,
    mobilePhone: string,
    companyName: string,
    companyAddress: string,
    companyAddress2: string,
    state: string,
    portalCode: string,
    country: string,
    companyRegistrationNumber: string,
    contractName: string,
    webUrl: string,
    isReadTerm: boolean,
}

export interface ICreateAccountRequest {
    displayName: string,
    firstName: string,
    lastName: string,
    email: string,
    financeEmail: string,
    mobilePhone: string,
    companyName: string,
    companyAddress: string,
    companyAddress2: string,
    state: string,
    portalCode: string,
    country: string,
    companyRegistrationNumber: string,
    contractName: string,
    webUrl: string,
    isReadTerm: boolean,
    acceptTerm: boolean,
}