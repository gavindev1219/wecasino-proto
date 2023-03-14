// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.29.0
// 	protoc        (unknown)
// source: goldenflower/record.proto

package goldenflower

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// 使用卡牌種類
type CardType int32

const (
	// 未指定
	CardType_CARD_TYPE_UNSPECIFIED CardType = 0
	// 撲克牌
	CardType_POKER CardType = 1
)

// Enum value maps for CardType.
var (
	CardType_name = map[int32]string{
		0: "CARD_TYPE_UNSPECIFIED",
		1: "POKER",
	}
	CardType_value = map[string]int32{
		"CARD_TYPE_UNSPECIFIED": 0,
		"POKER":                 1,
	}
)

func (x CardType) Enum() *CardType {
	p := new(CardType)
	*p = x
	return p
}

func (x CardType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (CardType) Descriptor() protoreflect.EnumDescriptor {
	return file_goldenflower_record_proto_enumTypes[0].Descriptor()
}

func (CardType) Type() protoreflect.EnumType {
	return &file_goldenflower_record_proto_enumTypes[0]
}

func (x CardType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use CardType.Descriptor instead.
func (CardType) EnumDescriptor() ([]byte, []int) {
	return file_goldenflower_record_proto_rawDescGZIP(), []int{0}
}

type ResourceType int32

const (
	// 未指定
	ResourceType_RESOURCE_TYPE_UNSPECIFIED ResourceType = 0
	// 例牌
	ResourceType_NORMAL ResourceType = 1
)

// Enum value maps for ResourceType.
var (
	ResourceType_name = map[int32]string{
		0: "RESOURCE_TYPE_UNSPECIFIED",
		1: "NORMAL",
	}
	ResourceType_value = map[string]int32{
		"RESOURCE_TYPE_UNSPECIFIED": 0,
		"NORMAL":                    1,
	}
)

func (x ResourceType) Enum() *ResourceType {
	p := new(ResourceType)
	*p = x
	return p
}

func (x ResourceType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ResourceType) Descriptor() protoreflect.EnumDescriptor {
	return file_goldenflower_record_proto_enumTypes[1].Descriptor()
}

func (ResourceType) Type() protoreflect.EnumType {
	return &file_goldenflower_record_proto_enumTypes[1]
}

func (x ResourceType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ResourceType.Descriptor instead.
func (ResourceType) EnumDescriptor() ([]byte, []int) {
	return file_goldenflower_record_proto_rawDescGZIP(), []int{1}
}

// 步驟，依據遊戲供應商邏輯，不是每個步驟都會走到
type Step int32

const (
	// 未指定
	Step_STEP_UNSPECIFIED Step = 0
	// 本局開始
	Step_ROUND_START Step = 1
	// 本局完成
	Step_ROUND_FINISHED Step = 2
	// 本局取消
	Step_ROUND_CANCELED Step = 3
	// 派發莊家例牌1
	Step_DEAL_BANKER_1 Step = 4
	// 派發閒家例牌1
	Step_DEAL_PLAYER_1 Step = 5
	// 派發莊家例牌2
	Step_DEAL_BANKER_2 Step = 6
	// 派發閒家例牌2
	Step_DEAL_PLAYER_2 Step = 7
	// 派發莊家例牌3
	Step_DEAL_BANKER_3 Step = 8
	// 派發閒家例牌3
	Step_DEAL_PLAYER_3 Step = 9
	// 開放下注
	Step_OPEN_FOR_BETTING Step = 10
	// 停止下注
	Step_CLOSE_THE_BETTING Step = 11
	// 開例牌
	Step_SHOW_NORMAL Step = 12
	// PITBOSS 修改派發例牌
	Step_PITBOSS_MODIFY_NORMAL Step = 24
)

// Enum value maps for Step.
var (
	Step_name = map[int32]string{
		0:  "STEP_UNSPECIFIED",
		1:  "ROUND_START",
		2:  "ROUND_FINISHED",
		3:  "ROUND_CANCELED",
		4:  "DEAL_BANKER_1",
		5:  "DEAL_PLAYER_1",
		6:  "DEAL_BANKER_2",
		7:  "DEAL_PLAYER_2",
		8:  "DEAL_BANKER_3",
		9:  "DEAL_PLAYER_3",
		10: "OPEN_FOR_BETTING",
		11: "CLOSE_THE_BETTING",
		12: "SHOW_NORMAL",
		24: "PITBOSS_MODIFY_NORMAL",
	}
	Step_value = map[string]int32{
		"STEP_UNSPECIFIED":      0,
		"ROUND_START":           1,
		"ROUND_FINISHED":        2,
		"ROUND_CANCELED":        3,
		"DEAL_BANKER_1":         4,
		"DEAL_PLAYER_1":         5,
		"DEAL_BANKER_2":         6,
		"DEAL_PLAYER_2":         7,
		"DEAL_BANKER_3":         8,
		"DEAL_PLAYER_3":         9,
		"OPEN_FOR_BETTING":      10,
		"CLOSE_THE_BETTING":     11,
		"SHOW_NORMAL":           12,
		"PITBOSS_MODIFY_NORMAL": 24,
	}
)

func (x Step) Enum() *Step {
	p := new(Step)
	*p = x
	return p
}

func (x Step) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Step) Descriptor() protoreflect.EnumDescriptor {
	return file_goldenflower_record_proto_enumTypes[2].Descriptor()
}

func (Step) Type() protoreflect.EnumType {
	return &file_goldenflower_record_proto_enumTypes[2]
}

func (x Step) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Step.Descriptor instead.
func (Step) EnumDescriptor() ([]byte, []int) {
	return file_goldenflower_record_proto_rawDescGZIP(), []int{2}
}

// 座位功能代碼
type Seat int32

const (
	// 未指定
	Seat_SEAT_UNSPECIFIED Seat = 0
	// Dealer
	Seat_DEALER Seat = 1
	// 莊家
	Seat_BANKER Seat = 2
	// 閒家
	Seat_PLAYER Seat = 3
	// Pitboss
	Seat_PITBOSS Seat = 9
)

// Enum value maps for Seat.
var (
	Seat_name = map[int32]string{
		0: "SEAT_UNSPECIFIED",
		1: "DEALER",
		2: "BANKER",
		3: "PLAYER",
		9: "PITBOSS",
	}
	Seat_value = map[string]int32{
		"SEAT_UNSPECIFIED": 0,
		"DEALER":           1,
		"BANKER":           2,
		"PLAYER":           3,
		"PITBOSS":          9,
	}
)

func (x Seat) Enum() *Seat {
	p := new(Seat)
	*p = x
	return p
}

func (x Seat) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Seat) Descriptor() protoreflect.EnumDescriptor {
	return file_goldenflower_record_proto_enumTypes[3].Descriptor()
}

func (Seat) Type() protoreflect.EnumType {
	return &file_goldenflower_record_proto_enumTypes[3]
}

func (x Seat) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Seat.Descriptor instead.
func (Seat) EnumDescriptor() ([]byte, []int) {
	return file_goldenflower_record_proto_rawDescGZIP(), []int{3}
}

// 結果紀錄類型代碼
type ResultRecordType int32

const (
	// 未指定
	ResultRecordType_RESULT_RECORD_TYPE_UNSPECIFIED ResultRecordType = 0
	// 遊戲局結束
	ResultRecordType_ROUND_FINISH ResultRecordType = 1
	// Pitboss 修正
	ResultRecordType_PITBOSS_MODIFY_RESULT ResultRecordType = 2
)

// Enum value maps for ResultRecordType.
var (
	ResultRecordType_name = map[int32]string{
		0: "RESULT_RECORD_TYPE_UNSPECIFIED",
		1: "ROUND_FINISH",
		2: "PITBOSS_MODIFY_RESULT",
	}
	ResultRecordType_value = map[string]int32{
		"RESULT_RECORD_TYPE_UNSPECIFIED": 0,
		"ROUND_FINISH":                   1,
		"PITBOSS_MODIFY_RESULT":          2,
	}
)

func (x ResultRecordType) Enum() *ResultRecordType {
	p := new(ResultRecordType)
	*p = x
	return p
}

func (x ResultRecordType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ResultRecordType) Descriptor() protoreflect.EnumDescriptor {
	return file_goldenflower_record_proto_enumTypes[4].Descriptor()
}

func (ResultRecordType) Type() protoreflect.EnumType {
	return &file_goldenflower_record_proto_enumTypes[4]
}

func (x ResultRecordType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ResultRecordType.Descriptor instead.
func (ResultRecordType) EnumDescriptor() ([]byte, []int) {
	return file_goldenflower_record_proto_rawDescGZIP(), []int{4}
}

// 取消原因
type CancelReason int32

const (
	// 未指定，沒有取消
	CancelReason_CANCEL_REASON_UNSPECIFIED CancelReason = 0
	// 取消說明原因
	CancelReason_NO_REASON CancelReason = 1
)

// Enum value maps for CancelReason.
var (
	CancelReason_name = map[int32]string{
		0: "CANCEL_REASON_UNSPECIFIED",
		1: "NO_REASON",
	}
	CancelReason_value = map[string]int32{
		"CANCEL_REASON_UNSPECIFIED": 0,
		"NO_REASON":                 1,
	}
)

func (x CancelReason) Enum() *CancelReason {
	p := new(CancelReason)
	*p = x
	return p
}

func (x CancelReason) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (CancelReason) Descriptor() protoreflect.EnumDescriptor {
	return file_goldenflower_record_proto_enumTypes[5].Descriptor()
}

func (CancelReason) Type() protoreflect.EnumType {
	return &file_goldenflower_record_proto_enumTypes[5]
}

func (x CancelReason) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use CancelReason.Descriptor instead.
func (CancelReason) EnumDescriptor() ([]byte, []int) {
	return file_goldenflower_record_proto_rawDescGZIP(), []int{5}
}

var File_goldenflower_record_proto protoreflect.FileDescriptor

var file_goldenflower_record_proto_rawDesc = []byte{
	0x0a, 0x19, 0x67, 0x6f, 0x6c, 0x64, 0x65, 0x6e, 0x66, 0x6c, 0x6f, 0x77, 0x65, 0x72, 0x2f, 0x72,
	0x65, 0x63, 0x6f, 0x72, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0c, 0x67, 0x6f, 0x6c,
	0x64, 0x65, 0x6e, 0x66, 0x6c, 0x6f, 0x77, 0x65, 0x72, 0x2a, 0x30, 0x0a, 0x08, 0x43, 0x61, 0x72,
	0x64, 0x54, 0x79, 0x70, 0x65, 0x12, 0x19, 0x0a, 0x15, 0x43, 0x41, 0x52, 0x44, 0x5f, 0x54, 0x59,
	0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00,
	0x12, 0x09, 0x0a, 0x05, 0x50, 0x4f, 0x4b, 0x45, 0x52, 0x10, 0x01, 0x2a, 0x39, 0x0a, 0x0c, 0x52,
	0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1d, 0x0a, 0x19, 0x52,
	0x45, 0x53, 0x4f, 0x55, 0x52, 0x43, 0x45, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53,
	0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0a, 0x0a, 0x06, 0x4e, 0x4f,
	0x52, 0x4d, 0x41, 0x4c, 0x10, 0x01, 0x2a, 0xa0, 0x02, 0x0a, 0x04, 0x53, 0x74, 0x65, 0x70, 0x12,
	0x14, 0x0a, 0x10, 0x53, 0x54, 0x45, 0x50, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46,
	0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0f, 0x0a, 0x0b, 0x52, 0x4f, 0x55, 0x4e, 0x44, 0x5f, 0x53,
	0x54, 0x41, 0x52, 0x54, 0x10, 0x01, 0x12, 0x12, 0x0a, 0x0e, 0x52, 0x4f, 0x55, 0x4e, 0x44, 0x5f,
	0x46, 0x49, 0x4e, 0x49, 0x53, 0x48, 0x45, 0x44, 0x10, 0x02, 0x12, 0x12, 0x0a, 0x0e, 0x52, 0x4f,
	0x55, 0x4e, 0x44, 0x5f, 0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c, 0x45, 0x44, 0x10, 0x03, 0x12, 0x11,
	0x0a, 0x0d, 0x44, 0x45, 0x41, 0x4c, 0x5f, 0x42, 0x41, 0x4e, 0x4b, 0x45, 0x52, 0x5f, 0x31, 0x10,
	0x04, 0x12, 0x11, 0x0a, 0x0d, 0x44, 0x45, 0x41, 0x4c, 0x5f, 0x50, 0x4c, 0x41, 0x59, 0x45, 0x52,
	0x5f, 0x31, 0x10, 0x05, 0x12, 0x11, 0x0a, 0x0d, 0x44, 0x45, 0x41, 0x4c, 0x5f, 0x42, 0x41, 0x4e,
	0x4b, 0x45, 0x52, 0x5f, 0x32, 0x10, 0x06, 0x12, 0x11, 0x0a, 0x0d, 0x44, 0x45, 0x41, 0x4c, 0x5f,
	0x50, 0x4c, 0x41, 0x59, 0x45, 0x52, 0x5f, 0x32, 0x10, 0x07, 0x12, 0x11, 0x0a, 0x0d, 0x44, 0x45,
	0x41, 0x4c, 0x5f, 0x42, 0x41, 0x4e, 0x4b, 0x45, 0x52, 0x5f, 0x33, 0x10, 0x08, 0x12, 0x11, 0x0a,
	0x0d, 0x44, 0x45, 0x41, 0x4c, 0x5f, 0x50, 0x4c, 0x41, 0x59, 0x45, 0x52, 0x5f, 0x33, 0x10, 0x09,
	0x12, 0x14, 0x0a, 0x10, 0x4f, 0x50, 0x45, 0x4e, 0x5f, 0x46, 0x4f, 0x52, 0x5f, 0x42, 0x45, 0x54,
	0x54, 0x49, 0x4e, 0x47, 0x10, 0x0a, 0x12, 0x15, 0x0a, 0x11, 0x43, 0x4c, 0x4f, 0x53, 0x45, 0x5f,
	0x54, 0x48, 0x45, 0x5f, 0x42, 0x45, 0x54, 0x54, 0x49, 0x4e, 0x47, 0x10, 0x0b, 0x12, 0x0f, 0x0a,
	0x0b, 0x53, 0x48, 0x4f, 0x57, 0x5f, 0x4e, 0x4f, 0x52, 0x4d, 0x41, 0x4c, 0x10, 0x0c, 0x12, 0x19,
	0x0a, 0x15, 0x50, 0x49, 0x54, 0x42, 0x4f, 0x53, 0x53, 0x5f, 0x4d, 0x4f, 0x44, 0x49, 0x46, 0x59,
	0x5f, 0x4e, 0x4f, 0x52, 0x4d, 0x41, 0x4c, 0x10, 0x18, 0x2a, 0x4d, 0x0a, 0x04, 0x53, 0x65, 0x61,
	0x74, 0x12, 0x14, 0x0a, 0x10, 0x53, 0x45, 0x41, 0x54, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43,
	0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0a, 0x0a, 0x06, 0x44, 0x45, 0x41, 0x4c, 0x45,
	0x52, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x42, 0x41, 0x4e, 0x4b, 0x45, 0x52, 0x10, 0x02, 0x12,
	0x0a, 0x0a, 0x06, 0x50, 0x4c, 0x41, 0x59, 0x45, 0x52, 0x10, 0x03, 0x12, 0x0b, 0x0a, 0x07, 0x50,
	0x49, 0x54, 0x42, 0x4f, 0x53, 0x53, 0x10, 0x09, 0x2a, 0x63, 0x0a, 0x10, 0x52, 0x65, 0x73, 0x75,
	0x6c, 0x74, 0x52, 0x65, 0x63, 0x6f, 0x72, 0x64, 0x54, 0x79, 0x70, 0x65, 0x12, 0x22, 0x0a, 0x1e,
	0x52, 0x45, 0x53, 0x55, 0x4c, 0x54, 0x5f, 0x52, 0x45, 0x43, 0x4f, 0x52, 0x44, 0x5f, 0x54, 0x59,
	0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00,
	0x12, 0x10, 0x0a, 0x0c, 0x52, 0x4f, 0x55, 0x4e, 0x44, 0x5f, 0x46, 0x49, 0x4e, 0x49, 0x53, 0x48,
	0x10, 0x01, 0x12, 0x19, 0x0a, 0x15, 0x50, 0x49, 0x54, 0x42, 0x4f, 0x53, 0x53, 0x5f, 0x4d, 0x4f,
	0x44, 0x49, 0x46, 0x59, 0x5f, 0x52, 0x45, 0x53, 0x55, 0x4c, 0x54, 0x10, 0x02, 0x2a, 0x3c, 0x0a,
	0x0c, 0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x52, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x12, 0x1d, 0x0a,
	0x19, 0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c, 0x5f, 0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x55,
	0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0d, 0x0a, 0x09,
	0x4e, 0x4f, 0x5f, 0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x10, 0x01, 0x42, 0xa8, 0x01, 0x0a, 0x10,
	0x63, 0x6f, 0x6d, 0x2e, 0x67, 0x6f, 0x6c, 0x64, 0x65, 0x6e, 0x66, 0x6c, 0x6f, 0x77, 0x65, 0x72,
	0x42, 0x0b, 0x52, 0x65, 0x63, 0x6f, 0x72, 0x64, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a,
	0x37, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6b, 0x79, 0x2d,
	0x70, 0x6c, 0x61, 0x74, 0x66, 0x6f, 0x72, 0x6d, 0x2f, 0x73, 0x6b, 0x79, 0x63, 0x61, 0x73, 0x69,
	0x6e, 0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x6f, 0x2f, 0x67, 0x6f, 0x6c, 0x64,
	0x65, 0x6e, 0x66, 0x6c, 0x6f, 0x77, 0x65, 0x72, 0xa2, 0x02, 0x03, 0x47, 0x58, 0x58, 0xaa, 0x02,
	0x0c, 0x47, 0x6f, 0x6c, 0x64, 0x65, 0x6e, 0x66, 0x6c, 0x6f, 0x77, 0x65, 0x72, 0xca, 0x02, 0x0c,
	0x47, 0x6f, 0x6c, 0x64, 0x65, 0x6e, 0x66, 0x6c, 0x6f, 0x77, 0x65, 0x72, 0xe2, 0x02, 0x18, 0x47,
	0x6f, 0x6c, 0x64, 0x65, 0x6e, 0x66, 0x6c, 0x6f, 0x77, 0x65, 0x72, 0x5c, 0x47, 0x50, 0x42, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0c, 0x47, 0x6f, 0x6c, 0x64, 0x65, 0x6e,
	0x66, 0x6c, 0x6f, 0x77, 0x65, 0x72, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_goldenflower_record_proto_rawDescOnce sync.Once
	file_goldenflower_record_proto_rawDescData = file_goldenflower_record_proto_rawDesc
)

func file_goldenflower_record_proto_rawDescGZIP() []byte {
	file_goldenflower_record_proto_rawDescOnce.Do(func() {
		file_goldenflower_record_proto_rawDescData = protoimpl.X.CompressGZIP(file_goldenflower_record_proto_rawDescData)
	})
	return file_goldenflower_record_proto_rawDescData
}

var file_goldenflower_record_proto_enumTypes = make([]protoimpl.EnumInfo, 6)
var file_goldenflower_record_proto_goTypes = []interface{}{
	(CardType)(0),         // 0: goldenflower.CardType
	(ResourceType)(0),     // 1: goldenflower.ResourceType
	(Step)(0),             // 2: goldenflower.Step
	(Seat)(0),             // 3: goldenflower.Seat
	(ResultRecordType)(0), // 4: goldenflower.ResultRecordType
	(CancelReason)(0),     // 5: goldenflower.CancelReason
}
var file_goldenflower_record_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_goldenflower_record_proto_init() }
func file_goldenflower_record_proto_init() {
	if File_goldenflower_record_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_goldenflower_record_proto_rawDesc,
			NumEnums:      6,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_goldenflower_record_proto_goTypes,
		DependencyIndexes: file_goldenflower_record_proto_depIdxs,
		EnumInfos:         file_goldenflower_record_proto_enumTypes,
	}.Build()
	File_goldenflower_record_proto = out.File
	file_goldenflower_record_proto_rawDesc = nil
	file_goldenflower_record_proto_goTypes = nil
	file_goldenflower_record_proto_depIdxs = nil
}
