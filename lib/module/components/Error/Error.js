import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
export const Error = _ref => {
  let {
    error
  } = _ref;
  if (error) {
    return /*#__PURE__*/React.createElement(View, {
      style: styles.container
    }, /*#__PURE__*/React.createElement(Image, {
      source: require('../../assets/img/error-icon.png'),
      style: styles.icon
    }), /*#__PURE__*/React.createElement(Text, {
      style: styles.text
    }, "Video unavailable"));
  }
  return null;
};
//# sourceMappingURL=Error.js.map