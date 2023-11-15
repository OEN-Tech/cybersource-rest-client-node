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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurations = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurations model module.
   * @module model/CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurations
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurations</code>.
   * @alias module:model/CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurations
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurations} obj Optional instance to populate.
   * @return {module:model/CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurations} The populated <code>CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('parentProfileId')) {
        obj['parentProfileId'] = ApiClient.convertToType(data['parentProfileId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Specify the Vault ID to which transacting MID needs to be assigned.Provide Vault ID as seen on EBC Vault management page. If not provided , transacting MID will be assigned to the existing default Vault at merchant's level. If there are no Vaults at merchant level , a new Vault will be created and transacting MID will be assigned to it.
   * @member {String} parentProfileId
   */
  exports.prototype['parentProfileId'] = undefined;



  return exports;
}));


