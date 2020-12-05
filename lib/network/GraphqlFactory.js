"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
class GraphqlFactory {
    constructor(url, init) {
        // region - Public methods
        this.sendRequest = async (graph) => {
            return this.client.query({ query: graph });
        };
        Object.assign(this, init);
        this.client = new client_1.ApolloClient({
            uri: url,
            headers: this.headers,
            cache: new client_1.InMemoryCache(),
        });
    }
}
exports.default = GraphqlFactory;
//# sourceMappingURL=GraphqlFactory.js.map