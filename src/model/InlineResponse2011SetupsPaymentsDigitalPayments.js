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
    define(['ApiClient', 'model/InlineResponse2011SetupsPaymentsCardProcessingSubscriptionStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2011SetupsPaymentsCardProcessingSubscriptionStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2011SetupsPaymentsDigitalPayments = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2011SetupsPaymentsCardProcessingSubscriptionStatus);
  }
}(this, function(ApiClient, InlineResponse2011SetupsPaymentsCardProcessingSubscriptionStatus) {
  'use strict';




  /**
   * The InlineResponse2011SetupsPaymentsDigitalPayments model module.
   * @module model/InlineResponse2011SetupsPaymentsDigitalPayments
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2011SetupsPaymentsDigitalPayments</code>.
   * @alias module:model/InlineResponse2011SetupsPaymentsDigitalPayments
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse2011SetupsPaymentsDigitalPayments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2011SetupsPaymentsDigitalPayments} obj Optional instance to populate.
   * @return {module:model/InlineResponse2011SetupsPaymentsDigitalPayments} The populated <code>InlineResponse2011SetupsPaymentsDigitalPayments</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptionStatus')) {
        obj['subscriptionStatus'] = InlineResponse2011SetupsPaymentsCardProcessingSubscriptionStatus.constructFromObject(data['subscriptionStatus']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2011SetupsPaymentsCardProcessingSubscriptionStatus} subscriptionStatus
   */
  exports.prototype['subscriptionStatus'] = undefined;



  return exports;
}));


