"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Back = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Control = require("../Control");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Back = _ref => {
  let {
    onBack,
    showControls
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Control.Control, {
    callback: onBack,
    disabled: !showControls
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('../../assets/img/back.png')
  }));
};

exports.Back = Back;
//# sourceMappingURL=Back.js.map