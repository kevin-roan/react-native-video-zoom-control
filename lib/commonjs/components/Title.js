"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Title = _ref => {
  let {
    title
  } = _ref;
  if (title) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [_styles2.styles.control, _styles.title]
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [_styles2.styles.text, _styles.titleText],
      numberOfLines: 1
    }, title || ''));
  }
  return null;
};
exports.Title = Title;
const _styles = _reactNative.StyleSheet.create({
  title: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    padding: 0
  },
  titleText: {
    textAlign: 'center'
  }
});
//# sourceMappingURL=Title.js.map