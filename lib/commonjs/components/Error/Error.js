"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Error = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Error = _ref => {
  let {
    error
  } = _ref;
  if (error) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _styles.styles.container
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: require('../../assets/img/error-icon.png'),
      style: _styles.styles.icon
    }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: _styles.styles.text
    }, "Video unavailable"));
  }
  return null;
};
exports.Error = Error;
//# sourceMappingURL=Error.js.map