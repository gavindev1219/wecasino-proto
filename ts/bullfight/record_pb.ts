// @generated by protoc-gen-es v1.1.0 with parameter "target=ts,import_extension=none"
// @generated from file bullfight/record.proto (package bullfight, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum bullfight.CardStatus
 */
export enum CardStatus {
  /**
   * 未指定
   *
   * @generated from enum value: CARD_STATUS_UNSPECIFIED = 0;
   */
  CARD_STATUS_UNSPECIFIED = 0,

  /**
   * 翻開
   *
   * @generated from enum value: CARD_OPENED = 1;
   */
  CARD_OPENED = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(CardStatus)
proto3.util.setEnumType(CardStatus, "bullfight.CardStatus", [
  { no: 0, name: "CARD_STATUS_UNSPECIFIED" },
  { no: 1, name: "CARD_OPENED" },
]);

/**
 * 使用卡牌種類
 *
 * @generated from enum bullfight.CardType
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
proto3.util.setEnumType(CardType, "bullfight.CardType", [
  { no: 0, name: "CARD_TYPE_UNSPECIFIED" },
  { no: 1, name: "POKER" },
]);

/**
 * @generated from enum bullfight.ResourceType
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
}
// Retrieve enum metadata with: proto3.getEnumType(ResourceType)
proto3.util.setEnumType(ResourceType, "bullfight.ResourceType", [
  { no: 0, name: "RESOURCE_TYPE_UNSPECIFIED" },
  { no: 1, name: "NORMAL" },
]);

/**
 * 步驟，依據遊戲供應商邏輯，不是每個步驟都會走到
 *
 * @generated from enum bullfight.Step
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
   * 派發起始位子牌(決定順位)
   *
   * @generated from enum value: DEAL_FIRSTCARD = 4;
   */
  DEAL_FIRSTCARD = 4,

  /**
   * 派發莊例牌
   *
   * @generated from enum value: DEAL_BANKER_1 = 5;
   */
  DEAL_BANKER_1 = 5,

  /**
   * 派發玩家1例牌
   *
   * @generated from enum value: DEAL_PLAYER_1 = 6;
   */
  DEAL_PLAYER_1 = 6,

  /**
   * 派發玩家2例牌
   *
   * @generated from enum value: DEAL_PLAYER_2 = 7;
   */
  DEAL_PLAYER_2 = 7,

  /**
   * 派發玩家3例牌
   *
   * @generated from enum value: DEAL_PLAYER_3 = 8;
   */
  DEAL_PLAYER_3 = 8,

  /**
   * 開放下注
   *
   * @generated from enum value: OPEN_FOR_BETTING = 9;
   */
  OPEN_FOR_BETTING = 9,

  /**
   * 停止下注
   *
   * @generated from enum value: CLOSE_THE_BETTING = 10;
   */
  CLOSE_THE_BETTING = 10,

  /**
   * 開莊家例牌
   *
   * @generated from enum value: SHOW_BANKER_1 = 12;
   */
  SHOW_BANKER_1 = 12,

  /**
   * 開玩家1例牌
   *
   * @generated from enum value: SHOW_PLAYER_1 = 13;
   */
  SHOW_PLAYER_1 = 13,

  /**
   * 開玩家2例牌
   *
   * @generated from enum value: SHOW_PLAYER_2 = 14;
   */
  SHOW_PLAYER_2 = 14,

  /**
   * 開玩家3例牌
   *
   * @generated from enum value: SHOW_PLAYER_3 = 15;
   */
  SHOW_PLAYER_3 = 15,

  /**
   * PITBOSS 修改派發例牌
   *
   * @generated from enum value: PITBOSS_MODIFY_NORMAL = 24;
   */
  PITBOSS_MODIFY_NORMAL = 24,
}
// Retrieve enum metadata with: proto3.getEnumType(Step)
proto3.util.setEnumType(Step, "bullfight.Step", [
  { no: 0, name: "STEP_UNSPECIFIED" },
  { no: 1, name: "ROUND_START" },
  { no: 2, name: "ROUND_FINISHED" },
  { no: 3, name: "ROUND_CANCELED" },
  { no: 4, name: "DEAL_FIRSTCARD" },
  { no: 5, name: "DEAL_BANKER_1" },
  { no: 6, name: "DEAL_PLAYER_1" },
  { no: 7, name: "DEAL_PLAYER_2" },
  { no: 8, name: "DEAL_PLAYER_3" },
  { no: 9, name: "OPEN_FOR_BETTING" },
  { no: 10, name: "CLOSE_THE_BETTING" },
  { no: 12, name: "SHOW_BANKER_1" },
  { no: 13, name: "SHOW_PLAYER_1" },
  { no: 14, name: "SHOW_PLAYER_2" },
  { no: 15, name: "SHOW_PLAYER_3" },
  { no: 24, name: "PITBOSS_MODIFY_NORMAL" },
]);

/**
 * 座位功能代碼
 *
 * @generated from enum bullfight.Seat
 */
export enum Seat {
  /**
   * 未指定
   *
   * @generated from enum value: SEAT_UNSPECIFIED = 0;
   */
  SEAT_UNSPECIFIED = 0,

  /**
   * 莊家
   *
   * @generated from enum value: BANKER = 1;
   */
  BANKER = 1,

  /**
   * 玩家1
   *
   * @generated from enum value: PLAYER1 = 2;
   */
  PLAYER1 = 2,

  /**
   * 玩家2
   *
   * @generated from enum value: PLAYER2 = 3;
   */
  PLAYER2 = 3,

  /**
   * 玩家3
   *
   * @generated from enum value: PLAYER3 = 4;
   */
  PLAYER3 = 4,

  /**
   * Dealer 
   *
   * @generated from enum value: DEALER = 5;
   */
  DEALER = 5,

  /**
   * Pitboss
   *
   * @generated from enum value: PITBOSS = 9;
   */
  PITBOSS = 9,
}
// Retrieve enum metadata with: proto3.getEnumType(Seat)
proto3.util.setEnumType(Seat, "bullfight.Seat", [
  { no: 0, name: "SEAT_UNSPECIFIED" },
  { no: 1, name: "BANKER" },
  { no: 2, name: "PLAYER1" },
  { no: 3, name: "PLAYER2" },
  { no: 4, name: "PLAYER3" },
  { no: 5, name: "DEALER" },
  { no: 9, name: "PITBOSS" },
]);

/**
 * 結果紀錄類型代碼
 *
 * @generated from enum bullfight.ResultRecordType
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
proto3.util.setEnumType(ResultRecordType, "bullfight.ResultRecordType", [
  { no: 0, name: "RESULT_RECORD_TYPE_UNSPECIFIED" },
  { no: 1, name: "ROUND_FINISH" },
  { no: 2, name: "PITBOSS_MODIFY_RESULT" },
]);

/**
 * 取消原因
 *
 * @generated from enum bullfight.CancelReason
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
proto3.util.setEnumType(CancelReason, "bullfight.CancelReason", [
  { no: 0, name: "CANCEL_REASON_UNSPECIFIED" },
  { no: 1, name: "NO_REASON" },
]);
