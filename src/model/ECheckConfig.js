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
    define(['ApiClient', 'model/ECheckConfigCommon', 'model/ECheckConfigFeatures', 'model/ECheckConfigUnderwriting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ECheckConfigCommon'), require('./ECheckConfigFeatures'), require('./ECheckConfigUnderwriting'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ECheckConfig = factory(root.CyberSource.ApiClient, root.CyberSource.ECheckConfigCommon, root.CyberSource.ECheckConfigFeatures, root.CyberSource.ECheckConfigUnderwriting);
  }
}(this, function(ApiClient, ECheckConfigCommon, ECheckConfigFeatures, ECheckConfigUnderwriting) {
  'use strict';




  /**
   * The ECheckConfig model module.
   * @module model/ECheckConfig
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ECheckConfig</code>.
   * @alias module:model/ECheckConfig
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ECheckConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ECheckConfig} obj Optional instance to populate.
   * @return {module:model/ECheckConfig} The populated <code>ECheckConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('common')) {
        obj['common'] = ECheckConfigCommon.constructFromObject(data['common']);
      }
      if (data.hasOwnProperty('underwriting')) {
        obj['underwriting'] = ECheckConfigUnderwriting.constructFromObject(data['underwriting']);
      }
      if (data.hasOwnProperty('features')) {
        obj['features'] = ECheckConfigFeatures.constructFromObject(data['features']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ECheckConfigCommon} common
   */
  exports.prototype['common'] = undefined;
  /**
   * @member {module:model/ECheckConfigUnderwriting} underwriting
   */
  exports.prototype['underwriting'] = undefined;
  /**
   * @member {module:model/ECheckConfigFeatures} features
   */
  exports.prototype['features'] = undefined;



  return exports;
}));


