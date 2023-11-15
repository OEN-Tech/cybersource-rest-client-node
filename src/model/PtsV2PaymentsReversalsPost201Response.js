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
    define(['ApiClient', 'model/PtsV2IncrementalAuthorizationPatch201ResponseLinks', 'model/PtsV2PaymentsPost201ResponseClientReferenceInformation', 'model/PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation', 'model/PtsV2PaymentsReversalsPost201ResponseIssuerInformation', 'model/PtsV2PaymentsReversalsPost201ResponseProcessorInformation', 'model/PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails', 'model/Ptsv2paymentsidreversalsPointOfSaleInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2IncrementalAuthorizationPatch201ResponseLinks'), require('./PtsV2PaymentsPost201ResponseClientReferenceInformation'), require('./PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation'), require('./PtsV2PaymentsReversalsPost201ResponseIssuerInformation'), require('./PtsV2PaymentsReversalsPost201ResponseProcessorInformation'), require('./PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails'), require('./Ptsv2paymentsidreversalsPointOfSaleInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsReversalsPost201Response = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseLinks, root.CyberSource.PtsV2PaymentsPost201ResponseClientReferenceInformation, root.CyberSource.PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation, root.CyberSource.PtsV2PaymentsReversalsPost201ResponseIssuerInformation, root.CyberSource.PtsV2PaymentsReversalsPost201ResponseProcessorInformation, root.CyberSource.PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails, root.CyberSource.Ptsv2paymentsidreversalsPointOfSaleInformation);
  }
}(this, function(ApiClient, PtsV2IncrementalAuthorizationPatch201ResponseLinks, PtsV2PaymentsPost201ResponseClientReferenceInformation, PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation, PtsV2PaymentsReversalsPost201ResponseIssuerInformation, PtsV2PaymentsReversalsPost201ResponseProcessorInformation, PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails, Ptsv2paymentsidreversalsPointOfSaleInformation) {
  'use strict';




  /**
   * The PtsV2PaymentsReversalsPost201Response model module.
   * @module model/PtsV2PaymentsReversalsPost201Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsReversalsPost201Response</code>.
   * @alias module:model/PtsV2PaymentsReversalsPost201Response
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>PtsV2PaymentsReversalsPost201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsReversalsPost201Response} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsReversalsPost201Response} The populated <code>PtsV2PaymentsReversalsPost201Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = PtsV2IncrementalAuthorizationPatch201ResponseLinks.constructFromObject(data['_links']);
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
      if (data.hasOwnProperty('reversalAmountDetails')) {
        obj['reversalAmountDetails'] = PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails.constructFromObject(data['reversalAmountDetails']);
      }
      if (data.hasOwnProperty('processorInformation')) {
        obj['processorInformation'] = PtsV2PaymentsReversalsPost201ResponseProcessorInformation.constructFromObject(data['processorInformation']);
      }
      if (data.hasOwnProperty('issuerInformation')) {
        obj['issuerInformation'] = PtsV2PaymentsReversalsPost201ResponseIssuerInformation.constructFromObject(data['issuerInformation']);
      }
      if (data.hasOwnProperty('authorizationInformation')) {
        obj['authorizationInformation'] = PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation.constructFromObject(data['authorizationInformation']);
      }
      if (data.hasOwnProperty('pointOfSaleInformation')) {
        obj['pointOfSaleInformation'] = Ptsv2paymentsidreversalsPointOfSaleInformation.constructFromObject(data['pointOfSaleInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2IncrementalAuthorizationPatch201ResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * An unique identification number generated by Cybersource to identify the submitted request. Returned by all services. It is also appended to the endpoint of the resource. On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * The status of the submitted transaction.  Possible values:  - REVERSED  - PARTIALLY_REVERSED 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Reference number for the transaction. Depending on how your Cybersource account is configured, this value could either be provided in the API request or generated by CyberSource. The actual value used in the request to the processor is provided back to you by Cybersource in the response. 
   * @member {String} reconciliationId
   */
  exports.prototype['reconciliationId'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails} reversalAmountDetails
   */
  exports.prototype['reversalAmountDetails'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsReversalsPost201ResponseProcessorInformation} processorInformation
   */
  exports.prototype['processorInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsReversalsPost201ResponseIssuerInformation} issuerInformation
   */
  exports.prototype['issuerInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation} authorizationInformation
   */
  exports.prototype['authorizationInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidreversalsPointOfSaleInformation} pointOfSaleInformation
   */
  exports.prototype['pointOfSaleInformation'] = undefined;



  return exports;
}));


