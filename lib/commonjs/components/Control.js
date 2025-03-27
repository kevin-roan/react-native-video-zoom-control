"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Control = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Control = _ref => {
  let {
    children,
    callback,
    controlRef,
    disabled,
    style = {},
    ...props
  } = _ref;
  const [focused, setFocused] = (0, _react.useState)(false);
  const setFocusedState = () => setFocused(true);
  const cancelFocusedState = () => setFocused(false);
  const focusedStyle = focused ? {
    opacity: 1
  } : {};
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableHighlight, _extends({
    onFocus: setFocusedState,
    onBlur: cancelFocusedState,
    disabled: disabled,
    ref: controlRef,
    underlayColor: "transparent",
    activeOpacity: 1,
    onPress: () => {
      callback && callback();
    },
    style: [_styles.styles.control, style, focused && focusedStyle]
  }, props), children);
};
exports.Control = Control;
//# sourceMappingURL=Control.js.map