function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useCallback, useState, useEffect, useRef, createRef } from "react";
import { View } from "react-native";
import Video, { ResizeMode } from "react-native-video";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { useControlTimeout, useJSAnimations, usePanResponders } from "./hooks";
import { Error, Loader, TopControls, BottomControls, PlayPause, Overlay } from "./components";
import { PlatformSupport } from "./OSSupport";
import { _onBack } from "./utils";
import { _styles } from "./styles";
import { ResolutionModal } from "./components/VideoResolution";
const volumeWidth = 150;
const iconOffset = 0;
const AnimatedVideoPlayer = props => {
  var _videoRef$current;
  const {
    animations,
    toggleResizeModeOnFullscreen,
    doubleTapTime = 130,
    resizeMode = ResizeMode.CONTAIN,
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
  const mounted = useRef(false);
  const _videoRef = useRef(null);
  const controlTimeout = useRef(setTimeout(() => {})).current;
  const tapActionTimeout = useRef(null);
  const [_resizeMode, setResizeMode] = useState(resizeMode);
  const [_paused, setPaused] = useState(paused);
  const [_muted, setMuted] = useState(muted);
  const [_volume, setVolume] = useState(volume);
  const [_isFullscreen, setIsFullscreen] = useState(isFullscreen || resizeMode === "cover" || false);
  const [_showTimeRemaining, setShowTimeRemaining] = useState(showTimeRemaining);
  const [volumeTrackWidth, setVolumeTrackWidth] = useState(0);
  const [volumeFillWidth, setVolumeFillWidth] = useState(0);
  const [seekerFillWidth, setSeekerFillWidth] = useState(0);
  const [showControls, setShowControls] = useState(showOnStart);
  const [volumePosition, setVolumePositionState] = useState(0);
  const [seekerPosition, setSeekerPositionState] = useState(0);
  const [volumeOffset, setVolumeOffset] = useState(0);
  const [seekerOffset, setSeekerOffset] = useState(0);
  const [seekerWidth, setSeekerWidth] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [error, setError] = useState(false);
  const [duration, setDuration] = useState(0);
  const [_disableResolutionControls, setDisableResolutionControls] = useState(false);
  const [sourceUrl, setSourceUrl] = useState({
    uri: ""
  });
  const [isResolutionModalOpen, setResolutionModalOpen] = useState(false);
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
        uri: ""
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
    onBack: onBack || _onBack(navigator),
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
  const constrainToSeekerMinMax = useCallback(function () {
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
  const setSeekerPosition = useCallback(function () {
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
  } = useControlTimeout({
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
  } = usePanResponders({
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
  useEffect(() => {
    if (currentTime >= duration) {
      var _videoRef$current2;
      videoRef === null || videoRef === void 0 || (_videoRef$current2 = videoRef.current) === null || _videoRef$current2 === void 0 || _videoRef$current2.seek(0);
    }
  }, [currentTime, duration, videoRef]);
  useEffect(() => {
    if (toggleResizeModeOnFullscreen) {
      setResizeMode(_isFullscreen ? ResizeMode.COVER : ResizeMode.CONTAIN);
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
  useEffect(() => {
    setIsFullscreen(isFullscreen);
  }, [isFullscreen]);
  useEffect(() => {
    setDisableResolutionControls(disableResolution);
  }, [disableResolution]);
  useEffect(() => {
    setPaused(paused);
  }, [paused]);
  useEffect(() => {
    if (_paused) {
      typeof events.onPause === "function" && events.onPause();
    } else {
      typeof events.onPlay === "function" && events.onPlay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_paused]);
  useEffect(() => {
    if (!seeking && currentTime && duration) {
      const percent = currentTime / duration;
      const position = seekerWidth * percent;
      setSeekerPosition(position);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime, duration, seekerWidth, setSeekerPosition]);
  useEffect(() => {
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
  useEffect(() => {
    setMuted(muted);
  }, [muted]);
  useEffect(() => {
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
  useEffect(() => {
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
  const zoomableViewRef = /*#__PURE__*/createRef();
  return /*#__PURE__*/React.createElement(PlatformSupport, {
    showControls: showControls,
    containerStyles: styles.containerStyle,
    onScreenTouch: events.onScreenTouch,
    testID: testID
  }, /*#__PURE__*/React.createElement(View, {
    style: [_styles.player.container, styles.containerStyle]
  }, /*#__PURE__*/React.createElement(ReactNativeZoomableView, {
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
  }, /*#__PURE__*/React.createElement(Video, _extends({}, props, events, {
    ref: videoRef || _videoRef,
    resizeMode: _resizeMode,
    volume: _volume,
    paused: _paused,
    muted: _muted,
    rate: rate,
    style: [_styles.player.video, styles.videoStyle]
    // if the user havent selected a rendition, use the default rendition
    ,
    source: sourceUrl.uri === "" ? source : sourceUrl
  }))), loading ? /*#__PURE__*/React.createElement(Loader, null) : /*#__PURE__*/React.createElement(React.Fragment, null, showControls ? /*#__PURE__*/React.createElement(View, {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Error, {
    error: error
  }), !disableOverlay && /*#__PURE__*/React.createElement(Overlay, {
    animations: animations
  }), /*#__PURE__*/React.createElement(TopControls, {
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
  }), isResolutionModalOpen && showControls ? /*#__PURE__*/React.createElement(ResolutionModal, {
    videoUrls: videoUrls,
    handleSource: handleSource
  }) : /*#__PURE__*/React.createElement(PlayPause, {
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
  }), /*#__PURE__*/React.createElement(BottomControls, {
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
  return /*#__PURE__*/React.createElement(AnimatedVideoPlayer, _extends({
    animations: animations
  }, props));
};
const JSAnimations = props => {
  const animations = useJSAnimations(props.controlAnimationTiming);
  return /*#__PURE__*/React.createElement(AnimatedVideoPlayer, _extends({
    animations: animations
  }, props));
};
export const VideoPlayer = props => {
  if (props !== null && props !== void 0 && props.useAnimations) {
    return /*#__PURE__*/React.createElement(CustomAnimations, _extends({
      useAnimations: props === null || props === void 0 ? void 0 : props.useAnimations
    }, props));
  }
  return /*#__PURE__*/React.createElement(JSAnimations, props);
};
//# sourceMappingURL=VideoPlayer.js.map