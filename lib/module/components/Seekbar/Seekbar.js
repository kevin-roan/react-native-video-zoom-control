function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
export const Seekbar = _ref => {
  let {
    seekColor,
    seekerFillWidth,
    seekerPosition,
    seekerPanHandlers,
    setSeekerWidth
  } = _ref;
  return /*#__PURE__*/React.createElement(View, _extends({
    style: styles.container,
    collapsable: false
  }, seekerPanHandlers), /*#__PURE__*/React.createElement(View, {
    style: styles.track,
    onLayout: event => setSeekerWidth(event.nativeEvent.layout.width),
    pointerEvents: 'none'
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.fill, {
      width: seekerFillWidth,
      backgroundColor: seekColor || '#FFF'
    }],
    pointerEvents: 'none'
  })), /*#__PURE__*/React.createElement(View, {
    style: [styles.handle, {
      left: seekerPosition
    }],
    pointerEvents: 'none'
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.circle, {
      backgroundColor: seekColor || '#FFF'
    }],
    pointerEvents: 'none'
  })));
};
//# sourceMappingURL=Seekbar.js.map