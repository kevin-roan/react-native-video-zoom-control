"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Volume = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Volume = _ref => {
  let {
    volumeFillWidth,
    volumePosition,
    volumeTrackWidth,
    volumePanHandlers
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styles.styles.fill, {
      width: volumeFillWidth
    }]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styles.styles.track, {
      width: volumeTrackWidth
    }]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    style: [_styles.styles.handle, {
      left: volumePosition - 15
    }]
  }, volumePanHandlers), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: _styles.styles.icon,
    source: require('../../assets/img/volume.png')
  })));
};

exports.Volume = Volume;
//# sourceMappingURL=Volume.js.map