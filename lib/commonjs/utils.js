"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateTime = exports._onBack = void 0;
// import padStart from 'lodash/padStart';

const _onBack = navigator => {
  if (navigator && navigator.pop) {
    return () => navigator.pop();
  }
  return () => console.warn('Warning: _onBack requires navigator property to function. Either modify the onBack prop or pass a navigator prop');
};
exports._onBack = _onBack;
const calculateTime = args => {
  const {
    time: currentTime = 0,
    duration,
    showTimeRemaining,
    showDuration
  } = args;
  const formattedDuration = !showDuration ? '' : `/${formatTime({
    ...args,
    time: duration,
    showTimeRemaining: false
  })}`;
  if (showTimeRemaining) {
    const time = duration - currentTime;
    return `${formatTime({
      ...args,
      time
    })}${formattedDuration}`;
  }
  return `${formatTime({
    ...args,
    time: currentTime
  })}${formattedDuration}`;
};
exports.calculateTime = calculateTime;
const formatTime = _ref => {
  let {
    time = 0,
    duration,
    showTimeRemaining,
    showHours
  } = _ref;
  const symbol = showTimeRemaining ? '-' : '';
  time = Math.min(Math.max(time, 0), duration);
  if (!showHours) {
    const formattedMinutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    const formattedSeconds = Math.floor(time % 60).toFixed(0).padStart(2, '0');
    return `${symbol}${formattedMinutes}:${formattedSeconds}`;
  }
  const formattedHours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
  const formattedMinutes = (Math.floor(time / 60) % 60).toFixed(0).padStart(2, '0');
  const formattedSeconds = Math.floor(time % 60).toFixed(0).padStart(2, '0');
  return `${symbol}${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
//# sourceMappingURL=utils.js.map