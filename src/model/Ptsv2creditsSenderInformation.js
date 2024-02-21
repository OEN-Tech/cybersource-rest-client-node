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
    define(['ApiClient', 'model/Ptsv2creditsSenderInformationAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2creditsSenderInformationAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2creditsSenderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2creditsSenderInformationAccount);
  }
}(this, function(ApiClient, Ptsv2creditsSenderInformationAccount) {
  'use strict';




  /**
   * The Ptsv2creditsSenderInformation model module.
   * @module model/Ptsv2creditsSenderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2creditsSenderInformation</code>.
   * @alias module:model/Ptsv2creditsSenderInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Ptsv2creditsSenderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2creditsSenderInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2creditsSenderInformation} The populated <code>Ptsv2creditsSenderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('account')) {
        obj['account'] = Ptsv2creditsSenderInformationAccount.constructFromObject(data['account']);
      }
    }
    return obj;
  }

  /**
   * First name of the sender of the funds. For Gaming Payment of Winnings transactions these are the merchant details. * Required for Mastercard Payment of Winnings (POW) transactions. * Must not be all numeric. * Must contain only ASCII characters in range 32-122. * Must not be greater than 35 characters including spaces. * Required for POW on Barclays. 
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Last name of the sender of the funds. For Gaming Payment of Winnings transactions these are the merchant details. * Optional for Mastercard Payment of Winnings (POW) transactions. * Must not be all numeric. * Must contain only ASCII characters in range 32-122. * Must not be greater than 35 characters including spaces. * Optional for POW on Barclays. 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Street address of the sender of the funds. For Gaming Payment of Winnings transactions these are the merchant details. * Required for Mastercard Payment of Winnings (POW) transactions. * Must not be all numeric. * Must contain only ASCII characters in range 32-122. * Must not be greater than 50 characters including spaces. * Required for POW on Barclays. 
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * City of the sender of the funds. For Gaming Payment of Winnings transactions these are the merchant details. * Required for Mastercard Payment of Winnings (POW) transactions. * Must not be all numeric. * Must contain only ASCII characters in range 32-122. * Must not be greater than 25 characters including spaces. * Required for POW on Barclays. 
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * Country of the sender of the funds. For Gaming Payment of Winnings transactions these are the merchant details. * Required for Mastercard Payment of Winnings (POW) transactions. * Must be a valid three character ISO country code as defined by ISO 3166. * Must not be greater than 3 characters. * Required for POW on Barclays. 
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * @member {module:model/Ptsv2creditsSenderInformationAccount} account
   */
  exports.prototype['account'] = undefined;



  return exports;
}));


