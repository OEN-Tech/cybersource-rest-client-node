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
    define(['ApiClient', 'model/Riskv1decisionsOrderInformationPassenger'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1decisionsOrderInformationPassenger'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1decisionsOrderInformationLineItems = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1decisionsOrderInformationPassenger);
  }
}(this, function(ApiClient, Riskv1decisionsOrderInformationPassenger) {
  'use strict';




  /**
   * The Riskv1decisionsOrderInformationLineItems model module.
   * @module model/Riskv1decisionsOrderInformationLineItems
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1decisionsOrderInformationLineItems</code>.
   * @alias module:model/Riskv1decisionsOrderInformationLineItems
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Riskv1decisionsOrderInformationLineItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1decisionsOrderInformationLineItems} obj Optional instance to populate.
   * @return {module:model/Riskv1decisionsOrderInformationLineItems} The populated <code>Riskv1decisionsOrderInformationLineItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('unitPrice')) {
        obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('productSKU')) {
        obj['productSKU'] = ApiClient.convertToType(data['productSKU'], 'String');
      }
      if (data.hasOwnProperty('productRisk')) {
        obj['productRisk'] = ApiClient.convertToType(data['productRisk'], 'String');
      }
      if (data.hasOwnProperty('productName')) {
        obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
      }
      if (data.hasOwnProperty('productCode')) {
        obj['productCode'] = ApiClient.convertToType(data['productCode'], 'String');
      }
      if (data.hasOwnProperty('gift')) {
        obj['gift'] = ApiClient.convertToType(data['gift'], 'Boolean');
      }
      if (data.hasOwnProperty('distributorProductSku')) {
        obj['distributorProductSku'] = ApiClient.convertToType(data['distributorProductSku'], 'String');
      }
      if (data.hasOwnProperty('passenger')) {
        obj['passenger'] = Riskv1decisionsOrderInformationPassenger.constructFromObject(data['passenger']);
      }
    }
    return obj;
  }

  /**
   * Per-item price of the product. This value cannot be negative. You can include a decimal point (.), but you cannot include any other special characters. CyberSource truncates the amount to the correct number of decimal places.  For processor-specific information, see the `amount` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  **Important** Some processors have specific requirements and limitations, such as maximum amounts and maximum field lengths. See these guides for details: - [Merchant Descriptors Using the SCMP API Guide] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/) - \"Capture Information for Specific Processors\" section in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### DCC with a Third-Party Provider Set this field to the converted amount that was returned by the DCC provider. You must include either the 1st line item in the order and this field, or the request-level field `orderInformation.amountDetails.totalAmount` in your request. For details, see \"Dynamic Currency Conversion with a Third Party Provider\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### FDMS South If you accept IDR or CLP currencies, see the entry for FDMS South in the [Merchant Descriptors Using the SCMP API Guide.] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/)  #### Zero Amount Authorizations If your processor supports zero amount authorizations, you can set this field to 0 for the authorization to check if the card is lost or stolen. See \"Zero Amount Authorizations\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} unitPrice
   */
  exports.prototype['unitPrice'] = undefined;
  /**
   * Number of units for this order.  The default is `1`. For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when _orderInformation.lineItems[].productCode_ is not set to **default** or one of the other values that are related to shipping and/or handling.  When orderInformation.lineItems[].productCode is \"gift_card\", this is the total count of individual prepaid gift cards purchased. 
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * Stock Keeping Unit (SKU) code for the product.  For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when _orderInformation.lineItems[].productCode_ is not set to **default** or one of the other values that are related to shipping and/or handling. 
   * @member {String} productSKU
   */
  exports.prototype['productSKU'] = undefined;
  /**
   * Indicates the level of risk for the product. This field can contain one of the following values: - `low`: The product is associated with few chargebacks. - `normal`: The product is associated with a normal number of chargebacks. - `high`: The product is associated with many chargebacks. 
   * @member {String} productRisk
   */
  exports.prototype['productRisk'] = undefined;
  /**
   * For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not set to `default` or one of the other values that are related to shipping and/or handling. 
   * @member {String} productName
   */
  exports.prototype['productName'] = undefined;
  /**
   * Type of product. This value is used to determine the category that the product is in: electronic, handling, physical, service, or shipping. The default value is **default**. If you are performing an authorization transaction (`processingOptions.capture` is set to `false`), and you set this field to a value other than default or any of the values related to shipping and handling, then the fields `quantity`, `productName`, and `productSku` are required. It can also have a value of \"gift_card\".  For details, see the `product_code` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} productCode
   */
  exports.prototype['productCode'] = undefined;
  /**
   * Determines whether to assign risk to the order if the billing and shipping addresses specify different cities, states, or countries. This field can contain one of the following values: - true: Orders are assigned only slight additional risk if billing and shipping addresses are different. - false: Orders are assigned higher additional risk if billing and shipping addresses are different. 
   * @member {Boolean} gift
   */
  exports.prototype['gift'] = undefined;
  /**
   * Product’s identifier code. This field is inserted into the outgoing message without being parsed or formatted. This field is included as Distributor product SKU (Offer) in the list of API fields with which you can create custom rules. 
   * @member {String} distributorProductSku
   */
  exports.prototype['distributorProductSku'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsOrderInformationPassenger} passenger
   */
  exports.prototype['passenger'] = undefined;



  return exports;
}));


