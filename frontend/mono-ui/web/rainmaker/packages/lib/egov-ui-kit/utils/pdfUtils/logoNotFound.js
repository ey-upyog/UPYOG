"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var logoNotFoundImage = exports.logoNotFoundImage = "data:image/png;base64,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";