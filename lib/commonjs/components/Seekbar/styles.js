"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
const styles = exports.styles = _reactNative.StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 28,
    marginLeft: 20,
    marginRight: 20
  },
  track: {
    backgroundColor: '#333',
    height: 1,
    position: 'relative',
    top: 14,
    width: '100%'
  },
  fill: {
    backgroundColor: '#FFF',
    height: 1,
    width: '100%'
  },
  handle: {
    position: 'absolute',
    marginLeft: -7,
    height: 32,
    width: 32
  },
  circle: {
    borderRadius: 12,
    position: 'relative',
    top: 8,
    left: -5,
    height: 12,
    width: 12
  }
});
//# sourceMappingURL=styles.js.map