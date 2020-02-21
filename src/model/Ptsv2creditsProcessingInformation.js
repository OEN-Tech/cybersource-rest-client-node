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
    define(['ApiClient', 'model/Ptsv2creditsProcessingInformationBankTransferOptions', 'model/Ptsv2creditsProcessingInformationElectronicBenefitsTransfer', 'model/Ptsv2creditsProcessingInformationJapanPaymentOptions', 'model/Ptsv2creditsProcessingInformationPurchaseOptions', 'model/Ptsv2paymentsProcessingInformationLoanOptions', 'model/Ptsv2paymentsidrefundsProcessingInformationRecurringOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2creditsProcessingInformationBankTransferOptions'), require('./Ptsv2creditsProcessingInformationElectronicBenefitsTransfer'), require('./Ptsv2creditsProcessingInformationJapanPaymentOptions'), require('./Ptsv2creditsProcessingInformationPurchaseOptions'), require('./Ptsv2paymentsProcessingInformationLoanOptions'), require('./Ptsv2paymentsidrefundsProcessingInformationRecurringOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2creditsProcessingInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2creditsProcessingInformationBankTransferOptions, root.CyberSource.Ptsv2creditsProcessingInformationElectronicBenefitsTransfer, root.CyberSource.Ptsv2creditsProcessingInformationJapanPaymentOptions, root.CyberSource.Ptsv2creditsProcessingInformationPurchaseOptions, root.CyberSource.Ptsv2paymentsProcessingInformationLoanOptions, root.CyberSource.Ptsv2paymentsidrefundsProcessingInformationRecurringOptions);
  }
}(this, function(ApiClient, Ptsv2creditsProcessingInformationBankTransferOptions, Ptsv2creditsProcessingInformationElectronicBenefitsTransfer, Ptsv2creditsProcessingInformationJapanPaymentOptions, Ptsv2creditsProcessingInformationPurchaseOptions, Ptsv2paymentsProcessingInformationLoanOptions, Ptsv2paymentsidrefundsProcessingInformationRecurringOptions) {
  'use strict';




  /**
   * The Ptsv2creditsProcessingInformation model module.
   * @module model/Ptsv2creditsProcessingInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2creditsProcessingInformation</code>.
   * @alias module:model/Ptsv2creditsProcessingInformation
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>Ptsv2creditsProcessingInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2creditsProcessingInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2creditsProcessingInformation} The populated <code>Ptsv2creditsProcessingInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('commerceIndicator')) {
        obj['commerceIndicator'] = ApiClient.convertToType(data['commerceIndicator'], 'String');
      }
      if (data.hasOwnProperty('processorId')) {
        obj['processorId'] = ApiClient.convertToType(data['processorId'], 'String');
      }
      if (data.hasOwnProperty('paymentSolution')) {
        obj['paymentSolution'] = ApiClient.convertToType(data['paymentSolution'], 'String');
      }
      if (data.hasOwnProperty('reconciliationId')) {
        obj['reconciliationId'] = ApiClient.convertToType(data['reconciliationId'], 'String');
      }
      if (data.hasOwnProperty('linkId')) {
        obj['linkId'] = ApiClient.convertToType(data['linkId'], 'String');
      }
      if (data.hasOwnProperty('reportGroup')) {
        obj['reportGroup'] = ApiClient.convertToType(data['reportGroup'], 'String');
      }
      if (data.hasOwnProperty('visaCheckoutId')) {
        obj['visaCheckoutId'] = ApiClient.convertToType(data['visaCheckoutId'], 'String');
      }
      if (data.hasOwnProperty('purchaseLevel')) {
        obj['purchaseLevel'] = ApiClient.convertToType(data['purchaseLevel'], 'String');
      }
      if (data.hasOwnProperty('industryDataType')) {
        obj['industryDataType'] = ApiClient.convertToType(data['industryDataType'], 'String');
      }
      if (data.hasOwnProperty('walletType')) {
        obj['walletType'] = ApiClient.convertToType(data['walletType'], 'String');
      }
      if (data.hasOwnProperty('nationalNetDomesticData')) {
        obj['nationalNetDomesticData'] = ApiClient.convertToType(data['nationalNetDomesticData'], 'String');
      }
      if (data.hasOwnProperty('networkRoutingOrder')) {
        obj['networkRoutingOrder'] = ApiClient.convertToType(data['networkRoutingOrder'], 'String');
      }
      if (data.hasOwnProperty('recurringOptions')) {
        obj['recurringOptions'] = Ptsv2paymentsidrefundsProcessingInformationRecurringOptions.constructFromObject(data['recurringOptions']);
      }
      if (data.hasOwnProperty('bankTransferOptions')) {
        obj['bankTransferOptions'] = Ptsv2creditsProcessingInformationBankTransferOptions.constructFromObject(data['bankTransferOptions']);
      }
      if (data.hasOwnProperty('purchaseOptions')) {
        obj['purchaseOptions'] = Ptsv2creditsProcessingInformationPurchaseOptions.constructFromObject(data['purchaseOptions']);
      }
      if (data.hasOwnProperty('electronicBenefitsTransfer')) {
        obj['electronicBenefitsTransfer'] = Ptsv2creditsProcessingInformationElectronicBenefitsTransfer.constructFromObject(data['electronicBenefitsTransfer']);
      }
      if (data.hasOwnProperty('loanOptions')) {
        obj['loanOptions'] = Ptsv2paymentsProcessingInformationLoanOptions.constructFromObject(data['loanOptions']);
      }
      if (data.hasOwnProperty('japanPaymentOptions')) {
        obj['japanPaymentOptions'] = Ptsv2creditsProcessingInformationJapanPaymentOptions.constructFromObject(data['japanPaymentOptions']);
      }
    }
    return obj;
  }

  /**
   * Type of transaction. Some payment card companies use this information when determining discount rates.  #### Ingenico ePayments Ingenico ePayments was previously called _Global Collect_. When you omit this field for Ingenico ePayments, the processor uses the default transaction type they have on file for you instead of the default value listed in \"Commerce Indicators\" section of [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### Payer Authentication Transactions For the possible values and requirements, see \"Payer Authentication\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### Payouts OCT (Original Credit Transaction) Value for an OCT transaction: - `internet` For details, see the `e_commerce_indicator` field description in [Payouts Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/payouts_SCMP/html/)  #### Other Types of Transactions For details, see \"Commerce Indicators\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} commerceIndicator
   */
  exports.prototype['commerceIndicator'] = undefined;
  /**
   * Value that identifies the processor/acquirer to use for the transaction. This value is supported only for **CyberSource through VisaNet**.  Contact CyberSource Customer Support to get the value for this field. 
   * @member {String} processorId
   */
  exports.prototype['processorId'] = undefined;
  /**
   * Type of digital payment solution for the transaction. Possible Values:   - `visacheckout`: Visa Checkout. This value is required for Visa Checkout transactions. For details, see `payment_solution` field description in [Visa Checkout Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/VCO_SCMP_API/html/)  - `001`: Apple Pay.  - `004`: Cybersource In-App Solution.  - `005`: Masterpass. This value is required for Masterpass transactions on OmniPay Direct. For details, see \"Masterpass\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  - `006`: Android Pay.  - `007`: Chase Pay.  - `008`: Samsung Pay.  - `012`: Google Pay. 
   * @member {String} paymentSolution
   */
  exports.prototype['paymentSolution'] = undefined;
  /**
   * Please check with Cybersource customer support to see if your merchant account is configured correctly so you can include this field in your request. * For Payouts: max length for FDCCompass is String (22). 
   * @member {String} reconciliationId
   */
  exports.prototype['reconciliationId'] = undefined;
  /**
   * Value that links the current authorization request to the original authorization request. Set this value to the ID that was returned in the reply message from the original authorization request.  This value is used for:  - Partial authorizations - Split shipments  For details, see `link_to_request` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} linkId
   */
  exports.prototype['linkId'] = undefined;
  /**
   * Attribute that lets you define custom grouping for your processor reports. This field is supported only for **Worldpay VAP**.  For details, see `report_group` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} reportGroup
   */
  exports.prototype['reportGroup'] = undefined;
  /**
   * Identifier for the **Visa Checkout** order. Visa Checkout provides a unique order ID for every transaction in the Visa Checkout **callID** field.  For details, see the `vc_order_id` field description in [Visa Checkout Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/VCO_SCMP_API/html/) 
   * @member {String} visaCheckoutId
   */
  exports.prototype['visaCheckoutId'] = undefined;
  /**
   * Set this field to 3 to indicate that the request includes Level III data.
   * @member {String} purchaseLevel
   */
  exports.prototype['purchaseLevel'] = undefined;
  /**
   * Flag that indicates that the transaction includes airline data or restaurant data.  This field must be set to `airline` in order for airline data to be sent to the processor.  For example, if this field is not set to airline or is not included in the request, CyberSource does not send airline data to the processor.  You must set this field to `restaurant` in order for restaurant data to be sent to the processor.  When this field is not set to restaurant or is not included in the request, CyberSource does not send restaurant data to the processor.  Possible Values:  - `airline` - `restaurant` - `lodging` - `auto_rental` - `transit` - `healthcare_medical` - `healthcare_transit` 
   * @member {String} industryDataType
   */
  exports.prototype['industryDataType'] = undefined;
  /**
   * This field carries the wallet type in authorization requests and credit requests. Possible value are: - `101`: Masterpass remote payment. The customer created the wallet by manually interacting with a customer-controlled device such as a computer, tablet, or phone. This value is supported only for Masterpass transactions on Chase Paymentech Solutions and CyberSource through VisaNet. - `102`: Masterpass remote near field communication (NFC) payment. The customer created the wallet by tapping a PayPass card or customer-controlled device at a contactless card reader. This value is supported only for card-present Masterpass transactions on CyberSource through VisaNet. - `103`: Masterpass Apple Pay payment. The payment was made with a combination of Masterpass and Apple Pay. This value is supported only for Masterpass Apple Pay transactions on CyberSource through VisaNet. - `216`: Masterpass Google Pay payment. The payment was made with a combination of Masterpass and Google Pay. This value is supported only for Masterpass Google Pay transactions on CyberSource through VisaNet. - `217`: Masterpass Samsung Pay payment. The payment was made with a combination of Masterpass and Samsung Pay. This value is supported only for Masterpass Samsung Pay transactions on CyberSource through VisaNet. - `SDW`: Staged digital wallet. An issuer or operator created the wallet. This value is supported only for Masterpass transactions on Chase Paymentech Solutions. - `VCIND`: Visa Checkout payment. This value is supported only on CyberSource through VisaNet, FDC Compass, FDC Nashville Global, FDI Australia, and TSYS Acquiring Solutions. See Getting Started with Visa Checkout. For Visa Checkout transactions, the way CyberSource processes the value for this field depends on the processor. See the Visa Checkout section below. For all other values, this field is a passthrough; therefore, CyberSource does not verify the value or modify it in any way before sending it to the processor. Masterpass (101, 102, 103, 216, and 217): The Masterpass platform generates the wallet type value and passes it to you along with the customer’s checkout information.  Visa Checkout: This field is optional for Visa Checkout authorizations on FDI Australia. For all other processors, this field is required for Visa Checkout authorizations. For Visa Checkout transactions on the following processors, CyberSource sends the value that the processor expects for this field:FDC Compass,FDC Nashville Global,FDI Australia,TSYS Acquiring Solutions For all other processors, this field is a passthrough; therefore, CyberSource does not verify the value or modify it in any way before sending it to the processor. For incremental authorizations, this field is supported only for Mastercard and the supported values are 101 and 102. Payment card companies can introduce new values without notice. Your order management system should be able to process new values without problems.  CyberSource through VisaNet When the value for this field is 101, 102, 103, 216, or 217, it corresponds to the following data in the TC 33 capture file5: Record: CP01 TCR6, Position: 88-90,  Field: Mastercard Wallet Identifier. When the value for this field is VCIND, it corresponds to the following data in the TC 33 capture file5: Record: CP01 TCR8, Position: 72-76, Field: Agent Unique ID. 
   * @member {String} walletType
   */
  exports.prototype['walletType'] = undefined;
  /**
   * Supplementary domestic transaction information provided by the acquirer for National Net Settlement Service (NNSS) transactions. NNSS is a settlement service that Visa provides. For transactions on CyberSource through VisaNet in countries that subscribe to NNSS: VisaNet clears transactions; VisaNet transfers funds to the acquirer after deducting processing fees and interchange fees. VisaNet settles transactions in the local pricing currency through a local financial institution. This field is supported only on CyberSource through VisaNet for domestic data in Colombia 
   * @member {String} nationalNetDomesticData
   */
  exports.prototype['nationalNetDomesticData'] = undefined;
  /**
   * On PIN Debit Gateways: This U.S.-only field is optionally used by  participants (merchants and acquirers) to specify the network access priority. VisaNet checks to determine if there are issuer routing preferences for any of the networks specified by the sharing group code. If an issuer preference exists for one of the specified debit networks, VisaNet makes a routing selection based on the issuer’s preference. If an issuer preference exists for more than one of the specified debit networks, or if no issuer preference exists, VisaNet makes a selection based on the acquirer’s routing priorities. 
   * @member {String} networkRoutingOrder
   */
  exports.prototype['networkRoutingOrder'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsProcessingInformationRecurringOptions} recurringOptions
   */
  exports.prototype['recurringOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2creditsProcessingInformationBankTransferOptions} bankTransferOptions
   */
  exports.prototype['bankTransferOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2creditsProcessingInformationPurchaseOptions} purchaseOptions
   */
  exports.prototype['purchaseOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2creditsProcessingInformationElectronicBenefitsTransfer} electronicBenefitsTransfer
   */
  exports.prototype['electronicBenefitsTransfer'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationLoanOptions} loanOptions
   */
  exports.prototype['loanOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2creditsProcessingInformationJapanPaymentOptions} japanPaymentOptions
   */
  exports.prototype['japanPaymentOptions'] = undefined;



  return exports;
}));


