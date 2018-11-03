/** @module build */
import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';
/**
 * Creates ElasticSearch components by their descriptors.
 *
 * @see [[ElasticSearchLogger]]
 */
export declare class DefaultElasticSearchFactory extends Factory {
    static readonly Descriptor: Descriptor;
    static readonly ElasticSearchLoggerDescriptor: Descriptor;
    /**
     * Create a new instance of the factory.
     */
    constructor();
}
