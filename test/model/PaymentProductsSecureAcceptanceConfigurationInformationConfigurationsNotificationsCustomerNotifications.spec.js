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
    instance = new CyberSource.PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications();
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

  describe('PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications', function() {
    it('should create an instance of PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications', function() {
      // uncomment below and update the code to test PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications
      //var instane = new CyberSource.PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications();
      //expect(instance).to.be.a(CyberSource.PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications);
    });

    it('should have the property customReceiptPageEnabled (base name: "customReceiptPageEnabled")', function() {
      // uncomment below and update the code to test the property customReceiptPageEnabled
      //var instane = new CyberSource.PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications();
      //expect(instance).to.be();
    });

    it('should have the property receiptEmailAddress (base name: "receiptEmailAddress")', function() {
      // uncomment below and update the code to test the property receiptEmailAddress
      //var instane = new CyberSource.PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications();
      //expect(instance).to.be();
    });

    it('should have the property customerReceiptEmailEnabled (base name: "customerReceiptEmailEnabled")', function() {
      // uncomment below and update the code to test the property customerReceiptEmailEnabled
      //var instane = new CyberSource.PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications();
      //expect(instance).to.be();
    });

    it('should have the property customCancelPage (base name: "customCancelPage")', function() {
      // uncomment below and update the code to test the property customCancelPage
      //var instane = new CyberSource.PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications();
      //expect(instance).to.be();
    });

    it('should have the property customReceiptPage (base name: "customReceiptPage")', function() {
      // uncomment below and update the code to test the property customReceiptPage
      //var instane = new CyberSource.PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications();
      //expect(instance).to.be();
    });

    it('should have the property customCancelPageEnabled (base name: "customCancelPageEnabled")', function() {
      // uncomment below and update the code to test the property customCancelPageEnabled
      //var instane = new CyberSource.PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications();
      //expect(instance).to.be();
    });

    it('should have the property notificationReceiptEmailEnabled (base name: "notificationReceiptEmailEnabled")', function() {
      // uncomment below and update the code to test the property notificationReceiptEmailEnabled
      //var instane = new CyberSource.PaymentProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications();
      //expect(instance).to.be();
    });

  });

}));
