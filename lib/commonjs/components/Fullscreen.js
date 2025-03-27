"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fullscreen = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Control = require("./Control");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Fullscreen = _ref => {
  let {
    isFullscreen,
    toggleFullscreen,
    resetControlTimeout,
    showControls
  } = _ref;
  let source = isFullscreen ? require('../assets/img/shrink.png') : require('../assets/img/expand.png');
  return /*#__PURE__*/_react.default.createElement(_Control.Control, {
    callback: toggleFullscreen,
    resetControlTimeout: resetControlTimeout,
    style: styles.fullscreen,
    disabled: !showControls
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: source
  }));
};
exports.Fullscreen = Fullscreen;
const styles = _reactNative.StyleSheet.create({
  fullscreen: {
    flexDirection: 'row'
  }
});
//# sourceMappingURL=Fullscreen.js.map