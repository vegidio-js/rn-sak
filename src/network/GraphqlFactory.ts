import { ApolloClient, DocumentNode, InMemoryCache } from '@apollo/client';

abstract class GraphqlFactory {
    private client: ApolloClient<any>;
    readonly headers: any;

    constructor(url: string, init?: Partial<GraphqlFactory>) {
        Object.assign(this, init);

        this.client = new ApolloClient({
            uri: url,
            headers: this.headers,
            cache: new InMemoryCache(),
        });
    }

    // region - Public methods
    sendRequest = async (graph: DocumentNode): Promise<any> => {
        return this.client.query({ query: graph });
    };
    // endregion
}

export default GraphqlFactory;
