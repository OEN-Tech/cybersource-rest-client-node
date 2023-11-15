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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact', function() {
    it('should create an instance of Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact', function() {
      // uncomment below and update the code to test Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact
      //var instane = new CyberSource.Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact();
      //expect(instance).to.be.a(CyberSource.Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact);
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new CyberSource.Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact();
      //expect(instance).to.be();
    });

    it('should have the property middleName (base name: "middleName")', function() {
      // uncomment below and update the code to test the property middleName
      //var instane = new CyberSource.Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new CyberSource.Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instane = new CyberSource.Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new CyberSource.Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact();
      //expect(instance).to.be();
    });

  });

}));
