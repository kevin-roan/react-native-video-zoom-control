"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoPlayer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeVideo = _interopRequireWildcard(require("react-native-video"));
var _reactNativeZoomableView = require("@openspacelabs/react-native-zoomable-view");
var _hooks = require("./hooks");
var _components = require("./components");
var _OSSupport = require("./OSSupport");
var _utils = require("./utils");
var _styles2 = require("./styles");
var _VideoResolution = require("react-native-media-console/src/components/VideoResolution");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const volumeWidth = 150;
const iconOffset = 0;
const AnimatedVideoPlayer = props => {
  var _videoRef$current;
  const {
    animations,
    toggleResizeModeOnFullscreen,
    doubleTapTime = 130,
    resizeMode = _reactNativeVideo.ResizeMode.CONTAIN,
    isFullscreen = false,
    showOnStart = false,
    showOnEnd = false,
    alwaysShowControls = false,
    paused = false,
    muted = false,
    volume = 1,
    title = "",
    rate = 1,
    showDuration = false,
    showTimeRemaining = false,
    showHours = false,
    onSeek,
    onError,
    onBack,
    onEnd,
    onEnterFullscreen = () => {},
    onExitFullscreen = () => {},
    onHideControls = () => {},
    onShowControls = () => {},
    onPause,
    onPlay,
    onLoad,
    onLoadStart,
    onProgress,
    controlTimeoutDelay = 15000,
    tapAnywhereToPause = false,
    videoStyle = {},
    containerStyle = {},
    seekColor = "",
    source,
    disableBack = false,
    disableVolume = false,
    disableFullscreen = false,
    disableTimer = false,
    disableSeekbar = false,
    disablePlayPause = false,
    disableSeekButtons = false,
    disableResolution = false,
    disableOverlay,
    navigator,
    rewindTime = 15,
    pan: {
      horizontal: horizontalPan,
      inverted: invertedPan
    } = {},
    testID,
    videoUrls
  } = props;
  const mounted = (0, _react.useRef)(false);
  const _videoRef = (0, _react.useRef)(null);
  const controlTimeout = (0, _react.useRef)(setTimeout(() => {})).current;
  const tapActionTimeout = (0, _react.useRef)(null);
  const [_resizeMode, setResizeMode] = (0, _react.useState)(resizeMode);
  const [_paused, setPaused] = (0, _react.useState)(paused);
  const [_muted, setMuted] = (0, _react.useState)(muted);
  const [_volume, setVolume] = (0, _react.useState)(volume);
  const [_isFullscreen, setIsFullscreen] = (0, _react.useState)(isFullscreen || resizeMode === "cover" || false);
  const [_showTimeRemaining, setShowTimeRemaining] = (0, _react.useState)(showTimeRemaining);
  const [volumeTrackWidth, setVolumeTrackWidth] = (0, _react.useState)(0);
  const [volumeFillWidth, setVolumeFillWidth] = (0, _react.useState)(0);
  const [seekerFillWidth, setSeekerFillWidth] = (0, _react.useState)(0);
  const [showControls, setShowControls] = (0, _react.useState)(showOnStart);
  const [volumePosition, setVolumePositionState] = (0, _react.useState)(0);
  const [seekerPosition, setSeekerPositionState] = (0, _react.useState)(0);
  const [volumeOffset, setVolumeOffset] = (0, _react.useState)(0);
  const [seekerOffset, setSeekerOffset] = (0, _react.useState)(0);
  const [seekerWidth, setSeekerWidth] = (0, _react.useState)(0);
  const [seeking, setSeeking] = (0, _react.useState)(false);
  const [loading, setLoading] = (0, _react.useState)(true);
  const [currentTime, setCurrentTime] = (0, _react.useState)(0);
  const [error, setError] = (0, _react.useState)(false);
  const [duration, setDuration] = (0, _react.useState)(0);
  const [_disableResolutionControls, setDisableResolutionControls] = (0, _react.useState)(false);
  const [sourceUrl, setSourceUrl] = (0, _react.useState)({
    uri: ''
  });
  const [isResolutionModalOpen, setResolutionModalOpen] = (0, _react.useState)(false);
  const videoRef = props.videoRef || _videoRef;
  const toggleFullscreen = () => setIsFullscreen(prevState => !prevState);
  const toggleControls = () => setShowControls(prevState => alwaysShowControls || !prevState);
  const toggleTimer = () => setShowTimeRemaining(prevState => !prevState);
  const togglePlayPause = () => {
    setPaused(prevState => !prevState);
  };
  const styles = {
    videoStyle,
    containerStyle: containerStyle
  };
  const _onSeek = obj => {
    if (!seeking) {
      setControlTimeout();
    }
    setCurrentTime(obj.seekTime);
    if (typeof onSeek === "function") {
      onSeek(obj);
    }
  };
  const handleSource = renditionSource => {
    if (renditionSource === "defaultSource") {
      setSourceUrl({
        uri: ''
      });
    } else {
      setSourceUrl({
        uri: renditionSource
      });
    }
  };
  const _onEnd = () => {
    if (currentTime < duration) {
      setCurrentTime(duration);
      setPaused(!props.repeat);
      if (showOnEnd) {
        setShowControls(!props.repeat);
      }
    }
    if (typeof onEnd === "function") {
      onEnd();
    }
  };
  const _onError = () => {
    setError(true);
    setLoading(false);
  };
  function _onLoadStart(e) {
    setLoading(true);
    if (typeof onLoadStart === "function") {
      onLoadStart(e);
    }
  }
  function _onLoad(data) {
    setDuration(data.duration);
    setLoading(false);
    if (showControls) {
      setControlTimeout();
    }
    if (typeof onLoad === "function") {
      onLoad(data);
    }
  }
  function _onProgress(data) {
    if (!seeking) {
      setCurrentTime(data.currentTime);
      if (typeof onProgress === "function") {
        onProgress(data);
      }
    }
  }
  const _onScreenTouch = () => {
    if (tapActionTimeout.current) {
      clearTimeout(tapActionTimeout.current);
      tapActionTimeout.current = null;
      toggleFullscreen();
      if (showControls) {
        resetControlTimeout();
      }
    } else {
      tapActionTimeout.current = setTimeout(() => {
        if (tapAnywhereToPause && showControls) {
          togglePlayPause();
          resetControlTimeout();
        } else {
          toggleControls();
        }
        tapActionTimeout.current = null;
      }, doubleTapTime);
    }
  };
  const events = {
    onError: onError || _onError,
    onBack: onBack || (0, _utils._onBack)(navigator),
    onEnd: _onEnd,
    onScreenTouch: _onScreenTouch,
    onEnterFullscreen,
    onExitFullscreen,
    onShowControls,
    onHideControls,
    onLoadStart: _onLoadStart,
    onProgress: _onProgress,
    onSeek: _onSeek,
    onLoad: _onLoad,
    onPause,
    onPlay
  };
  const constrainToSeekerMinMax = (0, _react.useCallback)(function () {
    let val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (val <= 0) {
      return 0;
    } else if (val >= seekerWidth) {
      return seekerWidth;
    }
    return val;
  }, [seekerWidth]);
  const constrainToVolumeMinMax = function () {
    let val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (val <= 0) {
      return 0;
    } else if (val >= volumeWidth + 9) {
      return volumeWidth + 9;
    }
    return val;
  };
  const setSeekerPosition = (0, _react.useCallback)(function () {
    let position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    const positionValue = constrainToSeekerMinMax(position);
    setSeekerPositionState(positionValue);
    setSeekerOffset(positionValue);
    setSeekerFillWidth(positionValue);
  }, [constrainToSeekerMinMax]);
  const setVolumePosition = function () {
    let position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    const positionValue = constrainToVolumeMinMax(position);
    setVolumePositionState(positionValue + iconOffset);
    if (positionValue < 0) {
      setVolumeFillWidth(0);
    } else {
      setVolumeFillWidth(positionValue);
    }
  };
  const {
    clearControlTimeout,
    resetControlTimeout,
    setControlTimeout
  } = (0, _hooks.useControlTimeout)({
    controlTimeout,
    controlTimeoutDelay,
    mounted: mounted.current,
    showControls,
    setShowControls,
    alwaysShowControls
  });
  const {
    volumePanResponder,
    seekPanResponder
  } = (0, _hooks.usePanResponders)({
    duration,
    seekerOffset,
    volumeOffset,
    loading,
    seekerWidth,
    seeking,
    seekerPosition,
    seek: videoRef === null || videoRef === void 0 || (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 ? void 0 : _videoRef$current.seek,
    clearControlTimeout,
    setVolumePosition,
    setSeekerPosition,
    setSeeking,
    setControlTimeout,
    onEnd: events.onEnd,
    horizontal: horizontalPan,
    inverted: invertedPan
  });
  (0, _react.useEffect)(() => {
    if (currentTime >= duration) {
      var _videoRef$current2;
      videoRef === null || videoRef === void 0 || (_videoRef$current2 = videoRef.current) === null || _videoRef$current2 === void 0 || _videoRef$current2.seek(0);
    }
  }, [currentTime, duration, videoRef]);
  (0, _react.useEffect)(() => {
    if (toggleResizeModeOnFullscreen) {
      setResizeMode(_isFullscreen ? _reactNativeVideo.ResizeMode.COVER : _reactNativeVideo.ResizeMode.CONTAIN);
    }
    if (mounted.current) {
      if (_isFullscreen) {
        typeof events.onEnterFullscreen === "function" && events.onEnterFullscreen();
      } else {
        typeof events.onExitFullscreen === "function" && events.onExitFullscreen();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_isFullscreen, toggleResizeModeOnFullscreen]);
  (0, _react.useEffect)(() => {
    setIsFullscreen(isFullscreen);
  }, [isFullscreen]);
  (0, _react.useEffect)(() => {
    setDisableResolutionControls(disableResolution);
  }, [disableResolution]);
  (0, _react.useEffect)(() => {
    setPaused(paused);
  }, [paused]);
  (0, _react.useEffect)(() => {
    if (_paused) {
      typeof events.onPause === "function" && events.onPause();
    } else {
      typeof events.onPlay === "function" && events.onPlay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_paused]);
  (0, _react.useEffect)(() => {
    if (!seeking && currentTime && duration) {
      const percent = currentTime / duration;
      const position = seekerWidth * percent;
      setSeekerPosition(position);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime, duration, seekerWidth, setSeekerPosition]);
  (0, _react.useEffect)(() => {
    if (showControls && !loading) {
      animations.showControlAnimation();
      setControlTimeout();
      typeof events.onShowControls === "function" && events.onShowControls();
    } else {
      animations.hideControlAnimation();
      setResolutionModalOpen(false);
      clearControlTimeout();
      typeof events.onHideControls === "function" && events.onHideControls();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showControls, loading]);
  (0, _react.useEffect)(() => {
    setMuted(muted);
  }, [muted]);
  (0, _react.useEffect)(() => {
    const newVolume = volumePosition / volumeWidth;
    if (newVolume <= 0) {
      setMuted(true);
    } else {
      setMuted(false);
    }
    setVolume(newVolume);
    setVolumeOffset(volumePosition);
    const newVolumeTrackWidth = volumeWidth - volumeFillWidth;
    if (newVolumeTrackWidth > 150) {
      setVolumeTrackWidth(150);
    } else {
      setVolumeTrackWidth(newVolumeTrackWidth);
    }
  }, [volumeFillWidth, volumePosition]);
  (0, _react.useEffect)(() => {
    const position = volumeWidth * _volume;
    setVolumePosition(position);
    setVolumeOffset(position);
    mounted.current = true;
    return () => {
      mounted.current = false;
      clearControlTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleResolutionModalOpen = () => {
    setResolutionModalOpen(!isResolutionModalOpen);
  };
  const zoomableViewRef = /*#__PURE__*/(0, _react.createRef)();
  return /*#__PURE__*/_react.default.createElement(_OSSupport.PlatformSupport, {
    showControls: showControls,
    containerStyles: styles.containerStyle,
    onScreenTouch: events.onScreenTouch,
    testID: testID
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styles2._styles.player.container, styles.containerStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNativeZoomableView.ReactNativeZoomableView, {
    ref: zoomableViewRef,
    maxZoom: 10,
    minZoom: 1,
    zoomStep: 0.5,
    initialZoom: 1,
    zoomEnabled: !showControls,
    doubleTapZoomToCenter: false,
    disablePanOnInitialZoom: !showControls,
    onSingleTap: () => {
      zoomableViewRef.current.moveBy(0, 0);
      setShowControls(!showControls);
    },
    bindToBorders: true,
    panBoundaryPadding: 0,
    movementSensibility: 3
  }, /*#__PURE__*/_react.default.createElement(_reactNativeVideo.default, _extends({}, props, events, {
    ref: videoRef || _videoRef,
    resizeMode: _resizeMode,
    volume: _volume,
    paused: _paused,
    muted: _muted,
    rate: rate,
    style: [_styles2._styles.player.video, styles.videoStyle]
    // if the user havent selected a rendition, use the default rendition 
    // if the user selected auto, it will use the default link instead, check handleSource function 
    ,
    source: sourceUrl.uri === '' ? source : sourceUrl
  }))), loading ? /*#__PURE__*/_react.default.createElement(_components.Loader, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showControls ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Error, {
    error: error
  }), !disableOverlay && /*#__PURE__*/_react.default.createElement(_components.Overlay, {
    animations: animations
  }), /*#__PURE__*/_react.default.createElement(_components.TopControls, {
    panHandlers: volumePanResponder.panHandlers,
    animations: animations,
    disableBack: disableBack,
    disableVolume: disableVolume,
    volumeFillWidth: volumeFillWidth,
    volumeTrackWidth: volumeTrackWidth,
    volumePosition: volumePosition,
    onBack: events.onBack,
    resetControlTimeout: resetControlTimeout,
    showControls: showControls
  }), isResolutionModalOpen && showControls ? /*#__PURE__*/_react.default.createElement(_VideoResolution.ResolutionModal, {
    videoUrls: videoUrls,
    handleSource: handleSource
  }) : /*#__PURE__*/_react.default.createElement(_components.PlayPause, {
    animations: animations,
    disablePlayPause: disablePlayPause,
    disableSeekButtons: disableSeekButtons,
    paused: _paused,
    togglePlayPause: togglePlayPause,
    resetControlTimeout: resetControlTimeout,
    showControls: showControls,
    onPressRewind: () => {
      var _videoRef$current3;
      return videoRef === null || videoRef === void 0 || (_videoRef$current3 = videoRef.current) === null || _videoRef$current3 === void 0 ? void 0 : _videoRef$current3.seek(currentTime - rewindTime);
    },
    onPressForward: () => {
      var _videoRef$current4;
      return videoRef === null || videoRef === void 0 || (_videoRef$current4 = videoRef.current) === null || _videoRef$current4 === void 0 ? void 0 : _videoRef$current4.seek(currentTime + rewindTime);
    }
  }), /*#__PURE__*/_react.default.createElement(_components.BottomControls, {
    disableResolution: _disableResolutionControls,
    isResolutionModalOpen: isResolutionModalOpen,
    animations: animations,
    panHandlers: seekPanResponder.panHandlers,
    disableTimer: disableTimer,
    disableSeekbar: disableSeekbar,
    showHours: showHours,
    showDuration: showDuration,
    paused: _paused,
    showTimeRemaining: _showTimeRemaining,
    currentTime: currentTime,
    duration: duration,
    seekColor: seekColor,
    title: title,
    toggleTimer: toggleTimer,
    resetControlTimeout: resetControlTimeout,
    seekerFillWidth: seekerFillWidth,
    seekerPosition: seekerPosition,
    setSeekerWidth: setSeekerWidth,
    isFullscreen: isFullscreen,
    disableFullscreen: disableFullscreen,
    toggleFullscreen: toggleFullscreen,
    showControls: showControls,
    handleResolutionModalOpen: handleResolutionModalOpen
  })) : null)));
};
const CustomAnimations = _ref => {
  let {
    useAnimations,
    controlAnimationTiming = 450,
    ...props
  } = _ref;
  const animations = useAnimations(controlAnimationTiming);
  return /*#__PURE__*/_react.default.createElement(AnimatedVideoPlayer, _extends({
    animations: animations
  }, props));
};
const JSAnimations = props => {
  const animations = (0, _hooks.useJSAnimations)(props.controlAnimationTiming);
  return /*#__PURE__*/_react.default.createElement(AnimatedVideoPlayer, _extends({
    animations: animations
  }, props));
};
const VideoPlayer = props => {
  if (props !== null && props !== void 0 && props.useAnimations) {
    return /*#__PURE__*/_react.default.createElement(CustomAnimations, _extends({
      useAnimations: props === null || props === void 0 ? void 0 : props.useAnimations
    }, props));
  }
  return /*#__PURE__*/_react.default.createElement(JSAnimations, props);
};
exports.VideoPlayer = VideoPlayer;
//# sourceMappingURL=VideoPlayer.js.map