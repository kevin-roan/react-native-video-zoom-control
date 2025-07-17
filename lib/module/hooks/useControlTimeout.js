import { useEffect, useState } from 'react';
export const useControlTimeout = _ref => {
  let {
    controlTimeout,
    controlTimeoutDelay,
    mounted,
    showControls,
    setShowControls,
    alwaysShowControls
  } = _ref;
  const [_controlTimeout, _setControlTimeout] = useState();
  const [_clearTimeout, setClearTimeout] = useState();

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

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    controlTimeout = setTimeout(() => {
      hideControls();
    }, controlTimeoutDelay);
    return () => {
      clearTimeout(controlTimeout);
    };
  }, [_controlTimeout]);
  useEffect(() => {
    if (_clearTimeout) {
      clearTimeout(controlTimeout);
      setClearTimeout(false);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [_clearTimeout]);
  return {
    clearControlTimeout,
    resetControlTimeout,
    hideControls,
    setClearTimeout,
    setControlTimeout
  };
};
//# sourceMappingURL=useControlTimeout.js.map