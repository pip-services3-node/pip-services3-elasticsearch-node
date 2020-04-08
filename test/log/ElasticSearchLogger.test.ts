import { ConfigParams } from 'pip-services3-commons-node';

import { ElasticSearchLogger } from '../../src/log/ElasticSearchLogger';
import { LoggerFixture } from '../fixtures/LoggerFixture';

let assert = require('chai').assert;
let async = require('async');

suite('ElasticSearchLogger', () => {
    let _logger: ElasticSearchLogger;
    let _fixture: LoggerFixture;

    setup((done) => {
        let host = process.env['ELASTICSEARCH_SERVICE_HOST'] || 'localhost';
        let port = process.env['ELASTICSEARCH_SERVICE_PORT'] || 9200;
        let dateFormat: string = "YYYYMMDD";

        _logger = new ElasticSearchLogger();
        _fixture = new LoggerFixture(_logger);

        let config = ConfigParams.fromTuples(
            'source', 'test',
            'index', 'log',
            'daily', true,
            "date_format", dateFormat,
            'connection.host', host,
            'connection.port', port
        );
        _logger.configure(config);

        _logger.open(null, (err) => {
            done(err);
        });
    });

    teardown((done) => {
        _logger.close(null, done);
    });

    test('Log Level', () => {
        _fixture.testLogLevel();
    });

    test('Simple Logging', (done) => {
        _fixture.testSimpleLogging(done);
    });

    test('Error Logging', (done) => {
        _fixture.testErrorLogging(done);
    });

    /**
     * We test to ensure that the date pattern does not effect the opening of the elasticsearch component
     */
    test('Date Pattern Testing - YYYY.MM.DD', (done) => {

        let host = process.env['ELASTICSEARCH_SERVICE_HOST'] || 'localhost';
        let port = process.env['ELASTICSEARCH_SERVICE_PORT'] || 9200;

        let logger = new ElasticSearchLogger();
        let dateFormat: string = "YYYY.MM.DD";

        let config = ConfigParams.fromTuples(
            'source', 'test',
            'index', 'log',
            'daily', true,
            "date_format", dateFormat,
            'connection.host', host,
            'connection.port', port
        );
        logger.configure(config);

        logger.open(null, (err) => {
            if (err) {
                done(err);
            }

            // Since the currentIndex property is private, we will just check for an open connection
            assert.isTrue(logger.isOpen());
            logger.close(null, done);
        });
    });

    /**
     * We test to ensure that the date pattern does not effect the opening of the elasticsearch component
     */
    test('Date Pattern Testing - YYYY.M.DD', (done) => {

        let host = process.env['ELASTICSEARCH_SERVICE_HOST'] || 'localhost';
        let port = process.env['ELASTICSEARCH_SERVICE_PORT'] || 9200;

        let logger = new ElasticSearchLogger();
        let dateFormat: string = "YYYY.M.DD";

        let config = ConfigParams.fromTuples(
            'source', 'test',
            'index', 'log',
            'daily', true,
            "date_format", dateFormat,
            'connection.host', host,
            'connection.port', port
        );
        logger.configure(config);

        logger.open(null, (err) => {
            if (err) {
                done(err);
            }

            // Since the currentIndex property is private, we will just check for an open connection
            assert.isTrue(logger.isOpen());
            logger.close(null, done);
        });
    });

});