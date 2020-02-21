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
    root.CyberSource.Ptsv2paymentsidMerchantInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsidMerchantInformation model module.
   * @module model/Ptsv2paymentsidMerchantInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidMerchantInformation</code>.
   * @alias module:model/Ptsv2paymentsidMerchantInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv2paymentsidMerchantInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidMerchantInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidMerchantInformation} The populated <code>Ptsv2paymentsidMerchantInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transactionLocalDateTime')) {
        obj['transactionLocalDateTime'] = ApiClient.convertToType(data['transactionLocalDateTime'], 'String');
      }
    }
    return obj;
  }

  /**
   * Local date and time at your physical location. Include both the date and time in this field or leave it blank. This field is supported only for **CyberSource through VisaNet**.  For processor-specific information, see the `transaction_local_date_time` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  Format: `YYYYMMDDhhmmss`, where:   - YYYY = year  - MM = month  - DD = day  - hh = hour  - mm = minutes  - ss = seconds   For processor-specific information, see the `transaction_local_date_time` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} transactionLocalDateTime
   */
  exports.prototype['transactionLocalDateTime'] = undefined;



  return exports;
}));


