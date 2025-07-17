"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePanResponders = void 0;

var _react = require("react");

var _reactNative = require("react-native");

const usePanResponders = _ref => {
  let {
    duration,
    seekerOffset,
    volumeOffset,
    loading,
    seeking,
    seekerPosition,
    seek,
    seekerWidth,
    clearControlTimeout,
    setVolumePosition,
    setSeekerPosition,
    setSeeking,
    setControlTimeout,
    onEnd,
    horizontal = true,
    inverted = false
  } = _ref;

  const volumePanResponder = _reactNative.PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      clearControlTimeout();
    },
    onPanResponderMove: (_evt, gestureState) => {
      const diff = horizontal ? gestureState.dx : gestureState.dy;
      const position = volumeOffset + diff * (inverted ? -1 : 1);
      setVolumePosition(position);
    },
    onPanResponderRelease: () => {
      setControlTimeout();
    }
  });

  const seekPanResponder = _reactNative.PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: evt => {
      setSeeking(true);
      clearControlTimeout();
      const position = evt.nativeEvent.locationX;
      setSeekerPosition(position);
    },
    onPanResponderMove: (_evt, gestureState) => {
      const diff = horizontal ? gestureState.dx : gestureState.dy;
      const position = seekerOffset + diff * (inverted ? -1 : 1);
      setSeekerPosition(position);
      setSeeking(true);
    },
    onPanResponderRelease: () => {
      const percent = seekerPosition / seekerWidth;
      const time = duration * percent;

      if (time >= duration && !loading) {
        if (typeof onEnd === 'function') {
          onEnd();
        }
      }

      setSeeking(false);
      seek && seek(time);
    }
  });

  (0, _react.useEffect)(() => {
    if (seeking) {
      const percent = seekerPosition / seekerWidth;
      const time = duration * percent;
      seek && seek(time);
    }
  }, [duration, seek, seekerPosition, seekerWidth, seeking]);
  return {
    volumePanResponder,
    seekPanResponder
  };
};

exports.usePanResponders = usePanResponders;
//# sourceMappingURL=usePanResponders.js.map