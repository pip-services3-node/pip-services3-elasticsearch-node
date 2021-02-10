"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultElasticSearchFactory = void 0;
/** @module build */
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const ElasticSearchLogger_1 = require("../log/ElasticSearchLogger");
/**
 * Creates ElasticSearch components by their descriptors.
 *
 * @see [[ElasticSearchLogger]]
 */
class DefaultElasticSearchFactory extends pip_services3_components_node_1.Factory {
    /**
     * Create a new instance of the factory.
     */
    constructor() {
        super();
        this.registerAsType(DefaultElasticSearchFactory.ElasticSearchLoggerDescriptor, ElasticSearchLogger_1.ElasticSearchLogger);
    }
}
exports.DefaultElasticSearchFactory = DefaultElasticSearchFactory;
DefaultElasticSearchFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "factory", "elasticsearch", "default", "1.0");
DefaultElasticSearchFactory.ElasticSearchLoggerDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "logger", "elasticsearch", "*", "1.0");
//# sourceMappingURL=DefaultElasticSearchFactory.js.map