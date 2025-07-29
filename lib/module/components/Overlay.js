import React from "react";
import { StyleSheet } from "react-native";
export const Overlay = _ref => {
  let {
    animations: {
      AnimatedView,
      controlsOpacity
    }
  } = _ref;
  return /*#__PURE__*/React.createElement(AnimatedView, {
    style: [_styles.overlay, controlsOpacity]
  });
};
const _styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    opacity: 0
  }
});
//# sourceMappingURL=Overlay.js.map