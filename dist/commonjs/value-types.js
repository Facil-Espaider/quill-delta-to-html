"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupType = exports.DataType = exports.AlignType = exports.DirectionType = exports.ScriptType = exports.ListType = exports.NewLine = void 0;
var NewLine = '\n';
exports.NewLine = NewLine;
var ListType;
(function (ListType) {
    ListType["Ordered"] = "ordered";
    ListType["Bullet"] = "bullet";
    ListType["Checked"] = "checked";
    ListType["Unchecked"] = "unchecked";
})(ListType || (exports.ListType = ListType = {}));
var ScriptType;
(function (ScriptType) {
    ScriptType["Sub"] = "sub";
    ScriptType["Super"] = "super";
})(ScriptType || (exports.ScriptType = ScriptType = {}));
var DirectionType;
(function (DirectionType) {
    DirectionType["Rtl"] = "rtl";
})(DirectionType || (exports.DirectionType = DirectionType = {}));
var AlignType;
(function (AlignType) {
    AlignType["Left"] = "left";
    AlignType["Center"] = "center";
    AlignType["Right"] = "right";
    AlignType["Justify"] = "justify";
})(AlignType || (exports.AlignType = AlignType = {}));
var DataType;
(function (DataType) {
    DataType["Image"] = "image";
    DataType["Video"] = "video";
    DataType["Formula"] = "formula";
    DataType["Text"] = "text";
})(DataType || (exports.DataType = DataType = {}));
var GroupType;
(function (GroupType) {
    GroupType["Block"] = "block";
    GroupType["InlineGroup"] = "inline-group";
    GroupType["List"] = "list";
    GroupType["Video"] = "video";
    GroupType["Table"] = "table";
})(GroupType || (exports.GroupType = GroupType = {}));
