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
    define(['ApiClient', 'model/PaymentProductsPayoutsConfigurationInformationConfigurationsPullfunds', 'model/PaymentProductsPayoutsConfigurationInformationConfigurationsPushfunds'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentProductsPayoutsConfigurationInformationConfigurationsPullfunds'), require('./PaymentProductsPayoutsConfigurationInformationConfigurationsPushfunds'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentProductsPayoutsConfigurationInformationConfigurations = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentProductsPayoutsConfigurationInformationConfigurationsPullfunds, root.CyberSource.PaymentProductsPayoutsConfigurationInformationConfigurationsPushfunds);
  }
}(this, function(ApiClient, PaymentProductsPayoutsConfigurationInformationConfigurationsPullfunds, PaymentProductsPayoutsConfigurationInformationConfigurationsPushfunds) {
  'use strict';




  /**
   * The PaymentProductsPayoutsConfigurationInformationConfigurations model module.
   * @module model/PaymentProductsPayoutsConfigurationInformationConfigurations
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentProductsPayoutsConfigurationInformationConfigurations</code>.
   * @alias module:model/PaymentProductsPayoutsConfigurationInformationConfigurations
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PaymentProductsPayoutsConfigurationInformationConfigurations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentProductsPayoutsConfigurationInformationConfigurations} obj Optional instance to populate.
   * @return {module:model/PaymentProductsPayoutsConfigurationInformationConfigurations} The populated <code>PaymentProductsPayoutsConfigurationInformationConfigurations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pullfunds')) {
        obj['pullfunds'] = ApiClient.convertToType(data['pullfunds'], {'String': PaymentProductsPayoutsConfigurationInformationConfigurationsPullfunds});
      }
      if (data.hasOwnProperty('pushfunds')) {
        obj['pushfunds'] = ApiClient.convertToType(data['pushfunds'], {'String': PaymentProductsPayoutsConfigurationInformationConfigurationsPushfunds});
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, module:model/PaymentProductsPayoutsConfigurationInformationConfigurationsPullfunds>} pullfunds
   */
  exports.prototype['pullfunds'] = undefined;
  /**
   * @member {Object.<String, module:model/PaymentProductsPayoutsConfigurationInformationConfigurationsPushfunds>} pushfunds
   */
  exports.prototype['pushfunds'] = undefined;



  return exports;
}));


