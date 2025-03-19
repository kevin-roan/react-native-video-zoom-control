function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { createRef } from 'react';
import { Image, Platform } from 'react-native';
import { Control } from '../Control';
import { NullControl } from '../NullControl';
import { styles } from './styles';
export const playPauseRef = /*#__PURE__*/createRef();

const play = require('../../assets/img/play.png');

const pause = require('../../assets/img/pause.png');

const rewind = require('../../assets/img/rewind.png');

const forward = require('../../assets/img/forward.png');

export const PlayPause = _ref => {
  let {
    animations: {
      AnimatedView,
      ...animations
    },
    disablePlayPause,
    disableSeekButtons,
    paused,
    togglePlayPause,
    resetControlTimeout,
    showControls,
    onPressForward,
    onPressRewind
  } = _ref;
  let source = paused ? play : pause;
  const animatedStyles = {
    zIndex: showControls ? 99999 : 0
  };

  if (disablePlayPause) {
    return /*#__PURE__*/React.createElement(NullControl, null);
  }

  return /*#__PURE__*/React.createElement(AnimatedView, {
    pointerEvents: 'box-none',
    style: [styles.container, animatedStyles, animations.controlsOpacity]
  }, !disableSeekButtons ? /*#__PURE__*/React.createElement(Control, {
    disabled: !showControls,
    callback: onPressRewind,
    resetControlTimeout: resetControlTimeout
  }, /*#__PURE__*/React.createElement(Image, {
    source: rewind,
    resizeMode: 'contain',
    style: styles.rewind
  })) : null, /*#__PURE__*/React.createElement(Control, _extends({
    disabled: !showControls,
    callback: togglePlayPause,
    resetControlTimeout: resetControlTimeout,
    style: styles.playContainer,
    controlRef: playPauseRef
  }, Platform.isTV ? {
    hasTVPreferredFocus: showControls
  } : {}), /*#__PURE__*/React.createElement(Image, {
    source: source,
    resizeMode: 'contain',
    style: styles.play
  })), !disableSeekButtons ? /*#__PURE__*/React.createElement(Control, {
    disabled: !showControls,
    callback: onPressForward,
    resetControlTimeout: resetControlTimeout
  }, /*#__PURE__*/React.createElement(Image, {
    source: forward,
    resizeMode: 'contain',
    style: styles.rewind
  })) : null);
};
//# sourceMappingURL=PlayPause.js.map