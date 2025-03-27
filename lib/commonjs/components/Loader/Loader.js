"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Loader = _ref => {
  let {} = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, null));
};
exports.Loader = Loader;
//# sourceMappingURL=Loader.js.map