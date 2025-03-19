import { useTVEventHandler } from 'react-native';
export const TVOSSupport = _ref => {
  let {
    showControls,
    onScreenTouch
  } = _ref;
  useTVEventHandler(() => {
    if (!showControls) {
      onScreenTouch();
    }
  });
  return null;
};
//# sourceMappingURL=TVOSSupport.js.map