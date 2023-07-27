"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpLinkSanitizer = void 0;
var url = __importStar(require("./helpers/url"));
var funcs_html_1 = require("./funcs-html");
var OpLinkSanitizer = (function () {
    function OpLinkSanitizer() {
    }
    OpLinkSanitizer.sanitize = function (link, options) {
        var sanitizerFn = function () {
            return undefined;
        };
        if (options && typeof options.urlSanitizer === 'function') {
            sanitizerFn = options.urlSanitizer;
        }
        var result = sanitizerFn(link);
        return typeof result === 'string' ? result : (0, funcs_html_1.encodeLink)(url.sanitize(link));
    };
    return OpLinkSanitizer;
}());
exports.OpLinkSanitizer = OpLinkSanitizer;
