"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCell = exports.TableRow = exports.TableGroup = exports.ListItem = exports.ListGroup = exports.BlockGroup = exports.InlineGroup = exports.BlotBlock = exports.VideoItem = void 0;
var InlineGroup = (function () {
    function InlineGroup(ops) {
        this.ops = ops;
    }
    return InlineGroup;
}());
exports.InlineGroup = InlineGroup;
var SingleItem = (function () {
    function SingleItem(op) {
        this.op = op;
    }
    return SingleItem;
}());
var VideoItem = (function (_super) {
    __extends(VideoItem, _super);
    function VideoItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VideoItem;
}(SingleItem));
exports.VideoItem = VideoItem;
var BlotBlock = (function (_super) {
    __extends(BlotBlock, _super);
    function BlotBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BlotBlock;
}(SingleItem));
exports.BlotBlock = BlotBlock;
var BlockGroup = (function () {
    function BlockGroup(op, ops) {
        this.op = op;
        this.ops = ops;
    }
    return BlockGroup;
}());
exports.BlockGroup = BlockGroup;
var ListGroup = (function () {
    function ListGroup(items) {
        this.items = items;
    }
    return ListGroup;
}());
exports.ListGroup = ListGroup;
var ListItem = (function () {
    function ListItem(item, innerList) {
        if (innerList === void 0) { innerList = null; }
        this.item = item;
        this.innerList = innerList;
    }
    return ListItem;
}());
exports.ListItem = ListItem;
var TableGroup = (function () {
    function TableGroup(rows) {
        this.rows = rows;
    }
    return TableGroup;
}());
exports.TableGroup = TableGroup;
var TableRow = (function () {
    function TableRow(cells) {
        this.cells = cells;
    }
    return TableRow;
}());
exports.TableRow = TableRow;
var TableCell = (function () {
    function TableCell(item) {
        this.item = item;
    }
    return TableCell;
}());
exports.TableCell = TableCell;
