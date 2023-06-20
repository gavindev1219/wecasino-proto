// @generated by protoc-gen-es v1.2.1 with parameter "target=ts,import_extension=none"
// @generated from file baccarat/record.proto (package baccarat, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * 使用卡牌種類
 *
 * @generated from enum baccarat.CardType
 */
export enum CardType {
  /**
   * 未指定
   *
   * @generated from enum value: CARD_TYPE_UNSPECIFIED = 0;
   */
  CARD_TYPE_UNSPECIFIED = 0,

  /**
   * 撲克牌
   *
   * @generated from enum value: POKER = 1;
   */
  POKER = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(CardType)
proto3.util.setEnumType(CardType, "baccarat.CardType", [
  { no: 0, name: "CARD_TYPE_UNSPECIFIED" },
  { no: 1, name: "POKER" },
]);

/**
 * @generated from enum baccarat.ResourceType
 */
export enum ResourceType {
  /**
   * 未指定
   *
   * @generated from enum value: RESOURCE_TYPE_UNSPECIFIED = 0;
   */
  RESOURCE_TYPE_UNSPECIFIED = 0,

  /**
   * 例牌
   *
   * @generated from enum value: NORMAL = 1;
   */
  NORMAL = 1,

  /**
   * 非例牌
   *
   * @generated from enum value: EXTRA = 2;
   */
  EXTRA = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ResourceType)
proto3.util.setEnumType(ResourceType, "baccarat.ResourceType", [
  { no: 0, name: "RESOURCE_TYPE_UNSPECIFIED" },
  { no: 1, name: "NORMAL" },
  { no: 2, name: "EXTRA" },
]);

/**
 * 步驟，依據遊戲供應商邏輯，不是每個步驟都會走到
 *
 * @generated from enum baccarat.Step
 */
export enum Step {
  /**
   * 未指定
   *
   * @generated from enum value: STEP_UNSPECIFIED = 0;
   */
  STEP_UNSPECIFIED = 0,

  /**
   * 本局開始
   *
   * @generated from enum value: ROUND_START = 1;
   */
  ROUND_START = 1,

  /**
   * 本局完成
   *
   * @generated from enum value: ROUND_FINISHED = 2;
   */
  ROUND_FINISHED = 2,

  /**
   * 本局取消
   *
   * @generated from enum value: ROUND_CANCELED = 3;
   */
  ROUND_CANCELED = 3,

  /**
   * 派發閒家例牌1
   *
   * @generated from enum value: DEAL_PLAYER_1 = 4;
   */
  DEAL_PLAYER_1 = 4,

  /**
   * 派發莊家例牌1
   *
   * @generated from enum value: DEAL_BANKER_1 = 5;
   */
  DEAL_BANKER_1 = 5,

  /**
   * 派發閒家例牌2
   *
   * @generated from enum value: DEAL_PLAYER_2 = 6;
   */
  DEAL_PLAYER_2 = 6,

  /**
   * 派發莊家例牌2
   *
   * @generated from enum value: DEAL_BANKER_2 = 7;
   */
  DEAL_BANKER_2 = 7,

  /**
   * 開放下注
   *
   * @generated from enum value: OPEN_FOR_BETTING = 8;
   */
  OPEN_FOR_BETTING = 8,

  /**
   * 停止下注
   *
   * @generated from enum value: CLOSE_THE_BETTING = 9;
   */
  CLOSE_THE_BETTING = 9,

  /**
   * 非瞇牌開例牌
   *
   * @generated from enum value: SHOW_NORMAL = 12;
   */
  SHOW_NORMAL = 12,

  /**
   * 瞇牌例牌
   *
   * @generated from enum value: PEEK_NORMAL = 13;
   */
  PEEK_NORMAL = 13,

  /**
   * 瞇牌公布例牌
   *
   * @generated from enum value: PEEK_SHOW_NORMAL = 14;
   */
  PEEK_SHOW_NORMAL = 14,

  /**
   * 非瞇牌補閒家牌
   *
   * @generated from enum value: DEAL_PLAYER_EXTRA = 16;
   */
  DEAL_PLAYER_EXTRA = 16,

  /**
   * 瞇牌閒家補牌
   *
   * @generated from enum value: PEEK_DEAL_PLAYER_EXTRA = 17;
   */
  PEEK_DEAL_PLAYER_EXTRA = 17,

  /**
   * 瞇牌公布閒家補牌
   *
   * @generated from enum value: PEEK_SHOW_PLAYER_EXTRA = 18;
   */
  PEEK_SHOW_PLAYER_EXTRA = 18,

  /**
   * 非瞇牌補莊家牌
   *
   * @generated from enum value: DEAL_BANKER_EXTRA = 20;
   */
  DEAL_BANKER_EXTRA = 20,

  /**
   * 瞇牌莊家補牌
   *
   * @generated from enum value: PEEK_DEAL_BANKER_EXTRA = 21;
   */
  PEEK_DEAL_BANKER_EXTRA = 21,

  /**
   * 瞇牌公布莊家補牌
   *
   * @generated from enum value: PEEK_SHOW_BANKER_EXTRA = 22;
   */
  PEEK_SHOW_BANKER_EXTRA = 22,

  /**
   * PITBOSS 修改派發例牌
   *
   * @generated from enum value: PITBOSS_MODIFY_NORMAL = 24;
   */
  PITBOSS_MODIFY_NORMAL = 24,

  /**
   * PITBOSS 修改派發閒家補牌
   *
   * @generated from enum value: PITBOSS_MODIFY_PLAYER_EXTRA = 25;
   */
  PITBOSS_MODIFY_PLAYER_EXTRA = 25,

  /**
   * PITBOSS 修改派發莊家補牌
   *
   * @generated from enum value: PITBOSS_MODIFY_BANKER_EXTRA = 26;
   */
  PITBOSS_MODIFY_BANKER_EXTRA = 26,
}
// Retrieve enum metadata with: proto3.getEnumType(Step)
proto3.util.setEnumType(Step, "baccarat.Step", [
  { no: 0, name: "STEP_UNSPECIFIED" },
  { no: 1, name: "ROUND_START" },
  { no: 2, name: "ROUND_FINISHED" },
  { no: 3, name: "ROUND_CANCELED" },
  { no: 4, name: "DEAL_PLAYER_1" },
  { no: 5, name: "DEAL_BANKER_1" },
  { no: 6, name: "DEAL_PLAYER_2" },
  { no: 7, name: "DEAL_BANKER_2" },
  { no: 8, name: "OPEN_FOR_BETTING" },
  { no: 9, name: "CLOSE_THE_BETTING" },
  { no: 12, name: "SHOW_NORMAL" },
  { no: 13, name: "PEEK_NORMAL" },
  { no: 14, name: "PEEK_SHOW_NORMAL" },
  { no: 16, name: "DEAL_PLAYER_EXTRA" },
  { no: 17, name: "PEEK_DEAL_PLAYER_EXTRA" },
  { no: 18, name: "PEEK_SHOW_PLAYER_EXTRA" },
  { no: 20, name: "DEAL_BANKER_EXTRA" },
  { no: 21, name: "PEEK_DEAL_BANKER_EXTRA" },
  { no: 22, name: "PEEK_SHOW_BANKER_EXTRA" },
  { no: 24, name: "PITBOSS_MODIFY_NORMAL" },
  { no: 25, name: "PITBOSS_MODIFY_PLAYER_EXTRA" },
  { no: 26, name: "PITBOSS_MODIFY_BANKER_EXTRA" },
]);

/**
 * 座位功能代碼
 *
 * @generated from enum baccarat.Seat
 */
export enum Seat {
  /**
   * 未指定
   *
   * @generated from enum value: SEAT_UNSPECIFIED = 0;
   */
  SEAT_UNSPECIFIED = 0,

  /**
   * Dealer 
   *
   * @generated from enum value: DEALER = 1;
   */
  DEALER = 1,

  /**
   * 閒家
   *
   * @generated from enum value: PLAYER = 2;
   */
  PLAYER = 2,

  /**
   * 莊家
   *
   * @generated from enum value: BANKER = 3;
   */
  BANKER = 3,

  /**
   * Pitboss
   *
   * @generated from enum value: PITBOSS = 9;
   */
  PITBOSS = 9,
}
// Retrieve enum metadata with: proto3.getEnumType(Seat)
proto3.util.setEnumType(Seat, "baccarat.Seat", [
  { no: 0, name: "SEAT_UNSPECIFIED" },
  { no: 1, name: "DEALER" },
  { no: 2, name: "PLAYER" },
  { no: 3, name: "BANKER" },
  { no: 9, name: "PITBOSS" },
]);

/**
 * 結果紀錄類型代碼
 *
 * @generated from enum baccarat.ResultRecordType
 */
export enum ResultRecordType {
  /**
   * 未指定
   *
   * @generated from enum value: RESULT_RECORD_TYPE_UNSPECIFIED = 0;
   */
  RESULT_RECORD_TYPE_UNSPECIFIED = 0,

  /**
   * 遊戲局結束
   *
   * @generated from enum value: ROUND_FINISH = 1;
   */
  ROUND_FINISH = 1,

  /**
   * Pitboss 修正
   *
   * @generated from enum value: PITBOSS_MODIFY_RESULT = 2;
   */
  PITBOSS_MODIFY_RESULT = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ResultRecordType)
proto3.util.setEnumType(ResultRecordType, "baccarat.ResultRecordType", [
  { no: 0, name: "RESULT_RECORD_TYPE_UNSPECIFIED" },
  { no: 1, name: "ROUND_FINISH" },
  { no: 2, name: "PITBOSS_MODIFY_RESULT" },
]);

/**
 * 取消原因
 *
 * @generated from enum baccarat.CancelReason
 */
export enum CancelReason {
  /**
   * 未指定，沒有取消
   *
   * @generated from enum value: CANCEL_REASON_UNSPECIFIED = 0;
   */
  CANCEL_REASON_UNSPECIFIED = 0,

  /**
   * 取消說明原因
   *
   * @generated from enum value: NO_REASON = 1;
   */
  NO_REASON = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(CancelReason)
proto3.util.setEnumType(CancelReason, "baccarat.CancelReason", [
  { no: 0, name: "CANCEL_REASON_UNSPECIFIED" },
  { no: 1, name: "NO_REASON" },
]);

