import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { Control } from '../Control';
export const Timer = _ref => {
  let {
    children,
    toggleTimer,
    resetControlTimeout,
    showControls
  } = _ref;
  return /*#__PURE__*/React.createElement(Control, {
    callback: toggleTimer,
    resetControlTimeout: resetControlTimeout,
    style: styles.timer,
    disabled: !showControls
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.timerText
  }, children));
};
//# sourceMappingURL=Timer.js.map