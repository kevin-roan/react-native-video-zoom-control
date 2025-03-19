function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { TouchableHighlight } from 'react-native';
import { styles } from './styles';
export const Control = _ref => {
  let {
    children,
    callback,
    controlRef,
    disabled,
    style = {},
    ...props
  } = _ref;
  const [focused, setFocused] = useState(false);

  const setFocusedState = () => setFocused(true);

  const cancelFocusedState = () => setFocused(false);

  const focusedStyle = focused ? {
    opacity: 1
  } : {};
  return /*#__PURE__*/React.createElement(TouchableHighlight, _extends({
    onFocus: setFocusedState,
    onBlur: cancelFocusedState,
    disabled: disabled,
    ref: controlRef,
    underlayColor: "transparent",
    activeOpacity: 1,
    onPress: () => {
      callback && callback();
    },
    style: [styles.control, style, focused && focusedStyle]
  }, props), children);
};
//# sourceMappingURL=Control.js.map