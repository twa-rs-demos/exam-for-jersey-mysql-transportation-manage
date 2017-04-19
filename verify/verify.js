//
// Generated from RAML specification
// <https://github.com/aisensiy/raml2test>
//

var request = require('request');
var chai = require('chai');
var assert = chai.assert;
var tv4 = require('tv4');
var endpoint = process.env.ENDPOINT;

console.log(endpoint);

var providerId, providerURI, jobURI, jobId, containerId, containerURI;

describe("Test", function () {
  this.timeout(60000);
  it("POST /providers -> 201", function (done) {
    var options = {
      url: endpoint + '/providers',
      method: 'POST',
      qs: {},
      json: {
        "name": "Little Yellow Duck"
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      var schema = "";
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + result.error && result.error.message + " " + JSON.stringify(schema, null, 4) + " Error");
        provider
      }
      providerURI = response.headers['location'];
      var splits = providerURI.split("/");
      providerId = splits[splits.length - 1];
      done();
    });
  });
  
  it("GET /providers/{providerId} -> 200", function (done) {
    var options = {
      url: endpoint + '/providers/' + providerId,
      method: 'GET',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "required": ["id", "name"]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("GET /providers -> 200", function (done) {
    var options = {
      url: endpoint + '/providers',
      method: 'GET',
      qs: {},
      body: '',
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "totalCount": {
          "type": "integer"
        },
        "providers": {
          "type": "array",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "required": ["id", "name"]
          }
          
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("PUT /providers/{id} -> 204", function (done) {
    var options = {
      url: endpoint + '/providers/' + providerId,
      method: 'PUT',
      qs: {},
      json: {
        "id": 1,
        "name": "Little Yellow Duck"
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      var schema = "";
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("DELETE /providers -> 204", function (done) {
    var options = {
      url: endpoint + '/providers/' + providerId,
      method: 'DELETE',
      qs: {},
      json: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  
  it("POST /jobs -> 201", function (done) {
    var options = {
      url: endpoint + '/jobs',
      method: 'POST',
      qs: {},
      json: {
        "provider_id": "2",
        "containers": [4, 8, 9]
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      jobURI = response.headers['location'];
      var splits = jobURI.split("/");
      jobId = splits[splits.length - 1];
      console.log(jobURI);
      done();
    });
  });
  
  it("GET /jobs -> 200", function (done) {
    var options = {
      url: jobURI,
      method: 'GET',
      qs: {},
      body: null,
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "required": true,
        "totalCount": {
          "type": "integer"
        },
        "jobs": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "provider_id": {
                "type": "integer"
              },
              "containers": {
                "type": "array",
                "container": {
                  "type": "integer"
                }
              },
              "required": ["name", "id", "containers"]
            }
          }
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("GET /jobs/{jobId} -> 200", function (done) {
    var options = {
      url: endpoint + '/jobs' + jobId,
      method: 'GET',
      qs: {},
      body: null,
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "provider_id": {
            "type": "integer"
          },
          "containers": {
            "type": "array",
            "container": {
              "type": "integer"
            }
          },
          "required": ["name", "id", "containers"]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("PUT /jobs/{jobId} -> 204", function (done) {
    var options = {
      url: endpoint + '/jobs/' + jobId,
      method: 'PUT',
      qs: {},
      body: {
        "provider_id": "1",
        "containers": [1, 2, 3, 4, 5],
        "id": 1
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  it("DELETE /jobs/{jobId} -> 204", function (done) {
    var options = {
      url: endpoint + '/jobs/' + jobId,
      method: 'DELETE',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  
  
  it("POST /containers -> 201", function (done) {
    var options = {
      url: endpoint + '/containers',
      method: 'POST',
      qs: {},
      json: {
        "id": 4
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      containerURI = response.headers['location'];
      var splits = containerURI.split("/");
      containerId = splits[splits.length - 1];
      console.log(containerURI);
      done();
    });
  });
  
  it("GET /containers -> 200", function (done) {
    var options = {
      url: containerURI,
      method: 'GET',
      qs: {},
      body: null,
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "required": true,
        "totalCount": {
          "type": "integer",
          "required": true
        },
        "containers": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "required": true
              }
            }
          }
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("GET /containers/{containerId} -> 200", function (done) {
    var options = {
      url: endpoint + '/containers' + containerId,
      method: 'GET',
      qs: {},
      body: null,
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "required": true
          }
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("PUT /containers/{containerId} -> 204", function (done) {
    var options = {
      url: endpoint + '/containers/' + containerId,
      method: 'PUT',
      qs: {},
      body: {
        "id": 5
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  it("DELETE /containers/{containerId} -> 204", function (done) {
    var options = {
      url: endpoint + '/containers/' + containerId,
      method: 'DELETE',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
});
