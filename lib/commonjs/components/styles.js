"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

const styles = _reactNative.StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  vignette: {
    resizeMode: 'stretch'
  },
  control: {
    padding: 16,
    opacity: 0.6
  },
  text: {
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  },
  seekBarContainer: {
    width: '100%'
  }
});

exports.styles = styles;
//# sourceMappingURL=styles.js.map