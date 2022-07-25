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
    define(['ApiClient', 'model/Ptsv2paymentsClientReferenceInformation', 'model/Ptsv2paymentsidvoidsOrderInformation', 'model/Ptsv2paymentsidvoidsPaymentInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsClientReferenceInformation'), require('./Ptsv2paymentsidvoidsOrderInformation'), require('./Ptsv2paymentsidvoidsPaymentInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.MitVoidRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsClientReferenceInformation, root.CyberSource.Ptsv2paymentsidvoidsOrderInformation, root.CyberSource.Ptsv2paymentsidvoidsPaymentInformation);
  }
}(this, function(ApiClient, Ptsv2paymentsClientReferenceInformation, Ptsv2paymentsidvoidsOrderInformation, Ptsv2paymentsidvoidsPaymentInformation) {
  'use strict';




  /**
   * The MitVoidRequest model module.
   * @module model/MitVoidRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>MitVoidRequest</code>.
   * @alias module:model/MitVoidRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MitVoidRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MitVoidRequest} obj Optional instance to populate.
   * @return {module:model/MitVoidRequest} The populated <code>MitVoidRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2paymentsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Ptsv2paymentsidvoidsPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Ptsv2paymentsidvoidsOrderInformation.constructFromObject(data['orderInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidvoidsPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidvoidsOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;



  return exports;
}));


