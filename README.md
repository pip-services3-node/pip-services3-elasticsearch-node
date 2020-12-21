# <img src="https://uploads-ssl.webflow.com/5ea5d3315186cf5ec60c3ee4/5edf1c94ce4c859f2b188094_logo.svg" alt="Pip.Services Logo" width="200"> <br/> ElasticSearch components for Node.js

This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.

The Elasticsearch module contains logging components with data storage on the Elasticsearch server.

The module contains the following packages:
- **Build** - contains a factory for the construction of components
- **Log** - Logging components

<a name="links"></a> Quick links:

* [Configuration](https://www.pipservices.org/recipies/configuration)
* [Logging](https://www.pipservices.org/recipies/active-logic)
* [Virtual memory configuration](https://www.elastic.co/guide/en/elasticsearch/reference/current/vm-max-map-count.html)
* [API Reference](https://pip-services3-node.github.io/pip-services3-elasticsearch-node/globals.html)
* [Change Log](CHANGELOG.md)
* [Get Help](https://www.pipservices.org/community/help)
* [Contribute](https://www.pipservices.org/community/contribute)

## Use

Install the NPM package as
```bash
npm install pip-services-elasticsearch-node --save
```

Microservice components shall perform logging usual way using CompositeLogger component.
The CompositeLogger will get ElasticSearchLogger from references and will redirect log messages
there among other destinations.

```typescript
import { ConfigParams } from 'pip-services3-commons-node'; 
import { IConfigurable } from 'pip-services3-commons-node'; 
import { IReferences } from 'pip-services3-commons-node'; 
import { IReferenceable } from 'pip-services3-commons-node'; 
import { CompositeLogger } from 'pip-services3-components-node'; 

export class MyComponent implements IConfigurable, IReferenceable {
  private _logger: CompositeLogger = new CompositeLogger();
  
  public configure(config: ConfigParams): void {
    this._logger.configure(config);
  }
  
  public setReferences(refs: IReferences): void {
    this._logger.setReferences(refs);
  }
  
  public myMethod(correlationId: string, param1: any, callback: (err: any, result: any) => void): void {
    this._logger.trace(correlationId, "Executed method mycomponent.mymethod");
    ....
  }
}
```

Configuration for your microservice that includes ElasticSearch logger may look the following way.

```yaml
...
{{#if ELASTICSEARCH_ENABLED}}
- descriptor: pip-services:logger:elasticsearch:default:1.0
  connection:
    uri: {{{ELASTICSEARCG_SERVICE_URI}}}
    host: {{{ELASTICSEARCH_SERVICE_HOST}}}{{#unless ELASTICSEARCH_SERVICE_HOST}}localhost{{/unless}}
    port: {{ELASTICSEARCG_SERVICE_PORT}}{{#unless ELASTICSEARCH_SERVICE_PORT}}9200{{/unless}}\ 
{{/if}}
...
```

## Develop

For development you shall install the following prerequisites:
* Node.js 8+
* Visual Studio Code or another IDE of your choice
* Docker
* Typescript

Install dependencies:
```bash
npm install
```

Compile the code:
```bash
tsc
```

Run automated tests:
```bash
npm test
```

Generate API documentation:
```bash
./docgen.ps1
```

Before committing changes run dockerized build and test as:
```bash
./build.ps1
./test.ps1
./clear.ps1
```

## Contacts

The library is created and maintained by **Sergey Seroukhov**.

The documentation is written by:
- **Mark Makarychev**
