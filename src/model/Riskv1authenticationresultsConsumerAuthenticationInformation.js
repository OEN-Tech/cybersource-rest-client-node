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
    root.CyberSource.Riskv1authenticationresultsConsumerAuthenticationInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1authenticationresultsConsumerAuthenticationInformation model module.
   * @module model/Riskv1authenticationresultsConsumerAuthenticationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationresultsConsumerAuthenticationInformation</code>.
   * @alias module:model/Riskv1authenticationresultsConsumerAuthenticationInformation
   * @class
   * @param signedPares {String} Payer authentication result (PARes) message returned by the card-issuing bank. If you need to show proof of enrollment checking, you may need to decrypt and parse the string for the information required by the payment card company. For more information, see \"Storing Payer Authentication Data,\" page 160. Important The value is in base64. You must remove all carriage returns and line feeds before adding the PARes to the request. 
   */
  var exports = function(signedPares) {
    var _this = this;





    _this['signedPares'] = signedPares;

  };

  /**
   * Constructs a <code>Riskv1authenticationresultsConsumerAuthenticationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationresultsConsumerAuthenticationInformation} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationresultsConsumerAuthenticationInformation} The populated <code>Riskv1authenticationresultsConsumerAuthenticationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authenticationTransactionId')) {
        obj['authenticationTransactionId'] = ApiClient.convertToType(data['authenticationTransactionId'], 'String');
      }
      if (data.hasOwnProperty('authenticationType')) {
        obj['authenticationType'] = ApiClient.convertToType(data['authenticationType'], 'String');
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
      if (data.hasOwnProperty('whiteListStatus')) {
        obj['whiteListStatus'] = ApiClient.convertToType(data['whiteListStatus'], 'String');
      }
    }
    return obj;
  }

  /**
   * Payer authentication transaction identifier passed to link the check enrollment and validate authentication messages. **Note**: Required for Standard integration for enroll service. Required for Hybrid integration for validate service. 
   * @member {String} authenticationTransactionId
   */
  exports.prototype['authenticationTransactionId'] = undefined;
  /**
   * Indicates the type of authentication that will be used to challenge the card holder.  Possible Values:  01 - Static  02 - Dynamic  03 - OOB (Out of Band)  04 - Decoupled **NOTE**:  EMV 3-D Secure version 2.1.0 supports values 01-03.  Version 2.2.0 supports values 01-04.  Decoupled authentication is not supported at this time. 
   * @member {String} authenticationType
   */
  exports.prototype['authenticationType'] = undefined;
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
  /**
   * Enables the communication of trusted beneficiary/whitelist status between the ACS, the DS and the 3DS Requestor.  Possible Values:  Y - 3DS Requestor is whitelisted by cardholder  N - 3DS Requestor is not whitelisted by cardholder 
   * @member {String} whiteListStatus
   */
  exports.prototype['whiteListStatus'] = undefined;



  return exports;
}));


