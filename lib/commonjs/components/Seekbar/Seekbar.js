"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Seekbar = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Seekbar = _ref => {
  let {
    seekColor,
    seekerFillWidth,
    seekerPosition,
    seekerPanHandlers,
    setSeekerWidth
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    style: _styles.styles.container,
    collapsable: false
  }, seekerPanHandlers), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.track,
    onLayout: event => setSeekerWidth(event.nativeEvent.layout.width),
    pointerEvents: 'none'
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styles.styles.fill, {
      width: seekerFillWidth,
      backgroundColor: seekColor || '#FFF'
    }],
    pointerEvents: 'none'
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styles.styles.handle, {
      left: seekerPosition
    }],
    pointerEvents: 'none'
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styles.styles.circle, {
      backgroundColor: seekColor || '#FFF'
    }],
    pointerEvents: 'none'
  })));
};
exports.Seekbar = Seekbar;
//# sourceMappingURL=Seekbar.js.map