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
    instance = new CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy();
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

  describe('Notificationsubscriptionsv1webhooksSecurityPolicy', function() {
    it('should create an instance of Notificationsubscriptionsv1webhooksSecurityPolicy', function() {
      // uncomment below and update the code to test Notificationsubscriptionsv1webhooksSecurityPolicy
      //var instane = new CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy();
      //expect(instance).to.be.a(CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy);
    });

    it('should have the property securityType (base name: "securityType")', function() {
      // uncomment below and update the code to test the property securityType
      //var instane = new CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy();
      //expect(instance).to.be();
    });

    it('should have the property config (base name: "config")', function() {
      // uncomment below and update the code to test the property config
      //var instane = new CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy();
      //expect(instance).to.be();
    });

  });

}));
