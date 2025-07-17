"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopControls = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Volume = require("./Volume");

var _Back = require("./Back");

var _NullControl = require("./NullControl");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TopControls = /*#__PURE__*/(0, _react.memo)(_ref => {
  let {
    showControls,
    panHandlers,
    animations: {
      AnimatedView,
      controlsOpacity,
      topControl
    },
    disableBack,
    disableVolume,
    volumeFillWidth,
    volumePosition,
    volumeTrackWidth,
    onBack,
    resetControlTimeout
  } = _ref;
  const backControl = disableBack ? /*#__PURE__*/_react.default.createElement(_NullControl.NullControl, null) : /*#__PURE__*/_react.default.createElement(_Back.Back, {
    showControls: showControls,
    onBack: onBack,
    resetControlTimeout: resetControlTimeout
  });
  const volumeControl = disableVolume ? /*#__PURE__*/_react.default.createElement(_NullControl.NullControl, null) : /*#__PURE__*/_react.default.createElement(_Volume.Volume, {
    volumeFillWidth: volumeFillWidth,
    volumeTrackWidth: volumeTrackWidth,
    volumePosition: volumePosition,
    volumePanHandlers: panHandlers
  });
  return /*#__PURE__*/_react.default.createElement(AnimatedView, {
    style: [_styles.top, controlsOpacity, topControl]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require('../assets/img/top-vignette.png'),
    style: [_styles2.styles.column],
    imageStyle: [_styles2.styles.vignette]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, {
    style: _styles.topControlGroup
  }, backControl, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.pullRight
  }, volumeControl))));
});
exports.TopControls = TopControls;

const _styles = _reactNative.StyleSheet.create({
  pullRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  top: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  topControlGroup: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 12,
    marginBottom: 18
  }
});
//# sourceMappingURL=TopControls.js.map