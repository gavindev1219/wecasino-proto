// @generated by protoc-gen-es v1.1.0 with parameter "target=ts,import_extension=none"
// @generated from file recorder/recorder.proto (package recorder, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { CardList, Result, Step } from "./record_pb";

/**
 * @generated from message recorder.RecordResponse
 */
export class RecordResponse extends Message<RecordResponse> {
  /**
   * 紀錄ID
   *
   * @generated from field: string record_id = 1;
   */
  recordId = "";

  /**
   * 結果代碼
   *
   * @generated from field: int32 code = 2;
   */
  code = 0;

  /**
   * 結果訊息
   *
   * @generated from field: string message = 3;
   */
  message = "";

  constructor(data?: PartialMessage<RecordResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.RecordResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "record_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordResponse {
    return new RecordResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordResponse {
    return new RecordResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordResponse {
    return new RecordResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RecordResponse | PlainMessage<RecordResponse> | undefined, b: RecordResponse | PlainMessage<RecordResponse> | undefined): boolean {
    return proto3.util.equals(RecordResponse, a, b);
  }
}

/**
 * @generated from message recorder.RecordShuffleStartedRequest
 */
export class RecordShuffleStartedRequest extends Message<RecordShuffleStartedRequest> {
  /**
   * 遊戲代碼
   *
   * @generated from field: string game_code = 2;
   */
  gameCode = "";

  /**
   * 桌代碼
   *
   * @generated from field: string table_code = 3;
   */
  tableCode = "";

  /**
   * 時間
   *
   * @generated from field: google.protobuf.Timestamp ts_start = 5;
   */
  tsStart?: Timestamp;

  constructor(data?: PartialMessage<RecordShuffleStartedRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.RecordShuffleStartedRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "game_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "table_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ts_start", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordShuffleStartedRequest {
    return new RecordShuffleStartedRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordShuffleStartedRequest {
    return new RecordShuffleStartedRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordShuffleStartedRequest {
    return new RecordShuffleStartedRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RecordShuffleStartedRequest | PlainMessage<RecordShuffleStartedRequest> | undefined, b: RecordShuffleStartedRequest | PlainMessage<RecordShuffleStartedRequest> | undefined): boolean {
    return proto3.util.equals(RecordShuffleStartedRequest, a, b);
  }
}

/**
 * @generated from message recorder.RecordShuffleDoneRequest
 */
export class RecordShuffleDoneRequest extends Message<RecordShuffleDoneRequest> {
  /**
   * 遊戲代碼
   *
   * @generated from field: string game_code = 2;
   */
  gameCode = "";

  /**
   * 桌代碼
   *
   * @generated from field: string table_code = 3;
   */
  tableCode = "";

  /**
   * 使用洗牌代碼
   *
   * @generated from field: string shuffle_code = 4;
   */
  shuffleCode = "";

  /**
   * 時間
   *
   * @generated from field: google.protobuf.Timestamp ts_done = 5;
   */
  tsDone?: Timestamp;

  /**
   * 洗牌類型
   * key: CardTypeCode；value: 卡牌陣列
   *
   * @generated from field: map<int32, recorder.CardList> cards = 7;
   */
  cards: { [key: number]: CardList } = {};

  constructor(data?: PartialMessage<RecordShuffleDoneRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.RecordShuffleDoneRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "game_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "table_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "shuffle_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ts_done", kind: "message", T: Timestamp },
    { no: 7, name: "cards", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "message", T: CardList} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordShuffleDoneRequest {
    return new RecordShuffleDoneRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordShuffleDoneRequest {
    return new RecordShuffleDoneRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordShuffleDoneRequest {
    return new RecordShuffleDoneRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RecordShuffleDoneRequest | PlainMessage<RecordShuffleDoneRequest> | undefined, b: RecordShuffleDoneRequest | PlainMessage<RecordShuffleDoneRequest> | undefined): boolean {
    return proto3.util.equals(RecordShuffleDoneRequest, a, b);
  }
}

/**
 * @generated from message recorder.RecordRoundStartRequest
 */
export class RecordRoundStartRequest extends Message<RecordRoundStartRequest> {
  /**
   * 遊戲代碼
   *
   * @generated from field: string game_code = 2;
   */
  gameCode = "";

  /**
   * 桌代碼
   *
   * @generated from field: string table_code = 3;
   */
  tableCode = "";

  /**
   * 局代碼
   *
   * @generated from field: string round_code = 4;
   */
  roundCode = "";

  /**
   * 使用洗牌ID
   *
   * @generated from field: string shuffle_code = 5;
   */
  shuffleCode = "";

  /**
   * 使用此洗牌第幾局，從1開始計算
   *
   * @generated from field: int64 shuffle_round = 6;
   */
  shuffleRound = protoInt64.zero;

  /**
   * 遊戲版本
   *
   * @generated from field: string game_version = 7;
   */
  gameVersion = "";

  constructor(data?: PartialMessage<RecordRoundStartRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.RecordRoundStartRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "game_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "table_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "round_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "shuffle_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "shuffle_round", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "game_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordRoundStartRequest {
    return new RecordRoundStartRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordRoundStartRequest {
    return new RecordRoundStartRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordRoundStartRequest {
    return new RecordRoundStartRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RecordRoundStartRequest | PlainMessage<RecordRoundStartRequest> | undefined, b: RecordRoundStartRequest | PlainMessage<RecordRoundStartRequest> | undefined): boolean {
    return proto3.util.equals(RecordRoundStartRequest, a, b);
  }
}

/**
 * @generated from message recorder.RecordRoundStepsRequest
 */
export class RecordRoundStepsRequest extends Message<RecordRoundStepsRequest> {
  /**
   * 紀錄ID：此record_id為空字 串，則使用game_code, table_code, round_code決定紀錄
   *
   * @generated from field: string record_id = 1;
   */
  recordId = "";

  /**
   * 遊戲代碼
   *
   * @generated from field: string game_code = 2;
   */
  gameCode = "";

  /**
   * 桌代碼
   *
   * @generated from field: string table_code = 3;
   */
  tableCode = "";

  /**
   * 局代碼
   *
   * @generated from field: string round_code = 4;
   */
  roundCode = "";

  /**
   * 步驟
   *
   * @generated from field: repeated recorder.Step steps = 5;
   */
  steps: Step[] = [];

  constructor(data?: PartialMessage<RecordRoundStepsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.RecordRoundStepsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "record_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "game_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "table_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "round_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "steps", kind: "message", T: Step, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordRoundStepsRequest {
    return new RecordRoundStepsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordRoundStepsRequest {
    return new RecordRoundStepsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordRoundStepsRequest {
    return new RecordRoundStepsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RecordRoundStepsRequest | PlainMessage<RecordRoundStepsRequest> | undefined, b: RecordRoundStepsRequest | PlainMessage<RecordRoundStepsRequest> | undefined): boolean {
    return proto3.util.equals(RecordRoundStepsRequest, a, b);
  }
}

/**
 * @generated from message recorder.RecordRoundResultsRequest
 */
export class RecordRoundResultsRequest extends Message<RecordRoundResultsRequest> {
  /**
   * 紀錄ID：此record_id為空字串，則使用game_code, table_code, round_code決定紀錄
   *
   * @generated from field: string record_id = 1;
   */
  recordId = "";

  /**
   * 遊戲代碼
   *
   * @generated from field: string game_code = 2;
   */
  gameCode = "";

  /**
   * 桌代碼
   *
   * @generated from field: string table_code = 3;
   */
  tableCode = "";

  /**
   * 局代碼
   *
   * @generated from field: string round_code = 4;
   */
  roundCode = "";

  /**
   * 判讀結果
   *
   * @generated from field: repeated recorder.Result results = 5;
   */
  results: Result[] = [];

  constructor(data?: PartialMessage<RecordRoundResultsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.RecordRoundResultsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "record_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "game_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "table_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "round_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "results", kind: "message", T: Result, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordRoundResultsRequest {
    return new RecordRoundResultsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordRoundResultsRequest {
    return new RecordRoundResultsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordRoundResultsRequest {
    return new RecordRoundResultsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RecordRoundResultsRequest | PlainMessage<RecordRoundResultsRequest> | undefined, b: RecordRoundResultsRequest | PlainMessage<RecordRoundResultsRequest> | undefined): boolean {
    return proto3.util.equals(RecordRoundResultsRequest, a, b);
  }
}

/**
 * @generated from message recorder.RecordRoundCancelRequest
 */
export class RecordRoundCancelRequest extends Message<RecordRoundCancelRequest> {
  /**
   * 紀錄ID：此record_id為空字串，則使用game_code, table_code, round_code決定紀錄
   *
   * @generated from field: string record_id = 1;
   */
  recordId = "";

  /**
   * 遊戲代碼
   *
   * @generated from field: string game_code = 2;
   */
  gameCode = "";

  /**
   * 桌代碼
   *
   * @generated from field: string table_code = 3;
   */
  tableCode = "";

  /**
   * 局代碼
   *
   * @generated from field: string round_code = 4;
   */
  roundCode = "";

  /**
   * 取消代碼
   *
   * @generated from field: string cancel_code = 5;
   */
  cancelCode = "";

  /**
   * 取消備註
   *
   * @generated from field: string cancel_message = 6;
   */
  cancelMessage = "";

  constructor(data?: PartialMessage<RecordRoundCancelRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.RecordRoundCancelRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "record_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "game_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "table_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "round_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "cancel_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "cancel_message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordRoundCancelRequest {
    return new RecordRoundCancelRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordRoundCancelRequest {
    return new RecordRoundCancelRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordRoundCancelRequest {
    return new RecordRoundCancelRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RecordRoundCancelRequest | PlainMessage<RecordRoundCancelRequest> | undefined, b: RecordRoundCancelRequest | PlainMessage<RecordRoundCancelRequest> | undefined): boolean {
    return proto3.util.equals(RecordRoundCancelRequest, a, b);
  }
}

/**
 * @generated from message recorder.RecordRoundFinishRequest
 */
export class RecordRoundFinishRequest extends Message<RecordRoundFinishRequest> {
  /**
   * 紀錄ID：此record_id為空字串，則使用game_code, table_code, round_code決定紀錄
   *
   * @generated from field: string record_id = 1;
   */
  recordId = "";

  /**
   * 遊戲代碼
   *
   * @generated from field: string game_code = 2;
   */
  gameCode = "";

  /**
   * 桌代碼
   *
   * @generated from field: string table_code = 3;
   */
  tableCode = "";

  /**
   * 局代碼
   *
   * @generated from field: string round_code = 4;
   */
  roundCode = "";

  constructor(data?: PartialMessage<RecordRoundFinishRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.RecordRoundFinishRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "record_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "game_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "table_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "round_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordRoundFinishRequest {
    return new RecordRoundFinishRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordRoundFinishRequest {
    return new RecordRoundFinishRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordRoundFinishRequest {
    return new RecordRoundFinishRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RecordRoundFinishRequest | PlainMessage<RecordRoundFinishRequest> | undefined, b: RecordRoundFinishRequest | PlainMessage<RecordRoundFinishRequest> | undefined): boolean {
    return proto3.util.equals(RecordRoundFinishRequest, a, b);
  }
}

