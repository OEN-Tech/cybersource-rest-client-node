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
    root.CyberSource.VTConfigCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VTConfigCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields model module.
   * @module model/VTConfigCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>VTConfigCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields</code>.
   * @alias module:model/VTConfigCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields
   * @class
   */
  var exports = function() {
    var _this = this;


























  };

  /**
   * Constructs a <code>VTConfigCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VTConfigCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields} obj Optional instance to populate.
   * @return {module:model/VTConfigCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields} The populated <code>VTConfigCardNotPresentGlobalPaymentInformationMerchantDefinedDataFields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('displayMerchantDefinedData1')) {
        obj['displayMerchantDefinedData1'] = ApiClient.convertToType(data['displayMerchantDefinedData1'], 'Boolean');
      }
      if (data.hasOwnProperty('displayMerchantDefinedData2')) {
        obj['displayMerchantDefinedData2'] = ApiClient.convertToType(data['displayMerchantDefinedData2'], 'Boolean');
      }
      if (data.hasOwnProperty('displayMerchantDefinedData3')) {
        obj['displayMerchantDefinedData3'] = ApiClient.convertToType(data['displayMerchantDefinedData3'], 'Boolean');
      }
      if (data.hasOwnProperty('displayMerchantDefinedData4')) {
        obj['displayMerchantDefinedData4'] = ApiClient.convertToType(data['displayMerchantDefinedData4'], 'Boolean');
      }
      if (data.hasOwnProperty('displayMerchantDefinedData5')) {
        obj['displayMerchantDefinedData5'] = ApiClient.convertToType(data['displayMerchantDefinedData5'], 'Boolean');
      }
      if (data.hasOwnProperty('merchantDefinedData1DefaultValue')) {
        obj['merchantDefinedData1DefaultValue'] = ApiClient.convertToType(data['merchantDefinedData1DefaultValue'], 'String');
      }
      if (data.hasOwnProperty('merchantDefinedData1Label')) {
        obj['merchantDefinedData1Label'] = ApiClient.convertToType(data['merchantDefinedData1Label'], 'String');
      }
      if (data.hasOwnProperty('requireMerchantDefinedData1')) {
        obj['requireMerchantDefinedData1'] = ApiClient.convertToType(data['requireMerchantDefinedData1'], 'Boolean');
      }
      if (data.hasOwnProperty('merchantDefinedData2DefaultValue')) {
        obj['merchantDefinedData2DefaultValue'] = ApiClient.convertToType(data['merchantDefinedData2DefaultValue'], 'String');
      }
      if (data.hasOwnProperty('merchantDefinedData2Label')) {
        obj['merchantDefinedData2Label'] = ApiClient.convertToType(data['merchantDefinedData2Label'], 'String');
      }
      if (data.hasOwnProperty('requireMerchantDefinedData2')) {
        obj['requireMerchantDefinedData2'] = ApiClient.convertToType(data['requireMerchantDefinedData2'], 'Boolean');
      }
      if (data.hasOwnProperty('merchantDefinedData3DefaultValue')) {
        obj['merchantDefinedData3DefaultValue'] = ApiClient.convertToType(data['merchantDefinedData3DefaultValue'], 'String');
      }
      if (data.hasOwnProperty('merchantDefinedData3Label')) {
        obj['merchantDefinedData3Label'] = ApiClient.convertToType(data['merchantDefinedData3Label'], 'String');
      }
      if (data.hasOwnProperty('requireMerchantDefinedData3')) {
        obj['requireMerchantDefinedData3'] = ApiClient.convertToType(data['requireMerchantDefinedData3'], 'Boolean');
      }
      if (data.hasOwnProperty('merchantDefinedData4DefaultValue')) {
        obj['merchantDefinedData4DefaultValue'] = ApiClient.convertToType(data['merchantDefinedData4DefaultValue'], 'String');
      }
      if (data.hasOwnProperty('merchantDefinedData4Label')) {
        obj['merchantDefinedData4Label'] = ApiClient.convertToType(data['merchantDefinedData4Label'], 'String');
      }
      if (data.hasOwnProperty('requireMerchantDefinedData4')) {
        obj['requireMerchantDefinedData4'] = ApiClient.convertToType(data['requireMerchantDefinedData4'], 'Boolean');
      }
      if (data.hasOwnProperty('merchantDefinedData5DefaultValue')) {
        obj['merchantDefinedData5DefaultValue'] = ApiClient.convertToType(data['merchantDefinedData5DefaultValue'], 'String');
      }
      if (data.hasOwnProperty('merchantDefinedData5Label')) {
        obj['merchantDefinedData5Label'] = ApiClient.convertToType(data['merchantDefinedData5Label'], 'String');
      }
      if (data.hasOwnProperty('requireMerchantDefinedData5')) {
        obj['requireMerchantDefinedData5'] = ApiClient.convertToType(data['requireMerchantDefinedData5'], 'Boolean');
      }
      if (data.hasOwnProperty('merchantDefinedData1DisplayOnReceipt')) {
        obj['merchantDefinedData1DisplayOnReceipt'] = ApiClient.convertToType(data['merchantDefinedData1DisplayOnReceipt'], 'Boolean');
      }
      if (data.hasOwnProperty('merchantDefinedData2DisplayOnReceipt')) {
        obj['merchantDefinedData2DisplayOnReceipt'] = ApiClient.convertToType(data['merchantDefinedData2DisplayOnReceipt'], 'Boolean');
      }
      if (data.hasOwnProperty('merchantDefinedData3DisplayOnReceipt')) {
        obj['merchantDefinedData3DisplayOnReceipt'] = ApiClient.convertToType(data['merchantDefinedData3DisplayOnReceipt'], 'Boolean');
      }
      if (data.hasOwnProperty('merchantDefinedData4DisplayOnReceipt')) {
        obj['merchantDefinedData4DisplayOnReceipt'] = ApiClient.convertToType(data['merchantDefinedData4DisplayOnReceipt'], 'Boolean');
      }
      if (data.hasOwnProperty('merchantDefinedData5DisplayOnReceipt')) {
        obj['merchantDefinedData5DisplayOnReceipt'] = ApiClient.convertToType(data['merchantDefinedData5DisplayOnReceipt'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} displayMerchantDefinedData1
   */
  exports.prototype['displayMerchantDefinedData1'] = undefined;
  /**
   * @member {Boolean} displayMerchantDefinedData2
   */
  exports.prototype['displayMerchantDefinedData2'] = undefined;
  /**
   * @member {Boolean} displayMerchantDefinedData3
   */
  exports.prototype['displayMerchantDefinedData3'] = undefined;
  /**
   * @member {Boolean} displayMerchantDefinedData4
   */
  exports.prototype['displayMerchantDefinedData4'] = undefined;
  /**
   * @member {Boolean} displayMerchantDefinedData5
   */
  exports.prototype['displayMerchantDefinedData5'] = undefined;
  /**
   * @member {String} merchantDefinedData1DefaultValue
   */
  exports.prototype['merchantDefinedData1DefaultValue'] = undefined;
  /**
   * @member {String} merchantDefinedData1Label
   */
  exports.prototype['merchantDefinedData1Label'] = undefined;
  /**
   * @member {Boolean} requireMerchantDefinedData1
   */
  exports.prototype['requireMerchantDefinedData1'] = undefined;
  /**
   * @member {String} merchantDefinedData2DefaultValue
   */
  exports.prototype['merchantDefinedData2DefaultValue'] = undefined;
  /**
   * @member {String} merchantDefinedData2Label
   */
  exports.prototype['merchantDefinedData2Label'] = undefined;
  /**
   * @member {Boolean} requireMerchantDefinedData2
   */
  exports.prototype['requireMerchantDefinedData2'] = undefined;
  /**
   * @member {String} merchantDefinedData3DefaultValue
   */
  exports.prototype['merchantDefinedData3DefaultValue'] = undefined;
  /**
   * @member {String} merchantDefinedData3Label
   */
  exports.prototype['merchantDefinedData3Label'] = undefined;
  /**
   * @member {Boolean} requireMerchantDefinedData3
   */
  exports.prototype['requireMerchantDefinedData3'] = undefined;
  /**
   * @member {String} merchantDefinedData4DefaultValue
   */
  exports.prototype['merchantDefinedData4DefaultValue'] = undefined;
  /**
   * @member {String} merchantDefinedData4Label
   */
  exports.prototype['merchantDefinedData4Label'] = undefined;
  /**
   * @member {Boolean} requireMerchantDefinedData4
   */
  exports.prototype['requireMerchantDefinedData4'] = undefined;
  /**
   * @member {String} merchantDefinedData5DefaultValue
   */
  exports.prototype['merchantDefinedData5DefaultValue'] = undefined;
  /**
   * @member {String} merchantDefinedData5Label
   */
  exports.prototype['merchantDefinedData5Label'] = undefined;
  /**
   * @member {Boolean} requireMerchantDefinedData5
   */
  exports.prototype['requireMerchantDefinedData5'] = undefined;
  /**
   * @member {Boolean} merchantDefinedData1DisplayOnReceipt
   */
  exports.prototype['merchantDefinedData1DisplayOnReceipt'] = undefined;
  /**
   * @member {Boolean} merchantDefinedData2DisplayOnReceipt
   */
  exports.prototype['merchantDefinedData2DisplayOnReceipt'] = undefined;
  /**
   * @member {Boolean} merchantDefinedData3DisplayOnReceipt
   */
  exports.prototype['merchantDefinedData3DisplayOnReceipt'] = undefined;
  /**
   * @member {Boolean} merchantDefinedData4DisplayOnReceipt
   */
  exports.prototype['merchantDefinedData4DisplayOnReceipt'] = undefined;
  /**
   * @member {Boolean} merchantDefinedData5DisplayOnReceipt
   */
  exports.prototype['merchantDefinedData5DisplayOnReceipt'] = undefined;



  return exports;
}));


