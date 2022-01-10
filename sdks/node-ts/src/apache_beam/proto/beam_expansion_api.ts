// @generated by protobuf-ts 2.1.0 with parameter
// client_grpc1,generate_dependencies
// @generated from protobuf file "beam_expansion_api.proto" (package
// "org.apache.beam.model.expansion.v1", syntax proto3)
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
// Protocol Buffers describing the Expansion API, an api for expanding
// transforms in a remote SDK.
//
import {ServiceType} from '@protobuf-ts/runtime-rpc';
import type {BinaryWriteOptions} from '@protobuf-ts/runtime';
import type {IBinaryWriter} from '@protobuf-ts/runtime';
import {WireType} from '@protobuf-ts/runtime';
import type {BinaryReadOptions} from '@protobuf-ts/runtime';
import type {IBinaryReader} from '@protobuf-ts/runtime';
import {UnknownFieldHandler} from '@protobuf-ts/runtime';
import type {PartialMessage} from '@protobuf-ts/runtime';
import {reflectionMergePartial} from '@protobuf-ts/runtime';
import {MESSAGE_TYPE} from '@protobuf-ts/runtime';
import {MessageType} from '@protobuf-ts/runtime';
import {PTransform} from './beam_runner_api';
import {Components} from './beam_runner_api';
/**
 * @generated from protobuf message
 * org.apache.beam.model.expansion.v1.ExpansionRequest
 */
export interface ExpansionRequest {
  /**
   * Set of components needed to interpret the transform, or which
   * may be useful for its expansion.  This includes the input
   * PCollections (if any) to the to-be-expanded transform, along
   * with their coders and windowing strategies.
   *
   * @generated from protobuf field:
   * org.apache.beam.model.pipeline.v1.Components components = 1;
   */
  components?: Components;
  /**
   * The actual PTransform to be expaneded according to its spec.
   * Its input should be set, but its subtransforms and outputs
   * should not be.
   *
   * @generated from protobuf field:
   * org.apache.beam.model.pipeline.v1.PTransform transform = 2;
   */
  transform?: PTransform;
  /**
   * A namespace (prefix) to use for the id of any newly created
   * components.
   *
   * @generated from protobuf field: string namespace = 3;
   */
  namespace: string;
}
/**
 * @generated from protobuf message
 * org.apache.beam.model.expansion.v1.ExpansionResponse
 */
export interface ExpansionResponse {
  /**
   * Set of components needed to execute the expanded transform,
   * including the (original) inputs, outputs, and subtransforms.
   *
   * @generated from protobuf field:
   * org.apache.beam.model.pipeline.v1.Components components = 1;
   */
  components?: Components;
  /**
   * The expanded transform itself, with references to its outputs
   * and subtransforms.
   *
   * @generated from protobuf field:
   * org.apache.beam.model.pipeline.v1.PTransform transform = 2;
   */
  transform?: PTransform;
  /**
   * A set of requirements that must be appended to this pipeline's
   * requirements.
   *
   * @generated from protobuf field: repeated string requirements = 3;
   */
  requirements: string[];
  /**
   * (Optional) An string representation of any error encountered while
   * attempting to expand this transform.
   *
   * @generated from protobuf field: string error = 10;
   */
  error: string;
}
// @generated message type with reflection information, may provide speed
// optimized methods
class ExpansionRequest$Type extends MessageType<ExpansionRequest> {
  constructor() {
    super('org.apache.beam.model.expansion.v1.ExpansionRequest', [
      {no: 1, name: 'components', kind: 'message', T: () => Components},
      {no: 2, name: 'transform', kind: 'message', T: () => PTransform},
      {no: 3, name: 'namespace', kind: 'scalar', T: 9 /*ScalarType.STRING*/}
    ]);
  }
  create(value?: PartialMessage<ExpansionRequest>): ExpansionRequest {
    const message = {namespace: ''};
    globalThis.Object.defineProperty(
        message, MESSAGE_TYPE, {enumerable: false, value: this});
    if (value !== undefined)
      reflectionMergePartial<ExpansionRequest>(this, message, value);
    return message;
  }
  internalBinaryRead(
      reader: IBinaryReader, length: number, options: BinaryReadOptions,
      target?: ExpansionRequest): ExpansionRequest {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* org.apache.beam.model.pipeline.v1.Components components */ 1:
          message.components = Components.internalBinaryRead(
              reader, reader.uint32(), options, message.components);
          break;
        case /* org.apache.beam.model.pipeline.v1.PTransform transform */ 2:
          message.transform = PTransform.internalBinaryRead(
              reader, reader.uint32(), options, message.transform);
          break;
        case /* string namespace */ 3:
          message.namespace = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === 'throw')
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${
                wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
                this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(
      message: ExpansionRequest, writer: IBinaryWriter,
      options: BinaryWriteOptions): IBinaryWriter {
    /* org.apache.beam.model.pipeline.v1.Components components = 1; */
    if (message.components)
      Components
          .internalBinaryWrite(
              message.components,
              writer.tag(1, WireType.LengthDelimited).fork(), options)
          .join();
    /* org.apache.beam.model.pipeline.v1.PTransform transform = 2; */
    if (message.transform)
      PTransform
          .internalBinaryWrite(
              message.transform, writer.tag(2, WireType.LengthDelimited).fork(),
              options)
          .join();
    /* string namespace = 3; */
    if (message.namespace !== '')
      writer.tag(3, WireType.LengthDelimited).string(message.namespace);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
          this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message
 * org.apache.beam.model.expansion.v1.ExpansionRequest
 */
export const ExpansionRequest = new ExpansionRequest$Type();
// @generated message type with reflection information, may provide speed
// optimized methods
class ExpansionResponse$Type extends MessageType<ExpansionResponse> {
  constructor() {
    super('org.apache.beam.model.expansion.v1.ExpansionResponse', [
      {no: 1, name: 'components', kind: 'message', T: () => Components},
      {no: 2, name: 'transform', kind: 'message', T: () => PTransform}, {
        no: 3,
        name: 'requirements',
        kind: 'scalar',
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: 9 /*ScalarType.STRING*/
      },
      {no: 10, name: 'error', kind: 'scalar', T: 9 /*ScalarType.STRING*/}
    ]);
  }
  create(value?: PartialMessage<ExpansionResponse>): ExpansionResponse {
    const message = {requirements: [], error: ''};
    globalThis.Object.defineProperty(
        message, MESSAGE_TYPE, {enumerable: false, value: this});
    if (value !== undefined)
      reflectionMergePartial<ExpansionResponse>(this, message, value);
    return message;
  }
  internalBinaryRead(
      reader: IBinaryReader, length: number, options: BinaryReadOptions,
      target?: ExpansionResponse): ExpansionResponse {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* org.apache.beam.model.pipeline.v1.Components components */ 1:
          message.components = Components.internalBinaryRead(
              reader, reader.uint32(), options, message.components);
          break;
        case /* org.apache.beam.model.pipeline.v1.PTransform transform */ 2:
          message.transform = PTransform.internalBinaryRead(
              reader, reader.uint32(), options, message.transform);
          break;
        case /* repeated string requirements */ 3:
          message.requirements.push(reader.string());
          break;
        case /* string error */ 10:
          message.error = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === 'throw')
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${
                wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
                this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(
      message: ExpansionResponse, writer: IBinaryWriter,
      options: BinaryWriteOptions): IBinaryWriter {
    /* org.apache.beam.model.pipeline.v1.Components components = 1; */
    if (message.components)
      Components
          .internalBinaryWrite(
              message.components,
              writer.tag(1, WireType.LengthDelimited).fork(), options)
          .join();
    /* org.apache.beam.model.pipeline.v1.PTransform transform = 2; */
    if (message.transform)
      PTransform
          .internalBinaryWrite(
              message.transform, writer.tag(2, WireType.LengthDelimited).fork(),
              options)
          .join();
    /* repeated string requirements = 3; */
    for (let i = 0; i < message.requirements.length; i++)
      writer.tag(3, WireType.LengthDelimited).string(message.requirements[i]);
    /* string error = 10; */
    if (message.error !== '')
      writer.tag(10, WireType.LengthDelimited).string(message.error);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
          this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message
 * org.apache.beam.model.expansion.v1.ExpansionResponse
 */
export const ExpansionResponse = new ExpansionResponse$Type();
/**
 * @generated ServiceType for protobuf service
 * org.apache.beam.model.expansion.v1.ExpansionService
 */
export const ExpansionService = new ServiceType(
    'org.apache.beam.model.expansion.v1.ExpansionService',
    [{name: 'Expand', options: {}, I: ExpansionRequest, O: ExpansionResponse}]);
