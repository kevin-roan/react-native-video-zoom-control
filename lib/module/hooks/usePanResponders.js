import { useEffect } from 'react';
import { PanResponder } from 'react-native';
export const usePanResponders = _ref => {
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
  const volumePanResponder = PanResponder.create({
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
  const seekPanResponder = PanResponder.create({
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
  useEffect(() => {
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
//# sourceMappingURL=usePanResponders.js.map