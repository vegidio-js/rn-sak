import { Method } from 'axios';
declare type RequestParams = {
    [key: string]: string | number | boolean;
};
declare abstract class RestFactory {
    private readonly cache?;
    private readonly client;
    readonly headers: any;
    readonly cacheTtl?: number;
    constructor(init?: Partial<RestFactory>);
    sendRequest: (method: Method, url: string, params?: RequestParams | undefined) => Promise<any>;
    private createRequest;
}
export default RestFactory;
