"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._styles = void 0;
var _reactNative = require("react-native");
const _styles = exports._styles = {
  player: _reactNative.StyleSheet.create({
    container: {
      overflow: "hidden",
      backgroundColor: "#000",
      flex: 1
    },
    video: {
      overflow: "hidden",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    dummy: {
      height: "100%",
      width: "100%",
      top: 0,
      left: 0
    }
  })
};
//# sourceMappingURL=styles.js.map