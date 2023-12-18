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
    define(['ApiClient', 'model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB', 'model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesJCBJSecure', 'model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB'), require('./PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesJCBJSecure'), require('./PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypes = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB, root.CyberSource.PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesJCBJSecure, root.CyberSource.PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa);
  }
}(this, function(ApiClient, PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB, PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesJCBJSecure, PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa) {
  'use strict';




  /**
   * The PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypes model module.
   * @module model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypes
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypes</code>.
   * @alias module:model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypes
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypes} obj Optional instance to populate.
   * @return {module:model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypes} The populated <code>PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('verifiedByVisa')) {
        obj['verifiedByVisa'] = PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa.constructFromObject(data['verifiedByVisa']);
      }
      if (data.hasOwnProperty('masterCardSecureCode')) {
        obj['masterCardSecureCode'] = PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa.constructFromObject(data['masterCardSecureCode']);
      }
      if (data.hasOwnProperty('amexSafeKey')) {
        obj['amexSafeKey'] = PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa.constructFromObject(data['amexSafeKey']);
      }
      if (data.hasOwnProperty('jCBJSecure')) {
        obj['jCBJSecure'] = PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesJCBJSecure.constructFromObject(data['jCBJSecure']);
      }
      if (data.hasOwnProperty('dinersClubInternationalProtectBuy')) {
        obj['dinersClubInternationalProtectBuy'] = PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa.constructFromObject(data['dinersClubInternationalProtectBuy']);
      }
      if (data.hasOwnProperty('ELO')) {
        obj['ELO'] = PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa.constructFromObject(data['ELO']);
      }
      if (data.hasOwnProperty('UPI')) {
        obj['UPI'] = PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa.constructFromObject(data['UPI']);
      }
      if (data.hasOwnProperty('CB')) {
        obj['CB'] = PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB.constructFromObject(data['CB']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa} verifiedByVisa
   */
  exports.prototype['verifiedByVisa'] = undefined;
  /**
   * @member {module:model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa} masterCardSecureCode
   */
  exports.prototype['masterCardSecureCode'] = undefined;
  /**
   * @member {module:model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa} amexSafeKey
   */
  exports.prototype['amexSafeKey'] = undefined;
  /**
   * @member {module:model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesJCBJSecure} jCBJSecure
   */
  exports.prototype['jCBJSecure'] = undefined;
  /**
   * @member {module:model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa} dinersClubInternationalProtectBuy
   */
  exports.prototype['dinersClubInternationalProtectBuy'] = undefined;
  /**
   * @member {module:model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa} ELO
   */
  exports.prototype['ELO'] = undefined;
  /**
   * @member {module:model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesVerifiedByVisa} UPI
   */
  exports.prototype['UPI'] = undefined;
  /**
   * @member {module:model/PaymentsProductsPayerAuthenticationConfigurationInformationConfigurationsCardTypesCB} CB
   */
  exports.prototype['CB'] = undefined;



  return exports;
}));


