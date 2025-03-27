"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlatformSupport = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _TVOSSupport = require("./TVOSSupport");
var _styles2 = require("../styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PlatformSupport = _ref => {
  let {
    children,
    onScreenTouch,
    containerStyles,
    showControls,
    testID
  } = _ref;
  if (_reactNative.Platform.isTV) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_TVOSSupport.TVOSSupport, {
      showControls: showControls,
      onScreenTouch: onScreenTouch
    }), children);
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    testID: testID,
    onPress: onScreenTouch,
    style: [_styles2._styles.player.container, containerStyles]
  }, children);
};
exports.PlatformSupport = PlatformSupport;
//# sourceMappingURL=PlatformSupport.js.map