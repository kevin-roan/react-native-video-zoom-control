"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useControlTimeout = void 0;
var _react = require("react");
const useControlTimeout = _ref => {
  let {
    controlTimeout,
    controlTimeoutDelay,
    mounted,
    showControls,
    setShowControls,
    alwaysShowControls
  } = _ref;
  const [_controlTimeout, _setControlTimeout] = (0, _react.useState)();
  const [_clearTimeout, setClearTimeout] = (0, _react.useState)();
  const setControlTimeout = () => {
    _setControlTimeout(prevState => !prevState);
  };
  const clearControlTimeout = () => {
    setClearTimeout(true);
  };
  const resetControlTimeout = () => {
    clearControlTimeout();
  };
  const hideControls = () => {
    if (mounted && showControls && !alwaysShowControls) {
      setShowControls(false);
    }
  };
  (0, _react.useEffect)(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    controlTimeout = setTimeout(() => {
      hideControls();
    }, controlTimeoutDelay);
    return () => {
      clearTimeout(controlTimeout);
    };
  }, [_controlTimeout]);
  (0, _react.useEffect)(() => {
    if (_clearTimeout) {
      clearTimeout(controlTimeout);
      setClearTimeout(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_clearTimeout]);
  return {
    clearControlTimeout,
    resetControlTimeout,
    hideControls,
    setClearTimeout,
    setControlTimeout
  };
};
exports.useControlTimeout = useControlTimeout;
//# sourceMappingURL=useControlTimeout.js.map