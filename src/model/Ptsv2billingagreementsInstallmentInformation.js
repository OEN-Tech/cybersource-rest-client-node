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
    root.CyberSource.Ptsv2billingagreementsInstallmentInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2billingagreementsInstallmentInformation model module.
   * @module model/Ptsv2billingagreementsInstallmentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2billingagreementsInstallmentInformation</code>.
   * @alias module:model/Ptsv2billingagreementsInstallmentInformation
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Ptsv2billingagreementsInstallmentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2billingagreementsInstallmentInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2billingagreementsInstallmentInformation} The populated <code>Ptsv2billingagreementsInstallmentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alertPreference')) {
        obj['alertPreference'] = ApiClient.convertToType(data['alertPreference'], 'String');
      }
      if (data.hasOwnProperty('firstInstallmentDate')) {
        obj['firstInstallmentDate'] = ApiClient.convertToType(data['firstInstallmentDate'], 'String');
      }
      if (data.hasOwnProperty('identifier')) {
        obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
      }
      if (data.hasOwnProperty('lastInstallmentDate')) {
        obj['lastInstallmentDate'] = ApiClient.convertToType(data['lastInstallmentDate'], 'String');
      }
      if (data.hasOwnProperty('maxAmount')) {
        obj['maxAmount'] = ApiClient.convertToType(data['maxAmount'], 'String');
      }
      if (data.hasOwnProperty('minAmount')) {
        obj['minAmount'] = ApiClient.convertToType(data['minAmount'], 'String');
      }
      if (data.hasOwnProperty('paymentType')) {
        obj['paymentType'] = ApiClient.convertToType(data['paymentType'], 'String');
      }
      if (data.hasOwnProperty('preferredDay')) {
        obj['preferredDay'] = ApiClient.convertToType(data['preferredDay'], 'String');
      }
      if (data.hasOwnProperty('sequence')) {
        obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Applicable only for SI. Required in case the authentication is initiated for SI registration. Valid Values: - `SMS` - `EMAIL` - `BOTH` 
   * @member {String} alertPreference
   */
  exports.prototype['alertPreference'] = undefined;
  /**
   * Date of the first installment payment. Format: YYMMDD. When you do not include this field, CyberSource sends a string of six zeros (000000) to the processor. For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on CyberSource through VisaNet.  The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR9 - Position: 42-47 - Field: Date of First Installment 
   * @member {String} firstInstallmentDate
   */
  exports.prototype['firstInstallmentDate'] = undefined;
  /**
   * Standing Instruction/Installment identifier. 
   * @member {String} identifier
   */
  exports.prototype['identifier'] = undefined;
  /**
   * End date of the SI transactions. Cannot be later than card expiry date. Ideally this can be set to expiry date. Required in case the authentication is initiated for SI registration. 
   * @member {String} lastInstallmentDate
   */
  exports.prototype['lastInstallmentDate'] = undefined;
  /**
   * Maximum Amount for which SI can be initiated. Required in case the authentication is initiated for SI registration. 
   * @member {String} maxAmount
   */
  exports.prototype['maxAmount'] = undefined;
  /**
   * Minimum Amount for which SI can be initiated. Required in case the authentication is initiated for SI registration. 
   * @member {String} minAmount
   */
  exports.prototype['minAmount'] = undefined;
  /**
   * Payment plan for the installments.  Possible values: - 0 (default): Regular installment. This value is not allowed for airline transactions. - 1: Installment payment with down payment. - 2: Installment payment without down payment. This value is supported only for airline transactions. - 3: Installment payment; down payment and boarding fee will follow. This value is supported only for airline transactions. - 4: Down payment only; regular installment payment will follow. - 5: Boarding fee only. This value is supported only for airline transactions.  This field is supported only for installment payments with Visa on CyberSource through VisaNet in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP07 TCR1 - Position: 9 - Field: Merchant Installment Supporting Information 
   * @member {String} paymentType
   */
  exports.prototype['paymentType'] = undefined;
  /**
   * Preferred date for initiating the SI transaction every month. This field need not be sent in case the SI has to be initiated as and when required, e.g., topping up the wallet, etc. 
   * @member {String} preferredDay
   */
  exports.prototype['preferredDay'] = undefined;
  /**
   * Installment number when making payments in installments. Used along with `totalCount` to track which payment is being processed.  For example, the second of 5 payments would be passed to CyberSource as `sequence` = 2 and `totalCount` = 5.  For details, see \"Installment Payments\" in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### Chase Paymentech Solutions and FDC Compass This field is optional because this value is required in the merchant descriptors. For details, see \"Chase Paymentech Solutions Merchant Descriptors\" and \"FDC Compass Merchant Descriptors\" in the [Merchant Descriptors Using the SCMP API] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/)  #### CyberSource through VisaNet When you do not include this field in a request for a Crediario installment payment, CyberSource sends a value of 0 to the processor.  For Crediario installment payments, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP01 TCR9 - Position: 38-40 - Field: Installment Payment Number  * The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant's acquirer, who uses this information to facilitate end-of-day clearing processing with payment card companies. 
   * @member {Number} sequence
   */
  exports.prototype['sequence'] = undefined;



  return exports;
}));


