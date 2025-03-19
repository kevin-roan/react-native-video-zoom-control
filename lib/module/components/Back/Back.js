import React from 'react';
import { Image } from 'react-native';
import { Control } from '../Control';
export const Back = _ref => {
  let {
    onBack,
    showControls
  } = _ref;
  return /*#__PURE__*/React.createElement(Control, {
    callback: onBack,
    disabled: !showControls
  }, /*#__PURE__*/React.createElement(Image, {
    source: require('../../assets/img/back.png')
  }));
};
//# sourceMappingURL=Back.js.map