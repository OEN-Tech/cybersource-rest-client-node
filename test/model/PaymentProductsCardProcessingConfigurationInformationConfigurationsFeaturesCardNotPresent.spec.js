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
    instance = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardNotPresent();
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

  describe('PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardNotPresent', function() {
    it('should create an instance of PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardNotPresent', function() {
      // uncomment below and update the code to test PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardNotPresent
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardNotPresent();
      //expect(instance).to.be.a(CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardNotPresent);
    });

    it('should have the property processors (base name: "processors")', function() {
      // uncomment below and update the code to test the property processors
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardNotPresent();
      //expect(instance).to.be();
    });

    it('should have the property ignoreAddressVerificationSystem (base name: "ignoreAddressVerificationSystem")', function() {
      // uncomment below and update the code to test the property ignoreAddressVerificationSystem
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardNotPresent();
      //expect(instance).to.be();
    });

    it('should have the property visaStraightThroughProcessingOnly (base name: "visaStraightThroughProcessingOnly")', function() {
      // uncomment below and update the code to test the property visaStraightThroughProcessingOnly
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardNotPresent();
      //expect(instance).to.be();
    });

    it('should have the property amexTransactionAdviceAddendum1 (base name: "amexTransactionAdviceAddendum1")', function() {
      // uncomment below and update the code to test the property amexTransactionAdviceAddendum1
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardNotPresent();
      //expect(instance).to.be();
    });

    it('should have the property installment (base name: "installment")', function() {
      // uncomment below and update the code to test the property installment
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardNotPresent();
      //expect(instance).to.be();
    });

  });

}));
