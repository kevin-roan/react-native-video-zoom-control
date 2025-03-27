import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
export const Title = _ref => {
  let {
    title
  } = _ref;
  if (title) {
    return /*#__PURE__*/React.createElement(View, {
      style: [styles.control, _styles.title]
    }, /*#__PURE__*/React.createElement(Text, {
      style: [styles.text, _styles.titleText],
      numberOfLines: 1
    }, title || ''));
  }
  return null;
};
import { StyleSheet } from 'react-native';
const _styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    padding: 0
  },
  titleText: {
    textAlign: 'center'
  }
});
//# sourceMappingURL=Title.js.map