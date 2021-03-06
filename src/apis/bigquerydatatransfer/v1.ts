/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace bigquerydatatransfer_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * BigQuery Data Transfer API
   *
   * Schedule queries or transfer external data from SaaS applications to Google BigQuery on a regular basis.
   *
   * @example
   * const {google} = require('googleapis');
   * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
   *
   * @namespace bigquerydatatransfer
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Bigquerydatatransfer
   */
  export class Bigquerydatatransfer {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * A request to determine whether the user has valid credentials. This method is used to limit the number of OAuth popups in the user interface. The user id is inferred from the API call context. If the data source has the Google+ authorization type, this method returns false, as it cannot be determined whether the credentials are already valid merely based on the user id.
   */
  export interface Schema$CheckValidCredsRequest {}
  /**
   * A response indicating whether the credentials exist and are valid.
   */
  export interface Schema$CheckValidCredsResponse {
    /**
     * If set to `true`, the credentials exist and are valid.
     */
    hasValidCreds?: boolean;
  }
  /**
   * Represents data source metadata. Metadata is sufficient to render UI and request proper OAuth tokens.
   */
  export interface Schema$DataSource {
    /**
     * Indicates the type of authorization.
     */
    authorizationType?: string;
    /**
     * Data source client id which should be used to receive refresh token.
     */
    clientId?: string;
    /**
     * Specifies whether the data source supports automatic data refresh for the past few days, and how it&#39;s supported. For some data sources, data might not be complete until a few days later, so it&#39;s useful to refresh data automatically.
     */
    dataRefreshType?: string;
    /**
     * Data source id.
     */
    dataSourceId?: string;
    /**
     * Default data refresh window on days. Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.
     */
    defaultDataRefreshWindowDays?: number;
    /**
     * Default data transfer schedule. Examples of valid schedules include: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`.
     */
    defaultSchedule?: string;
    /**
     * User friendly data source description string.
     */
    description?: string;
    /**
     * User friendly data source name.
     */
    displayName?: string;
    /**
     * Url for the help document for this data source.
     */
    helpUrl?: string;
    /**
     * Disables backfilling and manual run scheduling for the data source.
     */
    manualRunsDisabled?: boolean;
    /**
     * The minimum interval for scheduler to schedule runs.
     */
    minimumScheduleInterval?: string;
    /**
     * Output only. Data source resource name.
     */
    name?: string;
    /**
     * Data source parameters.
     */
    parameters?: Schema$DataSourceParameter[];
    /**
     * Api auth scopes for which refresh token needs to be obtained. These are scopes needed by a data source to prepare data and ingest them into BigQuery, e.g., https://www.googleapis.com/auth/bigquery
     */
    scopes?: string[];
    /**
     * Specifies whether the data source supports a user defined schedule, or operates on the default schedule. When set to `true`, user can override default schedule.
     */
    supportsCustomSchedule?: boolean;
    /**
     * Deprecated. This field has no effect.
     */
    supportsMultipleTransfers?: boolean;
    /**
     * Deprecated. This field has no effect.
     */
    transferType?: string;
    /**
     * The number of seconds to wait for an update from the data source before the Data Transfer Service marks the transfer as FAILED.
     */
    updateDeadlineSeconds?: number;
  }
  /**
   * Represents a data source parameter with validation rules, so that parameters can be rendered in the UI. These parameters are given to us by supported data sources, and include all needed information for rendering and validation. Thus, whoever uses this api can decide to generate either generic ui, or custom data source specific forms.
   */
  export interface Schema$DataSourceParameter {
    /**
     * All possible values for the parameter.
     */
    allowedValues?: string[];
    /**
     * Parameter description.
     */
    description?: string;
    /**
     * Parameter display name in the user interface.
     */
    displayName?: string;
    /**
     * Deprecated. This field has no effect.
     */
    fields?: Schema$DataSourceParameter[];
    /**
     * Cannot be changed after initial creation.
     */
    immutable?: boolean;
    /**
     * For integer and double values specifies maxminum allowed value.
     */
    maxValue?: number;
    /**
     * For integer and double values specifies minimum allowed value.
     */
    minValue?: number;
    /**
     * Parameter identifier.
     */
    paramId?: string;
    /**
     * Deprecated. This field has no effect.
     */
    recurse?: boolean;
    /**
     * Deprecated. This field has no effect.
     */
    repeated?: boolean;
    /**
     * Is parameter required.
     */
    required?: boolean;
    /**
     * Parameter type.
     */
    type?: string;
    /**
     * Description of the requirements for this field, in case the user input does not fulfill the regex pattern or min/max values.
     */
    validationDescription?: string;
    /**
     * URL to a help document to further explain the naming requirements.
     */
    validationHelpUrl?: string;
    /**
     * Regular expression which can be used for parameter validation.
     */
    validationRegex?: string;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Returns list of supported data sources and their metadata.
   */
  export interface Schema$ListDataSourcesResponse {
    /**
     * List of supported data sources and their transfer settings.
     */
    dataSources?: Schema$DataSource[];
    /**
     * Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListDataSourcesRequest.page_token` to request the next page of list results.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
  }
  /**
   * The returned list of pipelines in the project.
   */
  export interface Schema$ListTransferConfigsResponse {
    /**
     * Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferConfigsRequest.page_token` to request the next page of list results.
     */
    nextPageToken?: string;
    /**
     * Output only. The stored pipeline transfer configurations.
     */
    transferConfigs?: Schema$TransferConfig[];
  }
  /**
   * The returned list transfer run messages.
   */
  export interface Schema$ListTransferLogsResponse {
    /**
     * Output only. The next-pagination token. For multiple-page list results, this token can be used as the `GetTransferRunLogRequest.page_token` to request the next page of list results.
     */
    nextPageToken?: string;
    /**
     * Output only. The stored pipeline transfer messages.
     */
    transferMessages?: Schema$TransferMessage[];
  }
  /**
   * The returned list of pipelines in the project.
   */
  export interface Schema$ListTransferRunsResponse {
    /**
     * Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferRunsRequest.page_token` to request the next page of list results.
     */
    nextPageToken?: string;
    /**
     * Output only. The stored pipeline transfer runs.
     */
    transferRuns?: Schema$TransferRun[];
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, &quot;Tokyo&quot;.
     */
    displayName?: string;
    /**
     * Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string};
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any};
    /**
     * Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string;
  }
  /**
   * Options customizing the data transfer schedule.
   */
  export interface Schema$ScheduleOptions {
    /**
     * If true, automatic scheduling of data transfer runs for this configuration will be disabled. The runs can be started on ad-hoc basis using StartManualTransferRuns API. When automatic scheduling is disabled, the TransferConfig.schedule field will be ignored.
     */
    disableAutoScheduling?: boolean;
    /**
     * Defines time to stop scheduling transfer runs. A transfer run cannot be scheduled at or after the end time. The end time can be changed at any moment. The time when a data transfer can be trigerred manually is not limited by this option.
     */
    endTime?: string;
    /**
     * Specifies time to start scheduling transfer runs. The first run will be scheduled at or after the start time according to a recurrence pattern defined in the schedule string. The start time can be changed at any moment. The time when a data transfer can be trigerred manually is not limited by this option.
     */
    startTime?: string;
  }
  /**
   * A request to schedule transfer runs for a time range.
   */
  export interface Schema$ScheduleTransferRunsRequest {
    /**
     * End time of the range of transfer runs. For example, `&quot;2017-05-30T00:00:00+00:00&quot;`.
     */
    endTime?: string;
    /**
     * Start time of the range of transfer runs. For example, `&quot;2017-05-25T00:00:00+00:00&quot;`.
     */
    startTime?: string;
  }
  /**
   * A response to schedule transfer runs for a time range.
   */
  export interface Schema$ScheduleTransferRunsResponse {
    /**
     * The transfer runs that were scheduled.
     */
    runs?: Schema$TransferRun[];
  }
  /**
   * A request to start manual transfer runs.
   */
  export interface Schema$StartManualTransferRunsRequest {
    /**
     * Specific run_time for a transfer run to be started. The requested_run_time must not be in the future.
     */
    requestedRunTime?: string;
    /**
     * Time range for the transfer runs that should be started.
     */
    requestedTimeRange?: Schema$TimeRange;
  }
  /**
   * A response to start manual transfer runs.
   */
  export interface Schema$StartManualTransferRunsResponse {
    /**
     * The transfer runs that were created.
     */
    runs?: Schema$TransferRun[];
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). The error model is designed to be:  - Simple to use and understand for most users - Flexible enough to meet unexpected needs  # Overview  The `Status` message contains three pieces of data: error code, error message, and error details. The error code should be an enum value of google.rpc.Code, but it may accept additional error codes if needed.  The error message should be a developer-facing English message that helps developers *understand* and *resolve* the error. If a localized user-facing error message is needed, put the localized message in the error details or localize it in the client. The optional error details may contain arbitrary information about the error. There is a predefined set of error detail types in the package `google.rpc` that can be used for common error conditions.  # Language mapping  The `Status` message is the logical representation of the error model, but it is not necessarily the actual wire format. When the `Status` message is exposed in different client libraries and different wire protocols, it can be mapped differently. For example, it will likely be mapped to some exceptions in Java, but more likely mapped to some error codes in C.  # Other uses  The error model and the `Status` message can be used in a variety of environments, either with or without APIs, to provide a consistent developer experience across different environments.  Example uses of this error model include:  - Partial errors. If a service needs to return partial errors to the client,     it may embed the `Status` in the normal response to indicate the partial     errors.  - Workflow errors. A typical workflow has multiple steps. Each step may     have a `Status` message for error reporting.  - Batch operations. If a client uses batch request and batch response, the     `Status` message should be used directly inside batch response, one for     each error sub-response.  - Asynchronous operations. If an API call embeds asynchronous operation     results in its response, the status of those operations should be     represented directly using the `Status` message.  - Logging. If some API errors are stored in logs, the message `Status` could     be used directly after any stripping needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}>;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * A specification for a time range, this will request transfer runs with run_time between start_time (inclusive) and end_time (exclusive).
   */
  export interface Schema$TimeRange {
    /**
     * End time of the range of transfer runs. For example, `&quot;2017-05-30T00:00:00+00:00&quot;`. The end_time must not be in the future. Creates transfer runs where run_time is in the range betwen start_time (inclusive) and end_time (exlusive).
     */
    endTime?: string;
    /**
     * Start time of the range of transfer runs. For example, `&quot;2017-05-25T00:00:00+00:00&quot;`. The start_time must be strictly less than the end_time. Creates transfer runs where run_time is in the range betwen start_time (inclusive) and end_time (exlusive).
     */
    startTime?: string;
  }
  /**
   * Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
   */
  export interface Schema$TransferConfig {
    /**
     * The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to  0 to use the default value.
     */
    dataRefreshWindowDays?: number;
    /**
     * Output only. Region in which BigQuery dataset is located.
     */
    datasetRegion?: string;
    /**
     * Data source id. Cannot be changed once data transfer is created.
     */
    dataSourceId?: string;
    /**
     * The BigQuery target dataset id.
     */
    destinationDatasetId?: string;
    /**
     * Is this config disabled. When set to true, no runs are scheduled for a given transfer.
     */
    disabled?: boolean;
    /**
     * User specified display name for the data transfer.
     */
    displayName?: string;
    /**
     * The resource name of the transfer config. Transfer config names have the form of `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. The name is automatically generated based on the config_id specified in CreateTransferConfigRequest along with project_id and region. If config_id is not provided, usually a uuid, even though it is not guaranteed or required, will be generated for config_id.
     */
    name?: string;
    /**
     * Output only. Next time when data transfer will run.
     */
    nextRunTime?: string;
    /**
     * Data transfer specific parameters.
     */
    params?: {[key: string]: any};
    /**
     * Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: the granularity should be at least 8 hours, or less frequent.
     */
    schedule?: string;
    /**
     * Options customizing the data transfer schedule.
     */
    scheduleOptions?: Schema$ScheduleOptions;
    /**
     * Output only. State of the most recently updated transfer run.
     */
    state?: string;
    /**
     * Output only. Data transfer modification time. Ignored by server on input.
     */
    updateTime?: string;
    /**
     * Deprecated. Unique ID of the user on whose behalf transfer is done.
     */
    userId?: string;
  }
  /**
   * Represents a user facing message for a particular data transfer run.
   */
  export interface Schema$TransferMessage {
    /**
     * Message text.
     */
    messageText?: string;
    /**
     * Time when message was logged.
     */
    messageTime?: string;
    /**
     * Message severity.
     */
    severity?: string;
  }
  /**
   * Represents a data transfer run.
   */
  export interface Schema$TransferRun {
    /**
     * Output only. Data source id.
     */
    dataSourceId?: string;
    /**
     * Output only. The BigQuery target dataset id.
     */
    destinationDatasetId?: string;
    /**
     * Output only. Time when transfer run ended. Parameter ignored by server for input requests.
     */
    endTime?: string;
    /**
     * Status of the transfer run.
     */
    errorStatus?: Schema$Status;
    /**
     * The resource name of the transfer run. Transfer run names have the form `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`. The name is ignored when creating a transfer run.
     */
    name?: string;
    /**
     * Output only. Data transfer specific parameters.
     */
    params?: {[key: string]: any};
    /**
     * For batch transfer runs, specifies the date and time that data should be ingested.
     */
    runTime?: string;
    /**
     * Output only. Describes the schedule of this transfer run if it was created as part of a regular schedule. For batch transfer runs that are scheduled manually, this is empty. NOTE: the system might choose to delay the schedule depending on the current load, so `schedule_time` doesn&#39;t always match this.
     */
    schedule?: string;
    /**
     * Minimum time after which a transfer run can be started.
     */
    scheduleTime?: string;
    /**
     * Output only. Time when transfer run was started. Parameter ignored by server for input requests.
     */
    startTime?: string;
    /**
     * Data transfer run state. Ignored for input requests.
     */
    state?: string;
    /**
     * Output only. Last time the data transfer run state was updated.
     */
    updateTime?: string;
    /**
     * Deprecated. Unique ID of the user on whose behalf transfer is done.
     */
    userId?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    dataSources: Resource$Projects$Datasources;
    locations: Resource$Projects$Locations;
    transferConfigs: Resource$Projects$Transferconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataSources = new Resource$Projects$Datasources(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.transferConfigs = new Resource$Projects$Transferconfigs(
        this.context
      );
    }
  }

  export class Resource$Projects$Datasources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquerydatatransfer.projects.dataSources.checkValidCreds
     * @desc Returns true if valid credentials exist for the given data source and requesting user. Some data sources doesn't support service account, so we need to talk to them on behalf of the end user. This API just checks whether we have OAuth token for the particular user, which is a pre-requisite before user can create a transfer config.
     * @alias bigquerydatatransfer.projects.dataSources.checkValidCreds
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The data source in the form: `projects/{project_id}/dataSources/{data_source_id}`
     * @param {().CheckValidCredsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    checkValidCreds(
      params?: Params$Resource$Projects$Datasources$Checkvalidcreds,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CheckValidCredsResponse>;
    checkValidCreds(
      params: Params$Resource$Projects$Datasources$Checkvalidcreds,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckValidCredsResponse>,
      callback: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void;
    checkValidCreds(
      params: Params$Resource$Projects$Datasources$Checkvalidcreds,
      callback: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void;
    checkValidCreds(
      callback: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void;
    checkValidCreds(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasources$Checkvalidcreds
        | BodyResponseCallback<Schema$CheckValidCredsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckValidCredsResponse>,
      callback?: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void | GaxiosPromise<Schema$CheckValidCredsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasources$Checkvalidcreds;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasources$Checkvalidcreds;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:checkValidCreds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CheckValidCredsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CheckValidCredsResponse>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.dataSources.get
     * @desc Retrieves a supported data source and returns its settings, which can be used for UI rendering.
     * @alias bigquerydatatransfer.projects.dataSources.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Datasources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataSource>;
    get(
      params: Params$Resource$Projects$Datasources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(
      params: Params$Resource$Projects$Datasources$Get,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataSource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasources$Get
        | BodyResponseCallback<Schema$DataSource>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DataSource>,
      callback?: BodyResponseCallback<Schema$DataSource>
    ): void | GaxiosPromise<Schema$DataSource> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DataSource>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.dataSources.list
     * @desc Lists supported data sources and returns their settings, which can be used for UI rendering.
     * @alias bigquerydatatransfer.projects.dataSources.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Datasources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDataSourcesResponse>;
    list(
      params: Params$Resource$Projects$Datasources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Datasources$List,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasources$List
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback?: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void | GaxiosPromise<Schema$ListDataSourcesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dataSources').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDataSourcesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDataSourcesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Datasources$Checkvalidcreds
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The data source in the form: `projects/{project_id}/dataSources/{data_source_id}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckValidCredsRequest;
  }
  export interface Params$Resource$Projects$Datasources$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasources$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    dataSources: Resource$Projects$Locations$Datasources;
    transferConfigs: Resource$Projects$Locations$Transferconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataSources = new Resource$Projects$Locations$Datasources(
        this.context
      );
      this.transferConfigs = new Resource$Projects$Locations$Transferconfigs(
        this.context
      );
    }

    /**
     * bigquerydatatransfer.projects.locations.get
     * @desc Gets information about a location.
     * @alias bigquerydatatransfer.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>
    ): void | GaxiosPromise<Schema$Location> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias bigquerydatatransfer.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The resource that owns the locations collection, if applicable.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void | GaxiosPromise<Schema$ListLocationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Datasources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquerydatatransfer.projects.locations.dataSources.checkValidCreds
     * @desc Returns true if valid credentials exist for the given data source and requesting user. Some data sources doesn't support service account, so we need to talk to them on behalf of the end user. This API just checks whether we have OAuth token for the particular user, which is a pre-requisite before user can create a transfer config.
     * @alias bigquerydatatransfer.projects.locations.dataSources.checkValidCreds
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The data source in the form: `projects/{project_id}/dataSources/{data_source_id}`
     * @param {().CheckValidCredsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    checkValidCreds(
      params?: Params$Resource$Projects$Locations$Datasources$Checkvalidcreds,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CheckValidCredsResponse>;
    checkValidCreds(
      params: Params$Resource$Projects$Locations$Datasources$Checkvalidcreds,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckValidCredsResponse>,
      callback: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void;
    checkValidCreds(
      params: Params$Resource$Projects$Locations$Datasources$Checkvalidcreds,
      callback: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void;
    checkValidCreds(
      callback: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void;
    checkValidCreds(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasources$Checkvalidcreds
        | BodyResponseCallback<Schema$CheckValidCredsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckValidCredsResponse>,
      callback?: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void | GaxiosPromise<Schema$CheckValidCredsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasources$Checkvalidcreds;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasources$Checkvalidcreds;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:checkValidCreds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CheckValidCredsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CheckValidCredsResponse>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.dataSources.get
     * @desc Retrieves a supported data source and returns its settings, which can be used for UI rendering.
     * @alias bigquerydatatransfer.projects.locations.dataSources.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Datasources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataSource>;
    get(
      params: Params$Resource$Projects$Locations$Datasources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasources$Get,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataSource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasources$Get
        | BodyResponseCallback<Schema$DataSource>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DataSource>,
      callback?: BodyResponseCallback<Schema$DataSource>
    ): void | GaxiosPromise<Schema$DataSource> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DataSource>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.dataSources.list
     * @desc Lists supported data sources and returns their settings, which can be used for UI rendering.
     * @alias bigquerydatatransfer.projects.locations.dataSources.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Datasources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDataSourcesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasources$List,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasources$List
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback?: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void | GaxiosPromise<Schema$ListDataSourcesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dataSources').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDataSourcesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDataSourcesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasources$Checkvalidcreds
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The data source in the form: `projects/{project_id}/dataSources/{data_source_id}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckValidCredsRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasources$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasources$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Transferconfigs {
    context: APIRequestContext;
    runs: Resource$Projects$Locations$Transferconfigs$Runs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.runs = new Resource$Projects$Locations$Transferconfigs$Runs(
        this.context
      );
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.create
     * @desc Creates a new data transfer configuration.
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     * @param {string} params.parent The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} If specified location and location of the destination bigquery dataset do not match - the request will fail.
     * @param {string=} params.versionInfo Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the ???none+gsession??? response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     * @param {().TransferConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferConfig>;
    create(
      params: Params$Resource$Projects$Locations$Transferconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TransferConfig>,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Transferconfigs$Create,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    create(callback: BodyResponseCallback<Schema$TransferConfig>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Create
        | BodyResponseCallback<Schema$TransferConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>
    ): void | GaxiosPromise<Schema$TransferConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransferConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TransferConfig>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.delete
     * @desc Deletes a data transfer configuration, including any associated transfer runs and logs.
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Transferconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Transferconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.get
     * @desc Returns information about a data transfer config.
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferConfig>;
    get(
      params: Params$Resource$Projects$Locations$Transferconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TransferConfig>,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Transferconfigs$Get,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$TransferConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Get
        | BodyResponseCallback<Schema$TransferConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>
    ): void | GaxiosPromise<Schema$TransferConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransferConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TransferConfig>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.list
     * @desc Returns information about all data transfers in the project.
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dataSourceIds When specified, only configurations of requested data sources are returned.
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent The BigQuery project id for which data sources should be returned: `projects/{project_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Transferconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$List,
      callback: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$List
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void | GaxiosPromise<Schema$ListTransferConfigsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTransferConfigsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListTransferConfigsResponse>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.patch
     * @desc Updates a data transfer configuration. All fields must be set, even if they are not updated.
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     * @param {string} params.name The resource name of the transfer config. Transfer config names have the form of `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. The name is automatically generated based on the config_id specified in CreateTransferConfigRequest along with project_id and region. If config_id is not provided, usually a uuid, even though it is not guaranteed or required, will be generated for config_id.
     * @param {string=} params.updateMask Required list of fields to be updated in this request.
     * @param {string=} params.versionInfo Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the ???none+gsession??? response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     * @param {().TransferConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferConfig>;
    patch(
      params: Params$Resource$Projects$Locations$Transferconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$TransferConfig>,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Transferconfigs$Patch,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$TransferConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Patch
        | BodyResponseCallback<Schema$TransferConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>
    ): void | GaxiosPromise<Schema$TransferConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransferConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TransferConfig>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.scheduleRuns
     * @desc Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.scheduleRuns
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
     * @param {().ScheduleTransferRunsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    scheduleRuns(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScheduleTransferRunsResponse>;
    scheduleRuns(
      params: Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>,
      callback: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void;
    scheduleRuns(
      params: Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns,
      callback: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void;
    scheduleRuns(
      callback: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void;
    scheduleRuns(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void | GaxiosPromise<Schema$ScheduleTransferRunsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:scheduleRuns').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ScheduleTransferRunsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ScheduleTransferRunsResponse>(
          parameters
        );
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.startManualRuns
     * @desc Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.startManualRuns
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
     * @param {().StartManualTransferRunsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    startManualRuns(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns,
      options?: MethodOptions
    ): GaxiosPromise<Schema$StartManualTransferRunsResponse>;
    startManualRuns(
      params: Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>,
      callback: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void;
    startManualRuns(
      params: Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns,
      callback: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void;
    startManualRuns(
      callback: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void;
    startManualRuns(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void | GaxiosPromise<Schema$StartManualTransferRunsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:startManualRuns').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$StartManualTransferRunsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$StartManualTransferRunsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Transferconfigs$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     */
    authorizationCode?: string;
    /**
     * The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} If specified location and location of the destination bigquery dataset do not match - the request will fail.
     */
    parent?: string;
    /**
     * Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the ???none+gsession??? response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     */
    versionInfo?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransferConfig;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When specified, only configurations of requested data sources are returned.
     */
    dataSourceIds?: string[];
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * The BigQuery project id for which data sources should be returned: `projects/{project_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     */
    authorizationCode?: string;
    /**
     * The resource name of the transfer config. Transfer config names have the form of `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. The name is automatically generated based on the config_id specified in CreateTransferConfigRequest along with project_id and region. If config_id is not provided, usually a uuid, even though it is not guaranteed or required, will be generated for config_id.
     */
    name?: string;
    /**
     * Required list of fields to be updated in this request.
     */
    updateMask?: string;
    /**
     * Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the ???none+gsession??? response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     */
    versionInfo?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransferConfig;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ScheduleTransferRunsRequest;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartManualTransferRunsRequest;
  }

  export class Resource$Projects$Locations$Transferconfigs$Runs {
    context: APIRequestContext;
    transferLogs: Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.transferLogs = new Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs(
        this.context
      );
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.runs.delete
     * @desc Deletes the specified transfer run.
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.runs.get
     * @desc Returns information about the particular transfer run.
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Runs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferRun>;
    get(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TransferRun>,
      callback: BodyResponseCallback<Schema$TransferRun>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Get,
      callback: BodyResponseCallback<Schema$TransferRun>
    ): void;
    get(callback: BodyResponseCallback<Schema$TransferRun>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Runs$Get
        | BodyResponseCallback<Schema$TransferRun>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TransferRun>,
      callback?: BodyResponseCallback<Schema$TransferRun>
    ): void | GaxiosPromise<Schema$TransferRun> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Runs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Runs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransferRun>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TransferRun>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.runs.list
     * @desc Returns information about running and completed jobs.
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}`.
     * @param {string=} params.runAttempt Indicates how run attempts are to be pulled.
     * @param {string=} params.states When specified, only transfer runs with requested states are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Runs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferRunsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferRunsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferRunsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$List,
      callback: BodyResponseCallback<Schema$ListTransferRunsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTransferRunsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Runs$List
        | BodyResponseCallback<Schema$ListTransferRunsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferRunsResponse>
    ): void | GaxiosPromise<Schema$ListTransferRunsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Runs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Runs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/runs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTransferRunsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTransferRunsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Runs$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Runs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}`.
     */
    parent?: string;
    /**
     * Indicates how run attempts are to be pulled.
     */
    runAttempt?: string;
    /**
     * When specified, only transfer runs with requested states are returned.
     */
    states?: string[];
  }

  export class Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.runs.transferLogs.list
     * @desc Returns user facing log messages for the data transfer run.
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.transferLogs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.messageTypes Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferLogsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferLogsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferLogsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List,
      callback: BodyResponseCallback<Schema$ListTransferLogsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTransferLogsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List
        | BodyResponseCallback<Schema$ListTransferLogsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferLogsResponse>
    ): void | GaxiosPromise<Schema$ListTransferLogsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferLogs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTransferLogsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTransferLogsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
     */
    messageTypes?: string[];
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
     */
    parent?: string;
  }

  export class Resource$Projects$Transferconfigs {
    context: APIRequestContext;
    runs: Resource$Projects$Transferconfigs$Runs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.runs = new Resource$Projects$Transferconfigs$Runs(this.context);
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.create
     * @desc Creates a new data transfer configuration.
     * @alias bigquerydatatransfer.projects.transferConfigs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     * @param {string} params.parent The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} If specified location and location of the destination bigquery dataset do not match - the request will fail.
     * @param {string=} params.versionInfo Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the ???none+gsession??? response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     * @param {().TransferConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Transferconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferConfig>;
    create(
      params: Params$Resource$Projects$Transferconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TransferConfig>,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Transferconfigs$Create,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    create(callback: BodyResponseCallback<Schema$TransferConfig>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Create
        | BodyResponseCallback<Schema$TransferConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>
    ): void | GaxiosPromise<Schema$TransferConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransferConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TransferConfig>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.delete
     * @desc Deletes a data transfer configuration, including any associated transfer runs and logs.
     * @alias bigquerydatatransfer.projects.transferConfigs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Transferconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Transferconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Transferconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.get
     * @desc Returns information about a data transfer config.
     * @alias bigquerydatatransfer.projects.transferConfigs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Transferconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferConfig>;
    get(
      params: Params$Resource$Projects$Transferconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TransferConfig>,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Transferconfigs$Get,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$TransferConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Get
        | BodyResponseCallback<Schema$TransferConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>
    ): void | GaxiosPromise<Schema$TransferConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransferConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TransferConfig>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.list
     * @desc Returns information about all data transfers in the project.
     * @alias bigquerydatatransfer.projects.transferConfigs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dataSourceIds When specified, only configurations of requested data sources are returned.
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent The BigQuery project id for which data sources should be returned: `projects/{project_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Transferconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferConfigsResponse>;
    list(
      params: Params$Resource$Projects$Transferconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Transferconfigs$List,
      callback: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$List
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void | GaxiosPromise<Schema$ListTransferConfigsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTransferConfigsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListTransferConfigsResponse>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.patch
     * @desc Updates a data transfer configuration. All fields must be set, even if they are not updated.
     * @alias bigquerydatatransfer.projects.transferConfigs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     * @param {string} params.name The resource name of the transfer config. Transfer config names have the form of `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. The name is automatically generated based on the config_id specified in CreateTransferConfigRequest along with project_id and region. If config_id is not provided, usually a uuid, even though it is not guaranteed or required, will be generated for config_id.
     * @param {string=} params.updateMask Required list of fields to be updated in this request.
     * @param {string=} params.versionInfo Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the ???none+gsession??? response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     * @param {().TransferConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Transferconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferConfig>;
    patch(
      params: Params$Resource$Projects$Transferconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$TransferConfig>,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Transferconfigs$Patch,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$TransferConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Patch
        | BodyResponseCallback<Schema$TransferConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>
    ): void | GaxiosPromise<Schema$TransferConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransferConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TransferConfig>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.scheduleRuns
     * @desc Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
     * @alias bigquerydatatransfer.projects.transferConfigs.scheduleRuns
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
     * @param {().ScheduleTransferRunsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    scheduleRuns(
      params?: Params$Resource$Projects$Transferconfigs$Scheduleruns,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScheduleTransferRunsResponse>;
    scheduleRuns(
      params: Params$Resource$Projects$Transferconfigs$Scheduleruns,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>,
      callback: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void;
    scheduleRuns(
      params: Params$Resource$Projects$Transferconfigs$Scheduleruns,
      callback: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void;
    scheduleRuns(
      callback: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void;
    scheduleRuns(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Scheduleruns
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void | GaxiosPromise<Schema$ScheduleTransferRunsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Scheduleruns;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Scheduleruns;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:scheduleRuns').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ScheduleTransferRunsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ScheduleTransferRunsResponse>(
          parameters
        );
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.startManualRuns
     * @desc Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.
     * @alias bigquerydatatransfer.projects.transferConfigs.startManualRuns
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
     * @param {().StartManualTransferRunsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    startManualRuns(
      params?: Params$Resource$Projects$Transferconfigs$Startmanualruns,
      options?: MethodOptions
    ): GaxiosPromise<Schema$StartManualTransferRunsResponse>;
    startManualRuns(
      params: Params$Resource$Projects$Transferconfigs$Startmanualruns,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>,
      callback: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void;
    startManualRuns(
      params: Params$Resource$Projects$Transferconfigs$Startmanualruns,
      callback: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void;
    startManualRuns(
      callback: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void;
    startManualRuns(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Startmanualruns
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void | GaxiosPromise<Schema$StartManualTransferRunsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Startmanualruns;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Startmanualruns;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:startManualRuns').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$StartManualTransferRunsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$StartManualTransferRunsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Transferconfigs$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     */
    authorizationCode?: string;
    /**
     * The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} If specified location and location of the destination bigquery dataset do not match - the request will fail.
     */
    parent?: string;
    /**
     * Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the ???none+gsession??? response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     */
    versionInfo?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransferConfig;
  }
  export interface Params$Resource$Projects$Transferconfigs$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Transferconfigs$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Transferconfigs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When specified, only configurations of requested data sources are returned.
     */
    dataSourceIds?: string[];
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * The BigQuery project id for which data sources should be returned: `projects/{project_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Transferconfigs$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     */
    authorizationCode?: string;
    /**
     * The resource name of the transfer config. Transfer config names have the form of `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. The name is automatically generated based on the config_id specified in CreateTransferConfigRequest along with project_id and region. If config_id is not provided, usually a uuid, even though it is not guaranteed or required, will be generated for config_id.
     */
    name?: string;
    /**
     * Required list of fields to be updated in this request.
     */
    updateMask?: string;
    /**
     * Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the ???none+gsession??? response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     */
    versionInfo?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransferConfig;
  }
  export interface Params$Resource$Projects$Transferconfigs$Scheduleruns
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ScheduleTransferRunsRequest;
  }
  export interface Params$Resource$Projects$Transferconfigs$Startmanualruns
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartManualTransferRunsRequest;
  }

  export class Resource$Projects$Transferconfigs$Runs {
    context: APIRequestContext;
    transferLogs: Resource$Projects$Transferconfigs$Runs$Transferlogs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.transferLogs = new Resource$Projects$Transferconfigs$Runs$Transferlogs(
        this.context
      );
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.runs.delete
     * @desc Deletes the specified transfer run.
     * @alias bigquerydatatransfer.projects.transferConfigs.runs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Transferconfigs$Runs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Transferconfigs$Runs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Transferconfigs$Runs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Runs$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Runs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Runs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.runs.get
     * @desc Returns information about the particular transfer run.
     * @alias bigquerydatatransfer.projects.transferConfigs.runs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Transferconfigs$Runs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferRun>;
    get(
      params: Params$Resource$Projects$Transferconfigs$Runs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TransferRun>,
      callback: BodyResponseCallback<Schema$TransferRun>
    ): void;
    get(
      params: Params$Resource$Projects$Transferconfigs$Runs$Get,
      callback: BodyResponseCallback<Schema$TransferRun>
    ): void;
    get(callback: BodyResponseCallback<Schema$TransferRun>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Runs$Get
        | BodyResponseCallback<Schema$TransferRun>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TransferRun>,
      callback?: BodyResponseCallback<Schema$TransferRun>
    ): void | GaxiosPromise<Schema$TransferRun> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Runs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Runs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransferRun>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TransferRun>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.runs.list
     * @desc Returns information about running and completed jobs.
     * @alias bigquerydatatransfer.projects.transferConfigs.runs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}`.
     * @param {string=} params.runAttempt Indicates how run attempts are to be pulled.
     * @param {string=} params.states When specified, only transfer runs with requested states are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Transferconfigs$Runs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferRunsResponse>;
    list(
      params: Params$Resource$Projects$Transferconfigs$Runs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferRunsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferRunsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Transferconfigs$Runs$List,
      callback: BodyResponseCallback<Schema$ListTransferRunsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTransferRunsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Runs$List
        | BodyResponseCallback<Schema$ListTransferRunsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferRunsResponse>
    ): void | GaxiosPromise<Schema$ListTransferRunsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Runs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Runs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/runs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTransferRunsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTransferRunsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Transferconfigs$Runs$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Transferconfigs$Runs$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Transferconfigs$Runs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}`.
     */
    parent?: string;
    /**
     * Indicates how run attempts are to be pulled.
     */
    runAttempt?: string;
    /**
     * When specified, only transfer runs with requested states are returned.
     */
    states?: string[];
  }

  export class Resource$Projects$Transferconfigs$Runs$Transferlogs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list
     * @desc Returns user facing log messages for the data transfer run.
     * @alias bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.messageTypes Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferLogsResponse>;
    list(
      params: Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferLogsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferLogsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List,
      callback: BodyResponseCallback<Schema$ListTransferLogsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTransferLogsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List
        | BodyResponseCallback<Schema$ListTransferLogsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferLogsResponse>
    ): void | GaxiosPromise<Schema$ListTransferLogsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferLogs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTransferLogsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTransferLogsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
     */
    messageTypes?: string[];
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
     */
    parent?: string;
  }
}
