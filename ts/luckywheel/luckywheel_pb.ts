// @generated by protoc-gen-es v1.2.1 with parameter "target=ts,import_extension=none"
// @generated from file luckywheel/luckywheel.proto (package luckywheel, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * 麻將幸運輪
 *
 * @generated from enum luckywheel.Luckywheel
 */
export enum Luckywheel {
  /**
   * 未指定
   *
   * @generated from enum value: DICE_CARD_UNSPECIFIED = 0;
   */
  DICE_CARD_UNSPECIFIED = 0,

  /**
   * @generated from enum value: DICE_EAST = 1;
   */
  DICE_EAST = 1,

  /**
   * @generated from enum value: DICE_SOUTH = 2;
   */
  DICE_SOUTH = 2,

  /**
   * @generated from enum value: DICE_WEST = 3;
   */
  DICE_WEST = 3,

  /**
   * @generated from enum value: DICE_NORTH = 4;
   */
  DICE_NORTH = 4,

  /**
   * @generated from enum value: DICE_WHITE_DRAGON = 5;
   */
  DICE_WHITE_DRAGON = 5,

  /**
   * @generated from enum value: DICE_RED_DRAGON = 6;
   */
  DICE_RED_DRAGON = 6,

  /**
   * @generated from enum value: DICE_GREEN_DRAGON = 7;
   */
  DICE_GREEN_DRAGON = 7,
}
// Retrieve enum metadata with: proto3.getEnumType(Luckywheel)
proto3.util.setEnumType(Luckywheel, "luckywheel.Luckywheel", [
  { no: 0, name: "DICE_CARD_UNSPECIFIED" },
  { no: 1, name: "DICE_EAST" },
  { no: 2, name: "DICE_SOUTH" },
  { no: 3, name: "DICE_WEST" },
  { no: 4, name: "DICE_NORTH" },
  { no: 5, name: "DICE_WHITE_DRAGON" },
  { no: 6, name: "DICE_RED_DRAGON" },
  { no: 7, name: "DICE_GREEN_DRAGON" },
]);

