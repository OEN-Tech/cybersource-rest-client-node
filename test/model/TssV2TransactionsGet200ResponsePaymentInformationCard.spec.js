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
    instance = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
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

  describe('TssV2TransactionsGet200ResponsePaymentInformationCard', function() {
    it('should create an instance of TssV2TransactionsGet200ResponsePaymentInformationCard', function() {
      // uncomment below and update the code to test TssV2TransactionsGet200ResponsePaymentInformationCard
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be.a(CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard);
    });

    it('should have the property suffix (base name: "suffix")', function() {
      // uncomment below and update the code to test the property suffix
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property prefix (base name: "prefix")', function() {
      // uncomment below and update the code to test the property prefix
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property expirationMonth (base name: "expirationMonth")', function() {
      // uncomment below and update the code to test the property expirationMonth
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property expirationYear (base name: "expirationYear")', function() {
      // uncomment below and update the code to test the property expirationYear
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property startMonth (base name: "startMonth")', function() {
      // uncomment below and update the code to test the property startMonth
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property startYear (base name: "startYear")', function() {
      // uncomment below and update the code to test the property startYear
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property issueNumber (base name: "issueNumber")', function() {
      // uncomment below and update the code to test the property issueNumber
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property brandName (base name: "brandName")', function() {
      // uncomment below and update the code to test the property brandName
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property accountEncoderId (base name: "accountEncoderId")', function() {
      // uncomment below and update the code to test the property accountEncoderId
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property useAs (base name: "useAs")', function() {
      // uncomment below and update the code to test the property useAs
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard();
      //expect(instance).to.be();
    });

  });

}));
