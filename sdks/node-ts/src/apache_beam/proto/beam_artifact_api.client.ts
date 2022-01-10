// @generated by protobuf-ts 2.1.0 with parameter generate_dependencies
// @generated from protobuf file "beam_artifact_api.proto" (package
// "org.apache.beam.model.job_management.v1", syntax proto3)
// tslint:disable
//
//
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
//
// Protocol Buffers describing the Artifact API, for communicating with a runner
// for artifact staging and retrieval over GRPC.
//
import {LegacyArtifactRetrievalService} from './beam_artifact_api';
import type {ArtifactChunk} from './beam_artifact_api';
import type {LegacyGetArtifactRequest} from './beam_artifact_api';
import type {GetManifestResponse} from './beam_artifact_api';
import type {GetManifestRequest} from './beam_artifact_api';
import {LegacyArtifactStagingService} from './beam_artifact_api';
import type {CommitManifestResponse} from './beam_artifact_api';
import type {CommitManifestRequest} from './beam_artifact_api';
import type {PutArtifactResponse} from './beam_artifact_api';
import type {PutArtifactRequest} from './beam_artifact_api';
import type {ClientStreamingCall} from '@protobuf-ts/runtime-rpc';
import {ArtifactStagingService} from './beam_artifact_api';
import type {ArtifactRequestWrapper} from './beam_artifact_api';
import type {ArtifactResponseWrapper} from './beam_artifact_api';
import type {DuplexStreamingCall} from '@protobuf-ts/runtime-rpc';
import type {RpcTransport} from '@protobuf-ts/runtime-rpc';
import type {ServiceInfo} from '@protobuf-ts/runtime-rpc';
import {ArtifactRetrievalService} from './beam_artifact_api';
import type {GetArtifactResponse} from './beam_artifact_api';
import type {GetArtifactRequest} from './beam_artifact_api';
import type {ServerStreamingCall} from '@protobuf-ts/runtime-rpc';
import {stackIntercept} from '@protobuf-ts/runtime-rpc';
import type {ResolveArtifactsResponse} from './beam_artifact_api';
import type {ResolveArtifactsRequest} from './beam_artifact_api';
import type {UnaryCall} from '@protobuf-ts/runtime-rpc';
import type {RpcOptions} from '@protobuf-ts/runtime-rpc';
/**
 * A service to retrieve artifacts for use in a Job.
 *
 * @generated from protobuf service
 * org.apache.beam.model.job_management.v1.ArtifactRetrievalService
 */
export interface IArtifactRetrievalServiceClient {
  /**
   * Resolves the given artifact references into one or more replacement
   * artifact references (e.g. a Maven dependency into a (transitive) set
   * of jars.
   *
   * @generated from protobuf rpc:
   * ResolveArtifacts(org.apache.beam.model.job_management.v1.ResolveArtifactsRequest)
   * returns (org.apache.beam.model.job_management.v1.ResolveArtifactsResponse);
   */
  resolveArtifacts(input: ResolveArtifactsRequest, options?: RpcOptions):
      UnaryCall<ResolveArtifactsRequest, ResolveArtifactsResponse>;
  /**
   * Retrieves the given artifact as a stream of bytes.
   *
   * @generated from protobuf rpc:
   * GetArtifact(org.apache.beam.model.job_management.v1.GetArtifactRequest)
   * returns (stream
   * org.apache.beam.model.job_management.v1.GetArtifactResponse);
   */
  getArtifact(input: GetArtifactRequest, options?: RpcOptions):
      ServerStreamingCall<GetArtifactRequest, GetArtifactResponse>;
}
/**
 * A service to retrieve artifacts for use in a Job.
 *
 * @generated from protobuf service
 * org.apache.beam.model.job_management.v1.ArtifactRetrievalService
 */
export class ArtifactRetrievalServiceClient implements
    IArtifactRetrievalServiceClient, ServiceInfo {
  typeName = ArtifactRetrievalService.typeName;
  methods = ArtifactRetrievalService.methods;
  options = ArtifactRetrievalService.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * Resolves the given artifact references into one or more replacement
   * artifact references (e.g. a Maven dependency into a (transitive) set
   * of jars.
   *
   * @generated from protobuf rpc:
   * ResolveArtifacts(org.apache.beam.model.job_management.v1.ResolveArtifactsRequest)
   * returns (org.apache.beam.model.job_management.v1.ResolveArtifactsResponse);
   */
  resolveArtifacts(input: ResolveArtifactsRequest, options?: RpcOptions):
      UnaryCall<ResolveArtifactsRequest, ResolveArtifactsResponse> {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return stackIntercept<ResolveArtifactsRequest, ResolveArtifactsResponse>(
        'unary', this._transport, method, opt, input);
  }
  /**
   * Retrieves the given artifact as a stream of bytes.
   *
   * @generated from protobuf rpc:
   * GetArtifact(org.apache.beam.model.job_management.v1.GetArtifactRequest)
   * returns (stream
   * org.apache.beam.model.job_management.v1.GetArtifactResponse);
   */
  getArtifact(input: GetArtifactRequest, options?: RpcOptions):
      ServerStreamingCall<GetArtifactRequest, GetArtifactResponse> {
    const method = this.methods[1], opt = this._transport.mergeOptions(options);
    return stackIntercept<GetArtifactRequest, GetArtifactResponse>(
        'serverStreaming', this._transport, method, opt, input);
  }
}
/**
 * A service that allows the client to act as an ArtifactRetrievalService,
 * for a particular job with the server initiating requests and receiving
 * responses.
 *
 * A client calls the service with an ArtifactResponseWrapper that has the
 * staging token set, and thereafter responds to the server's requests.
 *
 * @generated from protobuf service
 * org.apache.beam.model.job_management.v1.ArtifactStagingService
 */
export interface IArtifactStagingServiceClient {
  /**
   * @generated from protobuf rpc: ReverseArtifactRetrievalService(stream
   * org.apache.beam.model.job_management.v1.ArtifactResponseWrapper) returns
   * (stream org.apache.beam.model.job_management.v1.ArtifactRequestWrapper);
   */
  reverseArtifactRetrievalService(options?: RpcOptions):
      DuplexStreamingCall<ArtifactResponseWrapper, ArtifactRequestWrapper>;
}
/**
 * A service that allows the client to act as an ArtifactRetrievalService,
 * for a particular job with the server initiating requests and receiving
 * responses.
 *
 * A client calls the service with an ArtifactResponseWrapper that has the
 * staging token set, and thereafter responds to the server's requests.
 *
 * @generated from protobuf service
 * org.apache.beam.model.job_management.v1.ArtifactStagingService
 */
export class ArtifactStagingServiceClient implements
    IArtifactStagingServiceClient, ServiceInfo {
  typeName = ArtifactStagingService.typeName;
  methods = ArtifactStagingService.methods;
  options = ArtifactStagingService.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * @generated from protobuf rpc: ReverseArtifactRetrievalService(stream
   * org.apache.beam.model.job_management.v1.ArtifactResponseWrapper) returns
   * (stream org.apache.beam.model.job_management.v1.ArtifactRequestWrapper);
   */
  reverseArtifactRetrievalService(options?: RpcOptions):
      DuplexStreamingCall<ArtifactResponseWrapper, ArtifactRequestWrapper> {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return stackIntercept<ArtifactResponseWrapper, ArtifactRequestWrapper>(
        'duplex', this._transport, method, opt);
  }
}
// Legacy artifact staging service for pipeline-level artifacts.

/**
 * A service to stage artifacts for use in a Job.
 *
 * @generated from protobuf service
 * org.apache.beam.model.job_management.v1.LegacyArtifactStagingService
 */
export interface ILegacyArtifactStagingServiceClient {
  /**
   * Stage an artifact to be available during job execution. The first request
   * must contain the name of the artifact. All future requests must contain
   * sequential chunks of the content of the artifact.
   *
   * @generated from protobuf rpc: PutArtifact(stream
   * org.apache.beam.model.job_management.v1.PutArtifactRequest) returns
   * (org.apache.beam.model.job_management.v1.PutArtifactResponse);
   */
  putArtifact(options?: RpcOptions):
      ClientStreamingCall<PutArtifactRequest, PutArtifactResponse>;
  /**
   * Commit the manifest for a Job. All artifacts must have been successfully
   * uploaded before this call is made.
   *
   * Throws error INVALID_ARGUMENT if not all of the members of the manifest are
   * present
   *
   * @generated from protobuf rpc:
   * CommitManifest(org.apache.beam.model.job_management.v1.CommitManifestRequest)
   * returns (org.apache.beam.model.job_management.v1.CommitManifestResponse);
   */
  commitManifest(input: CommitManifestRequest, options?: RpcOptions):
      UnaryCall<CommitManifestRequest, CommitManifestResponse>;
}
// Legacy artifact staging service for pipeline-level artifacts.

/**
 * A service to stage artifacts for use in a Job.
 *
 * @generated from protobuf service
 * org.apache.beam.model.job_management.v1.LegacyArtifactStagingService
 */
export class LegacyArtifactStagingServiceClient implements
    ILegacyArtifactStagingServiceClient, ServiceInfo {
  typeName = LegacyArtifactStagingService.typeName;
  methods = LegacyArtifactStagingService.methods;
  options = LegacyArtifactStagingService.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * Stage an artifact to be available during job execution. The first request
   * must contain the name of the artifact. All future requests must contain
   * sequential chunks of the content of the artifact.
   *
   * @generated from protobuf rpc: PutArtifact(stream
   * org.apache.beam.model.job_management.v1.PutArtifactRequest) returns
   * (org.apache.beam.model.job_management.v1.PutArtifactResponse);
   */
  putArtifact(options?: RpcOptions):
      ClientStreamingCall<PutArtifactRequest, PutArtifactResponse> {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return stackIntercept<PutArtifactRequest, PutArtifactResponse>(
        'clientStreaming', this._transport, method, opt);
  }
  /**
   * Commit the manifest for a Job. All artifacts must have been successfully
   * uploaded before this call is made.
   *
   * Throws error INVALID_ARGUMENT if not all of the members of the manifest are
   * present
   *
   * @generated from protobuf rpc:
   * CommitManifest(org.apache.beam.model.job_management.v1.CommitManifestRequest)
   * returns (org.apache.beam.model.job_management.v1.CommitManifestResponse);
   */
  commitManifest(input: CommitManifestRequest, options?: RpcOptions):
      UnaryCall<CommitManifestRequest, CommitManifestResponse> {
    const method = this.methods[1], opt = this._transport.mergeOptions(options);
    return stackIntercept<CommitManifestRequest, CommitManifestResponse>(
        'unary', this._transport, method, opt, input);
  }
}
/**
 * A service to retrieve artifacts for use in a Job.
 *
 * @generated from protobuf service
 * org.apache.beam.model.job_management.v1.LegacyArtifactRetrievalService
 */
export interface ILegacyArtifactRetrievalServiceClient {
  /**
   * Get the manifest for the job
   *
   * @generated from protobuf rpc:
   * GetManifest(org.apache.beam.model.job_management.v1.GetManifestRequest)
   * returns (org.apache.beam.model.job_management.v1.GetManifestResponse);
   */
  getManifest(input: GetManifestRequest, options?: RpcOptions):
      UnaryCall<GetManifestRequest, GetManifestResponse>;
  /**
   * Get an artifact staged for the job. The requested artifact must be within
   * the manifest
   *
   * @generated from protobuf rpc:
   * GetArtifact(org.apache.beam.model.job_management.v1.LegacyGetArtifactRequest)
   * returns (stream org.apache.beam.model.job_management.v1.ArtifactChunk);
   */
  getArtifact(input: LegacyGetArtifactRequest, options?: RpcOptions):
      ServerStreamingCall<LegacyGetArtifactRequest, ArtifactChunk>;
}
/**
 * A service to retrieve artifacts for use in a Job.
 *
 * @generated from protobuf service
 * org.apache.beam.model.job_management.v1.LegacyArtifactRetrievalService
 */
export class LegacyArtifactRetrievalServiceClient implements
    ILegacyArtifactRetrievalServiceClient, ServiceInfo {
  typeName = LegacyArtifactRetrievalService.typeName;
  methods = LegacyArtifactRetrievalService.methods;
  options = LegacyArtifactRetrievalService.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * Get the manifest for the job
   *
   * @generated from protobuf rpc:
   * GetManifest(org.apache.beam.model.job_management.v1.GetManifestRequest)
   * returns (org.apache.beam.model.job_management.v1.GetManifestResponse);
   */
  getManifest(input: GetManifestRequest, options?: RpcOptions):
      UnaryCall<GetManifestRequest, GetManifestResponse> {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return stackIntercept<GetManifestRequest, GetManifestResponse>(
        'unary', this._transport, method, opt, input);
  }
  /**
   * Get an artifact staged for the job. The requested artifact must be within
   * the manifest
   *
   * @generated from protobuf rpc:
   * GetArtifact(org.apache.beam.model.job_management.v1.LegacyGetArtifactRequest)
   * returns (stream org.apache.beam.model.job_management.v1.ArtifactChunk);
   */
  getArtifact(input: LegacyGetArtifactRequest, options?: RpcOptions):
      ServerStreamingCall<LegacyGetArtifactRequest, ArtifactChunk> {
    const method = this.methods[1], opt = this._transport.mergeOptions(options);
    return stackIntercept<LegacyGetArtifactRequest, ArtifactChunk>(
        'serverStreaming', this._transport, method, opt, input);
  }
}
