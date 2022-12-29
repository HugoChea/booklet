export interface HttpApiResponse<T> {
    statusCode: number,
    message: string,
    data: T,
}