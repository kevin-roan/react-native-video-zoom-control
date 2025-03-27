function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
export const Volume = _ref => {
  let {
    volumeFillWidth,
    volumePosition,
    volumeTrackWidth,
    volumePanHandlers
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.fill, {
      width: volumeFillWidth
    }]
  }), /*#__PURE__*/React.createElement(View, {
    style: [styles.track, {
      width: volumeTrackWidth
    }]
  }), /*#__PURE__*/React.createElement(View, _extends({
    style: [styles.handle, {
      left: volumePosition - 15
    }]
  }, volumePanHandlers), /*#__PURE__*/React.createElement(Image, {
    style: styles.icon,
    source: require('../../assets/img/volume.png')
  })));
};
//# sourceMappingURL=Volume.js.map