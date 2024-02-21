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
    define(['ApiClient', 'model/VTConfigCardNotPresent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VTConfigCardNotPresent'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.VTConfig = factory(root.CyberSource.ApiClient, root.CyberSource.VTConfigCardNotPresent);
  }
}(this, function(ApiClient, VTConfigCardNotPresent) {
  'use strict';




  /**
   * The VTConfig model module.
   * @module model/VTConfig
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>VTConfig</code>.
   * @alias module:model/VTConfig
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>VTConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VTConfig} obj Optional instance to populate.
   * @return {module:model/VTConfig} The populated <code>VTConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cardNotPresent')) {
        obj['cardNotPresent'] = VTConfigCardNotPresent.constructFromObject(data['cardNotPresent']);
      }
      if (data.hasOwnProperty('cardPresent')) {
        obj['cardPresent'] = VTConfigCardNotPresent.constructFromObject(data['cardPresent']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VTConfigCardNotPresent} cardNotPresent
   */
  exports.prototype['cardNotPresent'] = undefined;
  /**
   * @member {module:model/VTConfigCardNotPresent} cardPresent
   */
  exports.prototype['cardPresent'] = undefined;



  return exports;
}));


