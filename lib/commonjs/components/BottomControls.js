"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomControls = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Timer = require("./Timer");
var _Title = require("./Title");
var _NullControl = require("./NullControl");
var _Fullscreen = require("./Fullscreen");
var _Seekbar = require("./Seekbar");
var _utils = require("../utils");
var _styles2 = require("./styles");
var _VideoResolution = require("./components/VideoResolution");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BottomControls = _ref => {
  let {
    showControls,
    animations: {
      AnimatedView,
      ...animations
    },
    panHandlers,
    disableSeekbar,
    disableTimer,
    isResolutionModalOpen,
    duration,
    seekColor,
    showDuration,
    showHours,
    showTimeRemaining,
    currentTime,
    title,
    toggleTimer,
    resetControlTimeout,
    seekerFillWidth,
    seekerPosition,
    setSeekerWidth,
    isFullscreen,
    disableFullscreen,
    disableResolution,
    toggleFullscreen,
    handleResolutionModalOpen
  } = _ref;
  const timerControl = disableTimer ? /*#__PURE__*/_react.default.createElement(_NullControl.NullControl, null) : /*#__PURE__*/_react.default.createElement(_Timer.Timer, {
    resetControlTimeout: resetControlTimeout,
    toggleTimer: toggleTimer,
    showControls: showControls
  }, (0, _utils.calculateTime)({
    showDuration,
    showHours,
    showTimeRemaining,
    time: currentTime,
    duration
  }));
  const seekbarControl = disableSeekbar ? /*#__PURE__*/_react.default.createElement(_NullControl.NullControl, null) : /*#__PURE__*/_react.default.createElement(_Seekbar.Seekbar, {
    seekerFillWidth: seekerFillWidth,
    seekerPosition: seekerPosition,
    seekColor: seekColor,
    seekerPanHandlers: panHandlers,
    setSeekerWidth: setSeekerWidth
  });
  const resolutionControl = disableResolution ? /*#__PURE__*/_react.default.createElement(_NullControl.NullControl, null) : /*#__PURE__*/_react.default.createElement(_VideoResolution.VideoResolution, {
    handleResolutionModalOpen: handleResolutionModalOpen
  });
  const fullscreenControl = disableFullscreen ? /*#__PURE__*/_react.default.createElement(_NullControl.NullControl, null) : /*#__PURE__*/_react.default.createElement(_Fullscreen.Fullscreen, {
    isFullscreen: isFullscreen,
    toggleFullscreen: toggleFullscreen,
    resetControlTimeout: resetControlTimeout,
    showControls: showControls
  });
  return /*#__PURE__*/_react.default.createElement(AnimatedView, {
    style: [_styles.bottom, animations.controlsOpacity, animations.bottomControl]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require("../assets/img/bottom-vignette.png"),
    style: [_styles2.styles.column],
    imageStyle: [_styles2.styles.vignette]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, {
    style: [_styles2.styles.row, _styles.bottomControlGroup]
  }, timerControl, /*#__PURE__*/_react.default.createElement(_Title.Title, {
    title: title
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles2.styles.bottomRightControls
  }, !isResolutionModalOpen ? resolutionControl : null, fullscreenControl)), /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, {
    style: _styles2.styles.seekBarContainer
  }, seekbarControl)));
};
exports.BottomControls = BottomControls;
const _styles = _reactNative.StyleSheet.create({
  bottom: {
    alignItems: "stretch",
    flex: 2,
    justifyContent: "flex-end"
  },
  bottomControlGroup: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 0
  }
});
//# sourceMappingURL=BottomControls.js.map