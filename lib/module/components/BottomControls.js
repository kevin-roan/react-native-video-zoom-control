import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { Timer } from "./Timer";
import { Title } from "./Title";
import { NullControl } from "./NullControl";
import { Fullscreen } from "./Fullscreen";
import { Seekbar } from "./Seekbar";
import { calculateTime } from "../utils";
import { styles } from "./styles";
import { VideoResolution } from "react-native-media-console/src/components/VideoResolution";
export const BottomControls = _ref => {
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
  const timerControl = disableTimer ? /*#__PURE__*/React.createElement(NullControl, null) : /*#__PURE__*/React.createElement(Timer, {
    resetControlTimeout: resetControlTimeout,
    toggleTimer: toggleTimer,
    showControls: showControls
  }, calculateTime({
    showDuration,
    showHours,
    showTimeRemaining,
    time: currentTime,
    duration
  }));
  const seekbarControl = disableSeekbar ? /*#__PURE__*/React.createElement(NullControl, null) : /*#__PURE__*/React.createElement(Seekbar, {
    seekerFillWidth: seekerFillWidth,
    seekerPosition: seekerPosition,
    seekColor: seekColor,
    seekerPanHandlers: panHandlers,
    setSeekerWidth: setSeekerWidth
  });
  const resolutionControl = disableResolution ? /*#__PURE__*/React.createElement(NullControl, null) : /*#__PURE__*/React.createElement(VideoResolution, {
    handleResolutionModalOpen: handleResolutionModalOpen
  });
  const fullscreenControl = disableFullscreen ? /*#__PURE__*/React.createElement(NullControl, null) : /*#__PURE__*/React.createElement(Fullscreen, {
    isFullscreen: isFullscreen,
    toggleFullscreen: toggleFullscreen,
    resetControlTimeout: resetControlTimeout,
    showControls: showControls
  });
  return /*#__PURE__*/React.createElement(AnimatedView, {
    style: [_styles.bottom, animations.controlsOpacity, animations.bottomControl]
  }, /*#__PURE__*/React.createElement(ImageBackground, {
    source: require("../assets/img/bottom-vignette.png"),
    style: [styles.column],
    imageStyle: [styles.vignette]
  }, /*#__PURE__*/React.createElement(SafeAreaView, {
    style: [styles.row, _styles.bottomControlGroup]
  }, timerControl, /*#__PURE__*/React.createElement(Title, {
    title: title
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.bottomRightControls
  }, !isResolutionModalOpen ? resolutionControl : null, fullscreenControl)), /*#__PURE__*/React.createElement(SafeAreaView, {
    style: styles.seekBarContainer
  }, seekbarControl)));
};
const _styles = StyleSheet.create({
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