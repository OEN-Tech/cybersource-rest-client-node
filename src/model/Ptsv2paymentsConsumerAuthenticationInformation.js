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
    define(['ApiClient', 'model/Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsConsumerAuthenticationInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication);
  }
}(this, function(ApiClient, Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication) {
  'use strict';




  /**
   * The Ptsv2paymentsConsumerAuthenticationInformation model module.
   * @module model/Ptsv2paymentsConsumerAuthenticationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsConsumerAuthenticationInformation</code>.
   * @alias module:model/Ptsv2paymentsConsumerAuthenticationInformation
   * @class
   */
  var exports = function() {
    var _this = this;


























































  };

  /**
   * Constructs a <code>Ptsv2paymentsConsumerAuthenticationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsConsumerAuthenticationInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsConsumerAuthenticationInformation} The populated <code>Ptsv2paymentsConsumerAuthenticationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cavv')) {
        obj['cavv'] = ApiClient.convertToType(data['cavv'], 'String');
      }
      if (data.hasOwnProperty('transactionFlowIndicator')) {
        obj['transactionFlowIndicator'] = ApiClient.convertToType(data['transactionFlowIndicator'], 'String');
      }
      if (data.hasOwnProperty('cavvAlgorithm')) {
        obj['cavvAlgorithm'] = ApiClient.convertToType(data['cavvAlgorithm'], 'String');
      }
      if (data.hasOwnProperty('eciRaw')) {
        obj['eciRaw'] = ApiClient.convertToType(data['eciRaw'], 'String');
      }
      if (data.hasOwnProperty('paresStatus')) {
        obj['paresStatus'] = ApiClient.convertToType(data['paresStatus'], 'String');
      }
      if (data.hasOwnProperty('veresEnrolled')) {
        obj['veresEnrolled'] = ApiClient.convertToType(data['veresEnrolled'], 'String');
      }
      if (data.hasOwnProperty('xid')) {
        obj['xid'] = ApiClient.convertToType(data['xid'], 'String');
      }
      if (data.hasOwnProperty('ucafCollectionIndicator')) {
        obj['ucafCollectionIndicator'] = ApiClient.convertToType(data['ucafCollectionIndicator'], 'String');
      }
      if (data.hasOwnProperty('ucafAuthenticationData')) {
        obj['ucafAuthenticationData'] = ApiClient.convertToType(data['ucafAuthenticationData'], 'String');
      }
      if (data.hasOwnProperty('strongAuthentication')) {
        obj['strongAuthentication'] = Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication.constructFromObject(data['strongAuthentication']);
      }
      if (data.hasOwnProperty('directoryServerTransactionId')) {
        obj['directoryServerTransactionId'] = ApiClient.convertToType(data['directoryServerTransactionId'], 'String');
      }
      if (data.hasOwnProperty('paSpecificationVersion')) {
        obj['paSpecificationVersion'] = ApiClient.convertToType(data['paSpecificationVersion'], 'String');
      }
      if (data.hasOwnProperty('authenticationType')) {
        obj['authenticationType'] = ApiClient.convertToType(data['authenticationType'], 'String');
      }
      if (data.hasOwnProperty('responseAccessToken')) {
        obj['responseAccessToken'] = ApiClient.convertToType(data['responseAccessToken'], 'String');
      }
      if (data.hasOwnProperty('acsTransactionId')) {
        obj['acsTransactionId'] = ApiClient.convertToType(data['acsTransactionId'], 'String');
      }
      if (data.hasOwnProperty('acsWindowSize')) {
        obj['acsWindowSize'] = ApiClient.convertToType(data['acsWindowSize'], 'String');
      }
      if (data.hasOwnProperty('alternateAuthenticationData')) {
        obj['alternateAuthenticationData'] = ApiClient.convertToType(data['alternateAuthenticationData'], 'String');
      }
      if (data.hasOwnProperty('alternateAuthenticationDate')) {
        obj['alternateAuthenticationDate'] = ApiClient.convertToType(data['alternateAuthenticationDate'], 'String');
      }
      if (data.hasOwnProperty('alternateAuthenticationMethod')) {
        obj['alternateAuthenticationMethod'] = ApiClient.convertToType(data['alternateAuthenticationMethod'], 'String');
      }
      if (data.hasOwnProperty('authenticationDate')) {
        obj['authenticationDate'] = ApiClient.convertToType(data['authenticationDate'], 'String');
      }
      if (data.hasOwnProperty('authenticationTransactionId')) {
        obj['authenticationTransactionId'] = ApiClient.convertToType(data['authenticationTransactionId'], 'String');
      }
      if (data.hasOwnProperty('challengeCancelCode')) {
        obj['challengeCancelCode'] = ApiClient.convertToType(data['challengeCancelCode'], 'String');
      }
      if (data.hasOwnProperty('challengeCode')) {
        obj['challengeCode'] = ApiClient.convertToType(data['challengeCode'], 'String');
      }
      if (data.hasOwnProperty('challengeStatus')) {
        obj['challengeStatus'] = ApiClient.convertToType(data['challengeStatus'], 'String');
      }
      if (data.hasOwnProperty('customerCardAlias')) {
        obj['customerCardAlias'] = ApiClient.convertToType(data['customerCardAlias'], 'String');
      }
      if (data.hasOwnProperty('decoupledAuthenticationIndicator')) {
        obj['decoupledAuthenticationIndicator'] = ApiClient.convertToType(data['decoupledAuthenticationIndicator'], 'String');
      }
      if (data.hasOwnProperty('decoupledAuthenticationMaxTime')) {
        obj['decoupledAuthenticationMaxTime'] = ApiClient.convertToType(data['decoupledAuthenticationMaxTime'], 'String');
      }
      if (data.hasOwnProperty('defaultCard')) {
        obj['defaultCard'] = ApiClient.convertToType(data['defaultCard'], 'Boolean');
      }
      if (data.hasOwnProperty('deviceChannel')) {
        obj['deviceChannel'] = ApiClient.convertToType(data['deviceChannel'], 'String');
      }
      if (data.hasOwnProperty('installmentTotalCount')) {
        obj['installmentTotalCount'] = ApiClient.convertToType(data['installmentTotalCount'], 'Number');
      }
      if (data.hasOwnProperty('merchantFraudRate')) {
        obj['merchantFraudRate'] = ApiClient.convertToType(data['merchantFraudRate'], 'String');
      }
      if (data.hasOwnProperty('marketingOptIn')) {
        obj['marketingOptIn'] = ApiClient.convertToType(data['marketingOptIn'], 'Boolean');
      }
      if (data.hasOwnProperty('marketingSource')) {
        obj['marketingSource'] = ApiClient.convertToType(data['marketingSource'], 'String');
      }
      if (data.hasOwnProperty('mcc')) {
        obj['mcc'] = ApiClient.convertToType(data['mcc'], 'String');
      }
      if (data.hasOwnProperty('merchantScore')) {
        obj['merchantScore'] = ApiClient.convertToType(data['merchantScore'], 'Number');
      }
      if (data.hasOwnProperty('messageCategory')) {
        obj['messageCategory'] = ApiClient.convertToType(data['messageCategory'], 'String');
      }
      if (data.hasOwnProperty('networkScore')) {
        obj['networkScore'] = ApiClient.convertToType(data['networkScore'], 'String');
      }
      if (data.hasOwnProperty('npaCode')) {
        obj['npaCode'] = ApiClient.convertToType(data['npaCode'], 'String');
      }
      if (data.hasOwnProperty('overridePaymentMethod')) {
        obj['overridePaymentMethod'] = ApiClient.convertToType(data['overridePaymentMethod'], 'String');
      }
      if (data.hasOwnProperty('overrideCountryCode')) {
        obj['overrideCountryCode'] = ApiClient.convertToType(data['overrideCountryCode'], 'String');
      }
      if (data.hasOwnProperty('priorAuthenticationData')) {
        obj['priorAuthenticationData'] = ApiClient.convertToType(data['priorAuthenticationData'], 'String');
      }
      if (data.hasOwnProperty('priorAuthenticationMethod')) {
        obj['priorAuthenticationMethod'] = ApiClient.convertToType(data['priorAuthenticationMethod'], 'String');
      }
      if (data.hasOwnProperty('priorAuthenticationReferenceId')) {
        obj['priorAuthenticationReferenceId'] = ApiClient.convertToType(data['priorAuthenticationReferenceId'], 'String');
      }
      if (data.hasOwnProperty('priorAuthenticationTime')) {
        obj['priorAuthenticationTime'] = ApiClient.convertToType(data['priorAuthenticationTime'], 'String');
      }
      if (data.hasOwnProperty('productCode')) {
        obj['productCode'] = ApiClient.convertToType(data['productCode'], 'String');
      }
      if (data.hasOwnProperty('returnUrl')) {
        obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
      }
      if (data.hasOwnProperty('requestorId')) {
        obj['requestorId'] = ApiClient.convertToType(data['requestorId'], 'String');
      }
      if (data.hasOwnProperty('requestorInitiatedAuthenticationIndicator')) {
        obj['requestorInitiatedAuthenticationIndicator'] = ApiClient.convertToType(data['requestorInitiatedAuthenticationIndicator'], 'String');
      }
      if (data.hasOwnProperty('requestorName')) {
        obj['requestorName'] = ApiClient.convertToType(data['requestorName'], 'String');
      }
      if (data.hasOwnProperty('referenceId')) {
        obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
      }
      if (data.hasOwnProperty('sdkMaxTimeout')) {
        obj['sdkMaxTimeout'] = ApiClient.convertToType(data['sdkMaxTimeout'], 'String');
      }
      if (data.hasOwnProperty('secureCorporatePaymentIndicator')) {
        obj['secureCorporatePaymentIndicator'] = ApiClient.convertToType(data['secureCorporatePaymentIndicator'], 'String');
      }
      if (data.hasOwnProperty('transactionMode')) {
        obj['transactionMode'] = ApiClient.convertToType(data['transactionMode'], 'String');
      }
      if (data.hasOwnProperty('whiteListStatus')) {
        obj['whiteListStatus'] = ApiClient.convertToType(data['whiteListStatus'], 'String');
      }
      if (data.hasOwnProperty('effectiveAuthenticationType')) {
        obj['effectiveAuthenticationType'] = ApiClient.convertToType(data['effectiveAuthenticationType'], 'String');
      }
      if (data.hasOwnProperty('signedParesStatusReason')) {
        obj['signedParesStatusReason'] = ApiClient.convertToType(data['signedParesStatusReason'], 'String');
      }
      if (data.hasOwnProperty('signedPares')) {
        obj['signedPares'] = ApiClient.convertToType(data['signedPares'], 'String');
      }
    }
    return obj;
  }

  /**
   * Cardholder authentication verification value (CAVV).
   * @member {String} cavv
   */
  exports.prototype['cavv'] = undefined;
  /**
   * This field details out the type of transaction. Below are the possible values. 08:GC- Guest Checkout. 
   * @member {String} transactionFlowIndicator
   */
  exports.prototype['transactionFlowIndicator'] = undefined;
  /**
   * Algorithm used to generate the CAVV for Visa Secure or the UCAF authentication data for Mastercard Identity Check. 
   * @member {String} cavvAlgorithm
   */
  exports.prototype['cavvAlgorithm'] = undefined;
  /**
   * Raw electronic commerce indicator (ECI).  For details, see `eci_raw` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} eciRaw
   */
  exports.prototype['eciRaw'] = undefined;
  /**
   * Payer authentication response status.  For details, see `pares_status` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} paresStatus
   */
  exports.prototype['paresStatus'] = undefined;
  /**
   * Verification response enrollment status.  For details, see `veres_enrolled` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} veresEnrolled
   */
  exports.prototype['veresEnrolled'] = undefined;
  /**
   * Transaction identifier.  For details, see `xid` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} xid
   */
  exports.prototype['xid'] = undefined;
  /**
   * Universal cardholder authentication field (UCAF) collection indicator.  For details, see `ucaf_collection_indicator` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR7 - Position: 5 - Field: Mastercard Electronic Commerce Indicators—UCAF Collection Indicator 
   * @member {String} ucafCollectionIndicator
   */
  exports.prototype['ucafCollectionIndicator'] = undefined;
  /**
   * Universal cardholder authentication field (UCAF) data.  For details, see `ucaf_authentication_data` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} ucafAuthenticationData
   */
  exports.prototype['ucafAuthenticationData'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication} strongAuthentication
   */
  exports.prototype['strongAuthentication'] = undefined;
  /**
   * The Directory Server Transaction ID is generated by the Mastercard Directory Server during the authentication transaction and passed back to the merchant with the authentication results. For Cybersource Through Visanet Gateway: The value for this field corresponds to the following data in the TC 33 capture file3: Record: CP01 TCR7, Position: 114-149, Field: MC AVV Verification—Directory Server Transaction ID 
   * @member {String} directoryServerTransactionId
   */
  exports.prototype['directoryServerTransactionId'] = undefined;
  /**
   * This field contains 3DS version that was used for Secured Consumer Authentication (SCA). For example 3DS secure version 1.0.2 or 2.0.0 is used for Secured Consumer Authentication. For Cybersource Through Visanet Gateway: The value for this field corresponds to the following data in the TC 33 capture file3: Record: CP01 TCR7, Position: 113 , Field: MC AVV Verification—Program Protocol It will contain one of the following values: - `1` (3D Secure Version 1.0 (3DS 1.0)) - `2` (EMV 3-D Secure (3DS 2.0)) 
   * @member {String} paSpecificationVersion
   */
  exports.prototype['paSpecificationVersion'] = undefined;
  /**
   * Indicates the type of authentication that will be used to challenge the card holder.  Possible Values:  01 - Static  02 - Dynamic  03 - OOB (Out of Band)  04 - Decoupled  20 - OTP hosted at merchant end. (Rupay S2S flow) **NOTE**:  EMV 3-D Secure version 2.1.0 supports values 01-03.  Version 2.2.0 supports values 01-04.  Decoupled authentication is not supported at this time. 
   * @member {String} authenticationType
   */
  exports.prototype['authenticationType'] = undefined;
  /**
   * JWT returned by the 3D Secure provider when the authentication is complete. Required for Hybrid integration if you use the Cybersource-generated access token. Note: Max. length of this field is 2048 characters. 
   * @member {String} responseAccessToken
   */
  exports.prototype['responseAccessToken'] = undefined;
  /**
   * Unique transaction identifier assigned by the ACS to identify a single transaction.  This field is supported for Cartes Bancaires Fast'R transactions on Credit Mutuel-CIC. 
   * @member {String} acsTransactionId
   */
  exports.prototype['acsTransactionId'] = undefined;
  /**
   * An override field that a merchant can pass in to set the challenge window size to display to the end cardholder.  The ACS (Active Control Server) will reply with content that is formatted appropriately to this window size to allow for the best user experience.  The sizes are width x height in pixels of the window displayed in the cardholder browser window.  01 - 250x400  02 - 390x400  03 - 500x600  04 - 600x400  05 - Full page 
   * @member {String} acsWindowSize
   */
  exports.prototype['acsWindowSize'] = undefined;
  /**
   * Data that documents and supports a specific authentication process. 
   * @member {String} alternateAuthenticationData
   */
  exports.prototype['alternateAuthenticationData'] = undefined;
  /**
   * Date and time in UTC of the cardholder authentication. Format: YYYYMMDDHHMM 
   * @member {String} alternateAuthenticationDate
   */
  exports.prototype['alternateAuthenticationDate'] = undefined;
  /**
   * Mechanism used by the cardholder to authenticate to the 3D Secure requestor. Possible values: - `01`: No authentication occurred - `02`: Login using merchant system credentials - `03`: Login using Federated ID - `04`: Login using issuer credentials - `05`: Login using third-party authenticator - `06`: Login using FIDO Authenticator 
   * @member {String} alternateAuthenticationMethod
   */
  exports.prototype['alternateAuthenticationMethod'] = undefined;
  /**
   * The date/time of the authentication at the 3DS servers. RISK update authorization service in auth request payload with value returned in `consumerAuthenticationInformation.alternateAuthenticationData` if merchant calls via CYBS or field can be provided by merchant in authorization request if calling an external 3DS provider.  This field is supported for Cartes Bancaires Fast'R transactions on Credit Mutuel-CIC. Format: YYYYMMDDHHMMSS 
   * @member {String} authenticationDate
   */
  exports.prototype['authenticationDate'] = undefined;
  /**
   * Payer authentication transaction identifier passed to link the check enrollment and validate authentication messages.For Rupay,this is passed only in Re-Send OTP usecase. **Note**: Required for Standard integration, Rupay Seamless server to server integration for enroll service. Required for Hybrid integration for validate service. 
   * @member {String} authenticationTransactionId
   */
  exports.prototype['authenticationTransactionId'] = undefined;
  /**
   * An indicator as to why the transaction was canceled. Possible Values:  - `01`: Cardholder selected Cancel. - `02`: Reserved for future EMVCo use (values invalid until defined by EMVCo). - `03`: Transaction Timed Out—Decoupled Authentication - `04`: Transaction timed out at ACS—other timeouts - `05`: Transaction Timed out at ACS - First CReq not received by ACS - `06`: Transaction Error - `07`: Unknown - `08`: Transaction Timed Out at SDK 
   * @member {String} challengeCancelCode
   */
  exports.prototype['challengeCancelCode'] = undefined;
  /**
   * Possible values: - `01`: No preference - `02`: No challenge request - `03`: Challenge requested (3D Secure requestor preference) - `04`: Challenge requested (mandate) - `05`: No challenge requested (transactional risk analysis is already performed) - `06`: No challenge requested (Data share only) - `07`: No challenge requested (strong consumer authentication is already performed) - `08`: No challenge requested (utilize whitelist exemption if no challenge required) - `09`: Challenge requested (whitelist prompt requested if challenge required) **Note** This field will default to `01` on merchant configuration and can be overridden by the merchant. EMV 3D Secure version 2.1.0 supports values `01-04`. Version 2.2.0 supports values `01-09`.  For details, see `pa_challenge_code` field description in [CyberSource Payer Authentication Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Payer_Authentication_SCMP_API/html) 
   * @member {String} challengeCode
   */
  exports.prototype['challengeCode'] = undefined;
  /**
   * The `consumerAuthenticationInformation.challengeCode` indicates the authentication type/level, or challenge, that was presented to the cardholder at checkout by the merchant when calling the Carte Bancaire 3DS servers via CYBS RISK services. It conveys to the issuer the alternative authentication methods that the consumer used. 
   * @member {String} challengeStatus
   */
  exports.prototype['challengeStatus'] = undefined;
  /**
   * An alias that uniquely identifies the customer's account and credit card on file. Note This field is required if Tokenization is enabled in the merchant profile settings. 
   * @member {String} customerCardAlias
   */
  exports.prototype['customerCardAlias'] = undefined;
  /**
   * Indicates whether the 3DS Requestor requests the ACS to utilize Decoupled Authentication and agrees to utilize Decoupled Authentication if the ACS confirms its use.  Possible Values:  Y - Decoupled Authentication is supported and preferred if challenge is necessary  N - Do not use Decoupled Authentication  **Default Value**: N 
   * @member {String} decoupledAuthenticationIndicator
   */
  exports.prototype['decoupledAuthenticationIndicator'] = undefined;
  /**
   * Indicates the maximum amount of time that the 3DS Requestor will wait for an ACS (Active control server) to provide the results of a Decoupled Authentication transaction (in minutes). Possible Values: Numeric values between 1 and 10080 accepted. 
   * @member {String} decoupledAuthenticationMaxTime
   */
  exports.prototype['decoupledAuthenticationMaxTime'] = undefined;
  /**
   * Indicates that the card being used is the one designated as the primary payment card for purchase. Recommended for Discover ProtectBuy. 
   * @member {Boolean} defaultCard
   */
  exports.prototype['defaultCard'] = undefined;
  /**
   * Determines the channel that the transaction came through. Possible Values: SDK/Browser/3RI. 3RI - 3DS request initiated. 
   * @member {String} deviceChannel
   */
  exports.prototype['deviceChannel'] = undefined;
  /**
   * An integer value greater than 1 indicating the max number of permitted authorizations for installment payments. **Note** This is required if the merchant and cardholder have agreed to installment payments. 
   * @member {Number} installmentTotalCount
   */
  exports.prototype['installmentTotalCount'] = undefined;
  /**
   * Calculated by merchants as per PSD2** RTS** (EEA** card fraud divided by all EEA card volumes). Possible Values: 1 = Represents fraud rate <=1  2 = Represents fraud rate >1 and <=6  3 = Represents fraud rate >6 and <=13  4 = Represents fraud rate >13 and <=25  5 = Represents fraud rate >25  EEA** = European Economic Area RTS** = Regulatory Technical Standards PSD2** = Payment Services Directive 
   * @member {String} merchantFraudRate
   */
  exports.prototype['merchantFraudRate'] = undefined;
  /**
   * Indicates whether the customer has opted in for marketing offers. Recommended for Discover ProtectBuy. 
   * @member {Boolean} marketingOptIn
   */
  exports.prototype['marketingOptIn'] = undefined;
  /**
   * Indicates origin of the marketing offer. Recommended for Discover ProtectBuy. 
   * @member {String} marketingSource
   */
  exports.prototype['marketingSource'] = undefined;
  /**
   * Merchant category code. **Important** Required only for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions. 
   * @member {String} mcc
   */
  exports.prototype['mcc'] = undefined;
  /**
   * Risk Score provided by merchants. This is specific for CB transactions. 
   * @member {Number} merchantScore
   */
  exports.prototype['merchantScore'] = undefined;
  /**
   * Category of the message for a specific use case. Possible values:  - `01`: PA- payment authentication - `02`: NPA- non-payment authentication - `03-79`: Reserved for EMVCo future use (values invalid until defined by EMVCo) - `80-99`: Reserved for DS use 
   * @member {String} messageCategory
   */
  exports.prototype['messageCategory'] = undefined;
  /**
   * The global score calculated by the CB scoring platform and returned to merchants.  Possible values:  - '00' - '99'  When you request the payer authentication and authorization services separately, get the value for this field from the pa_network_score reply field.         This field is supported only for Cartes Bancaires Fast'R transactions on Credit Mutuel-CIC. 
   * @member {String} networkScore
   */
  exports.prototype['networkScore'] = undefined;
  /**
   * Non-Payer Authentication Indicator. Possible values: - `01`: Add card - `02`: Maintain card information - `03`: Cardholder verification for EMV token - `04-80` Reserved for EMVCo - `80-90` Reserved DS 
   * @member {String} npaCode
   */
  exports.prototype['npaCode'] = undefined;
  /**
   * Specifies the Brazilian payment account type used for the transaction. This field overrides other payment types that might be specified in the request. Use one of the following values for this field: - `NA`: Not applicable. Do not override other payment types that are specified in the request. - `CR`: Credit card. - `DB`: Debit card. - `VSAVR`: Visa Vale Refeicao - `VSAVA`: Visa Vale Alimentacao **Important** Required only for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions. 
   * @member {String} overridePaymentMethod
   */
  exports.prototype['overridePaymentMethod'] = undefined;
  /**
   * Two-character [ISO Standard Country Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).. 
   * @member {String} overrideCountryCode
   */
  exports.prototype['overrideCountryCode'] = undefined;
  /**
   * This field carry data that the ACS can use to verify the authentication process. 
   * @member {String} priorAuthenticationData
   */
  exports.prototype['priorAuthenticationData'] = undefined;
  /**
   * Mechanism used by the Cardholder to previously authenticate to the 3DS Requestor.  01 - Frictionless authentication occurred by ACS  02 - Cardholder challenge occurred by ACS  03 - AVS verified  04 - Other issuer methods  05-79 - Reserved for EMVCo future use (values invalid until defined by EMVCo)  80-99 - Reserved for DS use 
   * @member {String} priorAuthenticationMethod
   */
  exports.prototype['priorAuthenticationMethod'] = undefined;
  /**
   * This data element contains a ACS Transaction ID for a prior authenticated transaction. For example, the first recurring transaction that was authenticated with the cardholder 
   * @member {String} priorAuthenticationReferenceId
   */
  exports.prototype['priorAuthenticationReferenceId'] = undefined;
  /**
   * Date and time in UTC of the prior cardholder authentication. Format – YYYYMMDDHHMM 
   * @member {String} priorAuthenticationTime
   */
  exports.prototype['priorAuthenticationTime'] = undefined;
  /**
   * Specifies the product code, which designates the type of transaction. Specify one of the following values for this field: - AIR: Airline purchase Important Required for American Express SafeKey (U.S.). - `ACC`: Accommodation Rental - `ACF`: Account funding - `CHA`: Check acceptance - `DIG`: Digital Goods - `DSP`: Cash Dispensing - `GAS`: Fuel - `GEN`: General Retail - `LUX`: Luxury Retail - `PAL`: Prepaid activation and load - `PHY`: Goods or services purchase - `QCT`: Quasi-cash transaction - `REN`: Car Rental - `RES`: Restaurant - `SVC`: Services - `TBD`: Other - `TRA`: Travel **Important** Required for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions. 
   * @member {String} productCode
   */
  exports.prototype['productCode'] = undefined;
  /**
   * The URL of the merchant's return page. CyberSource adds this return URL to the step-up JWT and returns it in the response of the Payer Authentication enrollment call. The merchant's return URL page serves as a listening URL. Once the bank session completes, the merchant receives a POST to their URL. This response contains the completed bank session's transactionId. The merchant's return page should capture the transaction ID and send it in the Payer Authentication validation call. 
   * @member {String} returnUrl
   */
  exports.prototype['returnUrl'] = undefined;
  /**
   * Cardinal's directory server assigned 3DS Requestor ID value
   * @member {String} requestorId
   */
  exports.prototype['requestorId'] = undefined;
  /**
   * Indicates the type of 3RI request.  Possible Values:  01 - Recurring transaction  02 - Installment transaction  03 - Add card  04 - Maintain card  05 - Account verification  06 - Split/delayed shipment  07 - Top-up  08 - Mail Order  09 - Telephone Order  10 - Whitelist status check  11 - Other payment 
   * @member {String} requestorInitiatedAuthenticationIndicator
   */
  exports.prototype['requestorInitiatedAuthenticationIndicator'] = undefined;
  /**
   * Cardinal's directory server assigned 3DS Requestor Name value
   * @member {String} requestorName
   */
  exports.prototype['requestorName'] = undefined;
  /**
   * Reference ID that corresponds to the device fingerprinting data that was collected previously. Note Required for Hybrid integration. 
   * @member {String} referenceId
   */
  exports.prototype['referenceId'] = undefined;
  /**
   * This field indicates the maximum amount of time for all 3DS 2.0 messages to be communicated between all components (in minutes).  Possible Values:  Greater than or equal to 05 (05 is the minimum timeout to set)  Cardinal Default is set to 15  NOTE: This field is a required 3DS 2.0 field and Cardinal sends in a default of 15 if nothing is passed 
   * @member {String} sdkMaxTimeout
   */
  exports.prototype['sdkMaxTimeout'] = undefined;
  /**
   * Indicates dedicated payment processes and procedures were used, potential secure corporate payment exemption applies. Possible Values : 0/1 
   * @member {String} secureCorporatePaymentIndicator
   */
  exports.prototype['secureCorporatePaymentIndicator'] = undefined;
  /**
   * Transaction mode identifier. Identifies the channel from which the transaction originates. Possible values:  - `M`: MOTO (Mail Order Telephone Order) - `R`: Retail - `S`: eCommerce - `P`: Mobile Device - `T`: Tablet 
   * @member {String} transactionMode
   */
  exports.prototype['transactionMode'] = undefined;
  /**
   * Enables the communication of trusted beneficiary/whitelist status between the ACS, the DS and the 3DS Requestor.  Possible Values:  Y - 3DS Requestor is whitelisted by cardholder  N - 3DS Requestor is not whitelisted by cardholder 
   * @member {String} whiteListStatus
   */
  exports.prototype['whiteListStatus'] = undefined;
  /**
   * This field describes the type of 3DS transaction flow that took place.  It can be one of three possible flows; CH - Challenge FR - Frictionless FD - Frictionless with delegation, (challenge not generated by the issuer but by the scheme on behalf of the issuer). 
   * @member {String} effectiveAuthenticationType
   */
  exports.prototype['effectiveAuthenticationType'] = undefined;
  /**
   * Provides additional information as to why the PAResStatus has a specific value. 
   * @member {String} signedParesStatusReason
   */
  exports.prototype['signedParesStatusReason'] = undefined;
  /**
   * Payer authentication result (PARes) message returned by the card-issuing bank. If you need to show proof of enrollment checking, you may need to decrypt and parse the string for the information required by the payment card company. For more information, see \"Storing Payer Authentication Data,\" page 160. Important The value is in base64. You must remove all carriage returns and line feeds before adding the PARes to the request. 
   * @member {String} signedPares
   */
  exports.prototype['signedPares'] = undefined;



  return exports;
}));


