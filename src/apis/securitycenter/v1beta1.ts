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

export namespace securitycenter_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Cloud Security Command Center API
   *
   * Cloud Security Command Center API provides access to temporal views of assets and findings within an organization.
   *
   * @example
   * const {google} = require('googleapis');
   * const securitycenter = google.securitycenter('v1beta1');
   *
   * @namespace securitycenter
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Securitycenter
   */
  export class Securitycenter {
    context: APIRequestContext;
    organizations: Resource$Organizations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.organizations = new Resource$Organizations(this.context);
    }
  }

  /**
   * Cloud Security Command Center&#39;s (Cloud SCC) representation of a Google Cloud Platform (GCP) resource.  The Asset is a Cloud SCC resource that captures information about a single GCP resource. All modifications to an Asset are only within the context of Cloud SCC and don&#39;t affect the referenced GCP resource.
   */
  export interface Schema$Asset {
    /**
     * The time at which the asset was created in Cloud SCC.
     */
    createTime?: string;
    /**
     * The relative resource name of this asset. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: &quot;organizations/123/assets/456&quot;.
     */
    name?: string;
    /**
     * Resource managed properties. These properties are managed and defined by the GCP resource and cannot be modified by the user.
     */
    resourceProperties?: {[key: string]: any};
    /**
     * Cloud SCC managed properties. These properties are managed by Cloud SCC and cannot be modified by the user.
     */
    securityCenterProperties?: Schema$SecurityCenterProperties;
    /**
     * User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the asset.
     */
    securityMarks?: Schema$SecurityMarks;
    /**
     * The time at which the asset was last updated, added, or deleted in Cloud SCC.
     */
    updateTime?: string;
  }
  /**
   * The configuration used for Asset Discovery runs.
   */
  export interface Schema$AssetDiscoveryConfig {
    /**
     * The mode to use for filtering asset discovery.
     */
    inclusionMode?: string;
    /**
     * The project ids to use for filtering asset discovery.
     */
    projectIds?: string[];
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {           &quot;service&quot;: &quot;allServices&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,               &quot;exempted_members&quot;: [                 &quot;user:foo@gmail.com&quot;               ]             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {               &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ]         },         {           &quot;service&quot;: &quot;fooservice.googleapis.com&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [                 &quot;user:bar@gmail.com&quot;               ]             }           ]         }       ]     }  For fooservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts foo@gmail.com from DATA_READ logging, and bar@gmail.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example:      {       &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;: &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [             &quot;user:foo@gmail.com&quot;           ]         },         {           &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting foo@gmail.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[];
    /**
     * The log type that this config enables.
     */
    logType?: string;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@gmail.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[];
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Represents an expression text. Example:      title: &quot;User account presence&quot;     description: &quot;Determines whether the request has a user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string;
    /**
     * Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
     */
    expression?: string;
    /**
     * An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string;
    /**
     * An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string;
  }
  /**
   * Cloud Security Command Center (Cloud SCC) finding.  A finding is a record of assessment data (security, risk, health or privacy) ingested into Cloud SCC for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.
   */
  export interface Schema$Finding {
    /**
     * The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: &quot;XSS_FLASH_INJECTION&quot;
     */
    category?: string;
    /**
     * The time at which the finding was created in Cloud SCC.
     */
    createTime?: string;
    /**
     * The time at which the event took place. For example, if the finding represents an open firewall it would capture the time the open firewall was detected.
     */
    eventTime?: string;
    /**
     * The URI that, if available, points to a web page outside of Cloud SCC where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
     */
    externalUri?: string;
    /**
     * The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: &quot;organizations/123/sources/456/findings/789&quot;
     */
    name?: string;
    /**
     * The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: &quot;organizations/123/sources/456&quot;
     */
    parent?: string;
    /**
     * The full resource name of the Google Cloud Platform (GCP) resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name This field is immutable after creation time.
     */
    resourceName?: string;
    /**
     * Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding.
     */
    securityMarks?: Schema$SecurityMarks;
    /**
     * Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
     */
    sourceProperties?: {[key: string]: any};
    /**
     * The state of the finding.
     */
    state?: string;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {}
  /**
   * Response of asset discovery run
   */
  export interface Schema$GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse {
    /**
     * The duration between asset discovery run start and end
     */
    duration?: string;
    /**
     * The state of an asset discovery run.
     */
    state?: string;
  }
  /**
   * Response of asset discovery run
   */
  export interface Schema$GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse {
    /**
     * The duration between asset discovery run start and end
     */
    duration?: string;
    /**
     * The state of an asset discovery run.
     */
    state?: string;
  }
  /**
   * Request message for grouping by assets.
   */
  export interface Schema$GroupAssetsRequest {
    /**
     * When compare_duration is set, the Asset&#39;s &quot;state&quot; property is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time.  The state value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don&#39;t affect the result. For example, the results aren&#39;t affected if the asset is removed and re-created again.  Possible &quot;state&quot; values when compare_duration is specified:  * &quot;ADDED&quot;: indicates that the asset was not present before              compare_duration, but present at reference_time. * &quot;REMOVED&quot;: indicates that the asset was present at the start of              compare_duration, but not present at reference_time. * &quot;ACTIVE&quot;: indicates that the asset was present at both the              start and the end of the time period defined by              compare_duration and reference_time.  This field is ignored if `state` is not a field in `group_by`.
     */
    compareDuration?: string;
    /**
     * Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`.  Restrictions have the form `&lt;field&gt; &lt;operator&gt; &lt;value&gt;` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include:  * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka  The supported operators are:  * `=` for all value types. * `&gt;`, `&lt;`, `&gt;=`, `&lt;=` for integer values. * `:`, meaning substring matching, for strings.  The supported value types are:  * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.  For example, `resource_properties.size = 100` is a valid filter string.
     */
    filter?: string;
    /**
     * Expression that defines what assets fields to use for grouping. The string value should follow SQL syntax: comma separated list of fields. For example: &quot;security_center_properties.resource_project,security_center_properties.project&quot;.  The following fields are supported when compare_duration is not set:  * security_center_properties.resource_project * security_center_properties.resource_type * security_center_properties.resource_parent  The following fields are supported when compare_duration is set:  * security_center_properties.resource_type
     */
    groupBy?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `GroupAssetsResponse`; indicates that this is a continuation of a prior `GroupAssets` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API&#39;s version of NOW.
     */
    readTime?: string;
  }
  /**
   * Response message for grouping by assets.
   */
  export interface Schema$GroupAssetsResponse {
    /**
     * Group results. There exists an element for each existing unique combination of property/values. The element contains a count for the number of times those specific property/values appear.
     */
    groupByResults?: Schema$GroupResult[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string;
    /**
     * Time used for executing the groupBy request.
     */
    readTime?: string;
  }
  /**
   * Request message for grouping by findings.
   */
  export interface Schema$GroupFindingsRequest {
    /**
     * Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`.  Restrictions have the form `&lt;field&gt; &lt;operator&gt; &lt;value&gt;` and may have a `-` character in front of them to indicate negation. Examples include:   * name  * source_properties.a_property  * security_marks.marks.marka  The supported operators are:  * `=` for all value types. * `&gt;`, `&lt;`, `&gt;=`, `&lt;=` for integer values. * `:`, meaning substring matching, for strings.  The supported value types are:  * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.  For example, `source_properties.size = 100` is a valid filter string.
     */
    filter?: string;
    /**
     * Expression that defines what assets fields to use for grouping (including `state`). The string value should follow SQL syntax: comma separated list of fields. For example: &quot;parent,resource_name&quot;.  The following fields are supported:  * resource_name * category * state * parent
     */
    groupBy?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `GroupFindingsResponse`; indicates that this is a continuation of a prior `GroupFindings` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API&#39;s version of NOW.
     */
    readTime?: string;
  }
  /**
   * Response message for group by findings.
   */
  export interface Schema$GroupFindingsResponse {
    /**
     * Group results. There exists an element for each existing unique combination of property/values. The element contains a count for the number of times those specific property/values appear.
     */
    groupByResults?: Schema$GroupResult[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string;
    /**
     * Time used for executing the groupBy request.
     */
    readTime?: string;
  }
  /**
   * Result containing the properties and count of a groupBy request.
   */
  export interface Schema$GroupResult {
    /**
     * Total count of resources for the given properties.
     */
    count?: string;
    /**
     * Properties matching the groupBy fields in the request.
     */
    properties?: {[key: string]: any};
  }
  /**
   * Response message for listing assets.
   */
  export interface Schema$ListAssetsResponse {
    /**
     * Assets matching the list request.
     */
    listAssetsResults?: Schema$ListAssetsResult[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string;
    /**
     * Time used for executing the list request.
     */
    readTime?: string;
    /**
     * The total number of assets matching the query.
     */
    totalSize?: number;
  }
  /**
   * Result containing the Asset and its State.
   */
  export interface Schema$ListAssetsResult {
    /**
     * Asset matching the search request.
     */
    asset?: Schema$Asset;
    /**
     * State of the asset.
     */
    state?: string;
  }
  /**
   * Response message for listing findings.
   */
  export interface Schema$ListFindingsResponse {
    /**
     * Findings matching the list request.
     */
    findings?: Schema$Finding[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string;
    /**
     * Time used for executing the list request.
     */
    readTime?: string;
    /**
     * The total number of findings matching the query.
     */
    totalSize?: number;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * Response message for listing sources.
   */
  export interface Schema$ListSourcesResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string;
    /**
     * Sources belonging to the requested parent.
     */
    sources?: Schema$Source[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any};
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any};
  }
  /**
   * User specified settings that are attached to the Cloud Security Command Center (Cloud SCC) organization.
   */
  export interface Schema$OrganizationSettings {
    /**
     * The configuration used for Asset Discovery runs.
     */
    assetDiscoveryConfig?: Schema$AssetDiscoveryConfig;
    /**
     * A flag that indicates if Asset Discovery should be enabled. If the flag is set to `true`, then discovery of assets will occur. If it is set to `false, all historical assets will remain, but discovery of future assets will not occur.
     */
    enableAssetDiscovery?: boolean;
    /**
     * The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: &quot;organizations/123/organizationSettings&quot;.
     */
    name?: string;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.   A `Policy` consists of a list of `bindings`. A `binding` binds a list of `members` to a `role`, where the members can be user accounts, Google groups, Google domains, and service accounts. A `role` is a named list of permissions defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;: [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML Example**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-other-app@appspot.gserviceaccount.com       role: roles/owner     - members:       - user:sean@example.com       role: roles/viewer   For a description of IAM and its features, see the [IAM developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
     */
    etag?: string;
    /**
     * Deprecated.
     */
    version?: number;
  }
  /**
   * Request message for running asset discovery for an organization.
   */
  export interface Schema$RunAssetDiscoveryRequest {}
  /**
   * Cloud SCC managed properties. These properties are managed by Cloud SCC and cannot be modified by the user.
   */
  export interface Schema$SecurityCenterProperties {
    /**
     * The full resource name of the GCP resource this asset represents. This field is immutable after create time. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceName?: string;
    /**
     * Owners of the Google Cloud resource.
     */
    resourceOwners?: string[];
    /**
     * The full resource name of the immediate parent of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceParent?: string;
    /**
     * The full resource name of the project the resource belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceProject?: string;
    /**
     * The type of the GCP resource. Examples include: APPLICATION, PROJECT, and ORGANIZATION. This is a case insensitive field defined by Cloud SCC and/or the producer of the resource and is immutable after create time.
     */
    resourceType?: string;
  }
  /**
   * User specified security marks that are attached to the parent Cloud Security Command Center (Cloud SCC) resource. Security marks are scoped within a Cloud SCC organization -- they can be modified and viewed by all users who have proper permissions on the organization.
   */
  export interface Schema$SecurityMarks {
    /**
     * Mutable user specified security marks belonging to the parent resource. Constraints are as follows:   - Keys and values are treated as case insensitive   - Keys must be between 1 - 256 characters (inclusive)   - Keys must be letters, numbers, underscores, or dashes   - Values have leading and trailing whitespace trimmed, remaining     characters must be between 1 - 4096 characters (inclusive)
     */
    marks?: {[key: string]: string};
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: &quot;organizations/123/assets/456/securityMarks&quot; &quot;organizations/123/sources/456/findings/789/securityMarks&quot;.
     */
    name?: string;
  }
  /**
   * Request message for updating a finding&#39;s state.
   */
  export interface Schema$SetFindingStateRequest {
    /**
     * The time at which the updated state takes effect.
     */
    startTime?: string;
    /**
     * The desired State of the finding.
     */
    state?: string;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: &quot;bindings, etag&quot; This field is only used by Cloud IAM.
     */
    updateMask?: string;
  }
  /**
   * Cloud Security Command Center&#39;s (Cloud SCC) finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, etc.
   */
  export interface Schema$Source {
    /**
     * The description of the source (max of 1024 characters). Example: &quot;Cloud Security Scanner is a web security scanner for common vulnerabilities in App Engine applications. It can automatically scan and detect four common vulnerabilities, including cross-site-scripting (XSS), Flash injection, mixed content (HTTP in HTTPS), and outdated/insecure libraries.&quot;
     */
    description?: string;
    /**
     * The source???s display name. A source???s display name must be unique amongst its siblings, for example, two sources with the same parent can&#39;t share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens, and underscores, and can be no longer than 32 characters. This is captured by the regular expression: [\p{L}\p{N}]({\p{L}\p{N}_- ]{0,30}[\p{L}\p{N}])?.
     */
    displayName?: string;
    /**
     * The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: &quot;organizations/123/sources/456&quot;
     */
    name?: string;
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
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[];
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    assets: Resource$Organizations$Assets;
    operations: Resource$Organizations$Operations;
    sources: Resource$Organizations$Sources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.assets = new Resource$Organizations$Assets(this.context);
      this.operations = new Resource$Organizations$Operations(this.context);
      this.sources = new Resource$Organizations$Sources(this.context);
    }

    /**
     * securitycenter.organizations.getOrganizationSettings
     * @desc Gets the settings for an organization.
     * @alias securitycenter.organizations.getOrganizationSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the organization to get organization settings for. Its format is "organizations/[organization_id]/organizationSettings".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getOrganizationSettings(
      params?: Params$Resource$Organizations$Getorganizationsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrganizationSettings>;
    getOrganizationSettings(
      params: Params$Resource$Organizations$Getorganizationsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrganizationSettings>,
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    getOrganizationSettings(
      params: Params$Resource$Organizations$Getorganizationsettings,
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    getOrganizationSettings(
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    getOrganizationSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getorganizationsettings
        | BodyResponseCallback<Schema$OrganizationSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$OrganizationSettings>,
      callback?: BodyResponseCallback<Schema$OrganizationSettings>
    ): void | GaxiosPromise<Schema$OrganizationSettings> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getorganizationsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Getorganizationsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$OrganizationSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrganizationSettings>(parameters);
      }
    }

    /**
     * securitycenter.organizations.updateOrganizationSettings
     * @desc Updates an organization's settings.
     * @alias securitycenter.organizations.updateOrganizationSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/123/organizationSettings".
     * @param {string=} params.updateMask The FieldMask to use when updating the settings resource.
     * @param {().OrganizationSettings} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateOrganizationSettings(
      params?: Params$Resource$Organizations$Updateorganizationsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrganizationSettings>;
    updateOrganizationSettings(
      params: Params$Resource$Organizations$Updateorganizationsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrganizationSettings>,
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    updateOrganizationSettings(
      params: Params$Resource$Organizations$Updateorganizationsettings,
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    updateOrganizationSettings(
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    updateOrganizationSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updateorganizationsettings
        | BodyResponseCallback<Schema$OrganizationSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$OrganizationSettings>,
      callback?: BodyResponseCallback<Schema$OrganizationSettings>
    ): void | GaxiosPromise<Schema$OrganizationSettings> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updateorganizationsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Updateorganizationsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$OrganizationSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrganizationSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Getorganizationsettings
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the organization to get organization settings for. Its format is "organizations/[organization_id]/organizationSettings".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Updateorganizationsettings
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/123/organizationSettings".
     */
    name?: string;
    /**
     * The FieldMask to use when updating the settings resource.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrganizationSettings;
  }

  export class Resource$Organizations$Assets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * securitycenter.organizations.assets.group
     * @desc Filters an organization's assets and  groups them by their specified properties.
     * @alias securitycenter.organizations.assets.group
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Name of the organization to groupBy. Its format is "organizations/[organization_id]".
     * @param {().GroupAssetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    group(
      params?: Params$Resource$Organizations$Assets$Group,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GroupAssetsResponse>;
    group(
      params: Params$Resource$Organizations$Assets$Group,
      options: MethodOptions | BodyResponseCallback<Schema$GroupAssetsResponse>,
      callback: BodyResponseCallback<Schema$GroupAssetsResponse>
    ): void;
    group(
      params: Params$Resource$Organizations$Assets$Group,
      callback: BodyResponseCallback<Schema$GroupAssetsResponse>
    ): void;
    group(callback: BodyResponseCallback<Schema$GroupAssetsResponse>): void;
    group(
      paramsOrCallback?:
        | Params$Resource$Organizations$Assets$Group
        | BodyResponseCallback<Schema$GroupAssetsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GroupAssetsResponse>,
      callback?: BodyResponseCallback<Schema$GroupAssetsResponse>
    ): void | GaxiosPromise<Schema$GroupAssetsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Assets$Group;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Assets$Group;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/assets:group').replace(
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
        createAPIRequest<Schema$GroupAssetsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GroupAssetsResponse>(parameters);
      }
    }

    /**
     * securitycenter.organizations.assets.list
     * @desc Lists an organization's assets.
     * @alias securitycenter.organizations.assets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.compareDuration When compare_duration is set, the ListAssetResult's "state" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time.  The state value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again.  Possible "state" values when compare_duration is specified:  * "ADDED": indicates that the asset was not present before              compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of              compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the              start and the end of the time period defined by              compare_duration and read_time.  If compare_duration is not specified, then the only possible state is "UNUSED", which indicates that the asset is present at read_time.
     * @param {string=} params.fieldMask Optional.  A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields.
     * @param {string=} params.filter Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`.  Restrictions have the form `<field> <operator> <value>` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include:  * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka  The supported operators are:  * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings.  The supported value types are:  * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.  For example, `resource_properties.size = 100` is a valid filter string.
     * @param {string=} params.orderBy Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name     desc  ,   resource_properties.a_property  " are equivalent.
     * @param {integer=} params.pageSize The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string=} params.pageToken The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data.
     * @param {string} params.parent Name of the organization assets should belong to. Its format is "organizations/[organization_id]".
     * @param {string=} params.readTime Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Organizations$Assets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAssetsResponse>;
    list(
      params: Params$Resource$Organizations$Assets$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAssetsResponse>,
      callback: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Assets$List,
      callback: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAssetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Assets$List
        | BodyResponseCallback<Schema$ListAssetsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAssetsResponse>,
      callback?: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void | GaxiosPromise<Schema$ListAssetsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Assets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Assets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/assets').replace(
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
        createAPIRequest<Schema$ListAssetsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAssetsResponse>(parameters);
      }
    }

    /**
     * securitycenter.organizations.assets.runDiscovery
     * @desc Runs asset discovery. The discovery is tracked with a long-running operation.  This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
     * @alias securitycenter.organizations.assets.runDiscovery
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Name of the organization to run asset discovery for. Its format is "organizations/[organization_id]".
     * @param {().RunAssetDiscoveryRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    runDiscovery(
      params?: Params$Resource$Organizations$Assets$Rundiscovery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    runDiscovery(
      params: Params$Resource$Organizations$Assets$Rundiscovery,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    runDiscovery(
      params: Params$Resource$Organizations$Assets$Rundiscovery,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    runDiscovery(callback: BodyResponseCallback<Schema$Operation>): void;
    runDiscovery(
      paramsOrCallback?:
        | Params$Resource$Organizations$Assets$Rundiscovery
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Assets$Rundiscovery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Assets$Rundiscovery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/assets:runDiscovery').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * securitycenter.organizations.assets.updateSecurityMarks
     * @desc Updates security marks.
     * @alias securitycenter.organizations.assets.updateSecurityMarks
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/123/assets/456/securityMarks" "organizations/123/sources/456/findings/789/securityMarks".
     * @param {string=} params.startTime The time at which the updated SecurityMarks take effect.
     * @param {string=} params.updateMask The FieldMask to use when updating the security marks resource.
     * @param {().SecurityMarks} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateSecurityMarks(
      params?: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityMarks>;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      options: MethodOptions | BodyResponseCallback<Schema$SecurityMarks>,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      paramsOrCallback?:
        | Params$Resource$Organizations$Assets$Updatesecuritymarks
        | BodyResponseCallback<Schema$SecurityMarks>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityMarks>,
      callback?: BodyResponseCallback<Schema$SecurityMarks>
    ): void | GaxiosPromise<Schema$SecurityMarks> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Assets$Updatesecuritymarks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Assets$Updatesecuritymarks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityMarks>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SecurityMarks>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Assets$Group
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the organization to groupBy. Its format is "organizations/[organization_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GroupAssetsRequest;
  }
  export interface Params$Resource$Organizations$Assets$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When compare_duration is set, the ListAssetResult's "state" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time.  The state value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again.  Possible "state" values when compare_duration is specified:  * "ADDED": indicates that the asset was not present before              compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of              compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the              start and the end of the time period defined by              compare_duration and read_time.  If compare_duration is not specified, then the only possible state is "UNUSED", which indicates that the asset is present at read_time.
     */
    compareDuration?: string;
    /**
     * Optional.  A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields.
     */
    fieldMask?: string;
    /**
     * Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`.  Restrictions have the form `<field> <operator> <value>` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include:  * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka  The supported operators are:  * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings.  The supported value types are:  * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.  For example, `resource_properties.size = 100` is a valid filter string.
     */
    filter?: string;
    /**
     * Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name     desc  ,   resource_properties.a_property  " are equivalent.
     */
    orderBy?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Name of the organization assets should belong to. Its format is "organizations/[organization_id]".
     */
    parent?: string;
    /**
     * Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     */
    readTime?: string;
  }
  export interface Params$Resource$Organizations$Assets$Rundiscovery
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the organization to run asset discovery for. Its format is "organizations/[organization_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunAssetDiscoveryRequest;
  }
  export interface Params$Resource$Organizations$Assets$Updatesecuritymarks
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/123/assets/456/securityMarks" "organizations/123/sources/456/findings/789/securityMarks".
     */
    name?: string;
    /**
     * The time at which the updated SecurityMarks take effect.
     */
    startTime?: string;
    /**
     * The FieldMask to use when updating the security marks resource.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityMarks;
  }

  export class Resource$Organizations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * securitycenter.organizations.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @alias securitycenter.organizations.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {().CancelOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Organizations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Organizations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Organizations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Organizations$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:cancel').replace(
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * securitycenter.organizations.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias securitycenter.organizations.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Organizations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Operations$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * securitycenter.organizations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias securitycenter.organizations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Organizations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Organizations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Organizations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * securitycenter.organizations.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @alias securitycenter.organizations.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Organizations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Organizations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Organizations$Operations$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Operations$List
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
     * The name of the operation's parent resource.
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

  export class Resource$Organizations$Sources {
    context: APIRequestContext;
    findings: Resource$Organizations$Sources$Findings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.findings = new Resource$Organizations$Sources$Findings(this.context);
    }

    /**
     * securitycenter.organizations.sources.create
     * @desc Creates a source.
     * @alias securitycenter.organizations.sources.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Resource name of the new source's parent. Its format should be "organizations/[organization_id]".
     * @param {().Source} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Organizations$Sources$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Source>;
    create(
      params: Params$Resource$Organizations$Sources$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    create(
      params: Params$Resource$Organizations$Sources$Create,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    create(callback: BodyResponseCallback<Schema$Source>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Create
        | BodyResponseCallback<Schema$Source>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback?: BodyResponseCallback<Schema$Source>
    ): void | GaxiosPromise<Schema$Source> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/sources').replace(
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
        createAPIRequest<Schema$Source>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Source>(parameters);
      }
    }

    /**
     * securitycenter.organizations.sources.get
     * @desc Gets a source.
     * @alias securitycenter.organizations.sources.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Relative resource name of the source. Its format is "organizations/[organization_id]/source/[source_id]".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Organizations$Sources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Source>;
    get(
      params: Params$Resource$Organizations$Sources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    get(
      params: Params$Resource$Organizations$Sources$Get,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    get(callback: BodyResponseCallback<Schema$Source>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Get
        | BodyResponseCallback<Schema$Source>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback?: BodyResponseCallback<Schema$Source>
    ): void | GaxiosPromise<Schema$Source> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Source>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Source>(parameters);
      }
    }

    /**
     * securitycenter.organizations.sources.getIamPolicy
     * @desc Gets the access control policy on the specified Source.
     * @alias securitycenter.organizations.sources.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Organizations$Sources$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Organizations$Sources$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Organizations$Sources$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * securitycenter.organizations.sources.list
     * @desc Lists all sources belonging to an organization.
     * @alias securitycenter.organizations.sources.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string=} params.pageToken The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.
     * @param {string} params.parent Resource name of the parent of sources to list. Its format should be "organizations/[organization_id]".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Organizations$Sources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSourcesResponse>;
    list(
      params: Params$Resource$Organizations$Sources$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Sources$List,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$List
        | BodyResponseCallback<Schema$ListSourcesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSourcesResponse>,
      callback?: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void | GaxiosPromise<Schema$ListSourcesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/sources').replace(
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
        createAPIRequest<Schema$ListSourcesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSourcesResponse>(parameters);
      }
    }

    /**
     * securitycenter.organizations.sources.patch
     * @desc Updates a source.
     * @alias securitycenter.organizations.sources.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/123/sources/456"
     * @param {string=} params.updateMask The FieldMask to use when updating the source resource.
     * @param {().Source} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Organizations$Sources$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Source>;
    patch(
      params: Params$Resource$Organizations$Sources$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sources$Patch,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Source>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Patch
        | BodyResponseCallback<Schema$Source>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback?: BodyResponseCallback<Schema$Source>
    ): void | GaxiosPromise<Schema$Source> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Source>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Source>(parameters);
      }
    }

    /**
     * securitycenter.organizations.sources.setIamPolicy
     * @desc Sets the access control policy on the specified Source.
     * @alias securitycenter.organizations.sources.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Organizations$Sources$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Organizations$Sources$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Organizations$Sources$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * securitycenter.organizations.sources.testIamPermissions
     * @desc Returns the permissions that a caller has on the specified source.
     * @alias securitycenter.organizations.sources.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Organizations$Sources$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Organizations$Sources$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Organizations$Sources$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Sources$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the new source's parent. Its format should be "organizations/[organization_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Source;
  }
  export interface Params$Resource$Organizations$Sources$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Relative resource name of the source. Its format is "organizations/[organization_id]/source/[source_id]".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Sources$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Organizations$Sources$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Resource name of the parent of sources to list. Its format should be "organizations/[organization_id]".
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Sources$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/123/sources/456"
     */
    name?: string;
    /**
     * The FieldMask to use when updating the source resource.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Source;
  }
  export interface Params$Resource$Organizations$Sources$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Organizations$Sources$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Organizations$Sources$Findings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * securitycenter.organizations.sources.findings.create
     * @desc Creates a finding. The corresponding source must exist for finding creation to succeed.
     * @alias securitycenter.organizations.sources.findings.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.findingId Unique identifier provided by the client within the parent scope. It must be alphanumeric and less than or equal to 32 characters and greater than 0 characters in length.
     * @param {string} params.parent Resource name of the new finding's parent. Its format should be "organizations/[organization_id]/sources/[source_id]".
     * @param {().Finding} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Organizations$Sources$Findings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    create(
      params: Params$Resource$Organizations$Sources$Findings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    create(
      params: Params$Resource$Organizations$Sources$Findings$Create,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    create(callback: BodyResponseCallback<Schema$Finding>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Create
        | BodyResponseCallback<Schema$Finding>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback?: BodyResponseCallback<Schema$Finding>
    ): void | GaxiosPromise<Schema$Finding> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/findings').replace(
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
        createAPIRequest<Schema$Finding>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * securitycenter.organizations.sources.findings.group
     * @desc Filters an organization or source's findings and  groups them by their specified properties.  To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/123/sources/-/findings
     * @alias securitycenter.organizations.sources.findings.group
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Name of the source to groupBy. Its format is "organizations/[organization_id]/sources/[source_id]". To groupBy across all sources provide a source_id of `-`. For example: organizations/123/sources/-
     * @param {().GroupFindingsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    group(
      params?: Params$Resource$Organizations$Sources$Findings$Group,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GroupFindingsResponse>;
    group(
      params: Params$Resource$Organizations$Sources$Findings$Group,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GroupFindingsResponse>,
      callback: BodyResponseCallback<Schema$GroupFindingsResponse>
    ): void;
    group(
      params: Params$Resource$Organizations$Sources$Findings$Group,
      callback: BodyResponseCallback<Schema$GroupFindingsResponse>
    ): void;
    group(callback: BodyResponseCallback<Schema$GroupFindingsResponse>): void;
    group(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Group
        | BodyResponseCallback<Schema$GroupFindingsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GroupFindingsResponse>,
      callback?: BodyResponseCallback<Schema$GroupFindingsResponse>
    ): void | GaxiosPromise<Schema$GroupFindingsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Group;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Group;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/findings:group').replace(
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
        createAPIRequest<Schema$GroupFindingsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GroupFindingsResponse>(parameters);
      }
    }

    /**
     * securitycenter.organizations.sources.findings.list
     * @desc Lists an organization or source's findings.  To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/123/sources/-/findings
     * @alias securitycenter.organizations.sources.findings.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.fieldMask Optional.  A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields.
     * @param {string=} params.filter Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`.  Restrictions have the form `<field> <operator> <value>` and may have a `-` character in front of them to indicate negation. Examples include:   * name  * source_properties.a_property  * security_marks.marks.marka  The supported operators are:  * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings.  The supported value types are:  * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.  For example, `source_properties.size = 100` is a valid filter string.
     * @param {string=} params.orderBy Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name     desc  ,   source_properties.a_property  " are equivalent.
     * @param {integer=} params.pageSize The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string=} params.pageToken The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data.
     * @param {string} params.parent Name of the source the findings belong to. Its format is "organizations/[organization_id]/sources/[source_id]". To list across all sources provide a source_id of `-`. For example: organizations/123/sources/-
     * @param {string=} params.readTime Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Organizations$Sources$Findings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFindingsResponse>;
    list(
      params: Params$Resource$Organizations$Sources$Findings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Sources$Findings$List,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFindingsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$List
        | BodyResponseCallback<Schema$ListFindingsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>,
      callback?: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void | GaxiosPromise<Schema$ListFindingsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/findings').replace(
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
        createAPIRequest<Schema$ListFindingsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFindingsResponse>(parameters);
      }
    }

    /**
     * securitycenter.organizations.sources.findings.patch
     * @desc Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.
     * @alias securitycenter.organizations.sources.findings.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/123/sources/456/findings/789"
     * @param {string=} params.updateMask The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding.
     * @param {().Finding} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Organizations$Sources$Findings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Patch,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Finding>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Patch
        | BodyResponseCallback<Schema$Finding>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback?: BodyResponseCallback<Schema$Finding>
    ): void | GaxiosPromise<Schema$Finding> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Finding>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * securitycenter.organizations.sources.findings.setState
     * @desc Updates the state of a finding.
     * @alias securitycenter.organizations.sources.findings.setState
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The relative resource name of the finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/123/sources/456/finding/789".
     * @param {().SetFindingStateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setState(
      params?: Params$Resource$Organizations$Sources$Findings$Setstate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    setState(
      params: Params$Resource$Organizations$Sources$Findings$Setstate,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setState(
      params: Params$Resource$Organizations$Sources$Findings$Setstate,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setState(callback: BodyResponseCallback<Schema$Finding>): void;
    setState(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Setstate
        | BodyResponseCallback<Schema$Finding>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback?: BodyResponseCallback<Schema$Finding>
    ): void | GaxiosPromise<Schema$Finding> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Setstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Setstate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setState').replace(
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
        createAPIRequest<Schema$Finding>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * securitycenter.organizations.sources.findings.updateSecurityMarks
     * @desc Updates security marks.
     * @alias securitycenter.organizations.sources.findings.updateSecurityMarks
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/123/assets/456/securityMarks" "organizations/123/sources/456/findings/789/securityMarks".
     * @param {string=} params.startTime The time at which the updated SecurityMarks take effect.
     * @param {string=} params.updateMask The FieldMask to use when updating the security marks resource.
     * @param {().SecurityMarks} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateSecurityMarks(
      params?: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityMarks>;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      options: MethodOptions | BodyResponseCallback<Schema$SecurityMarks>,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks
        | BodyResponseCallback<Schema$SecurityMarks>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityMarks>,
      callback?: BodyResponseCallback<Schema$SecurityMarks>
    ): void | GaxiosPromise<Schema$SecurityMarks> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityMarks>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SecurityMarks>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Sources$Findings$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Unique identifier provided by the client within the parent scope. It must be alphanumeric and less than or equal to 32 characters and greater than 0 characters in length.
     */
    findingId?: string;
    /**
     * Resource name of the new finding's parent. Its format should be "organizations/[organization_id]/sources/[source_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Finding;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Group
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the source to groupBy. Its format is "organizations/[organization_id]/sources/[source_id]". To groupBy across all sources provide a source_id of `-`. For example: organizations/123/sources/-
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GroupFindingsRequest;
  }
  export interface Params$Resource$Organizations$Sources$Findings$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional.  A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields.
     */
    fieldMask?: string;
    /**
     * Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`.  Restrictions have the form `<field> <operator> <value>` and may have a `-` character in front of them to indicate negation. Examples include:   * name  * source_properties.a_property  * security_marks.marks.marka  The supported operators are:  * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings.  The supported value types are:  * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.  For example, `source_properties.size = 100` is a valid filter string.
     */
    filter?: string;
    /**
     * Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name     desc  ,   source_properties.a_property  " are equivalent.
     */
    orderBy?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Name of the source the findings belong to. Its format is "organizations/[organization_id]/sources/[source_id]". To list across all sources provide a source_id of `-`. For example: organizations/123/sources/-
     */
    parent?: string;
    /**
     * Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     */
    readTime?: string;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/123/sources/456/findings/789"
     */
    name?: string;
    /**
     * The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Finding;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Setstate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The relative resource name of the finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/123/sources/456/finding/789".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetFindingStateRequest;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/123/assets/456/securityMarks" "organizations/123/sources/456/findings/789/securityMarks".
     */
    name?: string;
    /**
     * The time at which the updated SecurityMarks take effect.
     */
    startTime?: string;
    /**
     * The FieldMask to use when updating the security marks resource.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityMarks;
  }
}
