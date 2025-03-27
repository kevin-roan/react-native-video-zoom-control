"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VideoResolution = exports.ResolutionModal = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _styles = require("react-native-media-console/src/components/VideoResolution/styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const gearIcon = require("../../assets/img/gear.png");
const VideoResolution = _ref => {
  let {
    handleResolutionModalOpen
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, {
    style: _styles.styles.container,
    onPress: () => handleResolutionModalOpen(),
    hitSlop: {
      top: 50,
      bottom: 50,
      left: 50,
      right: 50
    }
  }, /*#__PURE__*/React.createElement(_reactNative.Image, {
    source: gearIcon,
    style: _styles.styles.icon
  }));
};
exports.VideoResolution = VideoResolution;
const ResolutionModal = _ref2 => {
  let {
    videoUrls,
    handleSource
  } = _ref2;
  const [selectedQuality, setSelectedQuality] = (0, _react.useState)("");
  const [availableRenditions, setAvailableRenditions] = (0, _react.useState)([]);
  React.useEffect(() => {
    if (selectedQuality !== "") {
      if (selectedQuality === 'auto') {
        console.log('user selected auto', selectedQuality);
      }
      // @ts-ignore
      const matchedVideo = videoUrls.find(v => v.rendition === selectedQuality);
      if (matchedVideo && matchedVideo.link) {
        // @ts-ignore
        handleSource(matchedVideo.link);
      } else {
        handleSource('defaultSource');
      }
    }
  }, [selectedQuality]);

  // @ts-ignore
  const handleSelectedResolution = rendition => {
    console.log('selected rendition', rendition);
    setSelectedQuality(rendition);
  };
  React.useEffect(() => {
    if (availableRenditions.length === 0) {
      // @ts-ignore
      const videoRenditions = videoUrls.map(video => video["rendition"]);
      const sortedRenditions = videoRenditions.sort((a, b) => {
        const resolutionA = parseInt(a, 10);
        const resolutionB = parseInt(b, 10);
        return resolutionB - resolutionA;
      });
      // @ts-ignore 
      setAvailableRenditions(sortedRenditions);
    }
  }, [availableRenditions.length]);
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: _styles.styles.modalContainer
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: _styles.styles.modal
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: _styles.styles.modalHeading
  }, "Video Quality"), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: _styles.styles.seperator
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: _styles.styles.rendtionScrollContainer
  }, /*#__PURE__*/React.createElement(_reactNativeGestureHandler.ScrollView, null, availableRenditions.map(rendition => /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, {
    key: rendition,
    style: [_styles.styles.modalSwitch, selectedQuality === rendition ? _styles.styles.selectedQuality : null],
    onPress: () => handleSelectedResolution(rendition)
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: _styles.styles.modalText
  }, rendition))), /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, {
    style: [_styles.styles.modalSwitch, selectedQuality === "auto" ? _styles.styles.selectedQuality : null],
    onPress: () => handleSelectedResolution("auto")
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: _styles.styles.modalText
  }, "Auto "))))));
};
exports.ResolutionModal = ResolutionModal;
var _default = exports.default = VideoResolution;
//# sourceMappingURL=VideoResolution.js.map