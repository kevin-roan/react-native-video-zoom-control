import React, { memo } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { Volume } from "./Volume";
import { Back } from "./Back";
import { NullControl } from "./NullControl";
import { styles } from "./styles";
export const TopControls = /*#__PURE__*/memo(_ref => {
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
  const backControl = disableBack ? /*#__PURE__*/React.createElement(NullControl, null) : /*#__PURE__*/React.createElement(Back, {
    showControls: showControls,
    onBack: onBack,
    resetControlTimeout: resetControlTimeout
  });
  const volumeControl = disableVolume ? /*#__PURE__*/React.createElement(NullControl, null) : /*#__PURE__*/React.createElement(Volume, {
    volumeFillWidth: volumeFillWidth,
    volumeTrackWidth: volumeTrackWidth,
    volumePosition: volumePosition,
    volumePanHandlers: panHandlers
  });
  return /*#__PURE__*/React.createElement(AnimatedView, {
    style: [_styles.top, controlsOpacity, topControl]
  }, /*#__PURE__*/React.createElement(ImageBackground, {
    source: require("../assets/img/top-vignette.png"),
    style: [styles.column],
    imageStyle: [styles.vignette]
  }, /*#__PURE__*/React.createElement(SafeAreaView, {
    style: _styles.topControlGroup
  }, backControl, /*#__PURE__*/React.createElement(View, {
    style: _styles.pullRight
  }, volumeControl))));
});
const _styles = StyleSheet.create({
  pullRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  top: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  topControlGroup: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 12,
    marginBottom: 18
  }
});
//# sourceMappingURL=TopControls.js.map