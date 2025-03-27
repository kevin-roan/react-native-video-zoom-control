import React from 'react';
import { TouchableWithoutFeedback, Platform } from 'react-native';
import { TVOSSupport } from './TVOSSupport';
import { _styles } from '../styles';
export const PlatformSupport = _ref => {
  let {
    children,
    onScreenTouch,
    containerStyles,
    showControls,
    testID
  } = _ref;
  if (Platform.isTV) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TVOSSupport, {
      showControls: showControls,
      onScreenTouch: onScreenTouch
    }), children);
  }
  return /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    testID: testID,
    onPress: onScreenTouch,
    style: [_styles.player.container, containerStyles]
  }, children);
};
//# sourceMappingURL=PlatformSupport.js.map