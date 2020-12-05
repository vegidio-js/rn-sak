"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const await_to_js_1 = __importDefault(require("await-to-js"));
const axios_1 = __importDefault(require("axios"));
const async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
const object_hash_1 = __importDefault(require("object-hash"));
const util_1 = require("../util");
class RestFactory {
    constructor(init) {
        // region - Public methods
        this.sendRequest = async (method, url, params) => {
            const [config, key] = this.createRequest(method, url, params);
            const [, cachedData] = await await_to_js_1.default(this.cache.get(key).then((str) => JSON.parse(str)));
            // Check if there's a cached result
            if (cachedData) {
                return cachedData;
            }
            else {
                // Send a new request since there's no cached response
                const response = await this.client.request(config);
                // Cache only GET requests
                if (method.toLocaleUpperCase() === 'GET') {
                    await this.cache?.set(key, JSON.stringify(response.data));
                }
                return response.data;
            }
        };
        // endregion
        // region - Private methods
        this.createRequest = (method, url, params) => {
            const config = { method: method, url: url, params: params };
            return [config, object_hash_1.default(config)];
        };
        Object.assign(this, init);
        if (this.cacheTtl !== undefined) {
            this.cache = new util_1.Cache({
                namespace: 'react-native-common',
                policy: { maxEntries: 0, stdTTL: this.cacheTtl },
                backend: async_storage_1.default,
            });
        }
        this.client = axios_1.default.create({
            headers: this.headers,
            timeout: 5000,
        });
    }
}
exports.default = RestFactory;
//# sourceMappingURL=RestFactory.js.map