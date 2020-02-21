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
    define(['ApiClient', 'model/Ptsv2paymentsTravelInformationLodgingRoom'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsTravelInformationLodgingRoom'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsTravelInformationLodging = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsTravelInformationLodgingRoom);
  }
}(this, function(ApiClient, Ptsv2paymentsTravelInformationLodgingRoom) {
  'use strict';




  /**
   * The Ptsv2paymentsTravelInformationLodging model module.
   * @module model/Ptsv2paymentsTravelInformationLodging
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsTravelInformationLodging</code>.
   * @alias module:model/Ptsv2paymentsTravelInformationLodging
   * @class
   */
  var exports = function() {
    var _this = this;











































  };

  /**
   * Constructs a <code>Ptsv2paymentsTravelInformationLodging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsTravelInformationLodging} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsTravelInformationLodging} The populated <code>Ptsv2paymentsTravelInformationLodging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('checkInDate')) {
        obj['checkInDate'] = ApiClient.convertToType(data['checkInDate'], 'String');
      }
      if (data.hasOwnProperty('checkOutDate')) {
        obj['checkOutDate'] = ApiClient.convertToType(data['checkOutDate'], 'String');
      }
      if (data.hasOwnProperty('room')) {
        obj['room'] = ApiClient.convertToType(data['room'], [Ptsv2paymentsTravelInformationLodgingRoom]);
      }
      if (data.hasOwnProperty('smokingPreference')) {
        obj['smokingPreference'] = ApiClient.convertToType(data['smokingPreference'], 'String');
      }
      if (data.hasOwnProperty('numberOfRooms')) {
        obj['numberOfRooms'] = ApiClient.convertToType(data['numberOfRooms'], 'Number');
      }
      if (data.hasOwnProperty('numberOfGuests')) {
        obj['numberOfGuests'] = ApiClient.convertToType(data['numberOfGuests'], 'Number');
      }
      if (data.hasOwnProperty('roomBedType')) {
        obj['roomBedType'] = ApiClient.convertToType(data['roomBedType'], 'String');
      }
      if (data.hasOwnProperty('roomTaxType')) {
        obj['roomTaxType'] = ApiClient.convertToType(data['roomTaxType'], 'String');
      }
      if (data.hasOwnProperty('roomRateType')) {
        obj['roomRateType'] = ApiClient.convertToType(data['roomRateType'], 'String');
      }
      if (data.hasOwnProperty('guestName')) {
        obj['guestName'] = ApiClient.convertToType(data['guestName'], 'String');
      }
      if (data.hasOwnProperty('customerServicePhoneNumber')) {
        obj['customerServicePhoneNumber'] = ApiClient.convertToType(data['customerServicePhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('corporateClientCode')) {
        obj['corporateClientCode'] = ApiClient.convertToType(data['corporateClientCode'], 'String');
      }
      if (data.hasOwnProperty('additionalDiscountAmount')) {
        obj['additionalDiscountAmount'] = ApiClient.convertToType(data['additionalDiscountAmount'], 'String');
      }
      if (data.hasOwnProperty('roomLocation')) {
        obj['roomLocation'] = ApiClient.convertToType(data['roomLocation'], 'String');
      }
      if (data.hasOwnProperty('specialProgramCode')) {
        obj['specialProgramCode'] = ApiClient.convertToType(data['specialProgramCode'], 'String');
      }
      if (data.hasOwnProperty('totalTaxAmount')) {
        obj['totalTaxAmount'] = ApiClient.convertToType(data['totalTaxAmount'], 'String');
      }
      if (data.hasOwnProperty('prepaidCost')) {
        obj['prepaidCost'] = ApiClient.convertToType(data['prepaidCost'], 'String');
      }
      if (data.hasOwnProperty('foodAndBeverageCost')) {
        obj['foodAndBeverageCost'] = ApiClient.convertToType(data['foodAndBeverageCost'], 'String');
      }
      if (data.hasOwnProperty('roomTaxAmount')) {
        obj['roomTaxAmount'] = ApiClient.convertToType(data['roomTaxAmount'], 'String');
      }
      if (data.hasOwnProperty('adjustmentAmount')) {
        obj['adjustmentAmount'] = ApiClient.convertToType(data['adjustmentAmount'], 'String');
      }
      if (data.hasOwnProperty('phoneCost')) {
        obj['phoneCost'] = ApiClient.convertToType(data['phoneCost'], 'String');
      }
      if (data.hasOwnProperty('restaurantCost')) {
        obj['restaurantCost'] = ApiClient.convertToType(data['restaurantCost'], 'String');
      }
      if (data.hasOwnProperty('roomServiceCost')) {
        obj['roomServiceCost'] = ApiClient.convertToType(data['roomServiceCost'], 'String');
      }
      if (data.hasOwnProperty('miniBarCost')) {
        obj['miniBarCost'] = ApiClient.convertToType(data['miniBarCost'], 'String');
      }
      if (data.hasOwnProperty('laundryCost')) {
        obj['laundryCost'] = ApiClient.convertToType(data['laundryCost'], 'String');
      }
      if (data.hasOwnProperty('miscellaneousCost')) {
        obj['miscellaneousCost'] = ApiClient.convertToType(data['miscellaneousCost'], 'String');
      }
      if (data.hasOwnProperty('giftShopCost')) {
        obj['giftShopCost'] = ApiClient.convertToType(data['giftShopCost'], 'String');
      }
      if (data.hasOwnProperty('movieCost')) {
        obj['movieCost'] = ApiClient.convertToType(data['movieCost'], 'String');
      }
      if (data.hasOwnProperty('healthClubCost')) {
        obj['healthClubCost'] = ApiClient.convertToType(data['healthClubCost'], 'String');
      }
      if (data.hasOwnProperty('valetParkingCost')) {
        obj['valetParkingCost'] = ApiClient.convertToType(data['valetParkingCost'], 'String');
      }
      if (data.hasOwnProperty('cashDisbursementCost')) {
        obj['cashDisbursementCost'] = ApiClient.convertToType(data['cashDisbursementCost'], 'String');
      }
      if (data.hasOwnProperty('nonRoomCost')) {
        obj['nonRoomCost'] = ApiClient.convertToType(data['nonRoomCost'], 'String');
      }
      if (data.hasOwnProperty('businessCenterCost')) {
        obj['businessCenterCost'] = ApiClient.convertToType(data['businessCenterCost'], 'String');
      }
      if (data.hasOwnProperty('loungeBarCost')) {
        obj['loungeBarCost'] = ApiClient.convertToType(data['loungeBarCost'], 'String');
      }
      if (data.hasOwnProperty('transportationCost')) {
        obj['transportationCost'] = ApiClient.convertToType(data['transportationCost'], 'String');
      }
      if (data.hasOwnProperty('gratuityAmount')) {
        obj['gratuityAmount'] = ApiClient.convertToType(data['gratuityAmount'], 'String');
      }
      if (data.hasOwnProperty('conferenceRoomCost')) {
        obj['conferenceRoomCost'] = ApiClient.convertToType(data['conferenceRoomCost'], 'String');
      }
      if (data.hasOwnProperty('audioVisualCost')) {
        obj['audioVisualCost'] = ApiClient.convertToType(data['audioVisualCost'], 'String');
      }
      if (data.hasOwnProperty('banquestCost')) {
        obj['banquestCost'] = ApiClient.convertToType(data['banquestCost'], 'String');
      }
      if (data.hasOwnProperty('nonRoomTaxAmount')) {
        obj['nonRoomTaxAmount'] = ApiClient.convertToType(data['nonRoomTaxAmount'], 'String');
      }
      if (data.hasOwnProperty('earlyCheckOutCost')) {
        obj['earlyCheckOutCost'] = ApiClient.convertToType(data['earlyCheckOutCost'], 'String');
      }
      if (data.hasOwnProperty('internetAccessCost')) {
        obj['internetAccessCost'] = ApiClient.convertToType(data['internetAccessCost'], 'String');
      }
    }
    return obj;
  }

  /**
   * Date on which the guest checked in. In the case of a no-show or a reservation, the scheduled arrival date. Format: MMDDYY. For best interchange rates, make sure it is a valid date. 
   * @member {String} checkInDate
   */
  exports.prototype['checkInDate'] = undefined;
  /**
   * Date on which the guest checked out. Format: MMDDYY. For best interchange rates, make sure it is a valid date. 
   * @member {String} checkOutDate
   */
  exports.prototype['checkOutDate'] = undefined;
  /**
   * The object containing the number of nights and the daily rate that applies for that no of nights. 
   * @member {Array.<module:model/Ptsv2paymentsTravelInformationLodgingRoom>} room
   */
  exports.prototype['room'] = undefined;
  /**
   * Smoking preference of the guest. Possible values: - `Y`: smoking room - `N`: non-smoking room 
   * @member {String} smokingPreference
   */
  exports.prototype['smokingPreference'] = undefined;
  /**
   * Number of rooms booked by the cardholder. 
   * @member {Number} numberOfRooms
   */
  exports.prototype['numberOfRooms'] = undefined;
  /**
   * Number of guests staying in the room. 
   * @member {Number} numberOfGuests
   */
  exports.prototype['numberOfGuests'] = undefined;
  /**
   * Type of room, such as queen, king, or two doubles. 
   * @member {String} roomBedType
   */
  exports.prototype['roomBedType'] = undefined;
  /**
   * Type of tax, such as tourist or hotel. 
   * @member {String} roomTaxType
   */
  exports.prototype['roomTaxType'] = undefined;
  /**
   * Type of rate, such as corporate or senior citizen. 
   * @member {String} roomRateType
   */
  exports.prototype['roomRateType'] = undefined;
  /**
   * Name of the guest under which the room is reserved. 
   * @member {String} guestName
   */
  exports.prototype['guestName'] = undefined;
  /**
   * Your toll-free customer service phone number. 
   * @member {String} customerServicePhoneNumber
   */
  exports.prototype['customerServicePhoneNumber'] = undefined;
  /**
   * Code assigned to a business. You can use this code to identify corporate rates and discounts for guests. 
   * @member {String} corporateClientCode
   */
  exports.prototype['corporateClientCode'] = undefined;
  /**
   * Amount of an additional coupon or discount. 
   * @member {String} additionalDiscountAmount
   */
  exports.prototype['additionalDiscountAmount'] = undefined;
  /**
   * Location of room, such as lake view or ocean view. 
   * @member {String} roomLocation
   */
  exports.prototype['roomLocation'] = undefined;
  /**
   * Code that identifies special circumstances. Possible values: - `1`: lodging (default) - `2`: no show reservation - `3`: advanced deposit 
   * @member {String} specialProgramCode
   */
  exports.prototype['specialProgramCode'] = undefined;
  /**
   * Total tax amount. 
   * @member {String} totalTaxAmount
   */
  exports.prototype['totalTaxAmount'] = undefined;
  /**
   * Prepaid amount, such as a deposit. 
   * @member {String} prepaidCost
   */
  exports.prototype['prepaidCost'] = undefined;
  /**
   * Cost for all food and beverages. 
   * @member {String} foodAndBeverageCost
   */
  exports.prototype['foodAndBeverageCost'] = undefined;
  /**
   * Total tax for the room. 
   * @member {String} roomTaxAmount
   */
  exports.prototype['roomTaxAmount'] = undefined;
  /**
   * Adjusted amount charged in addition to the reservation amount after the stay is complete. 
   * @member {String} adjustmentAmount
   */
  exports.prototype['adjustmentAmount'] = undefined;
  /**
   * Cost of telephone services. 
   * @member {String} phoneCost
   */
  exports.prototype['phoneCost'] = undefined;
  /**
   * Cost of restaurant purchases 
   * @member {String} restaurantCost
   */
  exports.prototype['restaurantCost'] = undefined;
  /**
   * Cost of room service. 
   * @member {String} roomServiceCost
   */
  exports.prototype['roomServiceCost'] = undefined;
  /**
   * Cost of mini-bar purchases. 
   * @member {String} miniBarCost
   */
  exports.prototype['miniBarCost'] = undefined;
  /**
   * Cost of laundry services. 
   * @member {String} laundryCost
   */
  exports.prototype['laundryCost'] = undefined;
  /**
   * Miscellaneous costs. 
   * @member {String} miscellaneousCost
   */
  exports.prototype['miscellaneousCost'] = undefined;
  /**
   * Cost of gift shop purchases. 
   * @member {String} giftShopCost
   */
  exports.prototype['giftShopCost'] = undefined;
  /**
   * Cost of movies. 
   * @member {String} movieCost
   */
  exports.prototype['movieCost'] = undefined;
  /**
   * Cost of health club services. 
   * @member {String} healthClubCost
   */
  exports.prototype['healthClubCost'] = undefined;
  /**
   * Cost of valet parking services. 
   * @member {String} valetParkingCost
   */
  exports.prototype['valetParkingCost'] = undefined;
  /**
   * Cost of the cash that was disbursed plus any associated service fees 
   * @member {String} cashDisbursementCost
   */
  exports.prototype['cashDisbursementCost'] = undefined;
  /**
   * Cost of non-room purchases, such as meals and gifts. 
   * @member {String} nonRoomCost
   */
  exports.prototype['nonRoomCost'] = undefined;
  /**
   * Cost of business center services. 
   * @member {String} businessCenterCost
   */
  exports.prototype['businessCenterCost'] = undefined;
  /**
   * Cost of lounge and bar purchases. 
   * @member {String} loungeBarCost
   */
  exports.prototype['loungeBarCost'] = undefined;
  /**
   * Cost of transportation services. 
   * @member {String} transportationCost
   */
  exports.prototype['transportationCost'] = undefined;
  /**
   * Gratuity. 
   * @member {String} gratuityAmount
   */
  exports.prototype['gratuityAmount'] = undefined;
  /**
   * Cost of conference room services. 
   * @member {String} conferenceRoomCost
   */
  exports.prototype['conferenceRoomCost'] = undefined;
  /**
   * Cost of audio visual services. 
   * @member {String} audioVisualCost
   */
  exports.prototype['audioVisualCost'] = undefined;
  /**
   * Cost of banquet services. 
   * @member {String} banquestCost
   */
  exports.prototype['banquestCost'] = undefined;
  /**
   * Tax on non-room purchases. 
   * @member {String} nonRoomTaxAmount
   */
  exports.prototype['nonRoomTaxAmount'] = undefined;
  /**
   * Service fee for early departure. 
   * @member {String} earlyCheckOutCost
   */
  exports.prototype['earlyCheckOutCost'] = undefined;
  /**
   * Cost of Internet access. 
   * @member {String} internetAccessCost
   */
  exports.prototype['internetAccessCost'] = undefined;



  return exports;
}));


