import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Control } from './Control';
export const Fullscreen = _ref => {
  let {
    isFullscreen,
    toggleFullscreen,
    resetControlTimeout,
    showControls
  } = _ref;
  let source = isFullscreen ? require('../assets/img/shrink.png') : require('../assets/img/expand.png');
  return /*#__PURE__*/React.createElement(Control, {
    callback: toggleFullscreen,
    resetControlTimeout: resetControlTimeout,
    style: styles.fullscreen,
    disabled: !showControls
  }, /*#__PURE__*/React.createElement(Image, {
    source: source
  }));
};
const styles = StyleSheet.create({
  fullscreen: {
    flexDirection: 'row'
  }
});
//# sourceMappingURL=Fullscreen.js.map