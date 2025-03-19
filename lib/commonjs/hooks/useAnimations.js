"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useJSAnimations = void 0;

var _react = require("react");

var _reactNative = require("react-native");

const useJSAnimations = function () {
  let controlAnimationTiming = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 450;
  const bottomControlMarginBottom = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const controlsOpacity = (0, _react.useRef)(new _reactNative.Animated.Value(1)).current;
  const topControlMarginTop = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;

  const hideControlAnimation = () => {
    _reactNative.Animated.parallel([_reactNative.Animated.timing(controlsOpacity, {
      toValue: 0,
      duration: controlAnimationTiming,
      useNativeDriver: false
    }), _reactNative.Animated.timing(topControlMarginTop, {
      toValue: -100,
      duration: controlAnimationTiming,
      useNativeDriver: false
    }), _reactNative.Animated.timing(bottomControlMarginBottom, {
      toValue: -100,
      duration: controlAnimationTiming,
      useNativeDriver: false
    })]).start();
  };

  const showControlAnimation = () => {
    _reactNative.Animated.parallel([_reactNative.Animated.timing(controlsOpacity, {
      toValue: 1,
      duration: controlAnimationTiming,
      useNativeDriver: false
    }), _reactNative.Animated.timing(topControlMarginTop, {
      toValue: 0,
      duration: controlAnimationTiming,
      useNativeDriver: false
    }), _reactNative.Animated.timing(bottomControlMarginBottom, {
      toValue: 0,
      duration: controlAnimationTiming,
      useNativeDriver: false
    })]).start();
  };

  const animations = {
    bottomControl: {
      marginBottom: bottomControlMarginBottom
    },
    topControl: {
      marginTop: topControlMarginTop
    },
    controlsOpacity: {
      opacity: controlsOpacity
    },
    showControlAnimation,
    hideControlAnimation,
    AnimatedView: _reactNative.Animated.View
  };
  return animations;
};

exports.useJSAnimations = useJSAnimations;
//# sourceMappingURL=useAnimations.js.map