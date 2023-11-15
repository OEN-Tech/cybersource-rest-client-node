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
    instance = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
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

  describe('PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors', function() {
    it('should create an instance of PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors', function() {
      // uncomment below and update the code to test PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be.a(CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors);
    });

    it('should have the property batchGroup (base name: "batchGroup")', function() {
      // uncomment below and update the code to test the property batchGroup
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property businessApplicationId (base name: "businessApplicationId")', function() {
      // uncomment below and update the code to test the property businessApplicationId
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property merchantVerificationValue (base name: "merchantVerificationValue")', function() {
      // uncomment below and update the code to test the property merchantVerificationValue
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property abaNumber (base name: "abaNumber")', function() {
      // uncomment below and update the code to test the property abaNumber
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property acquirer (base name: "acquirer")', function() {
      // uncomment below and update the code to test the property acquirer
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property merchantId (base name: "merchantId")', function() {
      // uncomment below and update the code to test the property merchantId
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property terminalId (base name: "terminalId")', function() {
      // uncomment below and update the code to test the property terminalId
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property paymentTypes (base name: "paymentTypes")', function() {
      // uncomment below and update the code to test the property paymentTypes
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property currencies (base name: "currencies")', function() {
      // uncomment below and update the code to test the property currencies
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property sicCode (base name: "sicCode")', function() {
      // uncomment below and update the code to test the property sicCode
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property allowMultipleBills (base name: "allowMultipleBills")', function() {
      // uncomment below and update the code to test the property allowMultipleBills
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property allowMerchantDescriptorOverride (base name: "allowMerchantDescriptorOverride")', function() {
      // uncomment below and update the code to test the property allowMerchantDescriptorOverride
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enhancedData (base name: "enhancedData")', function() {
      // uncomment below and update the code to test the property enhancedData
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property fireSafetyIndicator (base name: "fireSafetyIndicator")', function() {
      // uncomment below and update the code to test the property fireSafetyIndicator
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property quasiCash (base name: "quasiCash")', function() {
      // uncomment below and update the code to test the property quasiCash
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property acquirerMerchantId (base name: "acquirerMerchantId")', function() {
      // uncomment below and update the code to test the property acquirerMerchantId
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property avsFormat (base name: "avsFormat")', function() {
      // uncomment below and update the code to test the property avsFormat
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enableLongTransRefNo (base name: "enableLongTransRefNo")', function() {
      // uncomment below and update the code to test the property enableLongTransRefNo
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enableLevel2 (base name: "enableLevel2")', function() {
      // uncomment below and update the code to test the property enableLevel2
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enableMultipleTransactionAdviceAddendum (base name: "enableMultipleTransactionAdviceAddendum")', function() {
      // uncomment below and update the code to test the property enableMultipleTransactionAdviceAddendum
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property amexTransactionAdviceAddendum1 (base name: "amexTransactionAdviceAddendum1")', function() {
      // uncomment below and update the code to test the property amexTransactionAdviceAddendum1
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enableMultiLineItems (base name: "enableMultiLineItems")', function() {
      // uncomment below and update the code to test the property enableMultiLineItems
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enableTransactionReferenceNumber (base name: "enableTransactionReferenceNumber")', function() {
      // uncomment below and update the code to test the property enableTransactionReferenceNumber
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enableAutoAuthReversalAfterVoid (base name: "enableAutoAuthReversalAfterVoid")', function() {
      // uncomment below and update the code to test the property enableAutoAuthReversalAfterVoid
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enableExpresspayPanTranslation (base name: "enableExpresspayPanTranslation")', function() {
      // uncomment below and update the code to test the property enableExpresspayPanTranslation
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enableCreditAuth (base name: "enableCreditAuth")', function() {
      // uncomment below and update the code to test the property enableCreditAuth
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property industryCode (base name: "industryCode")', function() {
      // uncomment below and update the code to test the property industryCode
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property sendAmexLevel2Data (base name: "sendAmexLevel2Data")', function() {
      // uncomment below and update the code to test the property sendAmexLevel2Data
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property softDescriptorType (base name: "softDescriptorType")', function() {
      // uncomment below and update the code to test the property softDescriptorType
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property vitalNumber (base name: "vitalNumber")', function() {
      // uncomment below and update the code to test the property vitalNumber
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property bankNumber (base name: "bankNumber")', function() {
      // uncomment below and update the code to test the property bankNumber
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property chainNumber (base name: "chainNumber")', function() {
      // uncomment below and update the code to test the property chainNumber
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property merchantBinNumber (base name: "merchantBinNumber")', function() {
      // uncomment below and update the code to test the property merchantBinNumber
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property merchantLocationNumber (base name: "merchantLocationNumber")', function() {
      // uncomment below and update the code to test the property merchantLocationNumber
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property storeID (base name: "storeID")', function() {
      // uncomment below and update the code to test the property storeID
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property travelAgencyCode (base name: "travelAgencyCode")', function() {
      // uncomment below and update the code to test the property travelAgencyCode
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property travelAgencyName (base name: "travelAgencyName")', function() {
      // uncomment below and update the code to test the property travelAgencyName
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property settlementCurrency (base name: "settlementCurrency")', function() {
      // uncomment below and update the code to test the property settlementCurrency
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enableLeastCostRouting (base name: "enableLeastCostRouting")', function() {
      // uncomment below and update the code to test the property enableLeastCostRouting
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enableCVVResponseIndicator (base name: "enableCVVResponseIndicator")', function() {
      // uncomment below and update the code to test the property enableCVVResponseIndicator
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enableMultiCurrencyProcessing (base name: "enableMultiCurrencyProcessing")', function() {
      // uncomment below and update the code to test the property enableMultiCurrencyProcessing
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enablePosNetworkSwitching (base name: "enablePosNetworkSwitching")', function() {
      // uncomment below and update the code to test the property enablePosNetworkSwitching
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enableDynamicCurrencyConversion (base name: "enableDynamicCurrencyConversion")', function() {
      // uncomment below and update the code to test the property enableDynamicCurrencyConversion
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

    it('should have the property merchantTier (base name: "merchantTier")', function() {
      // uncomment below and update the code to test the property merchantTier
      //var instane = new CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsCommonProcessors();
      //expect(instance).to.be();
    });

  });

}));
