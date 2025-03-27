"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playPauseRef = exports.PlayPause = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Control = require("../Control");
var _NullControl = require("../NullControl");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const playPauseRef = exports.playPauseRef = /*#__PURE__*/(0, _react.createRef)();
const play = require('../../assets/img/play.png');
const pause = require('../../assets/img/pause.png');
const rewind = require('../../assets/img/rewind.png');
const forward = require('../../assets/img/forward.png');
const PlayPause = _ref => {
  let {
    animations: {
      AnimatedView,
      ...animations
    },
    disablePlayPause,
    disableSeekButtons,
    paused,
    togglePlayPause,
    resetControlTimeout,
    showControls,
    onPressForward,
    onPressRewind
  } = _ref;
  let source = paused ? play : pause;
  const animatedStyles = {
    zIndex: showControls ? 99999 : 0
  };
  if (disablePlayPause) {
    return /*#__PURE__*/_react.default.createElement(_NullControl.NullControl, null);
  }
  return /*#__PURE__*/_react.default.createElement(AnimatedView, {
    pointerEvents: 'box-none',
    style: [_styles.styles.container, animatedStyles, animations.controlsOpacity]
  }, !disableSeekButtons ? /*#__PURE__*/_react.default.createElement(_Control.Control, {
    disabled: !showControls,
    callback: onPressRewind,
    resetControlTimeout: resetControlTimeout
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: rewind,
    resizeMode: 'contain',
    style: _styles.styles.rewind
  })) : null, /*#__PURE__*/_react.default.createElement(_Control.Control, _extends({
    disabled: !showControls,
    callback: togglePlayPause,
    resetControlTimeout: resetControlTimeout,
    style: _styles.styles.playContainer,
    controlRef: playPauseRef
  }, _reactNative.Platform.isTV ? {
    hasTVPreferredFocus: showControls
  } : {}), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: source,
    resizeMode: 'contain',
    style: _styles.styles.play
  })), !disableSeekButtons ? /*#__PURE__*/_react.default.createElement(_Control.Control, {
    disabled: !showControls,
    callback: onPressForward,
    resetControlTimeout: resetControlTimeout
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: forward,
    resizeMode: 'contain',
    style: _styles.styles.rewind
  })) : null);
};
exports.PlayPause = PlayPause;
//# sourceMappingURL=PlayPause.js.map