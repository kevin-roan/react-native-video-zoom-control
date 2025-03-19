"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _styles = require("./styles");

var _Control = require("../Control");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Timer = _ref => {
  let {
    children,
    toggleTimer,
    resetControlTimeout,
    showControls
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Control.Control, {
    callback: toggleTimer,
    resetControlTimeout: resetControlTimeout,
    style: _styles.styles.timer,
    disabled: !showControls
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.styles.timerText
  }, children));
};

exports.Timer = Timer;
//# sourceMappingURL=Timer.js.map