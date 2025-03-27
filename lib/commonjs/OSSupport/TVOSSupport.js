"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TVOSSupport = void 0;
var _reactNative = require("react-native");
const TVOSSupport = _ref => {
  let {
    showControls,
    onScreenTouch
  } = _ref;
  (0, _reactNative.useTVEventHandler)(() => {
    if (!showControls) {
      onScreenTouch();
    }
  });
  return null;
};
exports.TVOSSupport = TVOSSupport;
//# sourceMappingURL=TVOSSupport.js.map