// @generated by protobuf-ts 2.1.0 with parameter
// client_grpc1,generate_dependencies
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
import type {PutArtifactRequest} from './beam_artifact_api';
import type {PutArtifactResponse} from './beam_artifact_api';
import {ArtifactStagingService} from './beam_artifact_api';
import type {ArtifactRequestWrapper} from './beam_artifact_api';
import type {ArtifactResponseWrapper} from './beam_artifact_api';
import {ArtifactRetrievalService} from './beam_artifact_api';
import type {BinaryWriteOptions} from '@protobuf-ts/runtime';
import type {BinaryReadOptions} from '@protobuf-ts/runtime';
import type {GetArtifactResponse} from './beam_artifact_api';
import type {GetArtifactRequest} from './beam_artifact_api';
import type {ResolveArtifactsResponse} from './beam_artifact_api';
import type {ResolveArtifactsRequest} from './beam_artifact_api';
import * as grpc from '@grpc/grpc-js';
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
  resolveArtifacts(
      input: ResolveArtifactsRequest, metadata: grpc.Metadata,
      options: grpc.CallOptions,
      callback:
          (err: grpc.ServiceError|null,
           value?: ResolveArtifactsResponse) => void): grpc.ClientUnaryCall;
  resolveArtifacts(
      input: ResolveArtifactsRequest, metadata: grpc.Metadata,
      callback:
          (err: grpc.ServiceError|null,
           value?: ResolveArtifactsResponse) => void): grpc.ClientUnaryCall;
  resolveArtifacts(
      input: ResolveArtifactsRequest, options: grpc.CallOptions,
      callback:
          (err: grpc.ServiceError|null,
           value?: ResolveArtifactsResponse) => void): grpc.ClientUnaryCall;
  resolveArtifacts(
      input: ResolveArtifactsRequest,
      callback:
          (err: grpc.ServiceError|null,
           value?: ResolveArtifactsResponse) => void): grpc.ClientUnaryCall;
  /**
   * Retrieves the given artifact as a stream of bytes.
   *
   * @generated from protobuf rpc:
   * GetArtifact(org.apache.beam.model.job_management.v1.GetArtifactRequest)
   * returns (stream
   * org.apache.beam.model.job_management.v1.GetArtifactResponse);
   */
  getArtifact(
      input: GetArtifactRequest, metadata?: grpc.Metadata,
      options?: grpc.CallOptions):
      grpc.ClientReadableStream<GetArtifactResponse>;
  getArtifact(input: GetArtifactRequest, options?: grpc.CallOptions):
      grpc.ClientReadableStream<GetArtifactResponse>;
}
/**
 * A service to retrieve artifacts for use in a Job.
 *
 * @generated from protobuf service
 * org.apache.beam.model.job_management.v1.ArtifactRetrievalService
 */
export class ArtifactRetrievalServiceClient extends grpc.Client implements
    IArtifactRetrievalServiceClient {
  private readonly _binaryOptions:
      Partial<BinaryReadOptions&BinaryWriteOptions>;
  constructor(
      address: string, credentials: grpc.ChannelCredentials,
      options: grpc.ClientOptions = {},
      binaryOptions: Partial<BinaryReadOptions&BinaryWriteOptions> = {}) {
    super(address, credentials, options);
    this._binaryOptions = binaryOptions;
  }
  /**
   * Resolves the given artifact references into one or more replacement
   * artifact references (e.g. a Maven dependency into a (transitive) set
   * of jars.
   *
   * @generated from protobuf rpc:
   * ResolveArtifacts(org.apache.beam.model.job_management.v1.ResolveArtifactsRequest)
   * returns (org.apache.beam.model.job_management.v1.ResolveArtifactsResponse);
   */
  resolveArtifacts(
      input: ResolveArtifactsRequest,
      metadata: grpc.Metadata|grpc.CallOptions|
      ((err: grpc.ServiceError|null, value?: ResolveArtifactsResponse) => void),
      options?: grpc.CallOptions|
      ((err: grpc.ServiceError|null, value?: ResolveArtifactsResponse) => void),
      callback?:
          ((err: grpc.ServiceError|null,
            value?: ResolveArtifactsResponse) => void)): grpc.ClientUnaryCall {
    const method = ArtifactRetrievalService.methods[0];
    return this
        .makeUnaryRequest<ResolveArtifactsRequest, ResolveArtifactsResponse>(
            `/${ArtifactRetrievalService.typeName}/${method.name}`,
            (value: ResolveArtifactsRequest): Buffer =>
                Buffer.from(method.I.toBinary(value, this._binaryOptions)),
            (value: Buffer): ResolveArtifactsResponse =>
                method.O.fromBinary(value, this._binaryOptions),
            input, (metadata as any), (options as any), (callback as any));
  }
  /**
   * Retrieves the given artifact as a stream of bytes.
   *
   * @generated from protobuf rpc:
   * GetArtifact(org.apache.beam.model.job_management.v1.GetArtifactRequest)
   * returns (stream
   * org.apache.beam.model.job_management.v1.GetArtifactResponse);
   */
  getArtifact(
      input: GetArtifactRequest, metadata?: grpc.Metadata|grpc.CallOptions,
      options?: grpc.CallOptions):
      grpc.ClientReadableStream<GetArtifactResponse> {
    const method = ArtifactRetrievalService.methods[1];
    return this
        .makeServerStreamRequest<GetArtifactRequest, GetArtifactResponse>(
            `/${ArtifactRetrievalService.typeName}/${method.name}`,
            (value: GetArtifactRequest): Buffer =>
                Buffer.from(method.I.toBinary(value, this._binaryOptions)),
            (value: Buffer): GetArtifactResponse =>
                method.O.fromBinary(value, this._binaryOptions),
            input, (metadata as any), options);
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
  reverseArtifactRetrievalService(
      metadata: grpc.Metadata, options?: grpc.CallOptions):
      grpc.ClientDuplexStream<ArtifactResponseWrapper, ArtifactRequestWrapper>;
  reverseArtifactRetrievalService(options?: grpc.CallOptions):
      grpc.ClientDuplexStream<ArtifactResponseWrapper, ArtifactRequestWrapper>;
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
export class ArtifactStagingServiceClient extends grpc.Client implements
    IArtifactStagingServiceClient {
  private readonly _binaryOptions:
      Partial<BinaryReadOptions&BinaryWriteOptions>;
  constructor(
      address: string, credentials: grpc.ChannelCredentials,
      options: grpc.ClientOptions = {},
      binaryOptions: Partial<BinaryReadOptions&BinaryWriteOptions> = {}) {
    super(address, credentials, options);
    this._binaryOptions = binaryOptions;
  }
  /**
   * @generated from protobuf rpc: ReverseArtifactRetrievalService(stream
   * org.apache.beam.model.job_management.v1.ArtifactResponseWrapper) returns
   * (stream org.apache.beam.model.job_management.v1.ArtifactRequestWrapper);
   */
  reverseArtifactRetrievalService(
      metadata?: grpc.Metadata|grpc.CallOptions, options?: grpc.CallOptions):
      grpc.ClientDuplexStream<ArtifactResponseWrapper, ArtifactRequestWrapper> {
    const method = ArtifactStagingService.methods[0];
    return this
        .makeBidiStreamRequest<ArtifactResponseWrapper, ArtifactRequestWrapper>(
            `/${ArtifactStagingService.typeName}/${method.name}`,
            (value: ArtifactResponseWrapper): Buffer =>
                Buffer.from(method.I.toBinary(value, this._binaryOptions)),
            (value: Buffer): ArtifactRequestWrapper =>
                method.O.fromBinary(value, this._binaryOptions),
            (metadata as any), options);
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
  putArtifact(
      metadata: grpc.Metadata, options: grpc.CallOptions,
      callback:
          (err: grpc.ServiceError|null, value?: PutArtifactResponse) => void):
      grpc.ClientWritableStream<PutArtifactRequest>;
  putArtifact(
      metadata: grpc.Metadata,
      callback:
          (err: grpc.ServiceError|null, value?: PutArtifactResponse) => void):
      grpc.ClientWritableStream<PutArtifactRequest>;
  putArtifact(
      options: grpc.CallOptions,
      callback:
          (err: grpc.ServiceError|null, value?: PutArtifactResponse) => void):
      grpc.ClientWritableStream<PutArtifactRequest>;
  putArtifact(
      callback:
          (err: grpc.ServiceError|null, value?: PutArtifactResponse) => void):
      grpc.ClientWritableStream<PutArtifactRequest>;
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
  commitManifest(
      input: CommitManifestRequest, metadata: grpc.Metadata,
      options: grpc.CallOptions,
      callback: (err: grpc.ServiceError|null, value?: CommitManifestResponse) =>
          void): grpc.ClientUnaryCall;
  commitManifest(
      input: CommitManifestRequest, metadata: grpc.Metadata,
      callback: (err: grpc.ServiceError|null, value?: CommitManifestResponse) =>
          void): grpc.ClientUnaryCall;
  commitManifest(
      input: CommitManifestRequest, options: grpc.CallOptions,
      callback: (err: grpc.ServiceError|null, value?: CommitManifestResponse) =>
          void): grpc.ClientUnaryCall;
  commitManifest(
      input: CommitManifestRequest,
      callback: (err: grpc.ServiceError|null, value?: CommitManifestResponse) =>
          void): grpc.ClientUnaryCall;
}
// Legacy artifact staging service for pipeline-level artifacts.

/**
 * A service to stage artifacts for use in a Job.
 *
 * @generated from protobuf service
 * org.apache.beam.model.job_management.v1.LegacyArtifactStagingService
 */
export class LegacyArtifactStagingServiceClient extends grpc.Client implements
    ILegacyArtifactStagingServiceClient {
  private readonly _binaryOptions:
      Partial<BinaryReadOptions&BinaryWriteOptions>;
  constructor(
      address: string, credentials: grpc.ChannelCredentials,
      options: grpc.ClientOptions = {},
      binaryOptions: Partial<BinaryReadOptions&BinaryWriteOptions> = {}) {
    super(address, credentials, options);
    this._binaryOptions = binaryOptions;
  }
  /**
   * Stage an artifact to be available during job execution. The first request
   * must contain the name of the artifact. All future requests must contain
   * sequential chunks of the content of the artifact.
   *
   * @generated from protobuf rpc: PutArtifact(stream
   * org.apache.beam.model.job_management.v1.PutArtifactRequest) returns
   * (org.apache.beam.model.job_management.v1.PutArtifactResponse);
   */
  putArtifact(
      metadata: grpc.Metadata|grpc.CallOptions|
      ((err: grpc.ServiceError|null, value?: PutArtifactResponse) => void),
      options?: grpc.CallOptions|
      ((err: grpc.ServiceError|null, value?: PutArtifactResponse) => void),
      callback?:
          ((err: grpc.ServiceError|null, value?: PutArtifactResponse) => void)):
      grpc.ClientWritableStream<PutArtifactRequest> {
    const method = LegacyArtifactStagingService.methods[0];
    return this
        .makeClientStreamRequest<PutArtifactRequest, PutArtifactResponse>(
            `/${LegacyArtifactStagingService.typeName}/${method.name}`,
            (value: PutArtifactRequest): Buffer =>
                Buffer.from(method.I.toBinary(value, this._binaryOptions)),
            (value: Buffer): PutArtifactResponse =>
                method.O.fromBinary(value, this._binaryOptions),
            (metadata as any), (options as any), (callback as any));
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
  commitManifest(
      input: CommitManifestRequest,
      metadata: grpc.Metadata|grpc.CallOptions|
      ((err: grpc.ServiceError|null, value?: CommitManifestResponse) => void),
      options?: grpc.CallOptions|
      ((err: grpc.ServiceError|null, value?: CommitManifestResponse) => void),
      callback?:
          ((err: grpc.ServiceError|null,
            value?: CommitManifestResponse) => void)): grpc.ClientUnaryCall {
    const method = LegacyArtifactStagingService.methods[1];
    return this.makeUnaryRequest<CommitManifestRequest, CommitManifestResponse>(
        `/${LegacyArtifactStagingService.typeName}/${method.name}`,
        (value: CommitManifestRequest): Buffer =>
            Buffer.from(method.I.toBinary(value, this._binaryOptions)),
        (value: Buffer): CommitManifestResponse =>
            method.O.fromBinary(value, this._binaryOptions),
        input, (metadata as any), (options as any), (callback as any));
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
  getManifest(
      input: GetManifestRequest, metadata: grpc.Metadata,
      options: grpc.CallOptions,
      callback:
          (err: grpc.ServiceError|null, value?: GetManifestResponse) => void):
      grpc.ClientUnaryCall;
  getManifest(
      input: GetManifestRequest, metadata: grpc.Metadata,
      callback:
          (err: grpc.ServiceError|null, value?: GetManifestResponse) => void):
      grpc.ClientUnaryCall;
  getManifest(
      input: GetManifestRequest, options: grpc.CallOptions,
      callback:
          (err: grpc.ServiceError|null, value?: GetManifestResponse) => void):
      grpc.ClientUnaryCall;
  getManifest(
      input: GetManifestRequest,
      callback:
          (err: grpc.ServiceError|null, value?: GetManifestResponse) => void):
      grpc.ClientUnaryCall;
  /**
   * Get an artifact staged for the job. The requested artifact must be within
   * the manifest
   *
   * @generated from protobuf rpc:
   * GetArtifact(org.apache.beam.model.job_management.v1.LegacyGetArtifactRequest)
   * returns (stream org.apache.beam.model.job_management.v1.ArtifactChunk);
   */
  getArtifact(
      input: LegacyGetArtifactRequest, metadata?: grpc.Metadata,
      options?: grpc.CallOptions): grpc.ClientReadableStream<ArtifactChunk>;
  getArtifact(input: LegacyGetArtifactRequest, options?: grpc.CallOptions):
      grpc.ClientReadableStream<ArtifactChunk>;
}
/**
 * A service to retrieve artifacts for use in a Job.
 *
 * @generated from protobuf service
 * org.apache.beam.model.job_management.v1.LegacyArtifactRetrievalService
 */
export class LegacyArtifactRetrievalServiceClient extends grpc.Client implements
    ILegacyArtifactRetrievalServiceClient {
  private readonly _binaryOptions:
      Partial<BinaryReadOptions&BinaryWriteOptions>;
  constructor(
      address: string, credentials: grpc.ChannelCredentials,
      options: grpc.ClientOptions = {},
      binaryOptions: Partial<BinaryReadOptions&BinaryWriteOptions> = {}) {
    super(address, credentials, options);
    this._binaryOptions = binaryOptions;
  }
  /**
   * Get the manifest for the job
   *
   * @generated from protobuf rpc:
   * GetManifest(org.apache.beam.model.job_management.v1.GetManifestRequest)
   * returns (org.apache.beam.model.job_management.v1.GetManifestResponse);
   */
  getManifest(
      input: GetManifestRequest,
      metadata: grpc.Metadata|grpc.CallOptions|
      ((err: grpc.ServiceError|null, value?: GetManifestResponse) => void),
      options?: grpc.CallOptions|
      ((err: grpc.ServiceError|null, value?: GetManifestResponse) => void),
      callback?:
          ((err: grpc.ServiceError|null, value?: GetManifestResponse) => void)):
      grpc.ClientUnaryCall {
    const method = LegacyArtifactRetrievalService.methods[0];
    return this.makeUnaryRequest<GetManifestRequest, GetManifestResponse>(
        `/${LegacyArtifactRetrievalService.typeName}/${method.name}`,
        (value: GetManifestRequest): Buffer =>
            Buffer.from(method.I.toBinary(value, this._binaryOptions)),
        (value: Buffer): GetManifestResponse =>
            method.O.fromBinary(value, this._binaryOptions),
        input, (metadata as any), (options as any), (callback as any));
  }
  /**
   * Get an artifact staged for the job. The requested artifact must be within
   * the manifest
   *
   * @generated from protobuf rpc:
   * GetArtifact(org.apache.beam.model.job_management.v1.LegacyGetArtifactRequest)
   * returns (stream org.apache.beam.model.job_management.v1.ArtifactChunk);
   */
  getArtifact(
      input: LegacyGetArtifactRequest,
      metadata?: grpc.Metadata|grpc.CallOptions,
      options?: grpc.CallOptions): grpc.ClientReadableStream<ArtifactChunk> {
    const method = LegacyArtifactRetrievalService.methods[1];
    return this
        .makeServerStreamRequest<LegacyGetArtifactRequest, ArtifactChunk>(
            `/${LegacyArtifactRetrievalService.typeName}/${method.name}`,
            (value: LegacyGetArtifactRequest): Buffer =>
                Buffer.from(method.I.toBinary(value, this._binaryOptions)),
            (value: Buffer): ArtifactChunk =>
                method.O.fromBinary(value, this._binaryOptions),
            input, (metadata as any), options);
  }
}
