/**
 * OAuth2 API
 * OAuth2 Token Service (OAuth2)
 *
 * OpenAPI spec version: v3
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
    root.CyberSource.ResourceNotFoundError = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResourceNotFoundError model module.
   * @module model/ResourceNotFoundError
   * @version v3
   */

  /**
   * Constructs a new <code>ResourceNotFoundError</code>.
   * @alias module:model/ResourceNotFoundError
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ResourceNotFoundError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceNotFoundError} obj Optional instance to populate.
   * @return {module:model/ResourceNotFoundError} The populated <code>ResourceNotFoundError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('error_description')) {
        obj['error_description'] = ApiClient.convertToType(data['error_description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {String} error_description
   */
  exports.prototype['error_description'] = undefined;



  return exports;
}));


