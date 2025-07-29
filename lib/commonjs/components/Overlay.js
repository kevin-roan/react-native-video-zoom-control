"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Overlay = _ref => {
  let {
    animations: {
      AnimatedView,
      controlsOpacity
    }
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(AnimatedView, {
    style: [_styles.overlay, controlsOpacity]
  });
};
exports.Overlay = Overlay;
const _styles = _reactNative.StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    opacity: 0
  }
});
//# sourceMappingURL=Overlay.js.map