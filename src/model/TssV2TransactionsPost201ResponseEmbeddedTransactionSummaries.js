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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Ptsv2paymentsMerchantDefinedInformation', 'model/TssV2TransactionsGet200ResponseFraudMarkingInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedApplicationInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedBuyerInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedDeviceInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedLinks', 'model/TssV2TransactionsPost201ResponseEmbeddedMerchantInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedOrderInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedProcessingInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedProcessorInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedRiskInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsMerchantDefinedInformation'), require('./TssV2TransactionsGet200ResponseFraudMarkingInformation'), require('./TssV2TransactionsPost201ResponseEmbeddedApplicationInformation'), require('./TssV2TransactionsPost201ResponseEmbeddedBuyerInformation'), require('./TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation'), require('./TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation'), require('./TssV2TransactionsPost201ResponseEmbeddedDeviceInformation'), require('./TssV2TransactionsPost201ResponseEmbeddedLinks'), require('./TssV2TransactionsPost201ResponseEmbeddedMerchantInformation'), require('./TssV2TransactionsPost201ResponseEmbeddedOrderInformation'), require('./TssV2TransactionsPost201ResponseEmbeddedPaymentInformation'), require('./TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation'), require('./TssV2TransactionsPost201ResponseEmbeddedProcessingInformation'), require('./TssV2TransactionsPost201ResponseEmbeddedProcessorInformation'), require('./TssV2TransactionsPost201ResponseEmbeddedRiskInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsMerchantDefinedInformation, root.CyberSource.TssV2TransactionsGet200ResponseFraudMarkingInformation, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedApplicationInformation, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedBuyerInformation, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedDeviceInformation, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedLinks, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedMerchantInformation, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedOrderInformation, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedPaymentInformation, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedProcessingInformation, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedProcessorInformation, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedRiskInformation);
  }
}(this, function(ApiClient, Ptsv2paymentsMerchantDefinedInformation, TssV2TransactionsGet200ResponseFraudMarkingInformation, TssV2TransactionsPost201ResponseEmbeddedApplicationInformation, TssV2TransactionsPost201ResponseEmbeddedBuyerInformation, TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation, TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation, TssV2TransactionsPost201ResponseEmbeddedDeviceInformation, TssV2TransactionsPost201ResponseEmbeddedLinks, TssV2TransactionsPost201ResponseEmbeddedMerchantInformation, TssV2TransactionsPost201ResponseEmbeddedOrderInformation, TssV2TransactionsPost201ResponseEmbeddedPaymentInformation, TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation, TssV2TransactionsPost201ResponseEmbeddedProcessingInformation, TssV2TransactionsPost201ResponseEmbeddedProcessorInformation, TssV2TransactionsPost201ResponseEmbeddedRiskInformation) {
  'use strict';




  /**
   * The TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries model module.
   * @module model/TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries</code>.
   * @alias module:model/TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries} The populated <code>TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('merchantId')) {
        obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
      }
      if (data.hasOwnProperty('applicationInformation')) {
        obj['applicationInformation'] = TssV2TransactionsPost201ResponseEmbeddedApplicationInformation.constructFromObject(data['applicationInformation']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = TssV2TransactionsPost201ResponseEmbeddedBuyerInformation.constructFromObject(data['buyerInformation']);
      }
      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('consumerAuthenticationInformation')) {
        obj['consumerAuthenticationInformation'] = TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation.constructFromObject(data['consumerAuthenticationInformation']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = TssV2TransactionsPost201ResponseEmbeddedDeviceInformation.constructFromObject(data['deviceInformation']);
      }
      if (data.hasOwnProperty('fraudMarkingInformation')) {
        obj['fraudMarkingInformation'] = TssV2TransactionsGet200ResponseFraudMarkingInformation.constructFromObject(data['fraudMarkingInformation']);
      }
      if (data.hasOwnProperty('merchantDefinedInformation')) {
        obj['merchantDefinedInformation'] = ApiClient.convertToType(data['merchantDefinedInformation'], [Ptsv2paymentsMerchantDefinedInformation]);
      }
      if (data.hasOwnProperty('merchantInformation')) {
        obj['merchantInformation'] = TssV2TransactionsPost201ResponseEmbeddedMerchantInformation.constructFromObject(data['merchantInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = TssV2TransactionsPost201ResponseEmbeddedOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = TssV2TransactionsPost201ResponseEmbeddedPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = TssV2TransactionsPost201ResponseEmbeddedProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('processorInformation')) {
        obj['processorInformation'] = TssV2TransactionsPost201ResponseEmbeddedProcessorInformation.constructFromObject(data['processorInformation']);
      }
      if (data.hasOwnProperty('pointOfSaleInformation')) {
        obj['pointOfSaleInformation'] = TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation.constructFromObject(data['pointOfSaleInformation']);
      }
      if (data.hasOwnProperty('riskInformation')) {
        obj['riskInformation'] = TssV2TransactionsPost201ResponseEmbeddedRiskInformation.constructFromObject(data['riskInformation']);
      }
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = TssV2TransactionsPost201ResponseEmbeddedLinks.constructFromObject(data['_links']);
      }
    }
    return obj;
  }

  /**
   * An unique identification number generated by Cybersource to identify the submitted request. Returned by all services. It is also appended to the endpoint of the resource. On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * Your CyberSource merchant ID.
   * @member {String} merchantId
   */
  exports.prototype['merchantId'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedApplicationInformation} applicationInformation
   */
  exports.prototype['applicationInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedBuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation} consumerAuthenticationInformation
   */
  exports.prototype['consumerAuthenticationInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedDeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseFraudMarkingInformation} fraudMarkingInformation
   */
  exports.prototype['fraudMarkingInformation'] = undefined;
  /**
   * The object containing the custom data that the merchant defines. 
   * @member {Array.<module:model/Ptsv2paymentsMerchantDefinedInformation>} merchantDefinedInformation
   */
  exports.prototype['merchantDefinedInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedMerchantInformation} merchantInformation
   */
  exports.prototype['merchantInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedProcessorInformation} processorInformation
   */
  exports.prototype['processorInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation} pointOfSaleInformation
   */
  exports.prototype['pointOfSaleInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedRiskInformation} riskInformation
   */
  exports.prototype['riskInformation'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedLinks} _links
   */
  exports.prototype['_links'] = undefined;



  return exports;
}));


