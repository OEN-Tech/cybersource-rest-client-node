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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseTokenInformationCustomer', 'model/PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument', 'model/PtsV2PaymentsPost201ResponseTokenInformationShippingAddress', 'model/TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseTokenInformationCustomer'), require('./PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument'), require('./PtsV2PaymentsPost201ResponseTokenInformationShippingAddress'), require('./TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponseTokenInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseTokenInformationCustomer, root.CyberSource.PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument, root.CyberSource.PtsV2PaymentsPost201ResponseTokenInformationShippingAddress, root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseTokenInformationCustomer, PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument, PtsV2PaymentsPost201ResponseTokenInformationShippingAddress, TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseTokenInformation model module.
   * @module model/TssV2TransactionsGet200ResponseTokenInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseTokenInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseTokenInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseTokenInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseTokenInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseTokenInformation} The populated <code>TssV2TransactionsGet200ResponseTokenInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customer')) {
        obj['customer'] = PtsV2PaymentsPost201ResponseTokenInformationCustomer.constructFromObject(data['customer']);
      }
      if (data.hasOwnProperty('paymentInstrument')) {
        obj['paymentInstrument'] = PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument.constructFromObject(data['paymentInstrument']);
      }
      if (data.hasOwnProperty('shippingAddress')) {
        obj['shippingAddress'] = PtsV2PaymentsPost201ResponseTokenInformationShippingAddress.constructFromObject(data['shippingAddress']);
      }
      if (data.hasOwnProperty('instrumentIdentifier')) {
        obj['instrumentIdentifier'] = TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier.constructFromObject(data['instrumentIdentifier']);
      }
      if (data.hasOwnProperty('jti')) {
        obj['jti'] = ApiClient.convertToType(data['jti'], 'String');
      }
      if (data.hasOwnProperty('transientTokenJwt')) {
        obj['transientTokenJwt'] = ApiClient.convertToType(data['transientTokenJwt'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseTokenInformationCustomer} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument} paymentInstrument
   */
  exports.prototype['paymentInstrument'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseTokenInformationShippingAddress} shippingAddress
   */
  exports.prototype['shippingAddress'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier} instrumentIdentifier
   */
  exports.prototype['instrumentIdentifier'] = undefined;
  /**
   * TMS Transient Token, 64 hexadecimal id value representing captured payment credentials (including Sensitive Authentication Data, e.g. CVV). 
   * @member {String} jti
   */
  exports.prototype['jti'] = undefined;
  /**
   * Flex API Transient Token encoded as JWT (JSON Web Token), e.g. Flex microform or Unified Payment checkout result. 
   * @member {String} transientTokenJwt
   */
  exports.prototype['transientTokenJwt'] = undefined;



  return exports;
}));


