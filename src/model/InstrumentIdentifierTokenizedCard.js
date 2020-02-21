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
    define(['ApiClient', 'model/TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InstrumentIdentifierTokenizedCard = factory(root.CyberSource.ApiClient, root.CyberSource.TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard);
  }
}(this, function(ApiClient, TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard) {
  'use strict';




  /**
   * The InstrumentIdentifierTokenizedCard model module.
   * @module model/InstrumentIdentifierTokenizedCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InstrumentIdentifierTokenizedCard</code>.
   * The Network Token associated with the Instrument Identifier (PAN)
   * @alias module:model/InstrumentIdentifierTokenizedCard
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>InstrumentIdentifierTokenizedCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InstrumentIdentifierTokenizedCard} obj Optional instance to populate.
   * @return {module:model/InstrumentIdentifierTokenizedCard} The populated <code>InstrumentIdentifierTokenizedCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('expirationMonth')) {
        obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
      }
      if (data.hasOwnProperty('expirationYear')) {
        obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('card')) {
        obj['card'] = TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard.constructFromObject(data['card']);
      }
    }
    return obj;
  }

  /**
   * Issuer state for the Network Token Valid values: - ACTIVE - SUSPENDED - DELETED 
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * The Network Token expiration month, automatically updated
   * @member {String} expirationMonth
   */
  exports.prototype['expirationMonth'] = undefined;
  /**
   * The Network Token expiration year, automatically updated
   * @member {String} expirationYear
   */
  exports.prototype['expirationYear'] = undefined;
  /**
   * The Network Token brand Valid values: - visa - mastercard 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard} card
   */
  exports.prototype['card'] = undefined;



  return exports;
}));


