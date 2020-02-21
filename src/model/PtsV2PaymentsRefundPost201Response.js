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
    define(['ApiClient', 'model/PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation', 'model/PtsV2PaymentsPost201ResponseClientReferenceInformation', 'model/PtsV2PaymentsRefundPost201ResponseLinks', 'model/PtsV2PaymentsRefundPost201ResponseOrderInformation', 'model/PtsV2PaymentsRefundPost201ResponseProcessorInformation', 'model/PtsV2PaymentsRefundPost201ResponseRefundAmountDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation'), require('./PtsV2PaymentsPost201ResponseClientReferenceInformation'), require('./PtsV2PaymentsRefundPost201ResponseLinks'), require('./PtsV2PaymentsRefundPost201ResponseOrderInformation'), require('./PtsV2PaymentsRefundPost201ResponseProcessorInformation'), require('./PtsV2PaymentsRefundPost201ResponseRefundAmountDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsRefundPost201Response = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation, root.CyberSource.PtsV2PaymentsPost201ResponseClientReferenceInformation, root.CyberSource.PtsV2PaymentsRefundPost201ResponseLinks, root.CyberSource.PtsV2PaymentsRefundPost201ResponseOrderInformation, root.CyberSource.PtsV2PaymentsRefundPost201ResponseProcessorInformation, root.CyberSource.PtsV2PaymentsRefundPost201ResponseRefundAmountDetails);
  }
}(this, function(ApiClient, PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation, PtsV2PaymentsPost201ResponseClientReferenceInformation, PtsV2PaymentsRefundPost201ResponseLinks, PtsV2PaymentsRefundPost201ResponseOrderInformation, PtsV2PaymentsRefundPost201ResponseProcessorInformation, PtsV2PaymentsRefundPost201ResponseRefundAmountDetails) {
  'use strict';




  /**
   * The PtsV2PaymentsRefundPost201Response model module.
   * @module model/PtsV2PaymentsRefundPost201Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsRefundPost201Response</code>.
   * @alias module:model/PtsV2PaymentsRefundPost201Response
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>PtsV2PaymentsRefundPost201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsRefundPost201Response} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsRefundPost201Response} The populated <code>PtsV2PaymentsRefundPost201Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = PtsV2PaymentsRefundPost201ResponseLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('reconciliationId')) {
        obj['reconciliationId'] = ApiClient.convertToType(data['reconciliationId'], 'String');
      }
      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = PtsV2PaymentsPost201ResponseClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('refundAmountDetails')) {
        obj['refundAmountDetails'] = PtsV2PaymentsRefundPost201ResponseRefundAmountDetails.constructFromObject(data['refundAmountDetails']);
      }
      if (data.hasOwnProperty('processorInformation')) {
        obj['processorInformation'] = PtsV2PaymentsRefundPost201ResponseProcessorInformation.constructFromObject(data['processorInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = PtsV2PaymentsRefundPost201ResponseOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('pointOfSaleInformation')) {
        obj['pointOfSaleInformation'] = PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation.constructFromObject(data['pointOfSaleInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsRefundPost201ResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * An unique identification number assigned by CyberSource to identify the submitted request. It is also appended to the endpoint of the resource.  On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` Example `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * The status of the submitted transaction.  Possible values:  - PENDING 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The reconciliation id for the submitted transaction. This value is not returned for all processors. 
   * @member {String} reconciliationId
   */
  exports.prototype['reconciliationId'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsRefundPost201ResponseRefundAmountDetails} refundAmountDetails
   */
  exports.prototype['refundAmountDetails'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsRefundPost201ResponseProcessorInformation} processorInformation
   */
  exports.prototype['processorInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsRefundPost201ResponseOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation} pointOfSaleInformation
   */
  exports.prototype['pointOfSaleInformation'] = undefined;



  return exports;
}));


