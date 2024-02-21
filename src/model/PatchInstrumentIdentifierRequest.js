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
    define(['ApiClient', 'model/TmsEmbeddedInstrumentIdentifierBankAccount', 'model/TmsEmbeddedInstrumentIdentifierBillTo', 'model/TmsEmbeddedInstrumentIdentifierCard', 'model/TmsEmbeddedInstrumentIdentifierIssuer', 'model/TmsEmbeddedInstrumentIdentifierLinks', 'model/TmsEmbeddedInstrumentIdentifierMetadata', 'model/TmsEmbeddedInstrumentIdentifierProcessingInformation', 'model/TmsEmbeddedInstrumentIdentifierTokenizedCard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TmsEmbeddedInstrumentIdentifierBankAccount'), require('./TmsEmbeddedInstrumentIdentifierBillTo'), require('./TmsEmbeddedInstrumentIdentifierCard'), require('./TmsEmbeddedInstrumentIdentifierIssuer'), require('./TmsEmbeddedInstrumentIdentifierLinks'), require('./TmsEmbeddedInstrumentIdentifierMetadata'), require('./TmsEmbeddedInstrumentIdentifierProcessingInformation'), require('./TmsEmbeddedInstrumentIdentifierTokenizedCard'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PatchInstrumentIdentifierRequest = factory(root.CyberSource.ApiClient, root.CyberSource.TmsEmbeddedInstrumentIdentifierBankAccount, root.CyberSource.TmsEmbeddedInstrumentIdentifierBillTo, root.CyberSource.TmsEmbeddedInstrumentIdentifierCard, root.CyberSource.TmsEmbeddedInstrumentIdentifierIssuer, root.CyberSource.TmsEmbeddedInstrumentIdentifierLinks, root.CyberSource.TmsEmbeddedInstrumentIdentifierMetadata, root.CyberSource.TmsEmbeddedInstrumentIdentifierProcessingInformation, root.CyberSource.TmsEmbeddedInstrumentIdentifierTokenizedCard);
  }
}(this, function(ApiClient, TmsEmbeddedInstrumentIdentifierBankAccount, TmsEmbeddedInstrumentIdentifierBillTo, TmsEmbeddedInstrumentIdentifierCard, TmsEmbeddedInstrumentIdentifierIssuer, TmsEmbeddedInstrumentIdentifierLinks, TmsEmbeddedInstrumentIdentifierMetadata, TmsEmbeddedInstrumentIdentifierProcessingInformation, TmsEmbeddedInstrumentIdentifierTokenizedCard) {
  'use strict';




  /**
   * The PatchInstrumentIdentifierRequest model module.
   * @module model/PatchInstrumentIdentifierRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PatchInstrumentIdentifierRequest</code>.
   * @alias module:model/PatchInstrumentIdentifierRequest
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>PatchInstrumentIdentifierRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatchInstrumentIdentifierRequest} obj Optional instance to populate.
   * @return {module:model/PatchInstrumentIdentifierRequest} The populated <code>PatchInstrumentIdentifierRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = TmsEmbeddedInstrumentIdentifierLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('card')) {
        obj['card'] = TmsEmbeddedInstrumentIdentifierCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('bankAccount')) {
        obj['bankAccount'] = TmsEmbeddedInstrumentIdentifierBankAccount.constructFromObject(data['bankAccount']);
      }
      if (data.hasOwnProperty('tokenizedCard')) {
        obj['tokenizedCard'] = TmsEmbeddedInstrumentIdentifierTokenizedCard.constructFromObject(data['tokenizedCard']);
      }
      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = TmsEmbeddedInstrumentIdentifierIssuer.constructFromObject(data['issuer']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = TmsEmbeddedInstrumentIdentifierProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('billTo')) {
        obj['billTo'] = TmsEmbeddedInstrumentIdentifierBillTo.constructFromObject(data['billTo']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = TmsEmbeddedInstrumentIdentifierMetadata.constructFromObject(data['metadata']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TmsEmbeddedInstrumentIdentifierLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * The Id of the Instrument Identifier Token. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The type.  Possible Values: - instrumentIdentifier 
   * @member {String} object
   */
  exports.prototype['object'] = undefined;
  /**
   * Issuers state for the card number. Possible Values: - ACTIVE - CLOSED : The account has been closed. 
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * The type of Instrument Identifier. Possible Values: - enrollable card 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/TmsEmbeddedInstrumentIdentifierCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/TmsEmbeddedInstrumentIdentifierBankAccount} bankAccount
   */
  exports.prototype['bankAccount'] = undefined;
  /**
   * @member {module:model/TmsEmbeddedInstrumentIdentifierTokenizedCard} tokenizedCard
   */
  exports.prototype['tokenizedCard'] = undefined;
  /**
   * @member {module:model/TmsEmbeddedInstrumentIdentifierIssuer} issuer
   */
  exports.prototype['issuer'] = undefined;
  /**
   * @member {module:model/TmsEmbeddedInstrumentIdentifierProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/TmsEmbeddedInstrumentIdentifierBillTo} billTo
   */
  exports.prototype['billTo'] = undefined;
  /**
   * @member {module:model/TmsEmbeddedInstrumentIdentifierMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;



  return exports;
}));


