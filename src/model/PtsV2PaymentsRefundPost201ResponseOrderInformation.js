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
    define(['ApiClient', 'model/PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsRefundPost201ResponseOrderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails);
  }
}(this, function(ApiClient, PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails) {
  'use strict';




  /**
   * The PtsV2PaymentsRefundPost201ResponseOrderInformation model module.
   * @module model/PtsV2PaymentsRefundPost201ResponseOrderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsRefundPost201ResponseOrderInformation</code>.
   * @alias module:model/PtsV2PaymentsRefundPost201ResponseOrderInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PtsV2PaymentsRefundPost201ResponseOrderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsRefundPost201ResponseOrderInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsRefundPost201ResponseOrderInformation} The populated <code>PtsV2PaymentsRefundPost201ResponseOrderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('invoiceDetails')) {
        obj['invoiceDetails'] = PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails.constructFromObject(data['invoiceDetails']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails} invoiceDetails
   */
  exports.prototype['invoiceDetails'] = undefined;



  return exports;
}));


