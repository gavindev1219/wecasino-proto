// @generated by protoc-gen-es v1.3.0 with parameter "target=ts,import_extension=none"
// @generated from file games/threecards/record.proto (package games.threecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { proto3 } from "@bufbuild/protobuf";
/**
 * 使用卡牌種類
 *
 * @generated from enum games.threecards.CardType
 */
export var CardType;
(function (CardType) {
    /**
     * 未指定
     *
     * @generated from enum value: CARD_TYPE_UNSPECIFIED = 0;
     */
    CardType[CardType["CARD_TYPE_UNSPECIFIED"] = 0] = "CARD_TYPE_UNSPECIFIED";
    /**
     * 撲克牌
     *
     * @generated from enum value: POKER = 1;
     */
    CardType[CardType["POKER"] = 1] = "POKER";
})(CardType || (CardType = {}));
// Retrieve enum metadata with: proto3.getEnumType(CardType)
proto3.util.setEnumType(CardType, "games.threecards.CardType", [
    { no: 0, name: "CARD_TYPE_UNSPECIFIED" },
    { no: 1, name: "POKER" },
]);
/**
 * @generated from enum games.threecards.ResourceType
 */
export var ResourceType;
(function (ResourceType) {
    /**
     * 未指定
     *
     * @generated from enum value: RESOURCE_TYPE_UNSPECIFIED = 0;
     */
    ResourceType[ResourceType["RESOURCE_TYPE_UNSPECIFIED"] = 0] = "RESOURCE_TYPE_UNSPECIFIED";
    /**
     * 例牌
     *
     * @generated from enum value: NORMAL = 1;
     */
    ResourceType[ResourceType["NORMAL"] = 1] = "NORMAL";
})(ResourceType || (ResourceType = {}));
// Retrieve enum metadata with: proto3.getEnumType(ResourceType)
proto3.util.setEnumType(ResourceType, "games.threecards.ResourceType", [
    { no: 0, name: "RESOURCE_TYPE_UNSPECIFIED" },
    { no: 1, name: "NORMAL" },
]);
/**
 * 步驟，依據遊戲供應商邏輯，不是每個步驟都會走到
 *
 * @generated from enum games.threecards.Step
 */
export var Step;
(function (Step) {
    /**
     * 未指定
     *
     * @generated from enum value: STEP_UNSPECIFIED = 0;
     */
    Step[Step["STEP_UNSPECIFIED"] = 0] = "STEP_UNSPECIFIED";
    /**
     * 本局開始
     *
     * @generated from enum value: ROUND_START = 1;
     */
    Step[Step["ROUND_START"] = 1] = "ROUND_START";
    /**
     * 本局完成
     *
     * @generated from enum value: ROUND_FINISHED = 2;
     */
    Step[Step["ROUND_FINISHED"] = 2] = "ROUND_FINISHED";
    /**
     * 本局取消
     *
     * @generated from enum value: ROUND_CANCELED = 3;
     */
    Step[Step["ROUND_CANCELED"] = 3] = "ROUND_CANCELED";
    /**
     * 派發莊家例牌1
     *
     * @generated from enum value: DEAL_BANKER_1 = 4;
     */
    Step[Step["DEAL_BANKER_1"] = 4] = "DEAL_BANKER_1";
    /**
     * 派發閒家例牌1
     *
     * @generated from enum value: DEAL_PLAYER_1 = 5;
     */
    Step[Step["DEAL_PLAYER_1"] = 5] = "DEAL_PLAYER_1";
    /**
     * 派發莊家例牌2
     *
     * @generated from enum value: DEAL_BANKER_2 = 6;
     */
    Step[Step["DEAL_BANKER_2"] = 6] = "DEAL_BANKER_2";
    /**
     * 派發閒家例牌2
     *
     * @generated from enum value: DEAL_PLAYER_2 = 7;
     */
    Step[Step["DEAL_PLAYER_2"] = 7] = "DEAL_PLAYER_2";
    /**
     * 派發莊家例牌3
     *
     * @generated from enum value: DEAL_BANKER_3 = 8;
     */
    Step[Step["DEAL_BANKER_3"] = 8] = "DEAL_BANKER_3";
    /**
     * 派發閒家例牌3
     *
     * @generated from enum value: DEAL_PLAYER_3 = 9;
     */
    Step[Step["DEAL_PLAYER_3"] = 9] = "DEAL_PLAYER_3";
    /**
     * 開放下注
     *
     * @generated from enum value: OPEN_FOR_BETTING = 10;
     */
    Step[Step["OPEN_FOR_BETTING"] = 10] = "OPEN_FOR_BETTING";
    /**
     * 停止下注
     *
     * @generated from enum value: CLOSE_THE_BETTING = 11;
     */
    Step[Step["CLOSE_THE_BETTING"] = 11] = "CLOSE_THE_BETTING";
    /**
     * 開例牌
     *
     * @generated from enum value: SHOW_NORMAL = 12;
     */
    Step[Step["SHOW_NORMAL"] = 12] = "SHOW_NORMAL";
    /**
     * PITBOSS 修改派發例牌
     *
     * @generated from enum value: PITBOSS_MODIFY_NORMAL = 24;
     */
    Step[Step["PITBOSS_MODIFY_NORMAL"] = 24] = "PITBOSS_MODIFY_NORMAL";
})(Step || (Step = {}));
// Retrieve enum metadata with: proto3.getEnumType(Step)
proto3.util.setEnumType(Step, "games.threecards.Step", [
    { no: 0, name: "STEP_UNSPECIFIED" },
    { no: 1, name: "ROUND_START" },
    { no: 2, name: "ROUND_FINISHED" },
    { no: 3, name: "ROUND_CANCELED" },
    { no: 4, name: "DEAL_BANKER_1" },
    { no: 5, name: "DEAL_PLAYER_1" },
    { no: 6, name: "DEAL_BANKER_2" },
    { no: 7, name: "DEAL_PLAYER_2" },
    { no: 8, name: "DEAL_BANKER_3" },
    { no: 9, name: "DEAL_PLAYER_3" },
    { no: 10, name: "OPEN_FOR_BETTING" },
    { no: 11, name: "CLOSE_THE_BETTING" },
    { no: 12, name: "SHOW_NORMAL" },
    { no: 24, name: "PITBOSS_MODIFY_NORMAL" },
]);
/**
 * 座位功能代碼
 *
 * @generated from enum games.threecards.Seat
 */
export var Seat;
(function (Seat) {
    /**
     * 未指定
     *
     * @generated from enum value: SEAT_UNSPECIFIED = 0;
     */
    Seat[Seat["SEAT_UNSPECIFIED"] = 0] = "SEAT_UNSPECIFIED";
    /**
     * Dealer
     *
     * @generated from enum value: DEALER = 1;
     */
    Seat[Seat["DEALER"] = 1] = "DEALER";
    /**
     * 莊家
     *
     * @generated from enum value: BANKER = 2;
     */
    Seat[Seat["BANKER"] = 2] = "BANKER";
    /**
     * 閒家
     *
     * @generated from enum value: PLAYER = 3;
     */
    Seat[Seat["PLAYER"] = 3] = "PLAYER";
    /**
     * Pitboss
     *
     * @generated from enum value: PITBOSS = 9;
     */
    Seat[Seat["PITBOSS"] = 9] = "PITBOSS";
})(Seat || (Seat = {}));
// Retrieve enum metadata with: proto3.getEnumType(Seat)
proto3.util.setEnumType(Seat, "games.threecards.Seat", [
    { no: 0, name: "SEAT_UNSPECIFIED" },
    { no: 1, name: "DEALER" },
    { no: 2, name: "BANKER" },
    { no: 3, name: "PLAYER" },
    { no: 9, name: "PITBOSS" },
]);
/**
 * 結果紀錄類型代碼
 *
 * @generated from enum games.threecards.ResultRecordType
 */
export var ResultRecordType;
(function (ResultRecordType) {
    /**
     * 未指定
     *
     * @generated from enum value: RESULT_RECORD_TYPE_UNSPECIFIED = 0;
     */
    ResultRecordType[ResultRecordType["RESULT_RECORD_TYPE_UNSPECIFIED"] = 0] = "RESULT_RECORD_TYPE_UNSPECIFIED";
    /**
     * 遊戲局結束
     *
     * @generated from enum value: ROUND_FINISH = 1;
     */
    ResultRecordType[ResultRecordType["ROUND_FINISH"] = 1] = "ROUND_FINISH";
    /**
     * Pitboss 修正
     *
     * @generated from enum value: PITBOSS_MODIFY_RESULT = 2;
     */
    ResultRecordType[ResultRecordType["PITBOSS_MODIFY_RESULT"] = 2] = "PITBOSS_MODIFY_RESULT";
})(ResultRecordType || (ResultRecordType = {}));
// Retrieve enum metadata with: proto3.getEnumType(ResultRecordType)
proto3.util.setEnumType(ResultRecordType, "games.threecards.ResultRecordType", [
    { no: 0, name: "RESULT_RECORD_TYPE_UNSPECIFIED" },
    { no: 1, name: "ROUND_FINISH" },
    { no: 2, name: "PITBOSS_MODIFY_RESULT" },
]);
/**
 * 取消原因
 *
 * @generated from enum games.threecards.CancelReason
 */
export var CancelReason;
(function (CancelReason) {
    /**
     * 未指定，沒有取消
     *
     * @generated from enum value: CANCEL_REASON_UNSPECIFIED = 0;
     */
    CancelReason[CancelReason["CANCEL_REASON_UNSPECIFIED"] = 0] = "CANCEL_REASON_UNSPECIFIED";
    /**
     * 取消說明原因
     *
     * @generated from enum value: NO_REASON = 1;
     */
    CancelReason[CancelReason["NO_REASON"] = 1] = "NO_REASON";
})(CancelReason || (CancelReason = {}));
// Retrieve enum metadata with: proto3.getEnumType(CancelReason)
proto3.util.setEnumType(CancelReason, "games.threecards.CancelReason", [
    { no: 0, name: "CANCEL_REASON_UNSPECIFIED" },
    { no: 1, name: "NO_REASON" },
]);
