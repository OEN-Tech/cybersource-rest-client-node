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
    define(['ApiClient', 'model/Ptsv2paymentsidreversalsPointOfSaleInformationEmv'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsidreversalsPointOfSaleInformationEmv'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponsePointOfSaleInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsidreversalsPointOfSaleInformationEmv);
  }
}(this, function(ApiClient, Ptsv2paymentsidreversalsPointOfSaleInformationEmv) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponsePointOfSaleInformation model module.
   * @module model/TssV2TransactionsGet200ResponsePointOfSaleInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponsePointOfSaleInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponsePointOfSaleInformation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponsePointOfSaleInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponsePointOfSaleInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponsePointOfSaleInformation} The populated <code>TssV2TransactionsGet200ResponsePointOfSaleInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('terminalId')) {
        obj['terminalId'] = ApiClient.convertToType(data['terminalId'], 'String');
      }
      if (data.hasOwnProperty('entryMode')) {
        obj['entryMode'] = ApiClient.convertToType(data['entryMode'], 'String');
      }
      if (data.hasOwnProperty('terminalCapability')) {
        obj['terminalCapability'] = ApiClient.convertToType(data['terminalCapability'], 'Number');
      }
      if (data.hasOwnProperty('cardholderVerificationMethodUsed')) {
        obj['cardholderVerificationMethodUsed'] = ApiClient.convertToType(data['cardholderVerificationMethodUsed'], 'Number');
      }
      if (data.hasOwnProperty('emv')) {
        obj['emv'] = Ptsv2paymentsidreversalsPointOfSaleInformationEmv.constructFromObject(data['emv']);
      }
    }
    return obj;
  }

  /**
   * Identifier for the terminal at your retail location. You can define this value yourself, but consult the processor for requirements.  #### CyberSource through VisaNet A list of all possible values is stored in your CyberSource account. If terminal ID validation is enabled for your CyberSource account, the value you send for this field is validated against the list each time you include the field in a request. To enable or disable terminal ID validation, contact CyberSource Customer Support.  When you do not include this field in a request, CyberSource uses the default value that is defined in your CyberSource account.  #### FDC Nashville Global To have your account configured to support this field, contact CyberSource Customer Support. This value must be a value that FDC Nashville Global issued to you.  #### For Payouts This field is applicable for CyberSource through VisaNet.  #### GPX Identifier for the terminal at your retail location. A list of all possible values is stored in your account. If terminal ID validation is enabled for your account, the value you send for this field is validated against the list each time you include the field in a request. To enable or disable terminal ID validation, contact customer support.  When you do not include this field in a request, the default value that is defined in your account is used.  Optional for authorizations.  #### Used by **Authorization** Optional for the following processors. When you do not include this field in a request, the default value that is defined in your account is used.   - American Express Direct   - Credit Mutuel-CIC   - FDC Nashville Global   - SIX - Chase Paymentech Solutions: Optional field. If you include this field in your request, you must also include `pointOfSaleInformation.catLevel`. - FDMS Nashville: The default value that is defined in your account is used. - GPX - OmniPay Direct: Optional field.  For the following processors, this field is not used. - GPN - JCN Gateway - RBS WorldPay Atlanta - TSYS Acquiring Solutions - Worldpay VAP  #### Card Present reply Terminal identifier assigned by the acquirer. This value must be printed on the receipt. 
   * @member {String} terminalId
   */
  exports.prototype['terminalId'] = undefined;
  /**
   * Method of entering payment card information into the POS terminal. Possible values:   - `contact`: Read from direct contact with chip card.  - `contactless`: Read from a contactless interface using chip data.  - `keyed`: Manually keyed into POS terminal. This value is not supported on OmniPay Direct.  - `msd`: Read from a contactless interface using magnetic stripe data (MSD). This value is not supported on OmniPay Direct.  - `swiped`: Read from credit card magnetic stripe.  The `contact`, `contactless`, and `msd` values are supported only for EMV transactions.  #### Used by **Authorization** Required field.  #### Card Present Card present information about EMV applies only to credit card processing and PIN debit processing. All other card present information applies only to credit card processing.  #### PIN debit Required for a PIN debit purchase and a PIN debit credit request. 
   * @member {String} entryMode
   */
  exports.prototype['entryMode'] = undefined;
  /**
   * POS terminal's capability. Possible values:   - `1`: Terminal has a magnetic stripe reader only.  - `2`: Terminal has a magnetic stripe reader and manual entry capability.  - `3`: Terminal has manual entry capability only.  - `4`: Terminal can read chip cards.  - `5`: Terminal can read contactless chip cards; cannot use contact to read chip cards.  For an EMV transaction, the value of this field must be `4` or `5`.  #### PIN debit Required for PIN debit purchase and PIN debit credit request.  #### Used by **Authorization** Required for the following processors: - American Express Direct - Chase Paymentech Solutions - Credit Mutuel-CIC - FDC Nashville Global - FDMS Nashville - OmniPay Direct - SIX - Worldpay VAP  Optional for the following processors: - CyberSource through VisaNet - GPN - GPX - JCN Gateway - RBS WorldPay Atlanta - TSYS Acquiring Solutions 
   * @member {Number} terminalCapability
   */
  exports.prototype['terminalCapability'] = undefined;
  /**
   * Method that was used to verify the cardholder's identity. Possible values:    - `0`: No verification   - `1`: Signature   - `2`: PIN   - `3`: Cardholder device CVM 
   * @member {Number} cardholderVerificationMethodUsed
   */
  exports.prototype['cardholderVerificationMethodUsed'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidreversalsPointOfSaleInformationEmv} emv
   */
  exports.prototype['emv'] = undefined;



  return exports;
}));


