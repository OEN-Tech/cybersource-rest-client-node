/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig', function() {
    it('should create an instance of Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig', function() {
      // uncomment below and update the code to test Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig
      //var instane = new CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig();
      //expect(instance).to.be.a(CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig);
    });

    it('should have the property aud (base name: "aud")', function() {
      // uncomment below and update the code to test the property aud
      //var instane = new CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig();
      //expect(instance).to.be();
    });

    it('should have the property keyId (base name: "keyId")', function() {
      // uncomment below and update the code to test the property keyId
      //var instane = new CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig();
      //expect(instance).to.be();
    });

  });

}));
