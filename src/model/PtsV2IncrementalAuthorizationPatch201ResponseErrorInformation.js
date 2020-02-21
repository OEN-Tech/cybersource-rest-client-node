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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseErrorInformationDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseErrorInformationDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseErrorInformationDetails);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseErrorInformationDetails) {
  'use strict';




  /**
   * The PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation model module.
   * @module model/PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation</code>.
   * @alias module:model/PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation} The populated <code>PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [PtsV2PaymentsPost201ResponseErrorInformationDetails]);
      }
    }
    return obj;
  }

  /**
   * The reason of the status.  Possible values:   - AVS_FAILED   - CONTACT_PROCESSOR   - EXPIRED_CARD   - PROCESSOR_DECLINED   - INSUFFICIENT_FUND   - STOLEN_LOST_CARD   - ISSUER_UNAVAILABLE   - UNAUTHORIZED_CARD   - CVN_NOT_MATCH   - EXCEEDS_CREDIT_LIMIT   - INVALID_CVN   - BLACKLISTED_CUSTOMER   - SUSPENDED_ACCOUNT   - PAYMENT_REFUSED   - CV_FAILED   - INVALID_ACCOUNT   - GENERAL_DECLINE   - INVALID_MERCHANT_CONFIGURATION   - DECISION_PROFILE_REJECT   - SCORE_EXCEEDS_THRESHOLD   - PENDING_AUTHENTICATION 
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * The detail message related to the status and reason listed above.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Array.<module:model/PtsV2PaymentsPost201ResponseErrorInformationDetails>} details
   */
  exports.prototype['details'] = undefined;



  return exports;
}));


