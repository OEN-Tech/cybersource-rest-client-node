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
    define(['ApiClient', 'model/CreateWebhook', 'model/InlineResponse2003', 'model/InlineResponse2012', 'model/InlineResponse2013', 'model/SaveSymEgressKey'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateWebhook'), require('../model/InlineResponse2003'), require('../model/InlineResponse2012'), require('../model/InlineResponse2013'), require('../model/SaveSymEgressKey'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CreateNewWebhooksApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreateWebhook, root.CyberSource.InlineResponse2003, root.CyberSource.InlineResponse2012, root.CyberSource.InlineResponse2013, root.CyberSource.SaveSymEgressKey);
  }
}(this, function(ApiClient, CreateWebhook, InlineResponse2003, InlineResponse2012, InlineResponse2013, SaveSymEgressKey) {
  'use strict';

  /**
   * CreateNewWebhooks service.
   * @module api/CreateNewWebhooksApi
   * @version 0.0.1
   */

  /**
   * Constructs a new CreateNewWebhooksApi. 
   * @alias module:api/CreateNewWebhooksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the createWebhook operation.
     * @callback module:api/CreateNewWebhooksApi~createWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2013} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Webhook
     * Create a new webhook subscription. Before creating a webhook, ensure that a security key has been created at the top of this developer center section. You will not need to pass us back the key during the creation of the webhook, but you will receive an error if you did not already create a key or store one on file. 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWebhook} opts.createWebhook The webhook payload
     * @param {module:api/CreateNewWebhooksApi~createWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2013}
     * 
     * DISCLAIMER: Cybersource may allow Customer to access, use, and/or test a Cybersource product or service that may still be in development or has not been market-tested (“Beta Product”) solely for the purpose of evaluating the functionality or marketability of the Beta Product (a “Beta Evaluation”). Notwithstanding any language to the contrary, the following terms shall apply with respect to Customer’s participation in any Beta Evaluation (and the Beta Product(s)) accessed thereunder): The Parties will enter into a separate form agreement detailing the scope of the Beta Evaluation, requirements, pricing, the length of the beta evaluation period (“Beta Product Form”). Beta Products are not, and may not become, Transaction Services and have not yet been publicly released and are offered for the sole purpose of internal testing and non-commercial evaluation. Customer’s use of the Beta Product shall be solely for the purpose of conducting the Beta Evaluation. Customer accepts all risks arising out of the access and use of the Beta Products. Cybersource may, in its sole discretion, at any time, terminate or discontinue the Beta Evaluation. Customer acknowledges and agrees that any Beta Product may still be in development and that Beta Product is provided “AS IS” and may not perform at the level of a commercially available service, may not operate as expected and may be modified prior to release. CYBERSOURCE SHALL NOT BE RESPONSIBLE OR LIABLE UNDER ANY CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE RELATING TO A BETA PRODUCT OR THE BETA EVALUATION (A) FOR LOSS OR INACCURACY OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (B) ANY CLAIM, LOSSES, DAMAGES, OR CAUSE OF ACTION ARISING IN CONNECTION WITH THE BETA PRODUCT; OR (C) FOR ANY INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED TO, LOSS OF REVENUES AND LOSS OF PROFITS.
     */
    this.createWebhook = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['createWebhook'];

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/CreateWebhook', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2013;

      return this.apiClient.callApi(
        '/notification-subscriptions/v1/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findProductToSubscribe operation.
     * @callback module:api/CreateNewWebhooksApi~findProductToSubscribeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2003>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Products You Can Subscribe To
     * Retrieve a list of products and event types that your account is eligible for. These products and events are the ones that you may subscribe to in the next step of creating webhooks.
     * @param {String} organizationId The Organization Identifier.
     * @param {module:api/CreateNewWebhooksApi~findProductToSubscribeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2003>}
     * 
     * DISCLAIMER: Cybersource may allow Customer to access, use, and/or test a Cybersource product or service that may still be in development or has not been market-tested (“Beta Product”) solely for the purpose of evaluating the functionality or marketability of the Beta Product (a “Beta Evaluation”). Notwithstanding any language to the contrary, the following terms shall apply with respect to Customer’s participation in any Beta Evaluation (and the Beta Product(s)) accessed thereunder): The Parties will enter into a separate form agreement detailing the scope of the Beta Evaluation, requirements, pricing, the length of the beta evaluation period (“Beta Product Form”). Beta Products are not, and may not become, Transaction Services and have not yet been publicly released and are offered for the sole purpose of internal testing and non-commercial evaluation. Customer’s use of the Beta Product shall be solely for the purpose of conducting the Beta Evaluation. Customer accepts all risks arising out of the access and use of the Beta Products. Cybersource may, in its sole discretion, at any time, terminate or discontinue the Beta Evaluation. Customer acknowledges and agrees that any Beta Product may still be in development and that Beta Product is provided “AS IS” and may not perform at the level of a commercially available service, may not operate as expected and may be modified prior to release. CYBERSOURCE SHALL NOT BE RESPONSIBLE OR LIABLE UNDER ANY CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE RELATING TO A BETA PRODUCT OR THE BETA EVALUATION (A) FOR LOSS OR INACCURACY OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (B) ANY CLAIM, LOSSES, DAMAGES, OR CAUSE OF ACTION ARISING IN CONNECTION WITH THE BETA PRODUCT; OR (C) FOR ANY INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED TO, LOSS OF REVENUES AND LOSS OF PROFITS.
     */
    this.findProductToSubscribe = function(organizationId, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findProductToSubscribe");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = [InlineResponse2003];

      return this.apiClient.callApi(
        '/notification-subscriptions/v1/products/{organizationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveSymEgressKey operation.
     * @callback module:api/CreateNewWebhooksApi~saveSymEgressKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Webhook Security Keys
     * Create security keys that CyberSource will use internally to connect to your servers and validate messages using a digital signature.  Select the CREATE example for CyberSource to generate the key on our server and maintain it for you as well. Remeber to save the key in the API response, so that you can use it to validate messages later. 
     * @param {String} vCSenderOrganizationId Sender organization id
     * @param {String} vCPermissions Encoded user permissions returned by the CGK, for the entity user who initiated the boarding
     * @param {Object} opts Optional parameters
     * @param {String} opts.vCCorrelationId A globally unique id associated with your request
     * @param {module:model/SaveSymEgressKey} opts.saveSymEgressKey Provide egress Symmetric key information to save (create or store or refresh)
     * @param {module:api/CreateNewWebhooksApi~saveSymEgressKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2012}
     */
    this.saveSymEgressKey = function(vCSenderOrganizationId, vCPermissions, opts, callback) {
      opts = opts || {};
      var postBody = opts['saveSymEgressKey'];

      // verify the required parameter 'vCSenderOrganizationId' is set
      if (vCSenderOrganizationId === undefined || vCSenderOrganizationId === null) {
        throw new Error("Missing the required parameter 'vCSenderOrganizationId' when calling saveSymEgressKey");
      }

      // verify the required parameter 'vCPermissions' is set
      if (vCPermissions === undefined || vCPermissions === null) {
        throw new Error("Missing the required parameter 'vCPermissions' when calling saveSymEgressKey");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/SaveSymEgressKey', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'v-c-correlation-id': opts['vCCorrelationId'],
        'v-c-sender-organization-id': vCSenderOrganizationId,
        'v-c-permissions': vCPermissions
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2012;

      return this.apiClient.callApi(
        '/kms/egress/v2/keys-sym', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
