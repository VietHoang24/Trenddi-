export interface BaseResponse<T>{
    status: string,
    code: number,
    data: T
}
export const usePostAxios = (url: string, payload: unknown) => {

}