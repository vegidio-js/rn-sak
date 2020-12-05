import { DocumentNode } from '@apollo/client';
declare abstract class GraphqlFactory {
    private client;
    readonly headers: any;
    constructor(url: string, init?: Partial<GraphqlFactory>);
    sendRequest: (graph: DocumentNode) => Promise<any>;
}
export default GraphqlFactory;
